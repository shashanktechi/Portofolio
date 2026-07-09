import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java (Intermediate)", "Python (Basic)", "C", "JavaScript"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, IAM)", "Docker", "GitHub Actions", "CI/CD"]
  },
  {
    title: "Tools & Databases",
    skills: ["Git", "GitHub", "Linux (CLI)", "VS Code", "SQL (MySQL)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-surface/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-primary"></span>
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface/50 p-6 rounded-2xl border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-background rounded-lg text-sm text-textMuted border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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
