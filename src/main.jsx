import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./constants/header.jsx";
import customCursor from "./components/CustomCursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <customCursor />
    <Header />
    <App />
  </StrictMode>
);
