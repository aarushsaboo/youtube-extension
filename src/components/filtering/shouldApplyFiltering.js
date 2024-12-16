import { CONFIG } from "../../content/config"

function shouldApplyFiltering(path) {
  return CONFIG.ALLOWED_PAGES.some((allowedPath) =>
    path.startsWith(allowedPath)
  )
}

export { shouldApplyFiltering }
