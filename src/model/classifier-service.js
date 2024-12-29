// classifier-service.js
export class YouTubeCategoryClassifier {
  constructor() {
    this.modelData = null
    this.isInitialized = false
  }

  async initialize() {
    try {
      const response = await fetch(
        chrome.runtime.getURL("dist/model/browser_model.json")
      )
      this.modelData = await response.json()
      this.isInitialized = true
      console.log(
        "Classifier initialized with categories:",
        this.modelData.categories
      )
    } catch (error) {
      console.error("Failed to initialize classifier:", error)
      throw error
    }
  }

  // Convert text to character n-grams
  getNGrams(text, minN = 3, maxN = 5) {
    const ngrams = new Map()
    const lowercaseText = text.toLowerCase()

    for (let n = minN; n <= maxN; n++) {
      for (let i = 0; i <= lowercaseText.length - n; i++) {
        const ngram = lowercaseText.slice(i, i + n)
        ngrams.set(ngram, (ngrams.get(ngram) || 0) + 1)
      }
    }
    return ngrams
  }

  // Create feature vector for text
  getTextFeatures(text, vocabulary, idf) {
    const features = new Float32Array(Object.keys(vocabulary).length).fill(0)
    const ngrams = this.getNGrams(text)

    for (const [ngram, count] of ngrams) {
      const idx = vocabulary[ngram]
      if (idx !== undefined) {
        features[idx] = (1 + Math.log(count)) * idf[idx]
      }
    }

    return features
  }

  // Normalize view count
  normalizeViews(views) {
    return (
      (views - this.modelData.viewScaleParams.mean) /
      this.modelData.viewScaleParams.std
    )
  }

  predict(title, channel, views) {
    if (!this.isInitialized) {
      throw new Error("Classifier not initialized. Call initialize() first.")
    }

    // Get features
    const titleFeatures = this.getTextFeatures(
      title,
      this.modelData.titleVocab,
      this.modelData.titleIdf
    )

    const channelFeatures = this.getTextFeatures(
      channel,
      this.modelData.channelVocab,
      this.modelData.channelIdf
    )

    const normalizedViews = this.normalizeViews(views)

    // Combine all features
    const features = new Float32Array([
      ...titleFeatures,
      ...channelFeatures,
      normalizedViews,
    ])

    // Get predicted category
    return this.modelData.categories[0] // Temporary return first category
  }
}
