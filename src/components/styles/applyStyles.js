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


export function applyBlockedContent(element) {
  // Create overlay container
  const overlay = document.createElement("div")
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(45,45,45,0.9) 100%);
    backdrop-filter: blur(5px);
    z-index: 10;
  `

  // Create lock icon
  const lockIcon = document.createElement("div")
  lockIcon.innerHTML = `
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  `

  // Create message text
  const message = document.createElement("div")
  message.style.cssText = `
    color: white;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
    padding: 0 20px;
  `
  message.textContent = "Content Blocked"

  // Create button
  const button = document.createElement("button")
  button.style.cssText = `
    background: #CC0000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-top: 12px;
    cursor: pointer;
  `
  button.textContent = "Blocked Content"

  // Assemble the overlay
  overlay.appendChild(lockIcon)
  overlay.appendChild(message)
  overlay.appendChild(button)

  // Add relative positioning to the parent element if needed
  element.style.position = "relative"

  // Add the overlay to the element
  element.appendChild(overlay)
}



export function applyPlayfulBlockStyle(element) {
  // Create overlay container
  const overlay = document.createElement("div")
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #FF9999, #FF99CC);
    z-index: 10;
  `

  // Create emoji icon
  const emojiIcon = document.createElement("div")
  emojiIcon.style.cssText = `
    font-size: 48px;
    margin-bottom: 16px;
  `
  emojiIcon.textContent = "🙈" // Playful "see no evil" monkey

  // Create message text
  const message = document.createElement("div")
  message.style.cssText = `
    color: #444;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 0 20px;
    text-shadow: 1px 1px 0 white;
  `
  message.textContent = "Oops! Nothing to see here!"

  // Create secondary message
  const subMessage = document.createElement("div")
  subMessage.style.cssText = `
    color: #666;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
    padding: 0 20px;
  `
  subMessage.textContent = "This content has been blocked"

  // Create button
  const button = document.createElement("button")
  button.style.cssText = `
    background: white;
    color: #FF6666;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `
  button.textContent = "Blocked Content"

  // Assemble the overlay
  overlay.appendChild(emojiIcon)
  overlay.appendChild(message)
  overlay.appendChild(subMessage)
  overlay.appendChild(button)

  // Add relative positioning to the parent element if needed
  element.style.position = "relative"

  // Add the overlay to the element
  element.appendChild(overlay)
}

function applyPremiumBlockStyle(element) {
  // Create overlay container
  const overlay = document.createElement("div")
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    z-index: 10;
  `

  // Create geometric pattern using SVG
  const pattern = document.createElement("div")
  pattern.innerHTML = `
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer diamond -->
      <path d="M80 0L160 80L80 160L0 80L80 0Z" fill="none" stroke="#FFD700" stroke-width="2"/>
      
      <!-- Inner diamond -->
      <path d="M80 20L140 80L80 140L20 80L80 20Z" fill="none" stroke="#FFD700" stroke-width="2"/>
      
      <!-- Center diamond -->
      <path d="M80 40L120 80L80 120L40 80L80 40Z" fill="#FFD700" fill-opacity="0.1" stroke="#FFD700" stroke-width="2"/>
      
      <!-- Cross lines -->
      <line x1="0" y1="80" x2="160" y2="80" stroke="#FFD700" stroke-width="1" stroke-opacity="0.5"/>
      <line x1="80" y1="0" x2="80" y2="160" stroke="#FFD700" stroke-width="1" stroke-opacity="0.5"/>
      
      <!-- Corner accents -->
      <circle cx="80" cy="0" r="4" fill="#FFD700"/>
      <circle cx="160" cy="80" r="4" fill="#FFD700"/>
      <circle cx="80" cy="160" r="4" fill="#FFD700"/>
      <circle cx="0" cy="80" r="4" fill="#FFD700"/>
    </svg>
  `

  // Create message text
  const message = document.createElement("div")
  message.style.cssText = `
    color: #FFD700;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-top: 24px;
    text-align: center;
    padding: 0 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  `
  message.textContent = "Content Blocked"

  // Create subtle button
  const button = document.createElement("button")
  button.style.cssText = `
    background: transparent;
    color: #FFD700;
    border: 1px solid #FFD700;
    padding: 10px 24px;
    border-radius: 2px;
    font-family: 'YouTube Sans', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-top: 16px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
  `
  button.textContent = "Blocked"

  // Assemble the overlay
  overlay.appendChild(pattern)
  overlay.appendChild(message)
  overlay.appendChild(button)

  // Add relative positioning to the parent element if needed
  element.style.position = "relative"

  // Add the overlay to the element
  element.appendChild(overlay)
}

export { applyDisplayNoneStyle , applyCrossedOutStyle, applyPremiumBlockStyle}