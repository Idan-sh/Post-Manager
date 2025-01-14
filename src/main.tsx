import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import { AppThemeProvider } from "./context/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
