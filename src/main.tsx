import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Tells the fallback in index.html that the app loaded correctly
// (if this flag is missing, it redirects to the compiled version in /docs).
window.__SN_BOOTED__ = true;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
