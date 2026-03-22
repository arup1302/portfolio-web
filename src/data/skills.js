import { FaMobile, FaReact, FaServer, FaBrain, FaTools } from "react-icons/fa"

export const skillCategories = [
  {
    id: "mobile",
    title: "Mobile Development",
    icon: FaMobile,
    color: "#6366f1",
    skills: [
      { name: "React Native (Android/iOS)", level: 95 },
      { name: "Context API", level: 92 },
      { name: "Redux/Redux Toolkit", level: 92 },
      { name: "React Navigation", level: 95 },
      { name: "Formik & Yup", level: 88 },
      { name: "Performance Optimization", level: 90 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FaReact,
    color: "#06b6d4",
    skills: [
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3/Bootstrap", level: 92 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend & API",
    icon: FaServer,
    color: "#10b981",
    skills: [
      { name: "REST APIs (Axios/Fetch)", level: 92 },
      { name: "GraphQL (Apollo Client)", level: 85 },
      { name: "Firebase Console", level: 90 },
      { name: "WebSockets", level: 85 },
      { name: "Deep Linking", level: 88 },
      { name: "Google APIs", level: 85 },
    ],
  },
  {
    id: "ai",
    title: "AI Integration",
    icon: FaBrain,
    color: "#f472b6",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: FaTools,
    color: "#f59e0b",
    skills: [
      { name: "Git/GitHub/GitLab", level: 95 },
      { name: "Fastlane", level: 88 },
      { name: "GitHub Actions", level: 82 },
      { name: "Android Studio", level: 90 },
      { name: "Xcode", level: 88 },
      { name: "Firebase Crashlytics/Sentry", level: 90 },
    ],
  },
]
