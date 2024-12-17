function colorAnimation() {
  const styleElement = document.createElement("style")
  styleElement.id = "youtube-custom-background"
  styleElement.textContent = `

    /* Target YouTube's sidebar */
    #guide-content,
    ytd-mini-guide-renderer {
      background: linear-gradient( #323264, #643264) !important;
    }

    /* Target the top navbar */
    #container {
        background: linear-gradient( #323264, #643264);
    }

    /* Optional: Add a subtle glow effect */
    #guide-content,
    #container {
    background: linear-gradient( #323264, #643264);
}
    
    ytd-mini-guide-entry-renderer{
    background: transparent;
    }
  `

  // Remove any existing custom background style
  const existingStyle = document.getElementById("youtube-custom-background")
  if (existingStyle) {
    existingStyle.remove()
  }

  // Append the new style
  document.head.appendChild(styleElement)

  console.log(`Applied color animation to YouTube sidebar and navbar.`)
}

export { colorAnimation }
