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

function filterContent(blockedKeywords, detectedTheme, colorScheme) {
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
        (0,_removing_hideAndRemoveElement__WEBPACK_IMPORTED_MODULE_0__.hideAndRemoveElement)(element, detectedTheme, colorScheme)
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

function hideAndRemoveElement(element, detectedTheme, colorScheme) {
  if (element.hasAttribute("data-processed")) {
    return
  }
  element.setAttribute("data-processed", "true")


  chrome.storage.sync.get(
    ["blockedKeywords", "blockedCategory", "restrictAdult", "animationStyle"],
    function (data) {
      console.log("Loaded data from storage:", data)
      console.log("Animation Style from storage:", data.animationStyle)
    }
  )

  chrome.storage.sync.get("animationStyle", function (data) {
    // <--- ADD THIS LINE
    // Check element type and get renderer
    let renderer
    let isShort = false

    if (element.closest("#content > ytm-shorts-lockup-view-model-v2")) {
      renderer = element.closest("#content > ytm-shorts-lockup-view-model-v2")
      isShort = true
    } else if (element.closest("ytd-rich-grid-media")) {
      renderer = element.closest("ytd-rich-grid-media").closest("#content")
      // Hide #text element for videos
      const textElement = renderer.querySelector("#channel-name")
      if (textElement) {
        textElement.style.display = "none"
      }
    }

    if (!renderer || renderer.hasAttribute("data-styled")) {
      return
    }

    const animationStyle = data.animationStyle || "displayNone"

    switch (animationStyle) {
      case "displayNone":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyDisplayNoneStyle)(renderer)
        break

      case "crossedOut":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyCrossedOutStyle)(renderer)
        break

      case "premiumBlock":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyPremiumBlockStyle)(renderer)
        break

      case "svgBlock":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applySvgBlockStyle)(renderer)
        break

      case "applyGradient":
        ;(0,_styles_applyStyles__WEBPACK_IMPORTED_MODULE_0__.applyGradientBlockStyle)(renderer, isShort, detectedTheme, colorScheme)
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
/* harmony export */   applyGradientBlockStyle: () => (/* binding */ applyGradientBlockStyle),
/* harmony export */   applyPlayfulBlockStyle: () => (/* binding */ applyPlayfulBlockStyle),
/* harmony export */   applyPremiumBlockStyle: () => (/* binding */ applyPremiumBlockStyle),
/* harmony export */   applySvgBlockStyle: () => (/* binding */ applySvgBlockStyle)
/* harmony export */ });
/* harmony import */ var _utils_chooseColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chooseColors */ "./src/components/utils/chooseColors.js");
/* harmony import */ var _utils_convertToRGB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convertToRGB */ "./src/components/utils/convertToRGB.js");



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

