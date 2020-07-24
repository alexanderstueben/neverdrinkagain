import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { ThemeList } from "../../types/theme.list";

export const AppTheme = {
    get: (theme: ThemeList): Theme => {
      let res;
      switch (theme) {
        case "blue-dark":
          res = DarkTheme;
          res.dark = false;
          res.colors.primary = 'cornflowerblue';
          res.colors.background = '#222'
          return res;
        case "blue-light":
          res =  DefaultTheme;
          res.dark = false;
          res.colors.primary = 'cornflowerblue';
          return res;
        case "red-dark":
          res = DarkTheme;
          res.dark = true;
          res.colors.primary = 'crimson';
          res.colors.background = '#222'
          return res;
        case "red-light":
          res = DefaultTheme;
          res.dark = false;
          res.colors.primary = 'crimson';
          return res;
        default:
          return DefaultTheme;
      }
  }
}