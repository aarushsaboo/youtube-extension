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

export { convertToRGBA }