function applySvgBlockStyle(renderer){
  // Create a wrapper for the original content
  const contentWrapper = document.createElement("div")
  contentWrapper.style.position = "relative"
  contentWrapper.style.opacity = "0.3"
  contentWrapper.style.filter = "grayscale(100%)"
  contentWrapper.style.transition = "all 0.5s ease"

  // Move all original content into the wrapper
  while (renderer.firstChild) {
    contentWrapper.appendChild(renderer.firstChild)
  }
  renderer.appendChild(contentWrapper)

  // Add pointer-events style to the renderer itself
  renderer.style.position = "relative"
  renderer.style.pointerEvents = "none"

  // Create and add the SVG overlay
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("width", "100%")
  svg.setAttribute("height", "100%")
  svg.setAttribute("viewBox", "0 0 255 192")
  svg.setAttribute("preserveAspectRatio", "none")
  svg.style.position = "absolute"
  svg.style.top = "0"
  svg.style.left = "0"
  svg.style.width = "100%"
  svg.style.height = "100%"
  svg.style.zIndex = "10"

  svg.innerHTML = `
<rect width="255" height="192" fill="#7C5E98"/>
<path d="M29.6004 36.4858L102.857 36.4858C105.398 36.4858 107.457 34.4262 107.457 31.8855V13.6004C107.457 11.0597 105.398 9.00004 102.857 9.00004L29.6004 9.00004C27.0597 9.00004 25 11.0597 25 13.6004V31.8855C25 34.4262 27.0597 36.4858 29.6004 36.4858Z" fill="#906CAE"/>
<path d="M130.874 74.0001H118.82C118.82 77.4364 117.455 80.732 115.025 83.1619C112.595 85.5918 109.299 86.9568 105.863 86.9568H104.64V74.3204C103.133 74.4577 101.694 75.0167 100.489 75.9332C99.2843 76.8497 98.3617 78.0868 97.8269 79.5031C96.2004 78.5873 94.3653 78.1061 92.4987 78.1061C90.632 78.1061 88.7969 78.5873 87.1703 79.5031C86.6334 78.0827 85.7064 76.8427 84.4959 75.9259C83.2855 75.009 81.8407 74.4525 80.328 74.3204V86.9568H79.1051C77.405 86.9568 75.7215 86.6215 74.1512 85.97C72.5808 85.3185 71.1544 84.3637 69.9536 83.1601C68.7528 81.9566 67.8011 80.528 67.1531 78.9562C66.5052 77.3844 66.1737 75.7002 66.1775 74.0001H54.1233C44.4663 73.9958 35.1877 77.7547 28.2567 84.4792C21.3257 91.2036 17.2878 100.364 17 110.017C17.0011 110.279 17.0952 110.532 17.2653 110.731C17.4355 110.93 17.6708 111.062 17.9293 111.104C18.1879 111.146 18.4529 111.095 18.6772 110.96C18.9016 110.825 19.0708 110.614 19.1547 110.366C19.7663 108.347 21.0104 106.579 22.7037 105.32C24.3969 104.062 26.4497 103.381 28.5592 103.378H29.0833C31.2139 103.378 33.2867 104.071 34.9886 105.353C36.6905 106.634 37.929 108.435 38.517 110.483C38.574 110.677 38.6931 110.848 38.856 110.969C39.0189 111.09 39.2168 111.154 39.4196 111.152C39.6274 111.161 39.832 111.099 40.0008 110.978C40.1696 110.857 40.293 110.682 40.3513 110.483C40.9309 108.447 42.1551 106.654 43.8404 105.373C45.5256 104.092 47.5809 103.392 49.6977 103.378H50.2509C52.3814 103.378 54.4542 104.071 56.1561 105.353C57.8581 106.634 59.0966 108.435 59.6845 110.483C59.7416 110.677 59.8606 110.848 60.0235 110.969C60.1864 111.09 60.3843 111.154 60.5871 111.152C60.7949 111.161 60.9995 111.099 61.1683 110.978C61.3372 110.857 61.4606 110.682 61.5189 110.483C62.1012 108.437 63.3342 106.637 65.0312 105.355C66.7281 104.073 68.7967 103.379 70.9235 103.378H71.4767C74.079 103.378 76.5748 104.412 78.4149 106.252C80.2551 108.093 81.2889 110.588 81.2889 113.191V117.937C81.2889 118.044 81.3099 118.15 81.3509 118.249C81.3919 118.347 81.4519 118.437 81.5276 118.513C81.6033 118.589 81.6932 118.649 81.7921 118.69C81.8911 118.731 81.9971 118.752 82.1041 118.752C82.2769 118.755 82.4461 118.703 82.5874 118.603C82.7287 118.504 82.8347 118.362 82.8902 118.199C83.547 116.264 84.7931 114.583 86.4537 113.393C88.1143 112.202 90.1059 111.561 92.1492 111.56H92.7024C94.7715 111.526 96.7978 112.151 98.4884 113.344C100.179 114.537 101.446 116.238 102.107 118.199C102.166 118.36 102.273 118.499 102.414 118.598C102.554 118.697 102.721 118.751 102.893 118.752C103.003 118.756 103.112 118.738 103.214 118.698C103.316 118.659 103.41 118.6 103.489 118.524C103.567 118.448 103.63 118.356 103.673 118.255C103.716 118.155 103.738 118.046 103.738 117.937V113.191C103.734 111.903 103.984 110.628 104.474 109.438C104.964 108.248 105.684 107.166 106.593 106.254C107.501 105.343 108.581 104.619 109.77 104.126C110.959 103.632 112.233 103.378 113.521 103.378H114.074C116.204 103.378 118.277 104.071 119.979 105.353C121.681 106.634 122.92 108.435 123.508 110.483C123.565 110.677 123.684 110.848 123.847 110.969C124.009 111.09 124.207 111.154 124.41 111.152C124.618 111.161 124.822 111.099 124.991 110.978C125.16 110.857 125.284 110.682 125.342 110.483C125.924 108.437 127.157 106.637 128.854 105.355C130.551 104.073 132.62 103.379 134.746 103.378H135.3C137.43 103.378 139.503 104.071 141.205 105.353C142.907 106.634 144.145 108.435 144.733 110.483C144.79 110.677 144.909 110.848 145.072 110.969C145.235 111.09 145.433 111.154 145.636 111.152C145.844 111.161 146.048 111.099 146.217 110.978C146.386 110.857 146.509 110.682 146.568 110.483C147.15 108.437 148.383 106.637 150.08 105.355C151.777 104.073 153.845 103.379 155.972 103.378H156.525C158.634 103.386 160.684 104.069 162.377 105.326C164.069 106.584 165.314 108.35 165.93 110.366C165.994 110.594 166.131 110.795 166.321 110.937C166.51 111.079 166.741 111.155 166.978 111.152C167.126 111.153 167.272 111.123 167.408 111.066C167.545 111.008 167.668 110.924 167.771 110.818C167.874 110.712 167.955 110.587 168.009 110.449C168.063 110.312 168.088 110.165 168.085 110.017C167.789 100.352 163.737 91.1823 156.789 84.457C149.84 77.7317 140.544 73.9804 130.874 74.0001V74.0001Z" fill="#393136"/>
<path d="M99.195 86.1701L95.4681 89.897C95.4191 89.938 95.3797 89.9892 95.3527 90.047C95.3257 90.1049 95.3118 90.168 95.3118 90.2318C95.3118 90.2957 95.3257 90.3587 95.3527 90.4166C95.3797 90.4744 95.4191 90.5257 95.4681 90.5667C96.0626 90.9958 96.7905 91.1993 97.5214 91.1406C98.2524 91.0819 98.9385 90.7649 99.457 90.2464C99.9726 89.7202 100.287 89.0297 100.346 88.2954C100.404 87.5611 100.203 86.8295 99.7773 86.2283C99.7047 86.1483 99.6049 86.098 99.4973 86.0873C99.3898 86.0765 99.282 86.106 99.195 86.1701V86.1701Z" fill="#FAA318"/>
<path d="M85.6269 86.1705L89.3246 89.8974C89.3736 89.9384 89.413 89.9896 89.44 90.0475C89.467 90.1053 89.481 90.1684 89.481 90.2323C89.481 90.2961 89.467 90.3592 89.44 90.417C89.413 90.4749 89.3736 90.5261 89.3246 90.5671C88.7247 90.9865 87.9962 91.1812 87.267 91.1171C86.5378 91.053 85.8545 90.7342 85.3369 90.2165C84.8193 89.6989 84.5005 89.0156 84.4364 88.2864C84.3723 87.5572 84.567 86.8287 84.9863 86.2288C85.0652 86.1386 85.1757 86.0822 85.2949 86.0714C85.4142 86.0605 85.5331 86.096 85.6269 86.1705V86.1705Z" fill="#FAA318"/>
<path d="M210.112 0V39.1323C210.11 40.5656 209.816 41.9836 209.249 43.2999C208.682 44.6163 207.853 45.8035 206.812 46.7894C205.772 47.7753 204.542 48.5393 203.197 49.0349C201.852 49.5306 200.42 49.7475 198.989 49.6724C196.222 49.4224 193.653 48.1327 191.8 46.0632C189.946 43.9937 188.947 41.2984 189.002 38.5209V0H210.112Z" fill="#6A4D85"/>
<path d="M165.095 38.1907H172.374C173.726 38.1907 175.022 37.6539 175.977 36.6983C176.933 35.7427 177.47 34.4467 177.47 33.0954V33.0954C177.47 31.744 176.933 30.448 175.977 29.4924C175.022 28.5368 173.726 28 172.374 28H165.095C163.744 28 162.448 28.5368 161.492 29.4924C160.537 30.448 160 31.744 160 33.0954V33.0954C160 34.4467 160.537 35.7427 161.492 36.6983C162.448 37.6539 163.744 38.1907 165.095 38.1907V38.1907Z" fill="#906CAE"/>
<path d="M138.346 34.6978C135.868 34.6978 133.49 33.7131 131.737 31.9603C129.985 30.2075 129 27.8302 129 25.3514V18.8294C129 16.3506 129.985 13.9733 131.737 12.2205C133.49 10.4677 135.868 9.48303 138.346 9.48303V9.48303C140.825 9.48303 143.202 10.4677 144.955 12.2205C146.708 13.9733 147.693 16.3506 147.693 18.8294V25.3514C147.693 27.8302 146.708 30.2075 144.955 31.9603C143.202 33.7131 140.825 34.6978 138.346 34.6978Z" stroke="#42373B" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M138.346 63.0862C135.868 63.0862 133.49 62.1015 131.737 60.3487C129.985 58.5959 129 56.2187 129 53.7399V47.2178C129 44.739 129.985 42.3617 131.737 40.6089C133.49 38.8562 135.868 37.8715 138.346 37.8715C140.825 37.8715 143.202 38.8562 144.955 40.6089C146.708 42.3617 147.693 44.739 147.693 47.2178V53.7399C147.693 56.2187 146.708 58.5959 144.955 60.3487C143.202 62.1015 140.825 63.0862 138.346 63.0862V63.0862Z" stroke="#42373B" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M138.346 2V13.2389" stroke="#42373B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M138.346 30.8254V42.0935" stroke="#42373B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206.097 68.3072H213.347C214.698 68.3072 215.994 67.7703 216.95 66.8148C217.905 65.8592 218.442 64.5632 218.442 63.2118V63.2118C218.457 62.533 218.337 61.8578 218.088 61.2261C217.839 60.5944 217.466 60.0189 216.991 59.5333C216.517 59.0478 215.95 58.662 215.324 58.3987C214.698 58.1354 214.026 57.9998 213.347 58H206.097C204.745 58 203.449 58.5368 202.494 59.4924C201.538 60.448 201.001 61.744 201.001 63.0954V63.0954C200.986 63.7742 201.106 64.4493 201.355 65.081C201.604 65.7127 201.977 66.2883 202.452 66.7738C202.927 67.2594 203.494 67.6452 204.119 67.9085C204.745 68.1718 205.418 68.3074 206.097 68.3072V68.3072Z" fill="#906CAE"/>
<path d="M70 171C70 159.954 78.9543 151 90 151H255V192H90C78.9543 192 70 183.046 70 172V171Z" fill="#5C4270"/>
<path d="M210 171L223 178" stroke="#906CAE" stroke-width="4.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M211.606 167.986C212.048 167.126 212.121 166.131 211.81 165.219C211.498 164.306 210.827 163.551 209.942 163.117L208.43 162.383C207.541 161.954 206.513 161.882 205.57 162.184C204.627 162.487 203.845 163.138 203.395 163.997C202.952 164.859 202.878 165.856 203.19 166.771C203.502 167.686 204.173 168.445 205.058 168.881L206.571 169.615C207.011 169.829 207.491 169.957 207.983 169.991C208.475 170.025 208.968 169.965 209.436 169.813C209.904 169.662 210.336 169.423 210.708 169.109C211.081 168.796 211.386 168.414 211.606 167.986V167.986Z" fill="#906CAE"/>
<path d="M208.605 174.003C209.048 173.141 209.122 172.144 208.81 171.229C208.498 170.314 207.827 169.555 206.942 169.119L205.429 168.385C204.989 168.171 204.509 168.043 204.017 168.009C203.525 167.975 203.032 168.035 202.564 168.187C202.096 168.338 201.664 168.577 201.292 168.891C200.919 169.204 200.614 169.586 200.394 170.014V170.014C199.952 170.874 199.879 171.869 200.19 172.781C200.502 173.694 201.173 174.449 202.058 174.883L203.57 175.617C204.459 176.046 205.487 176.118 206.43 175.816C207.373 175.513 208.155 174.862 208.605 174.003Z" fill="#906CAE"/>
<path d="M231.605 177.999C232.048 177.138 232.122 176.141 231.81 175.227C231.498 174.312 230.827 173.555 229.942 173.118L228.429 172.385C227.989 172.171 227.509 172.043 227.017 172.009C226.525 171.975 226.032 172.035 225.564 172.187C225.096 172.338 224.664 172.577 224.292 172.89C223.919 173.203 223.614 173.585 223.394 174.012V174.012C222.952 174.872 222.879 175.866 223.19 176.778C223.502 177.69 224.173 178.445 225.058 178.879L226.57 179.612C227.458 180.045 228.487 180.119 229.432 179.817C230.376 179.514 231.158 178.861 231.605 177.999V177.999Z" fill="#906CAE"/>
<path d="M228.605 184C229.048 183.137 229.122 182.138 228.81 181.222C228.498 180.306 227.827 179.546 226.942 179.109L225.429 178.389C224.541 177.955 223.512 177.881 222.567 178.184C221.623 178.487 220.841 179.142 220.394 180.005V180.005C219.952 180.866 219.879 181.863 220.19 182.777C220.502 183.69 221.173 184.447 222.058 184.882L223.57 185.616C224.459 186.046 225.487 186.118 226.43 185.815C227.373 185.513 228.155 184.86 228.605 184V184Z" fill="#906CAE"/>
<path d="M127 173L145 168" stroke="#906CAE" stroke-width="4.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M125.875 168.69C125.743 168.08 125.497 167.503 125.153 166.993C124.808 166.483 124.371 166.049 123.866 165.718C123.361 165.387 122.8 165.164 122.213 165.063C121.626 164.961 121.026 164.983 120.448 165.127L118.494 165.603C117.914 165.74 117.365 165.997 116.88 166.36C116.395 166.723 115.984 167.184 115.671 167.717C115.357 168.249 115.148 168.842 115.055 169.461C114.962 170.079 114.987 170.711 115.129 171.32V171.32C115.259 171.931 115.503 172.509 115.848 173.02C116.192 173.53 116.63 173.963 117.135 174.294C117.641 174.624 118.204 174.844 118.791 174.942C119.379 175.04 119.979 175.014 120.556 174.864L122.51 174.388C123.089 174.251 123.636 173.994 124.119 173.633C124.602 173.271 125.013 172.812 125.326 172.281C125.639 171.751 125.849 171.161 125.943 170.544C126.037 169.927 126.014 169.297 125.875 168.69V168.69Z" fill="#906CAE"/>
<path d="M127.867 176.308C127.737 175.758 127.493 175.239 127.149 174.78C126.805 174.321 126.368 173.932 125.863 173.635C125.358 173.338 124.796 173.14 124.209 173.052C123.622 172.964 123.023 172.988 122.446 173.122L120.494 173.55C119.913 173.671 119.363 173.901 118.878 174.227C118.392 174.552 117.981 174.967 117.667 175.446C117.354 175.925 117.145 176.459 117.053 177.016C116.961 177.573 116.989 178.142 117.133 178.688V178.688C117.26 179.239 117.503 179.76 117.846 180.22C118.19 180.68 118.627 181.071 119.133 181.368C119.638 181.665 120.202 181.863 120.789 181.95C121.377 182.037 121.977 182.011 122.554 181.874L124.506 181.463C125.087 181.34 125.637 181.109 126.123 180.781C126.609 180.454 127.02 180.038 127.334 179.557C127.647 179.077 127.855 178.542 127.947 177.984C128.039 177.426 128.011 176.856 127.867 176.308V176.308Z" fill="#906CAE"/>
<path d="M152.873 162.673C152.742 162.063 152.496 161.487 152.151 160.979C151.806 160.47 151.368 160.038 150.863 159.709C150.359 159.379 149.797 159.159 149.21 159.06C148.624 158.961 148.024 158.985 147.447 159.132L145.493 159.608C144.913 159.744 144.365 160.001 143.88 160.364C143.395 160.726 142.984 161.187 142.671 161.719C142.357 162.251 142.148 162.843 142.055 163.462C141.962 164.08 141.987 164.711 142.129 165.319V165.319C142.257 165.931 142.499 166.51 142.843 167.022C143.187 167.533 143.625 167.967 144.131 168.297C144.637 168.627 145.201 168.847 145.789 168.944C146.377 169.041 146.978 169.012 147.556 168.86L149.527 168.403C150.105 168.26 150.651 167.998 151.133 167.632C151.614 167.266 152.022 166.803 152.333 166.271C152.644 165.738 152.852 165.146 152.945 164.529C153.037 163.911 153.013 163.28 152.873 162.673Z" fill="#906CAE"/>
<path d="M154.875 170.305C154.741 169.757 154.494 169.239 154.148 168.782C153.802 168.325 153.365 167.937 152.86 167.641C152.356 167.344 151.795 167.146 151.209 167.055C150.624 166.965 150.025 166.985 149.448 167.115L147.494 167.544C146.913 167.667 146.365 167.898 145.88 168.225C145.395 168.551 144.984 168.966 144.671 169.446C144.357 169.925 144.148 170.458 144.055 171.015C143.962 171.572 143.987 172.141 144.129 172.688C144.259 173.238 144.503 173.758 144.848 174.218C145.192 174.678 145.63 175.067 146.135 175.364C146.641 175.661 147.204 175.86 147.791 175.948C148.379 176.036 148.979 176.012 149.556 175.878L151.51 175.449C152.089 175.324 152.636 175.091 153.12 174.764C153.603 174.437 154.014 174.022 154.327 173.543C154.64 173.065 154.849 172.532 154.943 171.976C155.037 171.42 155.014 170.852 154.875 170.305V170.305Z" fill="#906CAE"/>
`
  renderer.appendChild(svg)
}

