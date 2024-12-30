export const CONFIG = {
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
      "ytd-rich-item-renderer h3", // video title
      // "ytd-grid-video-renderer h3 a", // leave for now, check gaming 
      "ytm-shorts-lockup-view-model-v2 h3 a", // shorts titles
      // "ytd-grid-movie-renderer h3 span", // leave for now, check movies
    ],
  },
}

// Structure for shorts
// ytd-rich-item-renderer (#content or .ytd-rich-item-renderer) (ytm-shorts-lockup-view-model-v2) (ytm-shorts-lockup-view-model) (.shortsLockupViewModelHostOutsideMetadata shortsLockupViewModelHostMetadataRounded image-overlay-text) (h3 with an aria-label)
