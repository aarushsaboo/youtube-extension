function colorAnimation(scheme = "dark") {
  let primaryColor, secondaryColor, tertiaryColor, quaternaryColor

  switch (scheme) {
    case "light":
      primaryColor = "#f0f0f0"
          secondaryColor = "#333333"
          tertiaryColor = "#282828"
          quaternaryColor = "#dde4e2"
      break
    case "custom":
      primaryColor = "#3a6073"
          secondaryColor = "#16222a"
          tertiaryColor = "#282828"
          quaternaryColor = "#dde4e2"
      break
    case "custom1":
      primaryColor = "#4b6cb7"
          secondaryColor = "#182848"
          tertiaryColor = "#282828"
          quaternaryColor = "#dde4e2"
      break
    case "brightgreen":
      primaryColor = "#26403c"
          secondaryColor = "#70d8cb"
          tertiaryColor = "#0f2a27"
          quaternaryColor = "#617c78"
      break
    case "dirtygreen":
      primaryColor = "#343d3f"
          secondaryColor = "#b8cacd"
          tertiaryColor = "#1e2729"
          quaternaryColor = "#617c78"
      break
    case "blackngrey":
      primaryColor = "#393b43"
          secondaryColor = "#bcc6e1"
          tertiaryColor = "#24262d"
          quaternaryColor = "#75777f"
      break
    case "blacknwhite":
      primaryColor = "#3c3c3c"
          secondaryColor = "#ffffff"
          tertiaryColor = "#282828"
          quaternaryColor = "#757575"
      break
    case "dark":
    default:
      primaryColor = " #2b437c"
        secondaryColor = " #b0c4fc"
          tertiaryColor = " #1f2535"
          quaternaryColor = " #707689"
      break
  }

  const styleElement = document.createElement("style")
  styleElement.id = "youtube-custom-background"
  styleElement.textContent = `
    /*body*/
    ytd-app{
        background-color: ${primaryColor} !important;
    }

    /* shorts go up or down + All, Music, Gaming, Dramedy Categories on home page*/
    .navigation-container, #chips-content{
        background-color: ${primaryColor} !important;
    }

    /* Sidebar buttons + 2nd sidebar's categories & its header & its footer & its inner stuff + 2nd sidebar's additional stuff */
    #items, ytd-guide-section-renderer, #guide-content.ytd-app, ytd-guide-renderer #footer, #guide-inner-content{
        background-color: ${primaryColor} !important;
    }

    /* home page multiple categories chip */
    ytd-feed-filter-chip-bar-renderer, #right-arrow-button, #left-arrow-button, #right-arrow.ytd-feed-filter-chip-bar-renderer::before{
        background-color: ${primaryColor} !important;
    }

    /* home page multiple categories chip Black curved portion */
    #right-arrow.ytd-feed-filter-chip-bar-renderer::before, #left-arrow.ytd-feed-filter-chip-bar-renderer::after{
        background: transparent !important;
    }
    
    /* chip with the categories */
    yt-chip-cloud-chip-renderer yt-formatted-string{
        color: ${secondaryColor} !important;
    }

    /* stupid bleeding thing */
    #columns{
        background: ${primaryColor} !important;
    }

    /*sidebar*/
    ytd-mini-guide-renderer {
      background-color: ${primaryColor} !important;
    }

    /*navbar*/
    #masthead-container #container {
        background-color: ${primaryColor} !important;
    }

    /*buttons in the sidebar*/
    ytd-mini-guide-entry-renderer{
        background-color: transparent;
    }
    ytd-mini-guide-entry-renderer yt-icon{
        color: ${secondaryColor} !important;
    }

    /* input field */
    yt-searchbox .ytSearchboxComponentInputBoxDark{
        background-color: ${tertiaryColor} !important;
    }
    yt-searchbox .ytSearchboxComponentInputBoxDark input::placeholder{
        color: ${quaternaryColor} !important;
    }
    /* additional buttons: notification bell + sidebar buttons */
    #masthead-container yt-icon-button svg, #guide-content yt-icon svg{
        color: ${secondaryColor} !important;
    }

    /* comment section: replies style */
    #replies #expander .expander-header yt-button-shape button .yt-spec-button-shape-next__button-text-content, #replies #expander .expander-header yt-button-shape button .yt-spec-button-shape-next__icon{
        color: ${secondaryColor} !important;
    }

    /* comment section: attributed @ stuff */
    yt-attributed-string>span>span>a{
        color: ${secondaryColor} !important;
    }

    /* comment section: more replies style */
    ytd-continuation-item-renderer .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {
        color: ${secondaryColor} !important;
    }

    /* youtube logo part with an id */
    #youtube-paths_yt7{
        color: white !important;
    }
  `

  // Remove any existing custom background style
  const existingStyle = document.getElementById("youtube-custom-background")
  if (existingStyle) {
    existingStyle.remove()
  }

  // Append the new style
  document.head.appendChild(styleElement)
  
  /* youtube logo */
  document
    .querySelector(
      "ytd-topbar-logo-renderer yt-icon span svg g:not(#youtube-paths_yt7) path"
    )
    .setAttribute("fill", `${secondaryColor}`)


  console.log(`Applied color animation for ${scheme} scheme.`)
}

export { colorAnimation }
