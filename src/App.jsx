import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Testimonials from "./components/Testimonials";
import WhatICanDo from "./components/WhatICanDo";

function App() {
  return (
    <div className="site-shell min-h-screen selection:bg-lime-200">
      <Navbar />
      <main>
        <Hero />
        <WhatICanDo />
        <Projects />
        <Testimonials />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
