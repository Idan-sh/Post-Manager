import { createContext, useState, useMemo, useContext, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme } from "../themes/LightTheme";
import { darkTheme } from "../themes/DarkTheme";

// Define the shape of the context value
interface ThemeContextType {
  currentTheme: "light" | "dark";
  toggleTheme: () => void;
}

// Create the context, initializing with `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface AppThemeProviderProps {
  children: ReactNode;
}

// Provider component
export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Memoize the theme for performance
  const theme = useMemo(() => {
    const baseTheme = currentTheme === "light" ? lightTheme : darkTheme;

    return baseTheme;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {children}
        </Box>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing the theme context
export const useAppTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within an AppThemeProvider");
  }

  return context;
};
