import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: { main: "#FF9F80" },
    secondary: { main: "#80E0FF" },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".MuiContainer-root": {
          paddingLeft: "24px !important",
          paddingRight: "24px !important",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
