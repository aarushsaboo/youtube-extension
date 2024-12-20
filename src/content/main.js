import { getFromStorage } from "../components/storage/getFromStorage.js"
import { observePageChanges } from "./observePageChanges.js"
import { filterContent } from "../components/filtering/filterContent.js"
import { shouldApplyFiltering } from "../components/filtering/shouldApplyFiltering.js"
import { applyColorChanger } from "../colorTheme/colorChanger/colorChanger.js"
import { colorAnimation } from "../colorTheme/colorChanger/colorAnimation.js"
import { removeAds } from "../removeAds/removeAds.js"

async function init() {
  if (!shouldApplyFiltering(window.location.pathname)) return

  let blockedKeywords = []
  let colorScheme = "gloriousblue"
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

  
  // applyColorChanger(colorScheme)
  colorAnimation(colorScheme)
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
    // applyColorChanger(message.colorScheme);
    colorAnimation(message.colorScheme)
  }
});


function detectYouTubeTheme() {
  // Check if html element has the dark theme attribute
  const isDarkTheme = document.documentElement.hasAttribute("dark")

  // You can also check specific YouTube dark theme classes
  const hasYtDarkClass =
    document.documentElement.getAttribute("dark") === "true"

  // Alternatively, check for dark theme background color
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const isDarkBackground =
    backgroundColor === "rgb(15, 15, 15)" || backgroundColor === "#0f0f0f"

  return isDarkTheme || hasYtDarkClass || isDarkBackground
}

// Usage
function applyStyles() {
  if (detectYouTubeTheme()) {
    // Apply dark mode styles
    console.log("Dark mode detected")
  } else {
    // Apply light mode styles
    console.log("Light mode detected")
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", applyStyles)

// Also run when theme might change
const observer = new MutationObserver(() => {
  applyStyles()
})

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["dark"],
})

applyStyles()
