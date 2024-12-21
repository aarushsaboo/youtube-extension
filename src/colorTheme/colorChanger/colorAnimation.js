import { convertToRGBA } from "../../components/utils/convertToRGB"

function colorAnimation(scheme = "dark", theme) {
  let primaryColor, secondaryColor, tertiaryColor, quaternaryColor
  // primary is for the background, secondary is for the icons & text, tertiary is for input, quaternary is for the input's placeholder

  switch (scheme) {
    case "emeraldviolet":
      if (theme === "dark") {
        primaryColor = "#3f384c"
        secondaryColor = "#d4bbff"
        tertiaryColor = "#292335"
        quaternaryColor = "#cdc2db"
      } else {
        primaryColor = "#f7edff"
        secondaryColor = "#6a5294"
        tertiaryColor = "#ede7f2"
        quaternaryColor = "#4b4358"
      }
      break

    case "ladypink":
      if (theme === "dark") {
        primaryColor = " #493545"
        secondaryColor = " #f6b0ea"
        tertiaryColor = " #32202f"
        quaternaryColor = " #dabfd2"
      } else {
        primaryColor = "#ffebf8"
        secondaryColor = "#834a7d"
        tertiaryColor = "#f0e6f0"
        quaternaryColor = "#554151"
      }
      break

    case "darkbrown":
      if (theme === "dark") {
        primaryColor = "#46383a"
        secondaryColor = "#ddbfc3"
        tertiaryColor = "#2f2325"
        quaternaryColor = "#d6c2c4"
      } else {
        primaryColor = "#ffecee"
        secondaryColor = "#70585c"
        tertiaryColor = "#eee8ec"
        quaternaryColor = "#524345"
      }
      break

    case "pinkbrown":
      if (theme === "dark") {
        primaryColor = "#4f3439"
        secondaryColor = "#ffb1c0"
        tertiaryColor = "#371f24"
        quaternaryColor = "#e4bdc3"
      } else {
        primaryColor = "#ffecee"
        secondaryColor = "#924759"
        tertiaryColor = "#f2e6eb"
        quaternaryColor = "#5b3f44"
      }
      break

    case "skinbrown":
      if (theme === "dark") {
        primaryColor = "#463931"
        secondaryColor = "#dec1b1"
        tertiaryColor = "#2f231c"
        quaternaryColor = "#d7c2b8"
      } else {
        primaryColor = "#ffede5"
        secondaryColor = "#705a4d"
        tertiaryColor = "#eee8ea"
        quaternaryColor = "#52443c"
      }
      break

    case "beautifulorange":
      if (theme === "dark") {
        primaryColor = "#4f3625"
        secondaryColor = "#ffb787"
        tertiaryColor = "#362112"
        quaternaryColor = "#e5bfa8"
      } else {
        primaryColor = "#ffede4"
        secondaryColor = "#8e4e1c"
        tertiaryColor = "#f2e7e4"
        quaternaryColor = "#5b4130"
      }
      break

    case "yellowochre":
      if (theme === "dark") {
        primaryColor = "#423b20"
        secondaryColor = "#dec663"
        tertiaryColor = "#2c250c"
        quaternaryColor = "#d2c6a1"
      } else {
        primaryColor = "#fff0c1"
        secondaryColor = "#6f5d00"
        tertiaryColor = "#eee8e1"
        quaternaryColor = "#4e472a"
      }
      break

    case "guttergreen":
      if (theme === "dark") {
        primaryColor = "#373d35"
        secondaryColor = "#becab8"
        tertiaryColor = "#212720"
        quaternaryColor = "#c2c9bd"
      } else {
        primaryColor = "#e8f4e1"
        secondaryColor = "#566253"
        tertiaryColor = "#eaeae5"
        quaternaryColor = "#424940"
      }
      break

    case "olivegreen":
      if (theme === "dark") {
        primaryColor = "#313f2c"
        secondaryColor = "#a0d490"
        tertiaryColor = "#1c2918"
        quaternaryColor = "#bbcbb2"
      } else {
        primaryColor = "#cbffb8"
        secondaryColor = "#3b6930"
        tertiaryColor = "#e4ecdc"
        quaternaryColor = "#3c4b37"
      }
      break

    case "brightgreen":
      if (theme === "dark") {
        primaryColor = "#27403c"
        secondaryColor = "#74d7cb"
        tertiaryColor = "#102a27"
        quaternaryColor = "#b1ccc7"
      } else {
        primaryColor = "#b3fff4"
        secondaryColor = "#006a62"
        tertiaryColor = "#daede9"
        quaternaryColor = "#324b48"
      }
      break

    case "dirtygreen":
      if (theme === "dark") {
        primaryColor = "#343d3f"
        secondaryColor = "#b8cacd"
        tertiaryColor = "#1e2729"
        quaternaryColor = "#bfc8ca"
      } else {
        primaryColor = "#e2f4f7"
        secondaryColor = "#516164"
        tertiaryColor = "#e9eaea"
        quaternaryColor = "#3f484a"
      }
      break

    case "blackngrey":
      if (theme === "dark") {
        primaryColor = "#383b43"
        secondaryColor = "#bac7e3"
        tertiaryColor = "#23262d"
        quaternaryColor = "#c4c6d0"
      } else {
        primaryColor = "#ecf0ff"
        secondaryColor = "#525f77"
        tertiaryColor = "#eae9ed"
        quaternaryColor = "#44474e"
      }
      break

    case "blacknwhite":
      if (theme === "dark") {
        primaryColor = "#3c3c3c"
        secondaryColor = "#a8c7fa"
        tertiaryColor = "#282828"
        quaternaryColor = "#c7c7c7"
      } else {
        primaryColor = "#f2f2f2"
        secondaryColor = "#3c3c3c"
        tertiaryColor = "#efeded"
        quaternaryColor = "#474747"
      }
      break

    case "gloriousblue":
    default:
      if (theme === "dark") {
        primaryColor = "#2b437c"
        secondaryColor = "#b0c4fc"
        tertiaryColor = "#1f2535"
        quaternaryColor = "#707689"
      } else {
        primaryColor = "#ecf0ff"
        secondaryColor = "#3a5e98"
        tertiaryColor = "#e6e9f3"
        quaternaryColor = "#3e4759"
      }
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
    yt-searchbox .ytSearchboxComponentInputBoxDark, .ytSearchboxComponentInputBox{
        background-color: ${tertiaryColor} !important;
    }
    yt-searchbox .ytSearchboxComponentInputBoxDark input::placeholder, #center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input::placeholder, ytSearchboxComponentInput {
        color: ${quaternaryColor} !important;
    }
    /* additional buttons: notification bell + sidebar buttons + Create button + Search & audio buttons */
    #masthead-container yt-icon-button svg, #guide-content yt-icon svg, #masthead-container #end #buttons button, #container #center button{
        color: ${secondaryColor} !important;
    }
    /* removing main youtube icon's color that was assigned above
    #guide-content #header ytd-topbar-logo-renderer ytd-logo #logo-icon svg{
      color: white !important;
    }*/

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
      background-color: ${theme === "dark" ? "#282828" : "#ffffff"} ;
    }
      /* creator comments */
      #author-comment-badge > ytd-author-comment-badge-renderer{
        background: ${convertToRGBA(secondaryColor, 0.8)} !important;
      }
        /* show transcript button */
        .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline{
          color: ${secondaryColor} !important;
          border-color: ${convertToRGBA(secondaryColor, 0.2)} !important;
        }
          /*remove suggestion in input field */
          .ytSuggestionComponentRemoveLink{
            color: ${secondaryColor} !important;
          }
            /* focusing border in input field */
            .ytSearchboxComponentInputBoxDark.ytSearchboxComponentInputBoxHasFocus{
              border-color: ${convertToRGBA(secondaryColor, 0.3)} !important;
            }
              .ytSearchboxComponentInputBoxHasFocus{
                border-color: ${convertToRGBA(secondaryColor, 0.5)} !important;
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
  /* black thing blocking. Remove the #cinematics element from the DOM*/
  const removeCinematics = () => {
    const cinematicsElement = document.querySelector("#cinematics")
    if (cinematicsElement) {
      cinematicsElement.remove()
      console.log("Removed #cinematics element")
    }
  }

  // Set up a mutation observer to detect the addition of #cinematics
  const observer = new MutationObserver(removeCinematics)
  observer.observe(document.body, { childList: true, subtree: true })

  // Initial check in case the element is already present
  removeCinematics()

  console.log(`Applied color animation for ${scheme} scheme.`)
}

export { colorAnimation }
