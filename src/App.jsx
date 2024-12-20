import CallToAction from "./components/CallToAction.jsx";
import DemoSection from "./components/DemoSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import Footer from "./components/Footer.jsx";
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
        <DemoSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
