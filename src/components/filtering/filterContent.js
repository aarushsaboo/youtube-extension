import { hideAndRemoveElement } from "../removing/hideAndRemoveElement"
import { CONFIG }  from "../../content/config"
const ALLOWED_CATEGORIES = ["Education", "Sports"]

function isBlockedByCategory(title, classifier) {
  try {
    // Get channel name and views (required by classifier)
    const channelElement = document.querySelector(
      "[href^='//@'], [href^='/channel/']"
    )
    const channel = channelElement ? channelElement.textContent.trim() : ""

    const viewCountElement = document.querySelector(
      "#metadata-line span:first-child"
    )
    const viewsText = viewCountElement
      ? viewCountElement.textContent.trim()
      : "0"
    const views = parseInt(viewsText.replace(/[^0-9]/g, "")) || 0

    // Get predicted category
    const predictedCategory = classifier.predict(title, channel, views)
    console.log(`Predicted category for "${title}": ${predictedCategory}`)

    // Block if not in allowed categories
    return !ALLOWED_CATEGORIES.includes(predictedCategory)
  } catch (error) {
    console.error("Error predicting category:", error)
    return false // Don't block on errors
  }
}

function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function filterContent(blockedKeywords, detectedTheme, colorScheme, classifier) {
  // if (!blockedKeywords || blockedKeywords.length === 0) return

  CONFIG.SELECTORS.videosAndShorts.forEach((selector) => {
    const contentElements = document.querySelectorAll(selector)

    contentElements.forEach((element) => {
      const titleElement = element.querySelector(
        "#video-title, #video-title-link, .ShortsLockupViewModelHostMetadataTitle a"
      )

      let title = ""

      // Check textContent or aria-label for title
      if (titleElement) {
        title = titleElement.textContent.trim()
      } else if (element.hasAttribute("aria-label")) {
        title = element.getAttribute("aria-label").trim()
      }

      if (!title) return // Skip if no title is found

       // Check both keyword blocking and category blocking
      const shouldBlockByKeywords = isBlocked(title, blockedKeywords);
      const shouldBlockByCategory = classifier && isBlockedByCategory(title, classifier);
      console.log('whats going on buddy', shouldBlockByCategory)

      if (shouldBlockByKeywords || shouldBlockByCategory) {
        console.log('Blocked content:', {
          title,
          byKeywords: shouldBlockByKeywords,
          byCategory: shouldBlockByCategory
        });
        hideAndRemoveElement(element, detectedTheme, colorScheme);
      }
    })
  })
}

export { filterContent }
