import { applyDisplayNoneStyle, applyCrossedOutStyle, applyPremiumBlockStyle, applySvgBlockStyle } from "../styles/applyStyles"
function hideAndRemoveElement(element) {

  chrome.storage.sync.get(
    ["blockedKeywords", "blockedCategory", "restrictAdult", "animationStyle"],
    function (data) {
      console.log("Loaded data from storage:", data)
      console.log("Animation Style from storage:", data.animationStyle)
    }
  )

  chrome.storage.sync.get("animationStyle", function (data) { // <--- ADD THIS LINE
    const animationStyle = data.animationStyle || "displayNone"; // <--- ADD THIS LINE

    const renderer = element.closest(
      "ytd-rich-item-renderer, ytd-video-renderer, ytd-reel-item-renderer"
    )

    if (!renderer) {
      console.log("No renderer found for the element:", element)
      return
    }

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

      default:
        console.log("Unknown animation style:", animationStyle)
        break
    }
  })
}

export {hideAndRemoveElement}