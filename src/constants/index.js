import project1_img0 from "../assets/projects/project-1.webp";
import project1_img1 from "../assets/projects/project-5.jpg";
import project1_img2 from "../assets/projects/project-6.jpg";
import project1_img3 from "../assets/projects/project-7.jpg";
import project1_img4 from "../assets/projects/project-9.jpg";

import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

import cert5 from "../assets/projects/cert-5.png";
import cert2 from "../assets/projects/cert-2.png";
import cert3 from "../assets/projects/cert-3.png";
import cert4 from "../assets/projects/cert-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "IT Month PEMBED Pitching Champion – Arduino Project",
    images: [project1_img0, project1_img1, project1_img2, project1_img3, project1_img4],
    description:
      "Awarded Champion at the IT Month PEMBED Pitching competition for an innovative Arduino-based solution. I led the backend development and system architecture, ensuring seamless integration between hardware and software components.",
    technologies: ["Arduino", "C++", "JavaScript"],
    category: "Hardware",
  },
  {
    title: "Collaborative Mobile Task Management App",
    images: [project2],
    description:
      "Co-created a mobile task management application in a group setting, with features like task creation, assignment, and progress tracking. I led the development of both the frontend and backend, ensuring a smooth user experience and real-time functionality using Firebase.",
    technologies: ["Android Studio", "JavaScript", "Firebase"],
    category: "Mobile Dev",
  },
  {
    title: "DentAlert – Online Dental Appointment System",
    images: [project3],
    description:
      "Developed in collaboration with my group, DentAlert is a web-based system designed for dental clinics to streamline appointment scheduling and patient management. I led the creation of the frontend wireframes and backend database design, ensuring an intuitive user interface and reliable data structure.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    category: "Web Dev",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const CERTIFICATES = [
  {
    image: cert2,
    title: "AI in Connected Products (AIOT)",
    description:
      "I completed this course on LinkedIn Learning to deepen my understanding of how artificial intelligence integrates with IoT systems. It covered key topics like Natural Language Processing (NLP), core AI concepts, and how connected devices use data in real-world applications. This helped me grasp how smart systems interact with users and environments something I find very exciting in today’s tech landscape.",
  },
  {
    image: cert4,
    title: "Planning a Microsoft Azure Solution",
    description:
      "This course gave me a solid foundation in planning cloud-based solutions using Microsoft Azure. I learned how to assess business requirements and translate them into scalable and secure Azure infrastructures. It also covered cloud architecture design, cost estimation, and service selection — all useful skills for modern cloud development.",
  },
  {
    image: cert3,
    title: "Planning a Microsoft Azure Solution (Advanced)",
    description:
      "In this follow-up to my earlier Azure course, I explored more advanced topics around planning and optimizing enterprise-level solutions on Azure. I focused on real-world challenges like scalability, security, and compliance. It helped me feel more confident in making strategic cloud architecture decisions in complex scenarios.",
  },
  {
    image: cert5,
    title: "Champion - PEMBEDS: Pitching Exhibition (National University Fairview)",
    description:
      "Led GUIDESENSE as Team Leader, Backend Developer, and Project Architect, securing first place in a competitive pitching exhibition. This role involved defining the project's technical architecture, developing robust backend solutions, and effectively articulating complex ideas and innovative solutions to a panel of judges, demonstrating strong leadership and technical expertise. (June 2024)",
  },
];
