import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import ApplicantsDashboard from "./components/ApplicantsDashboard.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> }, // Home page
  { path: "/dashboard/:title", element: <ApplicantsDashboard /> }, // Dashboard page
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
