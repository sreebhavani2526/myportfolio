import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Sree Bhavani <span className="text-indigo-500">Pentyala</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-indigo-400 mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Developer | ML Engineer | Data Science Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Computer Science undergraduate with strong foundations in DSA and Java. Building
            scalable, data-driven solutions with expertise in full-stack development and machine
            learning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-indigo-500/50"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 text-indigo-400 hover:text-indigo-300 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ArrowDown className="mx-auto text-gray-500 animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
