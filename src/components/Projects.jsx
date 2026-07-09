import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Smart Emotion-Based Learning System',
    date: 'Apr 2026 \u2013 Jun 2026',
    description: 'AI web app that detects user emotions via webcam and adapts learning content in real time to boost engagement.',
    tech: ['Python', 'JavaScript', 'HTML/CSS', 'OpenCV'],
    github: 'https://github.com/shashanktechi'
  },
  {
    title: 'Node.js App Deployment on EC2 with GitHub Actions',
    description: 'Deployed a Node.js REST API on AWS EC2 with automated CI/CD pipeline using GitHub Actions for push-to-deploy workflow.',
    tech: ['Node.js', 'AWS EC2', 'GitHub Actions', 'PM2', 'Linux'],
    github: 'https://github.com/shashanktechi'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Responsive portfolio site deployed on GitHub Pages with About, Skills, Projects, and Contact sections.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/shashanktechi'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="w-full lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-primary"></span>
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface/50 rounded-2xl border border-white/5 p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <FaGithub size={24} />
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-textMuted text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
