import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMobileAlt, FaRocket, FaBolt, FaLayerGroup } from 'react-icons/fa';

const highlights = [
  {
    icon: FaMobileAlt,
    title: 'Cross-Platform',
    description: 'Android & iOS with React Native'
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description: 'Memoization & optimized rendering'
  },
  {
    icon: FaBolt,
    title: 'Security',
    description: 'SSL pinning & ProGuard'
  },
  {
    icon: FaLayerGroup,
    title: 'Scalable',
    description: 'Redux Toolkit architecture'
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 gradient-bg rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center"
                    >
                      <span className="text-5xl md:text-6xl font-bold text-white">AM</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">Arup Majumdar</h3>
                      <p className="text-[var(--text-secondary)]">Senior React Native Developer</p>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2"
              >
                <span className="text-2xl font-bold gradient-text">3+</span>
                <span className="text-sm text-[var(--text-secondary)] ml-1">Years</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2"
              >
                <span className="text-2xl font-bold gradient-text">5+</span>
                <span className="text-sm text-[var(--text-secondary)] ml-1">Apps</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[var(--primary)] font-semibold tracking-wider uppercase text-sm">
              About Me
            </span>
            <h2 className="section-title mt-2">
              Crafting Mobile Experiences That <span className="gradient-text">Matter</span>
            </h2>
            
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I'm a passionate React Native developer with more than 3 years of experience building 
                scalable mobile applications for Android and iOS platforms. My journey in tech has been driven by a 
                relentless curiosity to create seamless user experiences that solve real-world problems.
              </p>
              <p>
                At <span className="text-[var(--text)] font-medium">SheThink Pvt. Ltd.</span>, 
                I develop high-performance cross-platform applications using React Native, 
                <span className="text-[var(--primary)]"> Redux Toolkit</span>, REST API integration, and 
                <span className="text-[var(--secondary)]"> Firebase Console</span> services. 
                I'm skilled in building reusable UI components, optimizing application performance, 
                and implementing secure API communication.
              </p>
              <p>
                My expertise includes implementing 
                <span className="text-[var(--text)] font-medium"> mobile security practices </span> 
                like ProGuard obfuscation, SSL certificate pinning, and jailbreak detection. 
                I also focus on offline support using AsyncStorage, Redux Persist, and monitoring 
                with <span className="text-[var(--text)] font-medium">Firebase Crashlytics and Sentry</span>.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                    <item.icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
