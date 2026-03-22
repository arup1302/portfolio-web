import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="text-3xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AM
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <motion.a
              href="https://github.com/arupmajumdar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arup-majumdar-043421b0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-5 h-5 text-[#0077b5]" />
            </motion.a>
            <motion.a
              href="mailto:mazumdar912@gmail.com"
              className="p-3 rounded-lg glass hover:bg-[var(--primary)]/10 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="w-5 h-5 text-[var(--accent)]" />
            </motion.a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-[var(--card-border)] mb-6" />

          {/* Copyright */}
          <p className="text-sm text-[var(--text-secondary)] text-center">
            © {currentYear} Arup Majumdar. Built with{' '}
            <FaHeart className="inline w-4 h-4 text-red-500 mx-1" />
            using React & Tailwind CSS
          </p>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 md:right-8 bottom-12 p-3 rounded-full glass hover:bg-[var(--primary)]/10 transition-colors"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
