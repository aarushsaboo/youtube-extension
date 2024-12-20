function detectYouTubeTheme() {
  // Check if the html element has the dark theme attribute
  const isDarkTheme = document.documentElement.hasAttribute("dark")

  // Check for specific YouTube dark theme classes
  const hasYtDarkClass =
    document.documentElement.getAttribute("dark") === "true"

  // Check for dark theme background color
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const isDarkBackground =
    backgroundColor === "rgb(15, 15, 15)" || backgroundColor === "#0f0f0f"

  // Return "dark" if any dark theme condition is met, otherwise "light"
  return isDarkTheme || hasYtDarkClass || isDarkBackground ? "dark" : "light"
}

export {detectYouTubeTheme}