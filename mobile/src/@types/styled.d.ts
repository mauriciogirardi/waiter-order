import "styled-components";
import themes from "../styles/theme";

export type Themes = {
  COLORS: typeof themes.COLORS;
  FONT_FAMILY: typeof themes.FONT_FAMILY;
  FONT_SIZE: typeof themes.FONT_SIZE;
};

declare module "styled-components" {
  export interface DefaultTheme extends Themes {}
}
