import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./constants/Header.jsx";
import Projects from "./constants/projects.jsx";
import Contact from "./constants/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <Projects />
    <Contact />
  </StrictMode>
);
