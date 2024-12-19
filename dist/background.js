/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Tab updated:", tabId, changeInfo, tab)
})

console.log("heheheheeeheeh")
/******/ })()
;
//# sourceMappingURL=background.js.map