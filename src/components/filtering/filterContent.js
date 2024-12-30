import { hideAndRemoveElement } from "../removing/hideAndRemoveElement"
import { CONFIG } from "../../content/config"
import { parseViewCount } from "../utils/parseViewCount"

const BLOCKED_CATEGORIES = ["Entertainment", "Travel & Events", "Sports"]
const PROBABILITY_THRESHOLD = 0.09 // Adjust this threshold based on confidence needed

// Update isBlockedByCategory to include logging
function isBlockedByCategory(contentData, classifier) {
  const { title, channelName, viewCount } = contentData;
  console.log('\nChecking category blocking for:', {
    title,
    channelName,
    viewCount
  });
  
  try {
    const result = classifier.predict(title, channelName, viewCount);
    console.log('Classifier prediction:', result);

    for (const category of BLOCKED_CATEGORIES) {
      const probability = result.probabilities[category];
      console.log(`Category "${category}" probability:`, probability);
      
      if (probability > PROBABILITY_THRESHOLD) {
        console.log(`Blocking due to high probability (${probability.toFixed(3)}) for category: ${category}`);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Classifier error:', error);
    return false;
  }
}

function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function filterContent(
  blockedKeywords,
  detectedTheme,
  colorScheme,
  classifier
) {
  if (classifier && !classifier.isInitialized) {
    try {
      console.log("Initializing classifier...")
      classifier.initialize()
    } catch (error) {
      console.error("Failed to initialize classifier:", error)
      // Continue without classifier if initialization fails
      classifier = null
    }
  }
  
  console.log("Starting content filtering...")

  // Get all video and shorts containers
  const videoContainers = document.querySelectorAll(
    CONFIG.SELECTORS.containers.videos
  )
  const shortsContainers = document.querySelectorAll(
    CONFIG.SELECTORS.containers.shorts
  )

  console.log(
    `Found ${videoContainers.length} videos and ${shortsContainers.length} shorts`
  )

  // Process videos
  videoContainers.forEach((container, index) => {
    console.log(`\nProcessing video #${index + 1}`)

    const titleElement = container.querySelector(
      CONFIG.SELECTORS.elements.videoTitle
    )
    const channelElement = container.querySelector(
      CONFIG.SELECTORS.elements.channelName
    )
    const subscribersElement = container.querySelector(
      CONFIG.SELECTORS.elements.subscribers.video
    )

    console.log("Video Elements found:", {
      titleElement: Boolean(titleElement),
      channelElement: Boolean(channelElement),
      subscribersElement: Boolean(subscribersElement),
    })

    if (!titleElement) {
      console.log("Skipping video - no title element found")
      return
    }

    const contentInfo = {
      title: titleElement.textContent.trim(),
      channelName: channelElement ? channelElement.textContent.trim() : null,
      subscribers: subscribersElement
        ? subscribersElement.textContent.trim()
        : null,
    }

    console.log("Video Content Info:", contentInfo)

    processContent(
      container,
      contentInfo,
      blockedKeywords,
      detectedTheme,
      colorScheme,
      classifier
    )
  })

  // Process shorts
  shortsContainers.forEach((container, index) => {
    console.log(`\nProcessing short #${index + 1}`)

    const titleElement = container.querySelector(
      CONFIG.SELECTORS.elements.shortsTitle
    )
    const subscribersElement = container.querySelector(
      CONFIG.SELECTORS.elements.subscribers.shorts
    )

    console.log("Shorts Elements found:", {
      titleElement: Boolean(titleElement),
      subscribersElement: Boolean(subscribersElement),
    })

    if (!titleElement) {
      console.log("Skipping short - no title element found")
      return
    }

    const contentInfo = {
      title: titleElement.getAttribute("aria-label").trim(),
      channelName: null,
      subscribers: subscribersElement
        ? subscribersElement.textContent.trim()
        : null,
    }

    console.log("Shorts Content Info:", contentInfo)

    processContent(
      container,
      contentInfo,
      blockedKeywords,
      detectedTheme,
      colorScheme,
      classifier
    )
  })
}

function processContent(
  container,
  contentInfo,
  blockedKeywords,
  detectedTheme,
  colorScheme,
  classifier
) {
  console.log("\nProcessing content:", contentInfo)

  // Parse the view count into a number
  const viewCount = parseViewCount(contentInfo.subscribers?.split(" ")?.[0])

  const contentData = {
    title: contentInfo.title,
    channelName: contentInfo.channelName || "Unknown Channel",
    viewCount: viewCount,
    viewCountRaw: contentInfo.subscribers || "No views",
  }

  console.log("Processed content data:", contentData)

  const shouldBlockByKeywords = isBlocked(contentInfo.title, blockedKeywords)
  console.log("Keyword blocking check:", {
    keywords: blockedKeywords,
    shouldBlock: shouldBlockByKeywords,
  })

  const shouldBlockByCategory =
    classifier && isBlockedByCategory(contentData, classifier)
  console.log("Category blocking check:", {
    hasClassifier: Boolean(classifier),
    shouldBlock: shouldBlockByCategory,
  })

  if (shouldBlockByKeywords || shouldBlockByCategory) {
    console.log("🚫 Blocking content:", {
      ...contentData,
      byKeywords: shouldBlockByKeywords,
      byCategory: shouldBlockByCategory,
    })
    hideAndRemoveElement(container, detectedTheme, colorScheme)
  } else {
    console.log("✅ Content passed filters")
  }
}


export { filterContent }
