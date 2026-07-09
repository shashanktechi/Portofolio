import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-surface/30 mt-auto">
        <div className="w-full px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            SK
          </div>
          
          <p className="text-textMuted text-sm text-center md:text-left">
            \u00a9 {new Date().getFullYear()} Kisannagari Shashank. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/shashanktechi" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/shashank-kisannagari" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:shashankdany8712@gmail.com" className="text-textMuted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
