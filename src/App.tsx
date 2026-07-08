import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import RightSidebar from "./components/RightSidebar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import WhatWeDoSection from "./components/sections/WhatWeDoSection";
import WhatWeBuildSection from "./components/sections/WhatWeBuildSection";
import WorkforceSection from "./components/sections/WorkforceSection";
import SelectedWorkSection from "./components/sections/SelectedWorkSection";
import StatementSection from "./components/sections/StatementSection";
import HowWeWorkSection from "./components/sections/HowWeWorkSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <RightSidebar />
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhatWeBuildSection />
        <WorkforceSection />
        <HowWeWorkSection />
        <SelectedWorkSection />
        <StatementSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