function applyGradientBlockStyle(renderer, isShort, detectedTheme, colorScheme) {
  const colors = (0,_utils_chooseColors__WEBPACK_IMPORTED_MODULE_0__.chooseColors)(colorScheme, detectedTheme)
  const { primary, secondary, tertiary, quaternary } = colors
  
  if (renderer.hasAttribute("data-styled")) return
  renderer.setAttribute("data-styled", "true")

  const overlay = document.createElement("div")
  overlay.style.position = "absolute"
  overlay.style.top = "0"
  overlay.style.left = "0"
  overlay.style.width = "100%"
  overlay.style.height = "100%"
  overlay.style.zIndex = "10"

  // Convert hex to rgba for the gradients
  const primaryRGBA = (0,_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_1__.convertToRGBA)(primary, 0.9)
  const secondaryRGBA = (0,_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_1__.convertToRGBA)(secondary, 0.9)
  const tertiaryRGBA = (0,_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_1__.convertToRGBA)(tertiary, 0.04)
  const quaternaryRGBA = (0,_utils_convertToRGB__WEBPACK_IMPORTED_MODULE_1__.convertToRGBA)(quaternary, 0.04)

  // Different gradient based on content type
  overlay.style.backgroundImage = isShort
    ? `linear-gradient(180deg, ${primaryRGBA}, ${secondaryRGBA})`
    : `radial-gradient(circle at 53% 25%, ${tertiaryRGBA} 0%, ${tertiaryRGBA} 36%, transparent 36%, transparent 100%),
       radial-gradient(circle at 48% 27%, ${quaternaryRGBA} 0%, ${quaternaryRGBA} 45%, transparent 45%, transparent 100%),
       radial-gradient(circle at 65% 50%, ${tertiaryRGBA} 0%, ${tertiaryRGBA} 61%, transparent 61%, transparent 100%),
       radial-gradient(circle at 78% 82%, ${quaternaryRGBA} 0%, ${quaternaryRGBA} 26%, transparent 26%, transparent 100%),
       radial-gradient(circle at 99% 75%, ${tertiaryRGBA} 0%, ${tertiaryRGBA} 31%, transparent 31%, transparent 100%),
       radial-gradient(circle at 17% 28%, ${quaternaryRGBA} 0%, ${quaternaryRGBA} 15%, transparent 15%, transparent 100%),
       radial-gradient(circle at 19% 19%, ${tertiaryRGBA} 0%, ${tertiaryRGBA} 68%, transparent 68%, transparent 100%),
       radial-gradient(circle at 35% 23%, ${quaternaryRGBA} 0%, ${quaternaryRGBA} 18%, transparent 18%, transparent 100%),
       linear-gradient(90deg, ${primaryRGBA}, ${secondaryRGBA})`

  console.log('Colors being used:', {
    primary,
    secondary,
    tertiary,
    quaternary,
    theme: detectedTheme,
    scheme: colorScheme
  })

  const text = document.createElement("div")
  text.textContent = isShort ? "Short Blocked" : "Content Blocked"
  text.style.position = "absolute"
  text.style.top = "50%"
  text.style.left = "50%"
  text.style.transform = isShort
    ? "translate(-50%, -50%) rotate(-90deg)"
    : "translate(-50%, -50%)"
  text.style.color = "#ffffff"
  text.style.fontSize = isShort ? "1rem" : "1.5rem"
  text.style.zIndex = "11"
  
  // Add background to text to ensure it's visible
  text.style.padding = "5px 10px"
  text.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
  text.style.color = "#ffffff"
  text.style.borderRadius = "4px"

  renderer.style.position = "relative"
  renderer.style.pointerEvents = "none"

  renderer.appendChild(overlay)
  renderer.appendChild(text)
}



