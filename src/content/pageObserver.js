import { debounce } from "./utils.js"
import { filterContent } from "./filters.js"
import { getFromStorage } from "./storage.js"

export function observePageChanges() {
  const observer = new MutationObserver(
    debounce(async () => {
      const { blockedKeywords = [] } = await getFromStorage(["blockedKeywords"])
      filterContent(blockedKeywords)
    }, 300)
  )

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}
