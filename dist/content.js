/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/colorTheme/colorChanger/colorAnimation.js":
/*!*******************************************************!*\
  !*** ./src/colorTheme/colorChanger/colorAnimation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorAnimation: () => (/* binding */ colorAnimation)
/* harmony export */ });
/* harmony import */ var _components_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/utils/convertToRGB */ "./src/components/utils/convertToRGB.js");


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
      background-color: ${theme === "dark" ? " #282828" : "#ffffff"} ;
    }
      /* creator comments */
      #author-comment-badge > ytd-author-comment-badge-renderer{
        background-color: ${
          theme === "dark"
            ? " rgba(255,255,255,0.1) !important"
            : " rgba(0, 0, 0, 0.05) !important"
        };
      }
        #name #container #text-container yt-formatted-string{
          color: ${secondaryColor} !important;
        }
        /* show transcript button */
        .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--outline{
          color: ${secondaryColor} !important;
          border-color: ${(0,_components_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_0__.convertToRGBA)(secondaryColor, 0.2)} !important;
        }
          /*remove suggestion in input field */
          .ytSuggestionComponentRemoveLink{
            color: ${secondaryColor} !important;
          }
            /* focusing border in input field */
            .ytSearchboxComponentInputBoxDark.ytSearchboxComponentInputBoxHasFocus{
              border-color: ${(0,_components_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_0__.convertToRGBA)(secondaryColor, 0.3)} !important;
            }
              .ytSearchboxComponentInputBoxHasFocus{
                border-color: ${(0,_components_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_0__.convertToRGBA)(secondaryColor, 0.5)} !important;
              }

        /* subscriptions page */
        #page-header, #tabs-inner-container, #page-header-banner {
          background-color: ${primaryColor} !important;
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




/***/ }),

/***/ "./src/colorTheme/colorChanger/colorChanger.js":
/*!*****************************************************!*\
  !*** ./src/colorTheme/colorChanger/colorChanger.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyColorChanger: () => (/* binding */ applyColorChanger)
/* harmony export */ });
function applyColorChanger(colorScheme) {
  // Define more comprehensive color schemes
  const schemes = {
    dark: {
      backgroundColor: "#181818",
      textColor: "#ffffff",
      secondaryBackgroundColor: "#212121",
      borderColor: "#3f3f3f",
      chipBackgroundColor: "#373737",
      chipTextColor: "#ffffff",
    },
    light: {
      backgroundColor: "#ffffff",
      textColor: "#030303",
      secondaryBackgroundColor: "#f9f9f9",
      borderColor: "#d3d3d3",
      chipBackgroundColor: "#f2f2f2",
      chipTextColor: "#030303",
    },
    custom: {
      backgroundColor: "#f0e68c",
      textColor: "#00008b",
      secondaryBackgroundColor: "#fafad2",
      borderColor: "#e6e6fa",
      chipBackgroundColor: "#fff0f5",
      chipTextColor: "#00008b",
    },
    custom1: {
      backgroundColor: "#0f1020", // Deep midnight blue
      textColor: "#e0e0ff", // Soft light blue text
      secondaryBackgroundColor: "#1a1a30", // Slightly lighter midnight blue
      borderColor: "#2a2a50", // Dark navy border
      chipBackgroundColor: "#2a2a50", // Navy chip background
      chipTextColor: "#b0b0ff", // Soft periwinkle text
    },

    // Custom2: Soft Pastel
    custom2: {
      backgroundColor: "#f5f0ff", // Very light lavender
      textColor: "#333366", // Deep indigo
      secondaryBackgroundColor: "#e6e0f5", // Soft pastel lavender
      borderColor: "#d0c0e0", // Soft pastel purple border
      chipBackgroundColor: "#d0c0e0", // Pastel purple chips
      chipTextColor: "#333366", // Deep indigo text
    },

    // Custom3: Cyberpunk Neon
    custom3: {
      backgroundColor: "#0a0a1a", // Ultra-dark navy
      textColor: "#00ffff", // Bright cyan
      secondaryBackgroundColor: "#111128", // Slightly lighter dark navy
      borderColor: "#0f3f5f", // Deep teal border
      chipBackgroundColor: "#1f2f4f", // Dark teal chips
      chipTextColor: "#00ffff", // Bright cyan text
    },
  }

  const selectedScheme = schemes[colorScheme] || schemes["light"]

  // Create a style element to apply global styles
  const styleElement = document.createElement("style")
  styleElement.id = "youtube-color-scheme"
  styleElement.textContent = `
    /* Global body and main background */
    html, body, #page-manager {
      background-color: ${selectedScheme.backgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }

    /* Sidebar and main content area */
    #contents, #secondary, #guide-content {
      background-color: ${selectedScheme.backgroundColor} !important;
    }

    /* Video thumbnails and titles */
    ytd-thumbnail, 
    #video-title, 
    .title, 
    yt-formatted-string,
    a.yt-simple-endpoint {
      color: ${selectedScheme.textColor} !important;
    }

    /* Chips and filters */
    ytd-chip-cloud-chip-renderer {
      background-color: ${selectedScheme.chipBackgroundColor} !important;
      color: ${selectedScheme.chipTextColor} !important;
    }

    /* Headers and top bars */
    #masthead-container, 
    #header, 
    #container.ytd-masthead {
      background-color: ${selectedScheme.secondaryBackgroundColor} !important;
      border-bottom-color: ${selectedScheme.borderColor} !important;
    }

    /* Hover and focus states */
    a:hover, button:hover, 
    ytd-chip-cloud-chip-renderer:hover {
      background-color: ${selectedScheme.chipBackgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }

    /* Comments and additional areas */
    #comments, 
    #comment-section, 
    ytd-comments {
      background-color: ${selectedScheme.backgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }
  `

  // Remove any existing color scheme style
  const existingStyle = document.getElementById("youtube-color-scheme")
  if (existingStyle) {
    existingStyle.remove()
  }

  // Append the new style
  document.head.appendChild(styleElement)

  console.log(`Applied ${colorScheme} color scheme to YouTube.`)
}


