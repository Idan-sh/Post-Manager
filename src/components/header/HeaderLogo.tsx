import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderLogoProps {
  display?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
  flexGrow?: 1 | 0;
}
function HeaderLogo({ display, flexGrow }: HeaderLogoProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: display, gap: "0.6rem", alignItems: "center", flexGrow: flexGrow }}>
      <Typography
        variant="h4"
        noWrap
        component="a"
        onClick={() => navigate("/")}
        sx={{
          mr: 2,
          display: display,
          fontSize: "2.4rem",
          fontWeight: 900,
          letterSpacing: "-0.08rem",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover ": {
            opacity: 0.8,
            transition: "opacity 0.2s"
          }
        }}
      >
        PostManager
      </Typography>
    </Box>
  );
}

export default HeaderLogo;
