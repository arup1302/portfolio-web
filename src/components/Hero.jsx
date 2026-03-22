import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-96 h-96 bg-[var(--primary)]/30 top-20 -left-48" />
        <div className="blob w-80 h-80 bg-[var(--secondary)]/30 top-40 right-20 animation-delay-2000" />
        <div className="blob w-72 h-72 bg-[var(--accent)]/30 bottom-20 left-1/3 animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptLTE2IDE2aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptMCA4aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnptMC04aDJ2MmgtMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Arup Majumdar</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6"
        >
          React Native Developer{' '}
          <span className="text-[var(--primary)]">|</span>{' '}
           React-js Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          Building high-performance, scalable cross-platform mobile applications with{' '}
          <span className="text-[var(--primary)] font-semibold">3+ years</span>{' '}
          of experience in React Native, Redux Toolkit, TypeScript, and secure API integrations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={scrollToProjects}
            className="btn-primary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <FaArrowDown className="w-4 h-4" />
          </motion.button>
          <motion.a
            href="/resume/Arup_Majumdar_Resume.pdf"
            download="Arup_Majumdar_Resume.pdf"
            className="btn-primary flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
            <FaDownload className="w-4 h-4" />
          </motion.a>
          <motion.button
            onClick={scrollToContact}
            className="btn-secondary flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <HiMail className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/arup1302"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arup-majumdar-043421b0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="w-6 h-6 text-[#0077b5]" />
          </motion.a>
          <motion.a
            href="mailto:mazumdar912@gmail.com"
            className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiMail className="w-6 h-6 text-[var(--accent)]" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[var(--text-secondary)]"
          >
            <FaArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