/***/ }),

/***/ "./src/components/filtering/filterContent.js":
/*!***************************************************!*\
  !*** ./src/components/filtering/filterContent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterContent: () => (/* binding */ filterContent)
/* harmony export */ });
/* harmony import */ var _removing_hideAndRemoveElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../removing/hideAndRemoveElement */ "./src/components/removing/hideAndRemoveElement.js");
/* harmony import */ var _content_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/config */ "./src/content/config.js");




function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function filterContent(blockedKeywords) {
  if (!blockedKeywords || blockedKeywords.length === 0) return

  _content_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.SELECTORS.videosAndShorts.forEach((selector) => {
    const contentElements = document.querySelectorAll(selector)

    contentElements.forEach((element) => {
      const titleElement = element.querySelector(
        "#video-title, #video-title-link, .ShortsLockupViewModelHostMetadataTitle a"
      )

      let title = ""

      // Check textContent or aria-label for title
      if (titleElement) {
        title = titleElement.textContent.trim()
      } else if (element.hasAttribute("aria-label")) {
        title = element.getAttribute("aria-label").trim()
      }

      if (!title) return // Skip if no title is found

      if (isBlocked(title, blockedKeywords)) {
        (0,_removing_hideAndRemoveElement__WEBPACK_IMPORTED_MODULE_0__.hideAndRemoveElement)(element)
      }
    })
  })
}




/***/ }),

/***/ "./src/components/filtering/shouldApplyFiltering.js":
/*!**********************************************************!*\
  !*** ./src/components/filtering/shouldApplyFiltering.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shouldApplyFiltering: () => (/* binding */ shouldApplyFiltering)
/* harmony export */ });
/* harmony import */ var _content_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../content/config */ "./src/content/config.js");


function shouldApplyFiltering(path) {
  return _content_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}




/***/ }),

/***/ "./src/components/removing/hideAndRemoveElement.js":
/*!*********************************************************!*\
  !*** ./src/components/removing/hideAndRemoveElement.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideAndRemoveElement: () => (/* binding */ hideAndRemoveElement)
/* harmony export */ });
/* harmony import */ var _styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/applyStyles */ "./src/components/styles/applyStyles.js");

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
        (0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyDisplayNoneStyle)(renderer)
        break

      case "crossedOut":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyCrossedOutStyle)(renderer)
        break
      
      case "premiumBlock":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyPremiumBlockStyle)(renderer)
        break

      default:
        console.log("Unknown animation style:", animationStyle)
        break
    }
  })
}



/***/ }),

/***/ "./src/components/storage/getFromStorage.js":
/*!**************************************************!*\
  !*** ./src/components/storage/getFromStorage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage)
/* harmony export */ });
function getFromStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(keys, (result) => resolve(result))
  })
}


/***/ }),

