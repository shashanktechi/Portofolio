import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AWS, DevOps & GitHub Intern',
    company: 'APSSDC',
    date: 'May 2026 \u2013 Jul 2026',
    location: 'Tirupati',
    points: [
      'Deployed AWS resources (EC2, S3, IAM) and implemented CI/CD pipelines using GitHub Actions.',
      'Containerised a sample app with Docker; managed team repositories using Git branching strategies.'
    ]
  },
  {
    title: 'Full-Stack Development Intern',
    company: 'Novitech Solutions',
    date: 'Mar 2026 \u2013 Apr 2026',
    location: 'Coimbatore',
    points: [
      'Built 3 responsive web apps (portfolio, login system, e-commerce) using HTML, CSS, and JavaScript.',
      'Integrated front-end UI with basic back-end authentication logic and delivered demos on schedule.'
    ]
  },
  {
    title: 'Cybersecurity Intern',
    company: 'Edutantar',
    date: 'Jun 2025 \u2013 Aug 2025',
    location: 'Bangalore',
    points: [
      'Learned fundamentals of ethical hacking including types (white-hat, black-hat, grey-hat) and the five phases.',
      'Studied the core pillars of cybersecurity \u2014 Confidentiality, Integrity, and Availability (CIA Triad).',
      'Gained foundational knowledge of cryptography: symmetric vs asymmetric encryption, hashing, and RSA.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-primary"></span>
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-6 bg-surface/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <div className="text-primary font-medium mb-2">{exp.date}</div>
                  <div className="text-sm text-textMuted flex items-center gap-1 mb-1">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="text-textMuted font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-textMuted text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">\u2022</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
