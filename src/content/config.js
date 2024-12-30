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
    containers: {
      videos: "ytd-rich-item-renderer",
      shorts: "ytm-shorts-lockup-view-model-v2"
    },
    elements: {
      videoTitle: "#video-title",
      shortsTitle: "h3[aria-label]",
      channelName: "#text > a",
      subscribers: {
        video: "#metadata-line > span:nth-child(3)",
        shorts: "div.shortsLockupViewModelHostMetadataSubhead.shortsLockupViewModelHostOutsideMetadataSubhead > span"
      }
    }
  }
}

// Structure for shorts
// ytd-rich-item-renderer (#content or .ytd-rich-item-renderer) (ytm-shorts-lockup-view-model-v2) (ytm-shorts-lockup-view-model) (.shortsLockupViewModelHostOutsideMetadata shortsLockupViewModelHostMetadataRounded image-overlay-text) (h3 with an aria-label)
