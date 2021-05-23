import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  spacing: 4,
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: { main: "#FF9F80" },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