/***/ }),

/***/ "./src/components/utils/chooseColors.js":
/*!**********************************************!*\
  !*** ./src/components/utils/chooseColors.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chooseColors: () => (/* binding */ chooseColors)
/* harmony export */ });
function chooseColors(scheme = "gloriousblue", theme) {
  const colorSchemes = {
    emeraldviolet: {
      dark: {
        primary: "#3f384c",
        secondary: "#d4bbff",
        tertiary: "#292335",
        quaternary: "#cdc2db",
      },
      light: {
        primary: "#f7edff",
        secondary: "#6a5294",
        tertiary: "#ede7f2",
        quaternary: "#4b4358",
      },
    },
    ladypink: {
      dark: {
        primary: "#493545",
        secondary: "#f6b0ea",
        tertiary: "#32202f",
        quaternary: "#dabfd2",
      },
      light: {
        primary: "#ffebf8",
        secondary: "#834a7d",
        tertiary: "#f0e6f0",
        quaternary: "#554151",
      },
    },
    darkbrown: {
      dark: {
        primary: "#46383a",
        secondary: "#ddbfc3",
        tertiary: "#2f2325",
        quaternary: "#d6c2c4",
      },
      light: {
        primary: "#ffecee",
        secondary: "#70585c",
        tertiary: "#eee8ec",
        quaternary: "#524345",
      },
    },
    pinkbrown: {
      dark: {
        primary: "#4f3439",
        secondary: "#ffb1c0",
        tertiary: "#371f24",
        quaternary: "#e4bdc3",
      },
      light: {
        primary: "#ffecee",
        secondary: "#924759",
        tertiary: "#f2e6eb",
        quaternary: "#5b3f44",
      },
    },
    skinbrown: {
      dark: {
        primary: "#463931",
        secondary: "#dec1b1",
        tertiary: "#2f231c",
        quaternary: "#d7c2b8",
      },
      light: {
        primary: "#ffede5",
        secondary: "#705a4d",
        tertiary: "#eee8ea",
        quaternary: "#52443c",
      },
    },
    beautifulorange: {
      dark: {
        primary: "#4f3625",
        secondary: "#ffb787",
        tertiary: "#362112",
        quaternary: "#e5bfa8",
      },
      light: {
        primary: "#ffede4",
        secondary: "#8e4e1c",
        tertiary: "#f2e7e4",
        quaternary: "#5b4130",
      },
    },
    yellowochre: {
      dark: {
        primary: "#423b20",
        secondary: "#dec663",
        tertiary: "#2c250c",
        quaternary: "#d2c6a1",
      },
      light: {
        primary: "#fff0c1",
        secondary: "#6f5d00",
        tertiary: "#eee8e1",
        quaternary: "#4e472a",
      },
    },
    guttergreen: {
      dark: {
        primary: "#373d35",
        secondary: "#becab8",
        tertiary: "#212720",
        quaternary: "#c2c9bd",
      },
      light: {
        primary: "#e8f4e1",
        secondary: "#566253",
        tertiary: "#eaeae5",
        quaternary: "#424940",
      },
    },
    olivegreen: {
      dark: {
        primary: "#313f2c",
        secondary: "#a0d490",
        tertiary: "#1c2918",
        quaternary: "#bbcbb2",
      },
      light: {
        primary: "#cbffb8",
        secondary: "#3b6930",
        tertiary: "#e4ecdc",
        quaternary: "#3c4b37",
      },
    },
    brightgreen: {
      dark: {
        primary: "#27403c",
        secondary: "#74d7cb",
        tertiary: "#102a27",
        quaternary: "#b1ccc7",
      },
      light: {
        primary: "#b3fff4",
        secondary: "#006a62",
        tertiary: "#daede9",
        quaternary: "#324b48",
      },
    },
    dirtygreen: {
      dark: {
        primary: "#343d3f",
        secondary: "#b8cacd",
        tertiary: "#1e2729",
        quaternary: "#bfc8ca",
      },
      light: {
        primary: "#e2f4f7",
        secondary: "#516164",
        tertiary: "#e9eaea",
        quaternary: "#3f484a",
      },
    },
    blackngrey: {
      dark: {
        primary: "#383b43",
        secondary: "#bac7e3",
        tertiary: "#23262d",
        quaternary: "#c4c6d0",
      },
      light: {
        primary: "#ecf0ff",
        secondary: "#525f77",
        tertiary: "#eae9ed",
        quaternary: "#44474e",
      },
    },
    blacknwhite: {
      dark: {
        primary: "#3c3c3c",
        secondary: "#a8c7fa",
        tertiary: "#282828",
        quaternary: "#c7c7c7",
      },
      light: {
        primary: "#f2f2f2",
        secondary: "#3c3c3c",
        tertiary: "#efeded",
        quaternary: "#474747",
      },
    },
    gloriousblue: {
      dark: {
        primary: "#2b437c",
        secondary: "#b0c4fc",
        tertiary: "#1f2535",
        quaternary: "#707689",
      },
      light: {
        primary: "#ecf0ff",
        secondary: "#3a5e98",
        tertiary: "#e6e9f3",
        quaternary: "#3e4759",
      },
    },
  }

  // Get the color scheme or default to gloriousblue if not found
  const selectedScheme = colorSchemes[scheme] || colorSchemes.gloriousblue

  // Get the theme colors or default to dark if not found
  const themeColors = selectedScheme[theme] || selectedScheme.dark

  return themeColors
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



function observePageChanges(currentColorScheme, detectedTheme) {

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
            ;(0,_components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_1__.filterContent)(blockedKeywords, detectedTheme, currentColorScheme)
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








let currentColorScheme = "gloriousblue" // module level

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
      if (storageData.colorScheme) {
        currentColorScheme = storageData.colorScheme
      }
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  (0,_components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_2__.filterContent)(blockedKeywords, detectedTheme, currentColorScheme)

  // applyColorChanger(colorScheme)
  ;(0,_colorTheme_colorChanger_colorAnimation_js__WEBPACK_IMPORTED_MODULE_5__.colorAnimation)(currentColorScheme, detectedTheme)
  ;(0,_observePageChanges_js__WEBPACK_IMPORTED_MODULE_1__.observePageChanges)(currentColorScheme, detectedTheme)
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