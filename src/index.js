import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
