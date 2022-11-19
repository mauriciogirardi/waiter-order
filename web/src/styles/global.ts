import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily: "$default",
    background: "$red900",
    color: "$gray100",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-text-size-adjust": "100%",
  },
});
