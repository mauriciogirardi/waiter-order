import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray100: "#E1E1E6",
      gray200: "#A9A9B2",
      gray400: "#7C7C8A",
      gray500: "#505059",
      gray600: "#323238",
      gray700: "#29292E",
      gray800: "#202024",
      gray900: "#121214",

      green300: "#00B37E",
      green500: "#00875F",
      green700: "#015F43",
      green900: "#00291D",

      red300: "#b73c27",
      red400: "#bd3038",
      red500: "#811628",
      red900: "#220114",

      yellow500: "#f8b068",

      // #ff7e57
    },
    fonts: {
      default: "Nunito Sans, sans-serif",
      code: "monospace",
    },
  },

  themeMap: {
    ...defaultThemeMap,
  },
});
