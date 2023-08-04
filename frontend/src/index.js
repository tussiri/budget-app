import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { GlobalProvider } from "./contexts/globalContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
