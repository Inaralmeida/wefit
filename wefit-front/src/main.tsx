import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { CartProvider } from "./core/Context/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>
);
