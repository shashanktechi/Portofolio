import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="w-full lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary"></span>
            About Me
          </h2>
          
          <div className="bg-surface/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <p className="text-textMuted leading-relaxed text-lg mb-6">
              I am a final-year B.Tech CSE student at Madanapalle Institute of Technology & Science with hands-on experience across three internships spanning AWS/DevOps, full-stack development, and cybersecurity.
            </p>
            <p className="text-textMuted leading-relaxed text-lg mb-6">
              Skilled at deploying cloud infrastructure, building CI/CD pipelines, and developing AI-integrated and responsive web applications. Known for strong time management, patience, and the ability to stay composed and deliver under pressure.
            </p>
            <p className="text-textMuted leading-relaxed text-lg">
              A quick learner with solid analytical thinking and a collaborative, detail-oriented approach, seeking a full-time role in Cloud, DevOps, or Software Engineering.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/50 p-4 rounded-xl">
                <p className="text-sm text-primary mb-1">Education</p>
                <p className="font-medium">B.Tech CSE, MITS</p>
                <p className="text-sm text-textMuted">2023 - Present | CGPA: 6.95</p>
              </div>
              <div className="bg-background/50 p-4 rounded-xl">
                <p className="text-sm text-primary mb-1">Location</p>
                <p className="font-medium">Madanapalle, AP</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
