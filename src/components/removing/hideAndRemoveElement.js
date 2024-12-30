import { applyDisplayNoneStyle, applyCrossedOutStyle, applyPremiumBlockStyle, applySvgBlockStyle, applyGradientBlockStyle } from "../styles/applyStyles"
function hideAndRemoveElement(element, detectedTheme, colorScheme) {
  if (element.hasAttribute("data-processed")) {
    return
  }
  element.setAttribute("data-processed", "true")

  chrome.storage.sync.get("animationStyle", function (data) {
    // Check if element is a video container (ytd-rich-item-renderer) or shorts container
    const isShort = Boolean(
      element.querySelector("ytm-shorts-lockup-view-model-v2")
    )

    // For videos, the element we get is already the ytd-rich-item-renderer
    // For shorts, we need to get the closest ytd-rich-item-renderer
    const renderer = isShort
      ? element.closest("ytd-rich-item-renderer")
      : element

    if (!renderer || renderer.hasAttribute("data-styled")) {
      return
    }

    // If it's a video, also hide the channel name
    if (!isShort) {
      const channelNameElement = renderer.querySelector("#channel-name")
      if (channelNameElement) {
        channelNameElement.style.display = "none"
      }
    }

    const animationStyle = data.animationStyle || "displayNone"

    switch (animationStyle) {
      case "displayNone":
        applyDisplayNoneStyle(renderer)
        break

      case "crossedOut":
        applyCrossedOutStyle(renderer)
        break

      case "premiumBlock":
        applyPremiumBlockStyle(renderer)
        break

      case "svgBlock":
        applySvgBlockStyle(renderer)
        break

      case "applyGradient":
        applyGradientBlockStyle(renderer, isShort, detectedTheme, colorScheme)
        break

      default:
        console.log("Unknown animation style:", animationStyle)
        break
    }
  })
}

export {hideAndRemoveElement}