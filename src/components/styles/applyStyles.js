function applyDisplayNoneStyle(renderer) {
  console.log("Applying 'displayNone' style.")
  renderer.setAttribute("data-yt-filter-blocked", "true")
  renderer.style.transition = "all 0.5s ease"
  renderer.style.opacity = "0"
  renderer.style.transform = "scale(0.8)"

  setTimeout(() => {
    if (renderer.parentNode) {
      renderer.remove()

      // Add permanent style to prevent re-adding
      const style = document.createElement("style")
      style.textContent = `
        ytd-rich-item-renderer[data-yt-filter-blocked="true"], 
        ytd-video-renderer[data-yt-filter-blocked="true"],
        ytd-reel-item-renderer[data-yt-filter-blocked="true"] {
          display: none !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `
      document.head.appendChild(style)
    }
  }, 500)
}

function applyCrossedOutStyle(renderer) {
  console.log("Applying 'crossedOut' style.")

  const crossOverlay = document.createElement("div")
  crossOverlay.style.position = "absolute"
  crossOverlay.style.top = "0"
  crossOverlay.style.left = "0"
  crossOverlay.style.width = "100%"
  crossOverlay.style.height = "100%"
  crossOverlay.style.zIndex = "10"
  crossOverlay.style.pointerEvents = "none"
  crossOverlay.style.background = `
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,0,0,0.3) 10px,
      rgba(255,0,0,0.3) 20px
    )
  `

  renderer.style.position = "relative"
  renderer.style.opacity = "0.3"
  renderer.style.filter = "grayscale(100%)"
  renderer.style.transition = "all 0.5s ease"
  renderer.style.pointerEvents = "none"

  const crossLine1 = document.createElement("div")
  crossLine1.style.position = "absolute"
  crossLine1.style.top = "0"
  crossLine1.style.left = "0"
  crossLine1.style.width = "100%"
  crossLine1.style.height = "100%"
  crossLine1.style.borderTop = "3px solid red"
  crossLine1.style.transform = "rotate(-45deg)"
  crossLine1.style.zIndex = "11"

  const crossLine2 = document.createElement("div")
  crossLine2.style.position = "absolute"
  crossLine2.style.top = "0"
  crossLine2.style.left = "0"
  crossLine2.style.width = "100%"
  crossLine2.style.height = "100%"
  crossLine2.style.borderTop = "3px solid red"
  crossLine2.style.transform = "rotate(45deg)"
  crossLine2.style.zIndex = "11"

  renderer.appendChild(crossOverlay)
  renderer.appendChild(crossLine1)
  renderer.appendChild(crossLine2)
}

export { applyDisplayNoneStyle , applyCrossedOutStyle}