import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { MantineProvider } from "@mantine/core";

import TxtFileEdit from "./pages/TxtFileEdit";
import PageWithPannel from "./components/PageWithPannel";
import ShortcutManager from "./service/ShortcutManager";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CommandPalette from "./components/command-palette/CommandPalette";
import NotificationList from "./components/notification/NotificationList";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Router>
        <ShortcutManager>
        <CommandPalette />
        <NotificationList />
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/txtFile"
              element={<PageWithPannel page={<TxtFileEdit />} />}
            />
          </Routes>
        </ShortcutManager>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
