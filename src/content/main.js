import { getFromStorage } from "../components/storage/getFromStorage.js"
import { observePageChanges } from "./observePageChanges.js"
import { filterContent } from "../components/filtering/filterContent.js"
import { shouldApplyFiltering } from "../components/filtering/shouldApplyFiltering.js"
import { applyColorChanger } from "../colorTheme/colorChanger/colorChanger.js"
import { colorAnimation } from "../colorTheme/colorChanger/colorAnimation.js"
import { removeAds } from "../removeAds/removeAds.js"

let currentColorScheme = "gloriousblue" // module level

function detectYouTubeTheme() {
  const isDarkTheme = document.documentElement.hasAttribute("dark")

  const hasYtDarkClass =
    document.documentElement.getAttribute("dark") === "true"

  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const isDarkBackground =
    backgroundColor === "rgb(15, 15, 15)" || backgroundColor === "#0f0f0f"

  return isDarkTheme || hasYtDarkClass || isDarkBackground ? "dark" : "light"
}

// Add this before your init function
if (performance.getEntriesByType("navigation")[0].type === "back_forward") {
  // If we're coming from back/forward navigation, prevent cache restoration
  window.location.replace(window.location.href)
} else {
  // Normal initialization for fresh page loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init)
    console.log("This is filtering YOUTHOOB... ALERTTTTTT!")
  } else {
    init()
  }
}

async function init() {
  if (!shouldApplyFiltering(window.location.pathname)) return

  let blockedKeywords = []
  let colorScheme = "gloriousblue"
  const detectedTheme = detectYouTubeTheme() // Detect the theme

  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await getFromStorage([
        "blockedKeywords",
        "colorScheme",
      ])
      blockedKeywords = storageData.blockedKeywords || []
      if (storageData.colorScheme) {
        currentColorScheme = storageData.colorScheme
      }
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  filterContent(blockedKeywords, detectedTheme, currentColorScheme)

  // applyColorChanger(colorScheme)
  colorAnimation(currentColorScheme, detectedTheme)
  observePageChanges(currentColorScheme, detectedTheme)
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
    // applyColorChanger(message.colorScheme);
    const detectedTheme = detectYouTubeTheme() 
    colorAnimation(message.colorScheme, detectedTheme)
  }
});