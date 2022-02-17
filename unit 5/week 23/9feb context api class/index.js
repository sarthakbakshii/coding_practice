import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContextProvider";
import { ThemeContextProvider } from "./context/ThemeContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
