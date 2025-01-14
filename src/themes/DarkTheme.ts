import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#ff0084",
            contrastText: "#232323"
        },
        secondary: {
            main: "#0967e7",
            contrastText: "#d9d7ce"
        },
        info: {
            main: "#d9d7ce",
            contrastText: "#232323"
        }, 
        text: {
            primary: "#d9d7ce",
            secondary: "#232323"
        },
        background: {
            default: "#232323",
            paper: "#d9d7ce"
        },
        action: {
            hover: "rgba(255, 255, 255, 0.08)",
    },
    },
    typography: {
        fontFamily:  "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        allVariants: {
            color: "#d9d7ce"
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
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
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