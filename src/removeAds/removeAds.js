// Constants for ad selectors
const AD_SELECTORS = [
  "ytd-rich-item-renderer:has(ytd-ad-slot-renderer)",
  "ytd-ad-slot-renderer",
  "#masthead-ad",
  "#player-ads",
  "#below ytd-merch-shelf-renderer",
  "ytd-merch-shelf-renderer",
  "ytd-banner-promo-renderer",
  "ytd-statement-banner-renderer",
  "ytd-masthead-prime-renderer",
  ".ytd-rich-grid-renderer:has(ytd-ad-slot-renderer)",
  ".video-ads.ytp-ad-module",
  "#related ytd-compact-promoted-item-renderer",
  "#related ytd-promoted-sparkles-web-renderer",
]

function removeAds() {
  let removedCount = 0

  AD_SELECTORS.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      element.remove()
      removedCount++
    })
  })

  // Remove parent containers that might be left empty
  const cleanupSelectors = [
    "ytd-rich-section-renderer:empty",
    "ytd-shelf-renderer:empty",
  ]

  cleanupSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => element.remove())
  })

  if (removedCount > 0) {
    console.log(`Removed ${removedCount} ad elements`)
  }
}

export {removeAds}