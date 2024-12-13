import { injectStyles } from "./utils.js"
import { CONFIG } from "./config.js"
import { getFromStorage } from "./storage.js"
import { observePageChanges } from "./pageObserver.js"
import { filterContent } from "./filters.js"
import { shouldApplyFiltering } from "./filters.js"

function disableHoverPlay() {
  injectStyles(`
    ytd-rich-item-renderer:hover video, 
    ytd-reel-item-renderer:hover video {
      pointer-events: none !important;
    }
  `)
}

async function init() {
  // Check if filtering should occur
  if (!shouldApplyFiltering(window.location.pathname)) return

  // Apply hover play fix
  disableHoverPlay()

  // Initial content filtering
  const { blockedKeywords = [] } = await getFromStorage(["blockedKeywords"])
  filterContent(blockedKeywords)

  // Start observing page changes
  observePageChanges()
}

// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
