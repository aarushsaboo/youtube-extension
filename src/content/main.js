import { getFromStorage } from "../components/storage/getFromStorage.js"
import { observePageChanges } from "./observePageChanges.js"
import { filterContent } from "../components/filtering/filterContent.js"
import { shouldApplyFiltering } from "../components/filtering/shouldApplyFiltering.js"
import { applyColorChanger } from "../colorTheme/colorChanger/colorChanger.js"

async function init() {
  if (!shouldApplyFiltering(window.location.pathname)) return

  let blockedKeywords = []
  let colorScheme = "light"
  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await getFromStorage(["blockedKeywords", "colorScheme"])
      blockedKeywords = storageData.blockedKeywords || []
      colorScheme = storageData.colorScheme || "light"
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  filterContent(blockedKeywords)

  
  applyColorChanger(colorScheme)
  observePageChanges()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
    console.log("This is filtering YOUTHOOB... ALERTTTTTT!")
} else {
  init()
}


//new
// Listen for color scheme change messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'changeColorScheme') {
    // Immediately apply color changes
    applyColorChanger(message.colorScheme);
  }
});
