export function applyColorChanger(colorScheme) {
  // Define more comprehensive color schemes
  const schemes = {
    emeraldviolet: {
      backgroundColor: "#181818",
      textColor: "#ffffff",
      secondaryBackgroundColor: "#212121",
      borderColor: "#3f3f3f",
      chipBackgroundColor: "#373737",
      chipTextColor: "#ffffff",
    },
    ladypink: {
      backgroundColor: "#ffffff",
      textColor: "#030303",
      secondaryBackgroundColor: "#f9f9f9",
      borderColor: "#d3d3d3",
      chipBackgroundColor: "#f2f2f2",
      chipTextColor: "#030303",
    },
    darkbrown: {
      backgroundColor: "#f0e68c",
      textColor: "#00008b",
      secondaryBackgroundColor: "#fafad2",
      borderColor: "#e6e6fa",
      chipBackgroundColor: "#fff0f5",
      chipTextColor: "#00008b",
    },
    pinkbrown: {
      backgroundColor: "#0f1020", // Deep midnight blue
      textColor: "#e0e0ff", // Soft light blue text
      secondaryBackgroundColor: "#1a1a30", // Slightly lighter midnight blue
      borderColor: "#2a2a50", // Dark navy border
      chipBackgroundColor: "#2a2a50", // Navy chip background
      chipTextColor: "#b0b0ff", // Soft periwinkle text
    },

    // Custom2: Soft Pastel
    skinbrown: {
      backgroundColor: "#f5f0ff", // Very light lavender
      textColor: "#333366", // Deep indigo
      secondaryBackgroundColor: "#e6e0f5", // Soft pastel lavender
      borderColor: "#d0c0e0", // Soft pastel purple border
      chipBackgroundColor: "#d0c0e0", // Pastel purple chips
      chipTextColor: "#333366", // Deep indigo text
    },

    // Custom3: Cyberpunk Neon
    beautifulorange: {
      backgroundColor: "#0a0a1a", // Ultra-dark navy
      textColor: "#00ffff", // Bright cyan
      secondaryBackgroundColor: "#111128", // Slightly lighter dark navy
      borderColor: "#0f3f5f", // Deep teal border
      chipBackgroundColor: "#1f2f4f", // Dark teal chips
      chipTextColor: "#00ffff", // Bright cyan text
    },
  }

  const selectedScheme = schemes[colorScheme] || schemes["light"]

  // Create a style element to apply global styles
  const styleElement = document.createElement("style")
  styleElement.id = "youtube-color-scheme"
  styleElement.textContent = `
    /* Global body and main background */
    html, body, #page-manager {
      background-color: ${selectedScheme.backgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }

    /* Sidebar and main content area */
    #contents, #secondary, #guide-content {
      background-color: ${selectedScheme.backgroundColor} !important;
    }

    /* Video thumbnails and titles */
    ytd-thumbnail, 
    #video-title, 
    .title, 
    yt-formatted-string,
    a.yt-simple-endpoint {
      color: ${selectedScheme.textColor} !important;
    }

    /* Chips and filters */
    ytd-chip-cloud-chip-renderer {
      background-color: ${selectedScheme.chipBackgroundColor} !important;
      color: ${selectedScheme.chipTextColor} !important;
    }

    /* Headers and top bars */
    #masthead-container, 
    #header, 
    #container.ytd-masthead {
      background-color: ${selectedScheme.secondaryBackgroundColor} !important;
      border-bottom-color: ${selectedScheme.borderColor} !important;
    }

    /* Hover and focus states */
    a:hover, button:hover, 
    ytd-chip-cloud-chip-renderer:hover {
      background-color: ${selectedScheme.chipBackgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }

    /* Comments and additional areas */
    #comments, 
    #comment-section, 
    ytd-comments {
      background-color: ${selectedScheme.backgroundColor} !important;
      color: ${selectedScheme.textColor} !important;
    }
  `

  // Remove any existing color scheme style
  const existingStyle = document.getElementById("youtube-color-scheme")
  if (existingStyle) {
    existingStyle.remove()
  }

  // Append the new style
  document.head.appendChild(styleElement)

  console.log(`Applied ${colorScheme} color scheme to YouTube.`)
}
