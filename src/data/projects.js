export const projects = [
  {
    id: 1,
    title: 'Nomou',
    subtitle: 'Business Management & Digital Billing Application',
    category: 'Mobile App',
    description: 'A comprehensive business management and digital billing application for SMEs and business users in KSA & Bahrain markets.',
    problem: 'Small and medium enterprises in KSA & Bahrain needed a robust, secure digital billing solution with banking integration, customer management, and compliance with local financial regulations.',
    features: [
      'Customer management with detailed profiles',
      'Digital billing and invoicing system',
      'Payment tracking and history',
      'Banking API integration for secure payments',
      'SSL certificate pinning for security',
      'ProGuard obfuscation and jailbreak detection',
      'Deep linking for seamless navigation',
      'Optimized UI rendering across screens'
    ],
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase Console', 'REST APIs', 'Axios', 'Deep Linking'],
    impact: [
      'Serving SMEs in KSA & BH',
      'Secure banking integration',
      'Enterprise-grade security',
      'Optimized performance'
    ],
    color: '#6366f1',
    image: '/projects/nomou.png',
    links: {
      playStore: '#',
      appStore: '#'
    }
  },
  {
    id: 2,
    title: 'Bandhify',
    subtitle: 'Dairy Product Ordering Platform',
    category: 'Mobile App',
    description: 'A customer-facing mobile application and admin portal for ordering dairy products from local vendors with complete delivery management.',
    problem: 'Local dairy vendors needed a modern platform to connect with customers, manage orders, track deliveries, and optimize routes for efficient delivery operations.',
    features: [
      'End-to-end ordering system',
      'Location tracking with Google Maps',
      'Delivery estimation using Distance Matrix API',
      'Route optimization for vendors',
      'GraphQL APIs with Apollo Client',
      'Admin portal for vendor management',
      'Responsive and scalable UI components',
      'Seamless navigation experience'
    ],
    techStack: ['React.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Apollo Client', 'Google APIs'],
    impact: [
      'Full-stack development lead',
      'Efficient data fetching',
      'Optimized delivery routes',
      'Smooth user experience'
    ],
    color: '#06b6d4',
    image: '/projects/bandhify.png',
    links: {
      playStore: '#',
      appStore: '#'
    }
  },
  {
    id: 3,
    title: 'AmanahRaya & AmanahRaya Agent',
    subtitle: 'Trustee Service Applications',
    category: 'Enterprise App',
    description: 'Two mobile applications for customers and service agents managing trust, will, and estate services with real-time communication.',
    problem: 'A trustee service company needed secure mobile applications for both customers and agents to manage sensitive trust, will, and estate services with real-time data synchronization.',
    features: [
      'Secure data handling for sensitive information',
      'Real-time updates via WebSocket',
      'User interaction workflows for trust services',
      'Google Maps integration for location services',
      'Service tracking for agents',
      'Firebase backend integration',
      'Scalable TypeScript architecture',
      'Dual app ecosystem (Customer & Agent)'
    ],
    techStack: ['React Native', 'TypeScript', 'Firebase', 'WebSockets', 'Google Maps'],
    impact: [
      'Dual-app ecosystem',
      'Real-time synchronization',
      'Location-based services',
      'Scalable architecture'
    ],
    color: '#8b5cf6',
    image: '/projects/amanahraya.png',
    links: {
      playStore: '#',
      appStore: '#'
    }
  },
  {
    id: 4,
    title: 'Cityfurnish',
    subtitle: 'Furniture & Appliance Rental Platform',
    category: 'Mobile App',
    description: 'A rental-based mobile application for furniture and appliances with flexible subscription plans and multiple third-party integrations.',
    problem: 'Users seeking furniture rental needed a seamless platform with flexible plans, secure payments, KYC verification, and comprehensive tracking capabilities.',
    features: [
      'Flexible subscription rental plans',
      'Razorpay payment integration',
      'KYC verification with HyperKYC SDK',
      'AppsFlyer analytics tracking',
      'CleverTap user engagement',
      'Branch deep linking',
      'Facebook SDK social integration',
      'Google Maps for delivery tracking'
    ],
    techStack: ['React Native', 'TypeScript', 'Firebase', 'WebSockets', 'Razorpay SDK', 'HyperKYC', 'AppsFlyer', 'CleverTap'],
    impact: [
      'Multiple SDK integrations',
      'Secure KYC verification',
      'Enhanced user engagement',
      'Performance optimized'
    ],
    color: '#10b981',
    image: '/projects/cityfurnish.png',
    links: {
      playStore: '#',
      appStore: '#'
    }
  }
];

export const projectCategories = ['All', 'Mobile App', 'Enterprise App'];
