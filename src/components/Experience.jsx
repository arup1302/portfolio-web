import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import { experiences } from '../data/experience';

const ExperienceCard = ({ experience, index, isInView }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} w-full`}
    >
      {/* Timeline line for desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--card-border)] -translate-x-1/2" />
      
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 z-10" />

      <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="card relative">
          {/* Company badge */}
          <div className="absolute -top-3 left-4 px-3 py-1 rounded-full gradient-bg text-white text-sm font-medium">
            {experience.type}
          </div>

          <div className="pt-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-[var(--primary)] font-semibold">{experience.company}</p>
              </div>
              <div className="p-3 rounded-xl gradient-bg/10 bg-[var(--primary)]/10">
                <FaBriefcase className="w-5 h-5 text-[var(--primary)]" />
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mb-4">
              <span className="flex items-center gap-1">
                <FaCalendar className="w-4 h-4" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                {experience.location}
              </span>
            </div>

            {/* Description */}
            <p className="text-[var(--text-secondary)] mb-4">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {experience.responsibilities.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <FaCheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                <FaTrophy className="w-4 h-4 text-yellow-500" />
                Achievements:
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-[var(--primary)]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-[var(--background-secondary)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">
            Career Journey
          </span>
          <h2 className="section-title mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building impactful mobile applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12 md:space-y-16">
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-[var(--card-border)]" />

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '5+', label: 'Apps Delivered' },
            
            { value: '90.5%', label: 'Crash-Free Rate' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="card text-center"
            >
              <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
