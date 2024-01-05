import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TxtFileEdit from "./pages/TxtFileEdit";
import PageWithPannel from "./components/PageWithPannel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/txtFile",
    element: <PageWithPannel page={<TxtFileEdit />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
