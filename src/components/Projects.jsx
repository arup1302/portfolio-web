import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, forwardRef } from 'react';
import { FaApple, FaGooglePlay, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { projects, projectCategories } from '../data/projects';

const ProjectCard = forwardRef(({ project, onClick }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="card cursor-pointer group overflow-hidden"
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      {/* Project Image Placeholder */}
      <div 
        className="h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: `${project.color}15` }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            background: `linear-gradient(135deg, ${project.color}40 0%, transparent 50%)` 
          }}
        />
        <span 
          className="text-6xl font-bold opacity-20"
          style={{ color: project.color }}
        >
          {project.title.substring(0, 2)}
        </span>
        
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <span className="text-white font-medium flex items-center gap-2">
            View Case Study <FaExternalLinkAlt className="w-4 h-4" />
          </span>
        </motion.div>
      </div>

      {/* Category badge */}
      <span 
        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
        style={{ backgroundColor: `${project.color}20`, color: project.color }}
      >
        {project.category}
      </span>

      {/* Title and subtitle */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--primary)] transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] mb-3">{project.subtitle}</p>
      
      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
        {project.description}
      </p>

      {/* Tech stack preview */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-[var(--background-secondary)] text-[var(--text-secondary)]"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-1 text-xs rounded-md bg-[var(--background-secondary)] text-[var(--text-secondary)]">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
});

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-[var(--primary)]/10 transition-colors z-10"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Header image */}
        <div 
          className="h-64 rounded-t-2xl flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: `${project.color}15` }}
        >
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(135deg, ${project.color}40 0%, transparent 70%)` 
            }}
          />
          <span 
            className="text-8xl font-bold opacity-30"
            style={{ color: project.color }}
          >
            {project.title.substring(0, 2)}
          </span>
        </div>

        <div className="p-6 md:p-8">
          {/* Title section */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                style={{ backgroundColor: `${project.color}20`, color: project.color }}
              >
                {project.category}
              </span>
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p className="text-[var(--text-secondary)]">{project.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <motion.a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaApple className="w-5 h-5" />
                <span className="text-sm font-medium">App Store</span>
              </motion.a>
              <motion.a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay className="w-5 h-5" />
                <span className="text-sm font-medium">Play Store</span>
              </motion.a>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaExclamationCircle className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="text-lg font-semibold">The Problem</h3>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FaCheckCircle className="w-4 h-4 mt-1 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: `${project.color}15`, color: project.color }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Impact & Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.impact.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-xl"
                  style={{ backgroundColor: `${project.color}10` }}
                >
                  <span 
                    className="block text-2xl font-bold mb-1"
                    style={{ color: project.color }}
                  >
                    {item.split(' ')[0]}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {item.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">
            Featured Work
          </span>
          <h2 className="section-title mt-2">
            Projects & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications I've built that solve complex problems and deliver value
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                activeFilter === category
                  ? 'btn-primary'
                  : 'glass hover:bg-[var(--primary)]/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
