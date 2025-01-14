import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import { AppThemeProvider } from "./context/ThemeProvider";
import PostsPage from "./pages/PostsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
