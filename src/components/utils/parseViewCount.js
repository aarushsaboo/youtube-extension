export function parseViewCount(viewText) {
  if (!viewText) return 0

  // Extract the number and unit from the view count text
  const match = viewText.match(/^([\d.]+)([KMB]?)/)
  if (!match) return 0

  const [, number, unit] = match
  const numericValue = parseFloat(number)

  // Convert based on unit
  switch (unit.toUpperCase()) {
    case "K":
      return numericValue * 1000
    case "M":
      return numericValue * 1000000
    case "B":
      return numericValue * 1000000000
    default:
      return numericValue
  }
}
