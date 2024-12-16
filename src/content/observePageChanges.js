import { debounce } from "../components/utils/debounce.js"
import { filterContent } from "../components/filtering/filterContent.js"

export function observePageChanges() {

  if (typeof chrome === "undefined" || !chrome.runtime || !chrome.storage) {
    console.error("Chrome extension APIs not available")
    return
  }

  const observer = new MutationObserver(
    debounce(function () {
      try {
        chrome.storage.sync.get(["blockedKeywords"], function (result) {
          // Added null check
          if (chrome.runtime.lastError) {
            console.error("Storage access error:", chrome.runtime.lastError)
            return
          }

          const blockedKeywords = result.blockedKeywords || []

          if (blockedKeywords.length === 0) return

          // Wrap filterContent in a try-catch
          try {
            filterContent(blockedKeywords)
          } catch (filterError) {
            console.error("Content filtering error:", filterError)
          }
        })
      } catch (err) {
        console.error("Observation error:", err)
      }
    }, 300)
  )

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
