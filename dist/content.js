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
/* harmony export */   applyCrossedOutStyle: () => (/* binding */ applyCrossedOutStyle),
/* harmony export */   applyDisplayNoneStyle: () => (/* binding */ applyDisplayNoneStyle),
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


function applyPremiumBlockStyle(renderer) {
  const blockOverlay = document.createElement("div")

  // Basic styling for the overlay
  blockOverlay.style.position = "absolute"
  blockOverlay.style.top = "0"
  blockOverlay.style.left = "0"
  blockOverlay.style.width = "100%"
  blockOverlay.style.height = "100%"
  blockOverlay.style.zIndex = "10"
  blockOverlay.style.display = "flex"
  blockOverlay.style.alignItems = "center"
  blockOverlay.style.justifyContent = "center"
  blockOverlay.style.pointerEvents = "none"
  blockOverlay.style.background = `
    white
  `

  // Create SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  )
  svgElement.setAttribute("width", "200")
  svgElement.setAttribute("height", "140")
  svgElement.setAttribute("viewBox", "0 0 1133 812")
  svgElement.style.opacity = "0.7"

  // Create path element
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  )
  pathElement.setAttribute(
    "d",
    "M1093.91 477.214C1092.58 475.888 1091.15 474.661 1089.73 473.433C1088.3 472.206 1086.92 470.88 1085.5 469.653C1084.07 468.426 1082.75 467.1 1081.32 465.823L1077.09 462.043C1075.77 460.717 1074.34 459.49 1072.92 458.263C1071.49 457.035 1070.11 455.71 1068.69 454.482C1067.26 453.255 1065.93 451.929 1064.51 450.653C1063.08 449.376 1061.71 448.1 1060.28 446.872C1058.86 445.645 1057.53 444.319 1056.1 443.092C1054.68 441.865 1053.3 440.539 1051.88 439.263C1050.45 437.986 1049.12 436.759 1047.7 435.482C1046.27 434.206 1044.9 432.929 1043.47 431.702C1042.04 430.474 1040.72 429.149 1039.29 427.921C1037.87 426.694 1036.49 425.368 1035.06 424.092C1033.64 422.815 1032.31 421.539 1030.89 420.311C1029.46 419.084 1028.08 417.758 1026.66 416.531C1025.23 415.304 1023.91 413.978 1022.48 412.701C1021.05 411.425 1019.68 410.198 1018.25 408.921C1016.83 407.645 1015.5 406.368 1014.07 405.141C1012.65 403.913 1011.27 402.588 1009.85 401.311C1003.6 395.132 996.536 389.831 988.857 385.551C973.866 377.465 956.969 373.564 939.946 374.259L938.668 373.13C937.242 371.903 936.013 370.479 934.44 369.349C932.867 368.22 931.786 366.698 930.262 365.52C928.738 364.342 927.607 362.869 926.034 361.74C924.461 360.61 923.724 359.383 922.397 358.401C948.644 366.033 976.042 368.942 1003.31 366.993C1029.71 365.029 1050.45 358.499 1066.72 347.06C1088.84 331.447 1101.13 305.918 1097.84 282.106C1095.14 265.274 1086.18 250.076 1072.77 239.54C1071.44 238.263 1070.06 236.987 1068.59 235.759C1067.11 234.532 1065.84 233.157 1064.36 231.979C1062.89 230.8 1061.66 229.377 1060.18 228.149C1058.71 226.922 1057.48 225.596 1056.01 224.369C1054.53 223.142 1053.25 221.816 1051.78 220.588C1050.3 219.361 1049.02 217.987 1047.55 216.808C1046.08 215.63 1044.85 214.206 1043.37 212.979C1041.9 211.751 1040.67 210.426 1039.19 209.198C1037.72 207.971 1036.44 206.596 1034.97 205.418C1033.49 204.24 1032.26 202.816 1030.74 201.588C1029.21 200.361 1028.03 199.035 1026.56 197.808C1025.09 196.581 1023.86 195.206 1022.38 194.028C1020.91 192.849 1019.63 191.425 1018.15 190.247C1016.68 189.069 1015.45 187.645 1013.98 186.418C1012.5 185.19 1011.22 183.865 1009.75 182.637C1008.27 181.41 1007.04 180.035 1005.57 178.857C1004.1 177.678 1002.82 176.255 1001.34 175.027C999.868 173.8 998.639 172.474 997.164 171.247C995.69 170.02 994.412 168.645 992.937 167.466C991.462 166.288 990.233 164.865 988.759 163.637C983.367 158.534 977.317 154.175 970.767 150.676C952.867 141.915 933.135 137.54 913.205 137.911C877.364 137.504 841.849 144.752 809.041 159.169L806.878 157.353C783.94 137.041 758.56 119.658 731.324 105.606C702.1 90.6979 669.399 83.9149 636.648 85.9671C622.92 87.1917 609.46 90.503 596.733 95.7863C595.553 94.6571 594.324 93.626 593.095 92.5949C591.866 91.5639 590.343 90.0421 588.917 88.8147C587.492 87.5873 586.115 86.2125 584.689 84.9851C583.264 83.7577 581.937 82.4323 580.511 81.2049C579.086 79.9775 577.709 78.6518 576.284 77.4244C574.858 76.197 573.531 74.8713 572.105 73.5948C570.68 72.3183 569.303 71.0418 567.878 69.8144C566.452 68.587 565.125 67.2615 563.7 66.0341C562.274 64.8067 560.898 63.4811 559.472 62.2537C558.047 61.0263 556.719 59.6517 555.294 58.4243C553.868 57.1968 552.492 55.8712 551.066 54.6438C549.641 53.4164 548.314 52.0908 546.888 50.8634C545.462 49.636 544.086 48.3104 542.66 47.0339C541.235 45.7574 539.908 44.4808 538.482 43.2534C537.057 42.026 535.68 40.7005 534.255 39.4731C532.829 38.2457 531.502 36.9201 530.076 35.6436C528.651 34.3671 527.274 33.0907 525.849 31.8633C524.423 30.6359 523.096 29.3102 521.671 28.0828C520.245 26.8554 518.869 25.5298 517.443 24.3024C516.017 23.075 514.69 21.7003 513.265 20.4729C504.593 11.4751 493.55 5.10963 481.411 2.11104C451.917 -5.00789 419.67 9.37721 391.159 42.5662C331.384 112.135 307.593 201.097 289.257 286.966C246.187 314.285 199.714 335.842 151.028 351.086C147.236 352.259 143.97 354.713 141.791 358.027C139.612 361.341 138.654 365.31 139.083 369.251C139.376 371.797 140.246 374.243 141.625 376.404C143.005 378.564 144.859 380.383 147.046 381.722C148.224 383.218 149.655 384.498 151.274 385.502C152.434 386.998 153.848 388.278 155.452 389.283C156.629 390.794 158.059 392.09 159.68 393.112C160.853 394.595 162.265 395.873 163.858 396.893C165.036 398.389 166.467 399.668 168.085 400.673C169.244 402.183 170.658 403.479 172.264 404.502C173.455 405.986 174.884 407.264 176.491 408.283C177.651 409.778 179.065 411.058 180.67 412.063C181.848 413.559 183.278 414.839 184.897 415.844C186.056 417.354 187.47 418.65 189.076 419.673C190.267 421.157 191.695 422.434 193.303 423.453C194.463 424.949 195.877 426.229 197.481 427.234C198.658 428.745 200.088 430.041 201.709 431.063C202.882 432.546 204.294 433.824 205.887 434.844C207.065 436.34 208.496 437.62 210.115 438.624C211.286 440.122 212.698 441.416 214.293 442.454C215.478 443.925 216.888 445.201 218.471 446.234C219.661 447.719 221.09 448.997 222.699 450.015C223.858 451.51 225.273 452.79 226.877 453.795C228.066 455.295 229.494 456.589 231.105 457.624C232.507 459.466 234.274 461.001 236.295 462.133C238.316 463.264 240.548 463.969 242.853 464.203C244.131 464.203 245.507 464.203 246.786 464.203C245.753 467.345 244.819 470.536 243.738 473.679C180.189 486 119.916 511.434 66.7733 548.354C16.191 584.243 -7.4043 629.215 3.65599 668.639C7.82806 682.998 16.1981 695.786 27.6936 705.363C29.0208 706.689 30.4465 707.916 31.9212 709.144C33.3959 710.371 34.674 711.697 36.0995 712.973C37.5251 714.25 38.8522 715.526 40.3269 716.753C41.8016 717.981 43.0797 719.306 44.5053 720.534C45.9308 721.761 47.258 723.087 48.7327 724.364C50.2074 725.64 51.4855 726.916 52.9111 728.144C54.3366 729.371 55.6639 730.697 57.0894 731.924C58.515 733.152 59.8914 734.477 61.317 735.705C62.7425 736.932 64.0697 738.307 65.4952 739.534C66.9207 740.761 68.2972 742.087 69.7228 743.315C71.1483 744.542 72.4756 745.867 73.9011 747.095C75.3267 748.322 76.703 749.648 78.1285 750.924C79.5541 752.201 80.8814 753.477 82.3561 754.705C83.8308 755.932 85.1088 757.258 86.5343 758.485C87.9599 759.712 89.2871 761.038 90.7127 762.315L94.9402 766.095C96.2675 767.421 97.6929 768.648 99.1184 769.875C100.544 771.103 101.92 772.428 103.346 773.656C104.772 774.883 106.099 776.258 107.524 777.485C108.95 778.713 110.326 780.038 111.752 781.266C132.594 801.641 164.301 811.509 191.877 811.902H194.139C282.621 811.902 351.047 743.167 382.803 683.81C393.269 664.001 401.986 643.319 408.856 621.998C425.465 621.157 442.111 621.321 458.701 622.489C531.649 627.399 603.025 649.443 672.09 670.603L684.036 674.236C761.654 697.999 837.798 719.356 915.712 719.945C966.638 720.239 1009.85 711.255 1044.94 692.893C1088.79 670.063 1120.35 631.179 1129.4 588.907C1133.75 568.815 1132.76 547.935 1126.54 528.341C1120.31 508.748 1109.06 491.121 1093.91 477.214Z"
  )
  pathElement.setAttribute("fill", "#19154A")

  // Append path to SVG
  svgElement.appendChild(pathElement)

  // Append SVG to overlay
  blockOverlay.appendChild(svgElement)

  // Set renderer style
  renderer.style.position = "relative"
  renderer.style.overflow = "hidden"

  // Append overlay to renderer
  renderer.appendChild(blockOverlay)
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