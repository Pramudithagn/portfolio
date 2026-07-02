import {
  mobile,
  backend,
  creator,
  web,
  java,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  aws,
  awsphoto,
  jenkinsphoto,
  docker,
  python,
  spring,
  infor,
  frontwalker,
  medify_demo,
  medify1,
  medify2,
  medify3,
  medify4,
  medify5,
  medify6,
  medify7,
  medify8,
  medify9,
  medify10,
  medify11,
  medify12,
  medify13,
  fasteats_demo,
  fasteats1,
  fasteats2,
  fasteats3,
  fasteats4,
  fasteats5,
  fasteats6,
  fasteats7,
  fasteats8,
  fasteats9,
  fasteats10,
  fasteats11,
  fasteats12,
  fasteats13,
  fasteats14,
  fasteats15,
  fasteats16,
  fasteats17,
  fasteats18,
} from "../assets";

export const socialLinks = {
  github: "https://github.com/pramudithagn",
  linkedin: "https://www.linkedin.com/in/pramuditha-gunaratne/",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Python", icon: python },
  { name: "Spring", icon: spring },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Frontwalker Sri Lanka",
    url: "https://frontwalker.com/en",
    icon: frontwalker,
    iconBg: "#ffffff",
    date: "Dec 2024 - Present",
    projects: [
      {
        name: "Foreign Ministry CMS",
        description:
          "A centralized multi-tenant digital platform for a Sri Lankan government ministry, unifying the digital presence of 50+ diplomatic missions worldwide.",
        previewLinks: [
          { label: "Bucharest Embassy", url: "https://www.emb-bucharest.gov.lk/en" },
          { label: "Maldives Embassy", url: "https://www.hc-male.gov.lk/en" },
        ],
        points: [
          "Contributed across the entire SDLC covering system design, feature development, performance optimizations, and code refactoring ensuring smooth on-time deliveries.",
          "Implemented unit tests for multiple backend services and integrated SonarQube code quality gates ensuring high code coverage and reduced code smells.",
          "Addressed security concerns adhering to OWASP Top 10 recommendations ensuring application reliability.",
          "Migrated the queue service of a booking system from RabbitMQ to SQS, reducing message processing latency and booking failure incidents.",
          "Investigated and resolved bugs across frontend and backend services, addressing issues in multi-tenant data isolation and API response consistency.",
          "Provided L3 support for production issues, diagnosing and resolving critical incidents to ensure platform stability across live diplomatic mission sites.",
        ],
        techStack:
          "TypeScript, React, Next.js, NestJS, PostgreSQL, MongoDB, Redis, Docker, AWS",
      },
      {
        name: "Chatbot",
        description:
          "A conversational Generative AI chat assistant platform supporting end-to-end business workflows.",
        points: [
          "Spearheaded the implementation of a multi-agent system and RAG pipeline to provide accurate, context-aware responses from custom knowledge bases.",
          "Optimized prompt engineering strategies and memory systems, reducing hallucination rate and improving response relevance in multi-turn dialogues.",
          "Integrated safety guardrails and content moderation to ensure responsible AI usage and compliance with ethical guidelines.",
          "Identified and fixed bugs in the RAG pipeline and dialogue flow, improving context retention and response accuracy across multi-turn conversations.",
        ],
        techStack:
          "Python, Flask, LLM, LangChain, CrewAI, OpenAI, ChromaDB, HuggingFace, Docker",
      },
      {
        name: "Boilerplates",
        description:
          "Boilerplate applications with all the basic features built in, customizable for various project needs accordingly.",
        points: [
          "Designed and developed a Spring Boot boilerplate single-handedly applying SOLID principles and proper design patterns for a clean, scalable foundation.",
          "Spearheaded the development of Flutter, NestJS, and React boilerplates, enabling faster project kickoffs across the team.",
        ],
        techStack: "Spring Boot, NestJS, React, Flutter, TypeScript, Java, Dart",
      },
      {
        name: "Xavior",
        description:
          "A ground–air robotic monitoring platform for safety inspection, integrating a fleet of UGVs and UAVs with real-time AI-powered detections.",
        points: [
          "Designed and implemented real-time robot telemetry and sensor data pipelines using Socket.IO enabling live monitoring of robot fleets across inspection sites.",
          "Implemented live video streaming from robot-mounted cameras using HLS and WebRTC via a streaming server.",
          "Spearheaded YOLO-based AI detection services for multiple detection scenarios.",
          "Optimized Dockerfiles of several services resulting in faster build times.",
          "Debugged and resolved issues in real-time telemetry streams and video pipeline, ensuring stable and uninterrupted robot fleet monitoring.",
        ],
        techStack:
          "React, NestJs, Express.js, MySQL, MongoDB, ROS2, Docker",
      },
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Infor",
    url: "https://www.infor.com/",
    icon: infor,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Mar 2024",
    projects: [
      {
        name: "Infor Nexus",
        description:
          "A platform which manages trading partners of Infor's flagship supply chain management product.",
        link: { label: "View Product", url: "https://www.infor.com/solutions/scm/infor-nexus" },
        points: [
          "Developed new features and unit tests for one of Infor's flagship products, Infor Nexus.",
          "Got hands-on experience in full software development lifecycle with the application of best practices and proper industry standards.",
          "Contributed to company inner projects, including a utility object parser tool, which helped with cutting maintenance costs.",
          "Got familiarized in agile process following agile ceremonies and gained hands-on experience in issue tracking and project management.",
        ],
        techStack: "Java, Spring Boot, JUnit, GitLab, Docker",
      },
      {
        name: "AppXpress",
        description:
          "A device management application to manage commonly used devices across the team.",
        points: [
          "Designed and developed the application for a team of 20+ members, leading to reduced device downtime and improved team collaboration.",
        ],
        techStack:
          "JavaScript, React.js, Redux, Express.js, Material-UI, Capacitor, Firebase, Docker",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [ { name: "react", color: "blue-text-gradient", }, { name: "mongodb", color: "green-text-gradient", }, { name: "tailwind", color: "pink-text-gradient", }, ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [ { name: "react", color: "blue-text-gradient", }, { name: "restapi", color: "green-text-gradient", }, { name: "scss", color: "pink-text-gradient", }, ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [ { name: "nextjs", color: "blue-text-gradient", }, { name: "supabase", color: "green-text-gradient", }, { name: "css", color: "pink-text-gradient", }, ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const projects = [
  {
    name: "Medify",
    description:
      "A microservices application for a healthcare system that manages patient information, appointments, payments enabling doctors to assign patient records, treatments and admins to have super privileges including user management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "spring-cloud", color: "green-text-gradient" },
      { name: "hibernate", color: "orange-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
      { name: "redux", color: "pink-text-gradient" },
      { name: "material-ui", color: "pink-text-gradient" },
      { name: "kafka", color: "green-text-gradient" },
      { name: "keycloak", color: "orange-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
      { name: "microservices", color: "blue-text-gradient" },
    ],
    media: [
      { type: "video", url: medify_demo },
      { type: "image", url: medify1 },
      { type: "image", url: medify2 },
      { type: "image", url: medify3 },
      { type: "image", url: medify4 },
      { type: "image", url: medify5 },
      { type: "image", url: medify6 },
      { type: "image", url: medify7 },
      { type: "image", url: medify8 },
      { type: "image", url: medify9 },
      { type: "image", url: medify10 },
      { type: "image", url: medify11 },
      { type: "image", url: medify12 },
      { type: "image", url: medify13 },
    ],
    source_code_link: "https://github.com/Pramudithagn/Medify.git",
  },
  {
    name: "Fast Eats ",
    description:
      "An online food ordering platform where customers can purchase food and sellers can manage their restaurant related aspects like inventory and orders.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "spring-boot", color: "green-text-gradient" },
      { name: "hibernate", color: "orange-text-gradient" },
      { name: "maven", color: "pink-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "tailwindcss", color: "orange-text-gradient" },
      { name: "jwt", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
    ],
    media: [
      { type: "video", url: fasteats_demo },
      { type: "image", url: fasteats1 },
      { type: "image", url: fasteats2 },
      { type: "image", url: fasteats3 },
      { type: "image", url: fasteats4 },
      { type: "image", url: fasteats5 },
      { type: "image", url: fasteats6 },
      { type: "image", url: fasteats7 },
      { type: "image", url: fasteats8 },
      { type: "image", url: fasteats9 },
      { type: "image", url: fasteats10 },
      { type: "image", url: fasteats11 },
      { type: "image", url: fasteats12 },
      { type: "image", url: fasteats13 },
      { type: "image", url: fasteats14 },
      { type: "image", url: fasteats15 },
      { type: "image", url: fasteats16 },
      { type: "image", url: fasteats17 },
      { type: "image", url: fasteats18 },
    ],
    source_code_link: "https://github.com/Pramudithagn/FastEats-frontend.git",
  },
];

const certifications = [
  {
    name: "AWS Cloud Practitioner (CLF-C02)",
    avatar: `${awsphoto}`,
    institute: "KodeKloud",
    outcomes:
      "Learned AWS Technology, Services, Security and Compliance, Billing and Pricing.",
    issueDate: "September 2024",
    url: "https://learn.kodekloud.com/certificate/1e6c08f1-7e6b-48aa-b2c8-e7fe15c9cdfe",
  },
  {
    name: "Jenkins Essentials",
    avatar: `${jenkinsphoto}`,
    institute: "KodeKloud",
    outcomes:
      "Acquired hands-on knowledge in automated pipelines and ci/cd procedure.",
    issueDate: "August 2024",
    url: "https://learn.kodekloud.com/certificate/9a5617ff-49a6-481d-876b-8caa1b22a96b",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certifications,
};
