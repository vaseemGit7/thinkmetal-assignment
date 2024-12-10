import FeaturesSection from "./components/FeaturesSection.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HighlightsSection from "./components/HighlightsSection.jsx";
import ProgessArchieve from "./components/ProgressArchieve.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <ProgessArchieve />
      </main>
    </>
  );
}

export default App;
