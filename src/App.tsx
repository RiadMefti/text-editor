import { LoadingOverlay } from "@mantine/core";
import LandingPage from "./pages/LandingPage";
import CommandPalette from "./components/command-palette/CommandPalette";
import NotificationList from "./components/notification/NotificationList";

function App() {
  return (
    <div className="app">
      <NotificationList />
      <LoadingOverlay visible={false} />
      <CommandPalette />
      <LandingPage />
    </div>
  );
}

export default App;
