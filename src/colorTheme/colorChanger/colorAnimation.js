function colorAnimation() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          console.log("Added node:", node)
        })
        mutation.removedNodes.forEach((node) => {
          console.log("Removed node:", node)
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
    console.log("Monitoring for dynamically added elements...")

    
  const styleElement = document.createElement("style")
  styleElement.id = "youtube-custom-background"
    styleElement.textContent = `
    /*body*/
    ytd-app{
        background-color: #2b437c !important;
    }

    /* shorts go up or down + All, Music, Gaming, Dramedy Categories on home page*/
    .navigation-container, #chips-content{
        background-color: #2b437c !important;
    }

    /* Sidebar buttons + 2nd sidebar's categories & its header & its footer & its inner stuff + 2nd sidebar's additional stuff */
    #items, ytd-guide-section-renderer, #guide-content.ytd-app, ytd-guide-renderer #footer, #guide-inner-content{
        background-color: #2b437c !important;
    }

    /* home page multiple categories chip */
    ytd-feed-filter-chip-bar-renderer, #right-arrow-button, #left-arrow-button, #right-arrow.ytd-feed-filter-chip-bar-renderer::before{
        background-color: #2b437c !important;
    }

    /* home page multiple categories chip Black curved portion */
    #right-arrow.ytd-feed-filter-chip-bar-renderer::before, #left-arrow.ytd-feed-filter-chip-bar-renderer::after{
        background: transparent !important;
    }

    /* stupid bleeding thing */
    #columns{
        background: #2b437c !important;
    }

    /*sidebar*/
    ytd-mini-guide-renderer {
      background-color: #2b437c !important;
    }

    /*navbar*/
    #container {
        background-color: #2b437c !important;
    }

    /*buttons in the sidebar*/
    ytd-mini-guide-entry-renderer{
        background-color: transparent;
    }
    ytd-mini-guide-entry-renderer yt-icon{
        color: #b0c4fc !important;
    }
    /*all the rest buttons*/
    yt-touch-feedback-shape{
        background-color: #b0c4fc !important;
    }

    yt-button-shape button{
        /*background: #ffffff !important;*/
        color: rgb(176, 196, 252, 1) !important;
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
