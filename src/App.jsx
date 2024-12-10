import FeaturesSection from "./components/FeaturesSection.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HighlightsSection from "./components/HighlightsSection.jsx";
import Partners from "./components/Partners.jsx";
import ProgessArchieve from "./components/ProgressArchieve.jsx";
import Testimonial from "./components/Testimonials.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <ProgessArchieve />
        <Testimonial />
        <Partners />
      </main>
    </>
  );
}

export default App;
