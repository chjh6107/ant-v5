import { CSSReset } from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "src/styles/global.css";

const Index = lazy(() => import("src/routes/index"));
const Test = lazy(() => import("src/routes/test"));

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/test", element: <Test /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <CSSReset />
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  </React.StrictMode>
);
