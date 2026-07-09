import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=shashankdany8712@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 relative">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-primary"></span>
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-textMuted">Call Me</p>
                <p className="text-lg font-medium text-white">6305524083</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-textMuted">Email Me</p>
                <p className="text-lg font-medium text-white">shashankdany8712@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-textMuted">Location</p>
                <p className="text-lg font-medium text-white">Madanapalle, AP</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-surface/50 p-8 rounded-2xl border border-white/5 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
