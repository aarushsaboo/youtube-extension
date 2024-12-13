/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/content/filters.js":
/*!********************************!*\
  !*** ./src/content/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterContent: () => (/* binding */ filterContent),
/* harmony export */   shouldApplyFiltering: () => (/* binding */ shouldApplyFiltering)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/content/config.js");


function shouldApplyFiltering(path) {
  return _config_js__WEBPACK_IMPORTED_MODULE_0__.CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}

function isBlocked(title, blockedKeywords) {
  return blockedKeywords.some((keyword) =>
    title.includes(keyword.toLowerCase())
  )
}

function hideAndRemoveElement(element) {
  const renderer = element.closest(
    "ytd-rich-item-renderer, ytd-video-renderer, ytd-reel-item-renderer"
  )

  if (renderer) {
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
}

function filterContent(blockedKeywords) {
  if (!blockedKeywords || blockedKeywords.length === 0) return

  _config_js__WEBPACK_IMPORTED_MODULE_0__.CONFIG.SELECTORS.videosAndShorts.forEach((selector) => {
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
        hideAndRemoveElement(element)
      }
    })
  })
}




/***/ }),

/***/ "./src/content/pageObserver.js":
/*!*************************************!*\
  !*** ./src/content/pageObserver.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observePageChanges: () => (/* binding */ observePageChanges)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/content/utils.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.js */ "./src/content/filters.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/content/storage.js");




function observePageChanges() {
  const observer = new MutationObserver(
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
      chrome.storage.sync.get(["blockedKeywords"], function (filters) {
        if (!filters.blockedKeywords || filters.blockedKeywords.length === 0)
          return

        ;(0,_filters_js__WEBPACK_IMPORTED_MODULE_1__.filterContent)(filters.blockedKeywords)
      })
    }, 300)
  )

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}


/***/ }),

/***/ "./src/content/storage.js":
/*!********************************!*\
  !*** ./src/content/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),
/* harmony export */   saveToStorage: () => (/* binding */ saveToStorage)
/* harmony export */ });
function getFromStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(keys, (result) => resolve(result))
  })
}

function saveToStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.sync.set(data, () => resolve())
  })
}


/***/ }),

/***/ "./src/content/utils.js":
/*!******************************!*\
  !*** ./src/content/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
// Utility functions
function debounce(func, delay) {
  let timeoutId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
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
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/content/config.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/content/storage.js");
/* harmony import */ var _pageObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageObserver.js */ "./src/content/pageObserver.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.js */ "./src/content/filters.js");






async function init() {
  // Check if filtering should occur
  if (!(0,_filters_js__WEBPACK_IMPORTED_MODULE_3__.shouldApplyFiltering)(window.location.pathname)) return

  // Initial content filtering
  let blockedKeywords = []
  if (typeof chrome !== "undefined" && chrome.storage) {
    try {
      const storageData = await (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getFromStorage)(["blockedKeywords"])
      blockedKeywords = storageData.blockedKeywords || []
    } catch (err) {
      console.error("Chrome not defined at this point", err)
    }
  }
  (0,_filters_js__WEBPACK_IMPORTED_MODULE_3__.filterContent)(blockedKeywords)

  // Start observing page changes
  ;(0,_pageObserver_js__WEBPACK_IMPORTED_MODULE_2__.observePageChanges)()
}

// Initialize on page load
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