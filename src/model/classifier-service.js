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

      // Validate the model data
      if (
        !this.modelData.categories ||
        !this.modelData.weights ||
        !this.modelData.weights.trees
      ) {
        throw new Error("Invalid model data structure")
      }

      this.isInitialized = true
      console.log(
        "Classifier initialized with categories:",
        this.modelData.categories
      )
    } catch (error) {
      console.error("Failed to initialize classifier:", error)
      this.isInitialized = false
      throw error
    }
  }

  getNGrams(text, minN = 3, maxN = 5) {
    const ngrams = new Map()
    const lowercaseText = String(text).toLowerCase()

    for (let n = minN; n <= maxN; n++) {
      for (let i = 0; i <= lowercaseText.length - n; i++) {
        const ngram = lowercaseText.slice(i, i + n)
        ngrams.set(ngram, (ngrams.get(ngram) || 0) + 1)
      }
    }
    return ngrams
  }

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

  normalizeViews(views) {
    const numViews = Number(views) || 0
    return (
      (numViews - this.modelData.viewScaleParams.mean) /
      this.modelData.viewScaleParams.std
    )
  }

  traverseTree(tree, features) {
    let currentNode = 0
    const nodes = tree.nodes

    while (currentNode < nodes.value.length && !nodes.is_leaf[currentNode]) {
      const featureIdx = nodes.feature_idx[currentNode]
      const threshold = nodes.num_threshold[currentNode]
      const goLeft = nodes.missing_go_to_left[currentNode]

      const featureValue = features[featureIdx]

      if (featureValue === undefined || Number.isNaN(featureValue)) {
        currentNode = goLeft
          ? nodes.left[currentNode]
          : nodes.right[currentNode]
      } else {
        currentNode =
          featureValue <= threshold
            ? nodes.left[currentNode]
            : nodes.right[currentNode]
      }
    }

    return nodes.value[currentNode] || 0
  }

  predictRaw(features) {
    const numClasses = this.modelData.categories.length
    const predictions = new Float32Array(numClasses).fill(0)

    // Add baseline prediction if available
    if (this.modelData.weights.baseline_prediction) {
      const baseline = this.modelData.weights.baseline_prediction[0]
      if (Array.isArray(baseline)) {
        predictions.set(baseline)
      }
    }

    // Iterate through each class
    for (let classIdx = 0; classIdx < numClasses; classIdx++) {
      const classTrees = this.modelData.weights.trees[classIdx]
      if (!classTrees) continue

      // Sum predictions from all trees for this class
      for (const tree of classTrees) {
        if (!tree || !tree.nodes) continue
        const treeValue = this.traverseTree(tree, features)
        predictions[classIdx] += treeValue
      }

      // Apply learning rate
      predictions[classIdx] *= this.modelData.weights.learning_rate
    }

    return predictions
  }

  softmax(raw) {
    const maxVal = Math.max(...raw)
    const expScores = raw.map((score) => Math.exp(score - maxVal))
    const expSum = expScores.reduce((a, b) => a + b, 0)
    return expScores.map((score) => score / expSum)
  }

  predict(title, channel, views) {
    if (!this.isInitialized || !this.modelData) {
      throw new Error("Classifier not initialized. Call initialize() first.")
    }

    try {
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

      // Get raw predictions
      const rawPredictions = this.predictRaw(features)

      // Convert to probabilities
      const probabilities = this.softmax(rawPredictions)

      // Get the index of the highest probability
      const predictedIdx = probabilities.reduce(
        (maxIdx, curr, idx, arr) => (curr > arr[maxIdx] ? idx : maxIdx),
        0
      )

      // Return predicted category and probabilities
      const result = {
        category: this.modelData.categories[predictedIdx],
        probabilities: Object.fromEntries(
          this.modelData.categories.map((cat, idx) => [cat, probabilities[idx]])
        ),
      }

      console.log("Prediction result:", result)
      return result
    } catch (error) {
      console.error("Prediction error:", error)
      throw error
    }
  }
}
