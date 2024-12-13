import { CONFIG } from "./config.js"

function shouldApplyFiltering(path) {
  return CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}

function filterContent(blockedKeywords) {
  CONFIG.SELECTORS.videosAndShorts.forEach((selector) => {
    const contentElements = document.querySelectorAll(selector)

    contentElements.forEach((element) => {
      const title = element.textContent.trim().toLowerCase()

      if (isBlocked(title, blockedKeywords)) {
        hideAndRemoveElement(element)
      }
    })
  })
}


function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function hideAndRemoveElement(element) {
  element
    .closest("ytd-rich-item-renderer")
    .setAttribute("data-yt-filter-blocked", "true")
  element.closest("ytd-rich-item-renderer").style.transition = "all 0.5s ease"
  element.closest("ytd-rich-item-renderer").style.opacity = "0"
  element.closest("ytd-rich-item-renderer").style.transform = "scale(0.8)"

  setTimeout(() => {
    element.closest("ytd-rich-item-renderer").remove()
  }, 500)
}

export { shouldApplyFiltering, filterContent };