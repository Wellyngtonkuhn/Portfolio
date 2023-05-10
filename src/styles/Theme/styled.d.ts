import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background_primary: string;
    background_secondary: string;
    color: {
      description: string;
      title: string;
    };
    buttons: {
      background: string,
      background_hover: string,
      color: string,
      color_hover: string
    }
  }
}
