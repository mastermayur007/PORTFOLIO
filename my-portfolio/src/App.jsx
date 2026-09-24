import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
  <Hero />

  <Reveal>
    <About />
  </Reveal>

  <Reveal>
    <Skills />
  </Reveal>

  <Reveal>
    <Experience />
  </Reveal>

  <Reveal>
    <Projects />
  </Reveal>

  <Reveal>
    <Photography />
  </Reveal>

  <Reveal>
    <Contact />
  </Reveal>
</main>
      {/* Footer */}
      <Footer/>
      <ScrollToTop/>

    </div>
  );
}

export default App;