import { LoadingOverlay } from "@mantine/core";
import LandingPage from "./pages/LandingPage";
import CommandPalette from "./components/command-palette/CommandPalette";

function App() {
  return (
    <div className="app">
      <LoadingOverlay visible={false} />
      <CommandPalette />
      <LandingPage />
    </div>
  );
}

export default App;
