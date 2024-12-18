function colorAnimation(scheme = "dark") {
  let primaryColor, secondaryColor, tertiaryColor, quaternaryColor
  // primary is for the background, secondary is for the icons & text, tertiary is for input, quaternary is for the input's placeholder

  switch (scheme) {
    case "emeraldviolet":
      primaryColor = "#3f384c"
      secondaryColor = "#d4bbff"
      tertiaryColor = "#292335"
      quaternaryColor = "#cdc2db"
      break
    case "ladypink":
      primaryColor = "#493545"
      secondaryColor = "#f6b0ea"
      tertiaryColor = "#32202f"
      quaternaryColor = "#dabfd2"
      break
    case "darkbrown":
      primaryColor = "#46383a"
      secondaryColor = "#ddbfc3"
      tertiaryColor = "#2f2325"
      quaternaryColor = "#d6c2c4"
      break
    case "pinkbrown":
      primaryColor = "#4f3439"
      secondaryColor = "#ffb1c0"
      tertiaryColor = "#371f24"
      quaternaryColor = "#e4bdc3"
      break
    case "skinbrown":
      primaryColor = "#463931"
      secondaryColor = "#dec1b1"
      tertiaryColor = "#2f231c"
      quaternaryColor = "#d7c2b8"
      break
    case "beautifulorange":
      primaryColor = "#4f3625"
      secondaryColor = "#ffb787"
      tertiaryColor = "#362112"
      quaternaryColor = "#e5bfa8"
      break
    case "yellowochre":
      primaryColor = "#423b20"
      secondaryColor = "#dec663"
      tertiaryColor = "#2c250c"
      quaternaryColor = "#d2c6a1"
      break
    case "guttergreen":
      primaryColor = "#373d35"
      secondaryColor = "#becab8"
      tertiaryColor = "#212720"
      quaternaryColor = "#c2c9bd"
      break
    case "olivegreen":
      primaryColor = "#313f2c"
      secondaryColor = "#a0d490"
      tertiaryColor = "#1c2918"
      quaternaryColor = "#bbcbb2"
      break
    case "brightgreen":
      primaryColor = "#27403c"
      secondaryColor = "#74d7cb"
      tertiaryColor = "#102a27"
      quaternaryColor = "#b1ccc7"
      break
    case "dirtygreen":
      primaryColor = "#343d3f"
      secondaryColor = "#b8cacd"
      tertiaryColor = "#1e2729"
      quaternaryColor = "#bfc8ca"
      break
    case "blackngrey":
      primaryColor = " #383b43"
      secondaryColor = " #bac7e3"
      tertiaryColor = "#23262d"
      quaternaryColor = "#c4c6d0"
      break
    case "blacknwhite":
      primaryColor = "#3c3c3c"
      secondaryColor = "#a8c7fa"
      tertiaryColor = "#282828"
      quaternaryColor = "#c7c7c7"
      break
    case "blacknwhite":
      primaryColor = "#3c3c3c"
      secondaryColor = "#a8c7fa"
      tertiaryColor = "#282828"
      quaternaryColor = "#c7c7c7"
      break
    case "gloriousblue":
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
    /*
    ytd-mini-guide-entry-renderer yt-icon{
        color: ${secondaryColor} !important;
    }*/

    /* input field */
    yt-searchbox .ytSearchboxComponentInputBoxDark{
        background-color: ${tertiaryColor} !important;
    }
    yt-searchbox .ytSearchboxComponentInputBoxDark input::placeholder{
        color: ${quaternaryColor} !important;
    }
    /* additional buttons: notification bell + sidebar buttons + Create button + Search & audio buttons */
    #masthead-container yt-icon-button svg, #guide-content yt-icon svg, #masthead-container #end #buttons button, #container #center button{
        color: ${secondaryColor} !important;
    }
    /* removing main youtube icon's color that was assigned above */
    #guide-content #header ytd-topbar-logo-renderer ytd-logo #logo-icon svg{
      color: white !important;
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

    /* 2nd sidebar( with 4 buttons ) */
    #items #endpoint > span{
      color: ${secondaryColor} !important;
    }
    #items #icon > span > div > svg{
      color: ${secondaryColor} !important;
    }

    /* video titles */
    #video-title{
    }
    /* 1st sidebar(with many categories) text */
    #endpoint > tp-yt-paper-item > yt-formatted-string{
      color: ${secondaryColor} !important;
    }
    /* account details */
    ytd-compact-link-renderer #endpoint > tp-yt-paper-item{
      background-color: #282828;
    }
  `

  // Remove any existing custom background style
  const existingStyle = document.getElementById("youtube-custom-background")
  if (existingStyle) {
    existingStyle.remove()
  }

  // Append the new style
  document.head.appendChild(styleElement)
  
  /* youtube logo
  const logoPaths = document.querySelectorAll(
    "#logo-icon g:nth-child(1) > path:nth-child(1)"
  )
  logoPaths.forEach((path) => {
    path.setAttribute("fill", "blue")
  })
  */
  

  console.log(`Applied color animation for ${scheme} scheme.`)
}

export { colorAnimation }
