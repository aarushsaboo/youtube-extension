import { applyDisplayNoneStyle, applyCrossedOutStyle, applyPremiumBlockStyle, applySvgBlockStyle, applyGradientBlockStyle } from "../styles/applyStyles"
function hideAndRemoveElement(element) {
  if (element.hasAttribute("data-processed")) {
    return
  }
  element.setAttribute("data-processed", "true")


  chrome.storage.sync.get(
    ["blockedKeywords", "blockedCategory", "restrictAdult", "animationStyle"],
    function (data) {
      console.log("Loaded data from storage:", data)
      console.log("Animation Style from storage:", data.animationStyle)
    }
  )

  chrome.storage.sync.get("animationStyle", function (data) {
    // <--- ADD THIS LINE
    // Check element type and get renderer
    let renderer
    let isShort = false

    if (element.closest("#content > ytm-shorts-lockup-view-model-v2")) {
      renderer = element.closest("#content > ytm-shorts-lockup-view-model-v2")
      isShort = true
    } else if (element.closest("ytd-rich-grid-media")) {
      renderer = element.closest("ytd-rich-grid-media").closest("#content")
      // Hide #text element for videos
      const textElement = renderer.querySelector("#channel-name")
      if (textElement) {
        textElement.style.display = "none"
      }
    }

    if (!renderer || renderer.hasAttribute("data-styled")) {
      return
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
        applyGradientBlockStyle(renderer, isShort)
        break

      default:
        console.log("Unknown animation style:", animationStyle)
        break
    }
  })
}

export {hideAndRemoveElement}