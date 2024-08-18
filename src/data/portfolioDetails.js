// portfolio.js

import { duration } from "@mui/material";

const portfolioDetails = {
  details: {
    name: "Himal Gautam",
    title: "Full Stack Software Developer",
    about:
      "Dynamic software developer with over 2+ year of experience in software development, currently pursuing a Master's degree in Computer Science. Demonstrated expertise in technical problem-solving and a passion for technology. Seeking to leverage skills and academic background to excel and contributing to the future of flight innovation while honing leadership abilities and technical acumen.",
    resume:
      "https://drive.google.com/file/d/14ZLQA7Ontottoi3y3qj08R2RB8rwp9-y/view?usp=sharing",
    CV: "https://drive.google.com/file/d/1-DH4kLW5fS3dKUbphQUrs-F4SlHSKGE5/view?usp=sharing",
    mail: "mailto:himal.developer.job@gmail.com",
  },
  experiences: [
    {
      position: "Software Development Engineer 1",
      company: "Aptachain Solutions Pvt. Ltd.",
      duration: "July 2024 - Current",
      location: "Bangalore (remote)",
      description: `⦿ Contributing to the development of an in-house EV industry product using Next.js and Prisma.
⦿ Expanding full-stack development skills with a focus on modern JavaScript frameworks.
⦿ Collaborating with the team to understand project requirements and actively participate in the development process.
⦿ Adapting quickly to new technologies and development practices, showcasing a strong learning aptitude.`,
    },
    {
      position: "Full Stack Web Developer",
      company: "EcstaTech",
      duration: "Nov 2023 - July 2024",
      location: "Delhi (remote)",
      description: `⦿ Delivered high-quality web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring seamless functionality and user experience.
⦿ Collaborated closely with clients to gather requirements, provide regular progress updates, and ensure complete satisfaction with the final product.
⦿ Consistently met project deadlines, demonstrating strong time management and organizational skills.
⦿ Troubleshooted and resolved technical issues efficiently, ensuring projects remained on track and within budget.
⦿ Adapted to diverse project requirements and client preferences, showcasing flexibility and a commitment to delivering tailored solutions.`,
    },
    {
      position: "Full Stack Developer",
      company: "Aptachain Solutions Pvt. Ltd.",
      duration: "Nov 2022 - Oct 2023",
      location: "Bangalore",
      description: `⦿ Designed and developed a SaaS product architecture, contributing to the successful launch and ongoing improvement of the product.
⦿ Collaborated with senior professionals on high-level design (HLD) discussions, project planning, and implementation of solutions.
⦿ Led application deployment efforts, making critical decisions on application lifecycle and development cycle management.
⦿ Participated in the recruitment process, interviewing candidates for various technical positions within the company.
⦿ Mentored and trained junior developers, fostering a collaborative and supportive team environment.`,
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Liverpool John Moores University",
      graduationYear: "Present",
    },
    {
      degree: "Executive Post Graduate Program in Software Development",
      school: "International Institute of Information Technology - Bangalore",
      graduationYear: "2023",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Veer Narmad South Gujarat University",
      graduationYear: "2022",
    },
  ],
  projects: [
    {
      name: "Movie App (IMDB)",
      description:
        "For my final project in the MERN Stack course, I developed a movie rating site that enables users to perform CRUD operations on movies and rate them.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      image: "/projectImages/movie-app.png",
      links: {
        github_Frontend_Link: "https://github.com/Himal-Gautam/react-movie-app",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/movie-app-node_server",
        deployed_Link:
          "https://movie-app-full-stack-project.netlify.app/movielist",
      },
    },

    {
      name: "Plant Protection Association Of Gujarat",
      description:
        "Made a draft frontend site for a government project where they want to update thier old website.",
      image: "/projectImages/PPAOG.png",
      technologies: "html,css,javascript,react",
      links: {
        github_Link: "https://github.com/Himal-Gautam/PPAOG",
        deployed_Link:
          "https://plant-protection-association-gujarat.netlify.app/home",
      },
    },
    {
      name: "NCSC Student Management",
      description:
        "Developed as a final year full-stack project, this system aimed to learn the MERN Stack by implementing a comprehensive student management solution for a college.",
      image: "/projectImages/NCSC-Student-Management.png",
      technologies:
        "html,css,typescript,javascript,react,nodejs,express,mongodb",
      links: {
        github_Frontend_Link: "https://github.com/Himal-Gautam/NCSC-app",
        github_Backend_Link: "https://github.com/Himal-Gautam/NCSC-Server",
        deployed_Link: "https://ncsc-student-management.netlify.app/",
      },
    },

    {
      name: "Task Manager",
      description:
        "Designed a task management application to help users organize and prioritize their tasks effectively.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      links: {
        github_Frontend_Link:
          "https://github.com/Himal-Gautam/Task-Manager-App",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/task-manager-server",
        deployed_Link: "https://task-manager-full-stack-project.netlify.app/",
      },
    },
    {
      name: "Online Shopping Store",
      description:
        "Created a responsive website using React, focusing on learning state hooks and building a responsive online shopping site.",
      image: "/projectImages/Online-Shopping.png",
      technologies: "css,javascript,react",
      links: {
        github_Link:
          "https://github.com/Himal-Gautam/React-Online-Shopping-Store",
        deployed_Link: "https://react-online-shopping-store.netlify.app/",
      },
    },
    {
      name: "Markdown Viewer",
      description:
        "Created a tool that enables users to preview Markdown text in real-time, simplifying the process of formatting and styling text.",
      image: "/projectImages/Mark-Down-Viewer.png",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      links: {
        github_Frontend_Link:
          "https://github.com/Himal-Gautam/markdown-viewer-frontend",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/markdown-viewer-backend",
        deployed_Link:
          "https://markdown-viewer-full-stack-project.netlify.app/",
      },
    },
    {
      name: "Hotel Room Booking Application",
      description:
        "Implemented microservices-based backend architecture for a hotel room booking application, focusing on scalability and maintainability. ",
      image: "/projectImages/Hotel-Room-Booking-Application.png",
      technologies: "java,spring",
      links: {
        github_Link: "https://github.com/Himal-Gautam/Sweet-home",
      },
    },
    {
      name: "URL Shortener",
      description:
        "Built a URL shortening service, allowing users to shorten long URLs into more manageable ones.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      links: {
        github_Frontend_Link:
          "https://github.com/Himal-Gautam/url-shortner-frontend",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/url-shortner-server",
        // deployed_Link: "https://url-shortner-full-stack-project.netlify.app/",
      },
    },
    {
      name: "Book My Movie",
      description:
        "Developed a platform where users can explore upcoming and released movies, view movie details, and book show tickets, enhancing the movie-watching experience.",
      image: "/projectImages/Book-My-Movie.png",
      technologies: "html,css,javascript,react",
      links: {
        github_Link: "https://github.com/Himal-Gautam/BookMovieApp",
        deployed_Link:
          "https://book-movie-app-pgp-frontend-project.netlify.app/",
      },
    },
    {
      name: "Restaurant Apllication",
      description:
        "Created a Java-based restaurant application as a project during PGP, focusing on functionalities such as menu management and order processing.",
      technologies: "java,spring",
      links: {
        github_Link: "https://github.com/Himal-Gautam/Gautam_Himal_C3_Project",
      },
    },
    {
      name: "Book My Consultation App",
      description:
        "Capstone project for PGP in Software Development, enabling users to consult healthcare specialists remotely, emphasizing accessibility and convenience.",
      image: "/projectImages/Book-My-Consultation.png",
      technologies: "html,css,javascript,react,java,spring",
      links: {
        github_Frontend_Link:
          "https://github.com/Himal-Gautam/BookMyConsultationUI",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/bookmyconsultation",
      },
    },
    {
      name: "Design Patterns",
      description:
        "Designed an application that retrieves disease statistics using design patterns, integrating data from various APIs and implementing filtering mechanisms.",
      technologies: "java,spring",
      links: {
        github_Link: "https://github.com/Himal-Gautam/patterns",
      },
    },
    {
      name: "Web Scrapper",
      description:
        "Developed an e-commerce scraping application to extract product data from various websites, facilitating searching items by creating own dataset.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      links: {
        github_Frontend_Link: "https://github.com/Himal-Gautam/web-scrapper-ui",
        github_Backend_Link:
          "https://github.com/Himal-Gautam/web-scrapper-server",
        deployed_Link:
          "https://ecommerce-scrapper-full-stack-project.netlify.app/",
      },
    },
    {
      name: "Disposable Mail Checker",
      description:
        "Used a 3rd-party API to create a front end for checking if an email address is disposable or not, enhancing email validation processes.",
      image: "/projectImages/Disposable-Mail-Checker.png",
      technologies: "html,css,javascript",
      links: {
        github_Link:
          "https://github.com/Himal-Gautam/Use-Disposable-Email-Checker-API",
        deployed_Link: "https://disposable-mail-checker.netlify.app/",
      },
    },
  ],
  techStack: [
    {
      type: "Frontend",
      technologies:
        "html,css,javascript,angular,react,tailwindcss,redux,sass,bootstrap,materialui,nextjs",
    },
    {
      type: "Backend",
      technologies: "express,flask,spring,nodejs,django",
    },
    {
      type: "Databases",
      technologies: "mongodb,mysql,postgresql,redis,firebase",
    },
    {
      type: "Programming Languages",
      technologies: "c,cpp,go,java,javascript,php,python,rust,typescript",
    },
    {
      type: "Devops",
      technologies: "docker,jenkins,kubernetes,jest",
    },
    {
      type: "Version Control & Tools",
      technologies:
        "git,vite,npm,vscode,figma,github,heroku,bash,powershell,postman",
    },
    { type: "Cloud Platforms", technologies: "aws,azure,gcp" },
  ],
  socialLinks: [
    { network: "github", url: "https://github.com/Himal-Gautam" },
    { network: "linkedin", url: "https://www.linkedin.com/in/himal-gautam/" },
    { network: "email", url: "mailto:himal.developer.job@gmail.com" },
    { network: "twitter", url: "https://twitter.com/_himal_gautam" },
    // { network: "medium", url: "https://medium.com/@himalpgautam" },
    // { network: "instagram", url: "https://www.instagram.com/_himal_gautam" },
  ],
  certifications: [
    {
      issuer: "Google",
      link: "https://coursera.org/share/5e91e69874b3f08fe5d88c753297c561",
      title: "Foundations of Project Management",
      description:
        "Completed Foundations of Project Management. Equipped with skills to streamline tasks and boost efficiency.",
    },
    {
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/bc9b2b75-d1ec-4f77-922a-8a681af0da5c",
      title: "MTA: Introduction to Programming Using Python",
      description:
        "Successfully passed MTA: Introduction to Python. Ready for advanced programming projects.",
    },
    {
      issuer: "AWS",
      link: "https://drive.google.com/file/d/1_Y5l5gdYW_mJ0B8fMBFhwGangqUR8xmP/view?usp=sharing",
      title: "AWS Cloud Practitioner Essentials (Course Completion)",
      description:
        "Mastered AWS Cloud Practitioner Essentials. Ready to optimize cloud resources.",
    },
    {
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=49B9F8790D29B45BA49166E1C084353B28BE663F1FEEBCE99288844E2269E46A",
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      description: "Ready to contribute to cloud projects.",
    },
    {
      issuer: "Guvi",
      link: "https://www.guvi.in/share-certificate/t6RJH1v19e2j07305K",
      title: "Full Stack MERN Web Developer",
      description:
        "Learned about multiple technologies related to web development.",
    },
    {
      issuer: "Docker",
      link: "https://www.linkedin.com/learning/certificates/4e7a3be4e1a4ec36b3e45feb0fca9b36f7a5f15fef260ee738248de22f524719",
      title: "Docker Foundations Professional Certificate",
      description:
        "Learned about containerization using docker and tools",
    },
  ],
  testimonials: [
    {
      name: "Muralidhara Mallur",
      occupation: "Technical Evangelist at DELL",
      testimonial:
        "I had the pleasure of working with Himal Goutham when he joined our team as a fresher. From the outset, Himal demonstrated a keen ability to absorb new information and apply it effectively in our projects. His contributions were not just limited to his assigned tasks; he consistently went above and beyond, offering insights that benefited the entire team. His work ethic and dedication to team success were truly commendable.",
    },
    {
      name: "Vishal Magdum",
      occupation: "SDE at Trustt (formerly Novopay)",
      testimonial:
        "I've had the pleasure of working closely with Himal at Aptachain Solutions, and I highly recommend him. He is an outstanding system architect with a strong grasp of data structures and algorithms. Himal is not only technically proficient but also possesses a friendly and approachable demeanor. His collaborative nature and positive attitude make him a valuable asset to any team. I've learned a lot from him, and I'm confident that his skills and expertise make him an excellent choice for any project.",
    },
    {
      name: "Harishankher Selvaraj",
      occupation: "Talent LEad & Head of Placements",
      testimonial:
        "I have been closely watching him as a learner at GUVI. He is perfect in his assignments and in his perseverance. He is learning to obey and to pursue. He has the perfect culture fit for any organization. He is very professional in seeking things. His expertise in problem solving is awesome. He is good at Core JavaScript and, moreover, has good experience in frameworks, both front-end and back-end. His communication skills are beyond excellent. He is a hardworking and diligent person who will complete his assignments on time. He has the maturity to handle the team soon after if he gets a proper route.",
    },
    {
      name: "Shrey Parikh",
      occupation: "Corporate Relations at Upgrad",
      testimonial:
        "Himal is a focused and exceptional developer. He has all the ingredients needed to reach the very top. He has the skills and the technical know-how to become a professional developer.",
    },
    {
      name: "Shrey Parikh",
      occupation: "Corporate Relations at Upgrad",
      testimonial:
        "Himal is a focused and exceptional developer. He has all the ingredients needed to reach the very top. He has the skills and the technical know-how to become a professional developer.",
    },
    {
      name: "Shrey Parikh",
      occupation: "Corporate Relations at Upgrad",
      testimonial:
        "I am writing this recommendation to express my utmost appreciation for Himal, an exceptional MERN Stack Developer. Himal possesses a deep understanding of the MERN (MongoDB, Express.js, React.js, Node.js) stack, and his technical expertise is truly impressive. I have witnessed Himal's dedication and passion for his work, which undoubtedly reflects in the outstanding outcomes he produces. :)",
    },
  ],
};

export default portfolioDetails;
