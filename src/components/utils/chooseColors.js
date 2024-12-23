function chooseColors(scheme = "gloriousblue", theme) {
  const colorSchemes = {
    emeraldviolet: {
      dark: {
        primary: "#3f384c",
        secondary: "#d4bbff",
        tertiary: "#292335",
        quaternary: "#cdc2db",
      },
      light: {
        primary: "#f7edff",
        secondary: "#6a5294",
        tertiary: "#ede7f2",
        quaternary: "#4b4358",
      },
    },
    ladypink: {
      dark: {
        primary: "#493545",
        secondary: "#f6b0ea",
        tertiary: "#32202f",
        quaternary: "#dabfd2",
      },
      light: {
        primary: "#ffebf8",
        secondary: "#834a7d",
        tertiary: "#f0e6f0",
        quaternary: "#554151",
      },
    },
    darkbrown: {
      dark: {
        primary: "#46383a",
        secondary: "#ddbfc3",
        tertiary: "#2f2325",
        quaternary: "#d6c2c4",
      },
      light: {
        primary: "#ffecee",
        secondary: "#70585c",
        tertiary: "#eee8ec",
        quaternary: "#524345",
      },
    },
    pinkbrown: {
      dark: {
        primary: "#4f3439",
        secondary: "#ffb1c0",
        tertiary: "#371f24",
        quaternary: "#e4bdc3",
      },
      light: {
        primary: "#ffecee",
        secondary: "#924759",
        tertiary: "#f2e6eb",
        quaternary: "#5b3f44",
      },
    },
    skinbrown: {
      dark: {
        primary: "#463931",
        secondary: "#dec1b1",
        tertiary: "#2f231c",
        quaternary: "#d7c2b8",
      },
      light: {
        primary: "#ffede5",
        secondary: "#705a4d",
        tertiary: "#eee8ea",
        quaternary: "#52443c",
      },
    },
    beautifulorange: {
      dark: {
        primary: "#4f3625",
        secondary: "#ffb787",
        tertiary: "#362112",
        quaternary: "#e5bfa8",
      },
      light: {
        primary: "#ffede4",
        secondary: "#8e4e1c",
        tertiary: "#f2e7e4",
        quaternary: "#5b4130",
      },
    },
    yellowochre: {
      dark: {
        primary: "#423b20",
        secondary: "#dec663",
        tertiary: "#2c250c",
        quaternary: "#d2c6a1",
      },
      light: {
        primary: "#fff0c1",
        secondary: "#6f5d00",
        tertiary: "#eee8e1",
        quaternary: "#4e472a",
      },
    },
    guttergreen: {
      dark: {
        primary: "#373d35",
        secondary: "#becab8",
        tertiary: "#212720",
        quaternary: "#c2c9bd",
      },
      light: {
        primary: "#e8f4e1",
        secondary: "#566253",
        tertiary: "#eaeae5",
        quaternary: "#424940",
      },
    },
    olivegreen: {
      dark: {
        primary: "#313f2c",
        secondary: "#a0d490",
        tertiary: "#1c2918",
        quaternary: "#bbcbb2",
      },
      light: {
        primary: "#cbffb8",
        secondary: "#3b6930",
        tertiary: "#e4ecdc",
        quaternary: "#3c4b37",
      },
    },
    brightgreen: {
      dark: {
        primary: "#27403c",
        secondary: "#74d7cb",
        tertiary: "#102a27",
        quaternary: "#b1ccc7",
      },
      light: {
        primary: "#b3fff4",
        secondary: "#006a62",
        tertiary: "#daede9",
        quaternary: "#324b48",
      },
    },
    dirtygreen: {
      dark: {
        primary: "#343d3f",
        secondary: "#b8cacd",
        tertiary: "#1e2729",
        quaternary: "#bfc8ca",
      },
      light: {
        primary: "#e2f4f7",
        secondary: "#516164",
        tertiary: "#e9eaea",
        quaternary: "#3f484a",
      },
    },
    blackngrey: {
      dark: {
        primary: "#383b43",
        secondary: "#bac7e3",
        tertiary: "#23262d",
        quaternary: "#c4c6d0",
      },
      light: {
        primary: "#ecf0ff",
        secondary: "#525f77",
        tertiary: "#eae9ed",
        quaternary: "#44474e",
      },
    },
    blacknwhite: {
      dark: {
        primary: "#3c3c3c",
        secondary: "#a8c7fa",
        tertiary: "#282828",
        quaternary: "#c7c7c7",
      },
      light: {
        primary: "#f2f2f2",
        secondary: "#3c3c3c",
        tertiary: "#efeded",
        quaternary: "#474747",
      },
    },
    gloriousblue: {
      dark: {
        primary: "#2b437c",
        secondary: "#b0c4fc",
        tertiary: "#1f2535",
        quaternary: "#707689",
      },
      light: {
        primary: "#ecf0ff",
        secondary: "#3a5e98",
        tertiary: "#e6e9f3",
        quaternary: "#3e4759",
      },
    },
  }

  // Get the color scheme or default to gloriousblue if not found
  const selectedScheme = colorSchemes[scheme] || colorSchemes.gloriousblue

  // Get the theme colors or default to dark if not found
  const themeColors = selectedScheme[theme] || selectedScheme.dark

  return themeColors
}

export {chooseColors}