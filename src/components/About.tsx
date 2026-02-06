import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Database } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-indigo-400" />,
      title: 'DSA in Java',
      description: 'Strong foundation in Data Structures and Algorithms with hands-on problem-solving experience.',
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      title: 'Machine Learning',
      description: 'Developing and optimizing ML models with practical experience in model evaluation and deployment.',
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using modern frameworks like React, Node.js, and MongoDB.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Computer Science Undergraduate | Data Science Certified
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a Computer Science undergraduate certified in Data Science with strong
              foundations in Data Structures and Algorithms using Java. As an adaptive learner,
              I have hands-on experience in Python, SQL, and full-stack development, with
              practical exposure to data analysis and machine learning model evaluation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working as an ML Engineer Intern at SooperVision, I'm focused on
              building scalable, data-driven solutions that make a real impact. I've also gained
              valuable experience as a Full Stack Developer Intern, where I developed web
              applications using React.js, Node.js, and MongoDB.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
