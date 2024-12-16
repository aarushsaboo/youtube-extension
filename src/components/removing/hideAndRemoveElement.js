function hideAndRemoveElement(element) {
  const renderer = element.closest(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-reel-item-renderer"
  )

  if (renderer) {
    // More robust blocking
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
}

export {hideAndRemoveElement}