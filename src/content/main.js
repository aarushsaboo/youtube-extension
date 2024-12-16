import { getFromStorage } from "../components/storage/getFromStorage.js"
import { observePageChanges } from "./observePageChanges.js"
import { filterContent } from "../components/filtering/filterContent.js"
import { shouldApplyFiltering } from "../components/filtering/shouldApplyFiltering.js"

async function init() {
  if (!shouldApplyFiltering(window.location.pathname)) return

  let blockedKeywords = []
  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await getFromStorage(["blockedKeywords"])
      blockedKeywords = storageData.blockedKeywords || []
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  filterContent(blockedKeywords)

  observePageChanges()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
    console.log("This is filtering YOUTHOOB... ALERTTTTTT!")
} else {
  init()
}
