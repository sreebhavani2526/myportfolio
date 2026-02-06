import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'Express', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Supabase'],
    },
    {
      title: 'Data Science & ML',
      skills: ['TensorFlow', 'Tableau', 'Power BI', 'Data Analysis', 'Model Evaluation'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'AWS', 'REST APIs', 'Data Structures', 'Algorithms'],
    },
    {
      title: 'Core Competencies',
      skills: ['DBMS', 'Computer Networks', 'OOP', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-indigo-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-200"
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
};

export default Skills;
