import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      position: 'ML Engineer Intern',
      company: 'SooperVision',
      period: 'Jan 2026 - Present',
      description:
        'Developing and optimizing machine learning models for AI-driven solutions. Working on real-world datasets to evaluate model performance and support scalable ML initiatives.',
      highlights: ['Machine Learning', 'Model Optimization', 'AI Solutions'],
    },
    {
      position: 'Full Stack Developer Intern',
      company: 'Aparaajita Sreegan Cripes',
      period: 'Aug 2025 - Oct 2025',
      description:
        'Built and maintained web applications using React.js, Node.js, and MongoDB to streamline property listings and client workflows. Developed REST APIs and improved system performance in a collaborative environment.',
      highlights: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-indigo-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group relative"
            >
              <div className="flex gap-6">
                <div className="p-3 bg-indigo-500/10 rounded-lg h-fit text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.position}
                    </h3>
                    <span className="text-indigo-400 text-sm font-medium">{exp.period}</span>
                  </div>

                  <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-lg border border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