/***/ "./src/components/styles/applyStyles.js":
/*!**********************************************!*\
  !*** ./src/components/styles/applyStyles.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyBlockedContent: () => (/* binding */ applyBlockedContent),
/* harmony export */   applyCrossedOutStyle: () => (/* binding */ applyCrossedOutStyle),
/* harmony export */   applyDisplayNoneStyle: () => (/* binding */ applyDisplayNoneStyle),
/* harmony export */   applyPlayfulBlockStyle: () => (/* binding */ applyPlayfulBlockStyle),
/* harmony export */   applyPremiumBlockStyle: () => (/* binding */ applyPremiumBlockStyle)
/* harmony export */ });
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


function applyBlockedContent(element) {
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



function applyPlayfulBlockStyle(element) {
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



/***/ }),

/***/ "./src/components/utils/convertToRGB.js":
/*!**********************************************!*\
  !*** ./src/components/utils/convertToRGB.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToRGBA: () => (/* binding */ convertToRGBA)
/* harmony export */ });
function convertToRGBA(hex, alpha) {
  // Remove any spaces and ensure hex starts with #
  hex = hex.trim()
  if (!hex.startsWith("#")) {
    hex = "#" + hex
  }

  // Validate hex format
  const match = hex.match(/^#([a-f0-9]{6}|[a-f0-9]{3})$/i)
  if (!match) {
    console.error("Invalid hex color:", hex)
    // Return a fallback color instead of throwing error
    return "rgba(0, 0, 0, " + alpha + ")"
  }

  let color = match[1]
  if (color.length === 3) {
    // Convert shorthand hex to full length
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
  }

  const r = parseInt(color.slice(0, 2), 16)
  const g = parseInt(color.slice(2, 4), 16)
  const b = parseInt(color.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}




/***/ }),

/***/ "./src/components/utils/debounce.js":
/*!******************************************!*\
  !*** ./src/components/utils/debounce.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
function debounce(func, delay) {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
  }
}


/***/ }),

/***/ "./src/content/config.js":
/*!*******************************!*\
  !*** ./src/content/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG: () => (/* binding */ CONFIG)
/* harmony export */ });
const CONFIG = {
  ALLOWED_PAGES: [
    "/",
    "/channel/UCEgdi0XIXXZ-qJOFPf4JSKw",
    "/channel/UCYfdidRxbB8Qhf0Nx7ioOYw",
    "/gaming",
    "/channel/UC4R8DWoMoI7CAwX8_LjQHig",
    "/feed/storefront?bp=ogUCKAU%3D",
    "/feed/trending?bp=6gQJRkVleHBsb3Jl",
  ],
  SELECTORS: {
    videosAndShorts: [
      "ytd-rich-item-renderer h3",
      "ytd-grid-video-renderer h3 a",
      "ytm-shorts-lockup-view-model-v2 h3 a",
      "ytd-grid-movie-renderer h3 span",
    ],
  },
}

// Structure for shorts
// ytd-rich-item-renderer (#content or .ytd-rich-item-renderer) (ytm-shorts-lockup-view-model-v2) (ytm-shorts-lockup-view-model) (.shortsLockupViewModelHostOutsideMetadata shortsLockupViewModelHostMetadataRounded image-overlay-text) (h3 with an aria-label)


/***/ }),

/***/ "./src/content/observePageChanges.js":
/*!*******************************************!*\
  !*** ./src/content/observePageChanges.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observePageChanges: () => (/* binding */ observePageChanges)
/* harmony export */ });
/* harmony import */ var _components_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/utils/debounce.js */ "./src/components/utils/debounce.js");
/* harmony import */ var _components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/filtering/filterContent.js */ "./src/components/filtering/filterContent.js");



function observePageChanges() {

  if (typeof chrome === "undefined" || !chrome.runtime || !chrome.storage) {
    console.error("Chrome extension APIs not available")
    return
  }

  const observer = new MutationObserver(
    (0,_components_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
      try {
        chrome.storage.sync.get(["blockedKeywords"], function (result) {
          // Added null check
          if (chrome.runtime.lastError) {
            console.error("Storage access error:", chrome.runtime.lastError)
            return
          }

          const blockedKeywords = result.blockedKeywords || []

          if (blockedKeywords.length === 0) return

          // Wrap filterContent in a try-catch
          try {
            ;(0,_components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_1__.filterContent)(blockedKeywords)
          } catch (filterError) {
            console.error("Content filtering error:", filterError)
          }
        })
      } catch (err) {
        console.error("Observation error:", err)
      }
    }, 300)
  )

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}


