import { debounce } from "./utils.js"
import { filterContent } from "./filters.js"
import { getFromStorage } from "./storage.js"

export function observePageChanges() {
  const observer = new MutationObserver(
    debounce(function () {
      chrome.storage.sync.get(["blockedKeywords"], function (filters) {
        if (!filters.blockedKeywords || filters.blockedKeywords.length === 0)
          return

        filterContent(filters.blockedKeywords)
      })
    }, 300)
  )

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
