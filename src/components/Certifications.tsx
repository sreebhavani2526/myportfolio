import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: '365 Data Science Certification',
      issuer: '365 Data Science',
      description: 'Comprehensive certification in Data Science covering statistical analysis, machine learning, data visualization, and practical data science applications.',
      icon: <Award className="w-8 h-8 text-indigo-400" />,
    },
  ];

  const achievements = [
    {
      title: '2nd Position - Ideathon GDGOC',
      description: 'Secured 2nd position for solution to SIH problem statement ID - 25032 (Jharkhand Travel and Tourism) at GDGOC college technical event.',
    },
    {
      title: '3rd Position - Inter College SIH, GRIET',
      description: 'Prototype awarded 3rd position out of 50 teams within GRIET for Smart India Hackathon competition.',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-indigo-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-400 mb-3 font-medium">{cert.issuer}</p>
                  <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
