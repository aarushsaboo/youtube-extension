chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Tab updated:", tabId, changeInfo, tab)
})

console.log("heheheheeeheeh")
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Block requests related to experiments
    const blockedPatterns = [
      "get_video_info", // YouTube video info
      "get_player_response", // Player experiment settings
      "youtubei/v1/player", // API for player experiments
    ]

    if (blockedPatterns.some((pattern) => details.url.includes(pattern))) {
      console.log("Blocking experimental request:", details.url)
      return { cancel: true }
    }
  },
  { urls: ["*://*.youtube.com/*"] },
  ["blocking"]
)
