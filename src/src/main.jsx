import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

/*
  Aurelia
  Main React entry point

  This file:
  1. Imports React StrictMode
  2. Imports createRoot
  3. Loads the main App component
  4. Loads the Aurelia CSS
  5. Renders the application inside #root
*/

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Aurelia could not start because the #root element was not found."
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
