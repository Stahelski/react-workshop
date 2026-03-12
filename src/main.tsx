import "./assets/styles/index.css";
import "./assets/styles/week2components.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Home";
import { Header } from "./components/week2/features/Header";
import { Footer } from "./components/week2/features/Footer";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
);
