import { ConfigProvider } from "antd";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "src/styles/global.css";

const Index = lazy(() => import("src/routes/index"));
const Tour = lazy(() => import("src/routes/tour"));
const Scroll = lazy(() => import("src/routes/scroll"));

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/tour", element: <Tour /> },
  { path: "/scroll", element: <Scroll /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  </React.StrictMode>
);
