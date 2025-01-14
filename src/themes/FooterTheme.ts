import { createTheme } from "@mui/material/styles";

export const footerTheme = createTheme({
  palette: {
    background: {
      default: "#111",
    },
    text: {
      primary: "#d9d7ce",
      secondary: "#aaa", // For copyright text
    },
  },
  typography: {
    h4: {
      fontSize: "10rem",
      fontWeight: "bold",
      fontFamily: "inherit",
      color: "#d9d7ce"
    },
    body2: {
      lineHeight: 1.8,
    },
  },
});