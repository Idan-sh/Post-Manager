import { LightMode, DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useAppTheme } from "../../context/ThemeProvider";

function ThemeToggleButton() {
  const { toggleTheme, currentTheme } = useAppTheme();

  return (
    <IconButton sx={{ mr: "0.5rem" }} onClick={toggleTheme}>
      {currentTheme === "dark" ? <LightMode color="info" /> : <DarkMode color="info" />}
    </IconButton>
  );
}

export default ThemeToggleButton;