/***/ }),

/***/ "./src/removeAds/removeAds.js":
/*!************************************!*\
  !*** ./src/removeAds/removeAds.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAds: () => (/* binding */ removeAds)
/* harmony export */ });
// Constants for ad selectors
const AD_SELECTORS = [
  "ytd-rich-item-renderer:has(ytd-ad-slot-renderer)",
  "ytd-ad-slot-renderer",
  "#masthead-ad",
  "#player-ads",
  "#below ytd-merch-shelf-renderer",
  "ytd-merch-shelf-renderer",
  "ytd-banner-promo-renderer",
  "ytd-statement-banner-renderer",
  "ytd-masthead-prime-renderer",
  ".ytd-rich-grid-renderer:has(ytd-ad-slot-renderer)",
  ".video-ads.ytp-ad-module",
  "#related ytd-compact-promoted-item-renderer",
  "#related ytd-promoted-sparkles-web-renderer",
]

function removeAds() {
  let removedCount = 0

  AD_SELECTORS.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      element.remove()
      removedCount++
    })
  })

  // Remove parent containers that might be left empty
  const cleanupSelectors = [
    "ytd-rich-section-renderer:empty",
    "ytd-shelf-renderer:empty",
  ]

  cleanupSelectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => element.remove())
  })

  if (removedCount > 0) {
    console.log(`Removed ${removedCount} ad elements`)
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/content/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_storage_getFromStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/storage/getFromStorage.js */ "./src/components/storage/getFromStorage.js");
/* harmony import */ var _observePageChanges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observePageChanges.js */ "./src/content/observePageChanges.js");
/* harmony import */ var _components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filtering/filterContent.js */ "./src/components/filtering/filterContent.js");
/* harmony import */ var _components_filtering_shouldApplyFiltering_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filtering/shouldApplyFiltering.js */ "./src/components/filtering/shouldApplyFiltering.js");
/* harmony import */ var _colorTheme_colorChanger_colorChanger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colorTheme/colorChanger/colorChanger.js */ "./src/colorTheme/colorChanger/colorChanger.js");
/* harmony import */ var _colorTheme_colorChanger_colorAnimation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colorTheme/colorChanger/colorAnimation.js */ "./src/colorTheme/colorChanger/colorAnimation.js");
/* harmony import */ var _removeAds_removeAds_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../removeAds/removeAds.js */ "./src/removeAds/removeAds.js");







function detectYouTubeTheme() {
  const isDarkTheme = document.documentElement.hasAttribute("dark")

  const hasYtDarkClass =
    document.documentElement.getAttribute("dark") === "true"

  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const isDarkBackground =
    backgroundColor === "rgb(15, 15, 15)" || backgroundColor === "#0f0f0f"

  return isDarkTheme || hasYtDarkClass || isDarkBackground ? "dark" : "light"
}


async function init() {
  if (!(0,_components_filtering_shouldApplyFiltering_js__WEBPACK_IMPORTED_MODULE_3__.shouldApplyFiltering)(window.location.pathname)) return

  let blockedKeywords = []
  let colorScheme = "gloriousblue"
  const detectedTheme = detectYouTubeTheme() // Detect the theme

  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await (0,_components_storage_getFromStorage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)([
        "blockedKeywords",
        "colorScheme",
      ])
      blockedKeywords = storageData.blockedKeywords || []
      colorScheme = storageData.colorScheme || "light"
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  (0,_components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_2__.filterContent)(blockedKeywords)

  // applyColorChanger(colorScheme)
  ;(0,_colorTheme_colorChanger_colorAnimation_js__WEBPACK_IMPORTED_MODULE_5__.colorAnimation)(colorScheme, detectedTheme)
  ;(0,_observePageChanges_js__WEBPACK_IMPORTED_MODULE_1__.observePageChanges)()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
    console.log("This is filtering YOUTHOOB... ALERTTTTTT!")
} else {
  init()
}


//new
// Listen for color scheme change messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'changeColorScheme') {
    // Immediately apply color changes
    // applyColorChanger(message.colorScheme);
    const detectedTheme = detectYouTubeTheme() 
    ;(0,_colorTheme_colorChanger_colorAnimation_js__WEBPACK_IMPORTED_MODULE_5__.colorAnimation)(message.colorScheme, detectedTheme)
  }
});
})();

/******/ })()
;
//# sourceMappingURL=content.js.map