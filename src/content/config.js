export const CONFIG = {
  ALLOWED_PAGES: ["/", "/feed/subscriptions", "/feed/trending"],
  SELECTORS: {
    videosAndShorts: "ytd-rich-item-renderer h3",
  },
}


// Structure for shorts
// ytd-rich-item-renderer (#content or .ytd-rich-item-renderer) (ytm-shorts-lockup-view-model-v2) (ytm-shorts-lockup-view-model) (.shortsLockupViewModelHostOutsideMetadata shortsLockupViewModelHostMetadataRounded image-overlay-text) (h3 with an aria-label)