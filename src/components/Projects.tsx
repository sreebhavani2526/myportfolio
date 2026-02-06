import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Smart Save',
      description:
        'A full-stack fintech application that enables users to track expenses, manage budgets, and gain personalized savings insights. Features secure authentication, real-time data handling, and intelligent recommendation logic.',
      techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Supabase'],
      github: '#',
      live: null,
    },
    {
      title: 'Eco and Cultural Tourism in Jharkhand',
      description:
        'Tourism promotion platform developed during Smart India Hackathon. Built responsive UI components and integrated backend APIs to enhance user accessibility and engagement for showcasing Jharkhand tourism.',
      techStack: ['React.js', 'Tailwind CSS', 'REST APIs', 'Backend Integration'],
      github: '#',
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-lg border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
