/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    if (renderer && animationStyle == "displayNone") {
      console.log("dislplay none style")
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
    else if (renderer && animationStyle == "crossedOut") {
      console.log("Applying crossedOut style.")

      // Create a cross overlay
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

      // Overlay to dim the video
      renderer.style.position = "relative"
      renderer.style.opacity = "0.3"
      renderer.style.filter = "grayscale(100%)"
      renderer.style.transition = "all 0.5s ease"
      renderer.style.pointerEvents = "none"

      // Add cross lines
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


      // setTimeout(() => {
      //   if (renderer.parentNode) renderer.remove();
      // }, 2000);
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





async function init() {
  if (!(0,_components_filtering_shouldApplyFiltering_js__WEBPACK_IMPORTED_MODULE_3__.shouldApplyFiltering)(window.location.pathname)) return

  let blockedKeywords = []
  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await (0,_components_storage_getFromStorage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage)(["blockedKeywords"])
      blockedKeywords = storageData.blockedKeywords || []
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  (0,_components_filtering_filterContent_js__WEBPACK_IMPORTED_MODULE_2__.filterContent)(blockedKeywords)

  ;(0,_observePageChanges_js__WEBPACK_IMPORTED_MODULE_1__.observePageChanges)()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
    console.log("This is filtering YOUTHOOB... ALERTTTTTT!")
} else {
  init()
}

})();

/******/ })()
;
//# sourceMappingURL=content.js.map