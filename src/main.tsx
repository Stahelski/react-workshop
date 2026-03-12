import "./assets/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./pages/Home";
import { Header } from "./components/week2/features/Header";
import { Footer } from "./components/week2/features/Footer";

import Week2Page from "./pages/Week2Page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    {/* <App /> */}
    <Week2Page />
    <Footer />
  </StrictMode>,
);
