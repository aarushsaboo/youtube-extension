import { CONFIG } from "./config.js"

function shouldApplyFiltering(path) {
  return CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}

function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function hideAndRemoveElement(element) {
  const renderer = element.closest(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-reel-item-renderer"
  )

  if (renderer) {
    // More robust blocking
    renderer.setAttribute("data-yt-filter-blocked", "true")
    renderer.style.transition = "all 0.5s ease"
    renderer.style.opacity = "0"
    renderer.style.transform = "scale(0.8)"

    setTimeout(() => {
      if (renderer.parentNode) {
        renderer.remove()

        // Add permanent style to prevent re-adding
        const style = document.createElement("style")
        style.textContent = `
          ytd-rich-item-renderer[data-yt-filter-blocked="true"], 
          ytd-video-renderer[data-yt-filter-blocked="true"],
          ytd-reel-item-renderer[data-yt-filter-blocked="true"] {
            display: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
        `
        document.head.appendChild(style)
      }
    }, 500)
  }
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


export { shouldApplyFiltering, filterContent };