import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-textMuted border-t border-white/5 mt-12 bg-surface/30">
        <p>\u00a9 {new Date().getFullYear()} Kisannagari Shashank. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
