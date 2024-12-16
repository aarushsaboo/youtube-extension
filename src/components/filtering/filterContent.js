import { hideAndRemoveElement } from "../removing/hideAndRemoveElement"
import { CONFIG }  from "../../content/config"


function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function filterContent(blockedKeywords) {
  if (!blockedKeywords || blockedKeywords.length === 0) return

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

      if (isBlocked(title, blockedKeywords)) {
        hideAndRemoveElement(element)
      }
    })
  })
}

export { filterContent }
