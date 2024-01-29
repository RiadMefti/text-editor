import { LoadingOverlay } from "@mantine/core";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="app">
      <LoadingOverlay visible={false} />
      <LandingPage />
    </div>
  );
}

export default App;
