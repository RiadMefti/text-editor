import { LoadingOverlay } from "@mantine/core";
import LandingPage from "./pages/LandingPage";
import { useLoadingStore } from "./stores/LoadingStore";
function App() {
  const { loading } = useLoadingStore();
  return (
    <div className="app">
      <LoadingOverlay visible={loading} />
      <LandingPage />
    </div>
  );
}

export default App;
