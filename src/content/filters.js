import { CONFIG } from "./config.js"

function shouldApplyFiltering(path) {
  return CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}

function filterContent(blockedKeywords) {
  const contentElements = document.querySelectorAll(
    CONFIG.SELECTORS.videosAndShorts
  )

  contentElements.forEach((element) => {
    const title = element.textContent.trim().toLowerCase()

    if (isBlocked(title, blockedKeywords)) {
      hideAndRemoveElement(element)
    }
  })
}

function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function hideAndRemoveElement(element) {
  const renderer = element.closest("ytd-rich-item-renderer")
  if (renderer) {
    renderer.setAttribute("data-yt-filter-blocked", "true")
    renderer.style.transition = "all 0.5s ease"
    renderer.style.opacity = "0"
    renderer.style.transform = "scale(0.8)"

    setTimeout(() => {
      if (renderer.parentNode) {
        renderer.remove()
      }
    }, 500)
  }
}

export { shouldApplyFiltering, filterContent };