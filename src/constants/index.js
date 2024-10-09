import {
  mobile,
  backend,
  creator,
  web,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  aws,
  awsphoto,
  jenkinsphoto,
  figma,
  docker,
  python,
  maven,
  jenkins,
  mui,
  express,
  mysql,
  sql,
  firebase,
  hibernate,
  bootstrap,
  spring,
  infor,
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Material UI",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express",
  //   icon: express,
  // },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Infor",
    icon: infor,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - March 2024",
    points: [
      "Developed new features and unit tests for one of Infor's flagship products, Infor Nexus.",
      "Designed & developed a full-stack application to manage the shared devices within a team of 20+ members.",
      "Got hands-on experience in full software development lifecycle with the application of best practices and proper industry standards.",
      "Contributed to company inner projects, including an utility object parser tool, which helped with cutting maintenance costs.",
      "Got familiarized in agile process following agile ceremonies and gained hands-on experience in issue tracking and project management.",
    ],
    techStack:
      "Java, Javascript, JUnit, React, Node.js, Express, Docker, Firebase",
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
