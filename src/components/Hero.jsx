import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-widest mb-4"
        >
          HELLO, I AM
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Kisannagari Shashank
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl text-textMuted font-light mb-8"
        >
          Cloud & DevOps Enthusiast | Full-Stack Developer
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a href="https://github.com/shashanktechi" target="_blank" rel="noreferrer" className="text-text hover:text-primary transition-colors p-3 bg-surface rounded-full hover:-translate-y-1 transform duration-300 shadow-lg">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/shashank-kisannagari" target="_blank" rel="noreferrer" className="text-text hover:text-primary transition-colors p-3 bg-surface rounded-full hover:-translate-y-1 transform duration-300 shadow-lg">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:shashankdany8712@gmail.com" className="text-text hover:text-primary transition-colors p-3 bg-surface rounded-full hover:-translate-y-1 transform duration-300 shadow-lg">
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.a 
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          View My Work
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}
