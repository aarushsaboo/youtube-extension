// Utility functions
export function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

export function injectStyles(css) {
  const style = document.createElement("style")
  style.textContent = css
  document.head.appendChild(style)
}
