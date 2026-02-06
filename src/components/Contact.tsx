import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sreebhavanipentyala@gmail.com',
      href: 'mailto:sreebhavanipentyala@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8977042375',
      href: 'tel:+918977042375',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sree-bhavani-pentyala',
      href: 'https://www.linkedin.com/in/sree-bhavani-pentyala/',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/sreebhavani',
      href: 'https://github.com/sreebhavani',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-indigo-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{info.label}</p>
                  <p className="text-white group-hover:text-indigo-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
