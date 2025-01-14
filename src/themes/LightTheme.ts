import { createTheme } from "@mui/material/styles";

// Define your custom theme
export const lightTheme = createTheme({
  palette: {
    primary: {
        main: "#ff0084",
        contrastText: "#d9d7ce"
    },
    secondary: {
        main: "#0967e7",
        contrastText: "#232323"
    },
    info: {
        main: "#232323"
    }, 
    text: {
      primary: "#232323",
      secondary: "#d9d7ce"
    },
    background: {
        default: "#d9d7ce",
        paper: "#232323"
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
    },
  },
  typography: {
    fontFamily:  "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    allVariants: {
        color: "#232323"
    },
    button: {
      textTransform: "uppercase", 
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
          "@font-face": [
          {
              fontFamily: "Work Sans",
              src: `url("/fonts/WorkSans-VariableFont_wght.ttf") format("truetype")`,
              fontStyle: "normal",
              fontDisplay: "swap",
          },
          ],
          "*": {
              transition: "background-color 0.5s, width 0.5s ease, height 0.5s ease, padding 0.5s ease, top 0.5s ease, left 0.5s ease, bottom 0.5s ease, right 0.5s ease, font-size 0.2s ease;"                },
      },
    },
  },
});