import "./assets/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/Home";
import { Header } from "./components/week2/Header";
import { Footer } from "./components/week2/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
);
