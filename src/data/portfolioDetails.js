// portfolio.js

const portfolioDetails = {
  details: {
    name: "Himal Gautam",
    title: "Full Stack Software Developer",
    about:
      "Dynamic software developer with over 1+ year of experience in software development, currently pursuing a Master's degree in Computer Science. Demonstrated expertise in technical problem-solving and a passion for technology. Seeking to leverage skills and academic background to excel and contributing to the future of flight innovation while honing leadership abilities and technical acumen.",
    resume:
      "https://drive.google.com/file/d/14ZLQA7Ontottoi3y3qj08R2RB8rwp9-y/view?usp=sharing",
    CV: "https://drive.google.com/file/d/1-DH4kLW5fS3dKUbphQUrs-F4SlHSKGE5/view?usp=sharing",
    mail: "mailto:himal.developer.job@gmail.com",
  },
  experiences: [
    {
      position: "Full Stack Developer",
      company: "Aptachain Solutions Pvt. Ltd.",
      duration: "Nov 2022 - Oct 2023",
      location: "Bangalore",
      description:
        "Transitioned from Intern to Full Stack Developer, consistently delivering value over the tenure. Took the full responsibilty of the product from start to end. Led high-level design discussions and project planning with the share holders of the startup. Led a team having 2 developers as team lead, utilizing Azure DevOps and Google Spaces to guide and properly manage the tasks. Designed a robust SaaS product architecture according the requirements given. Completed the project documentation including product as well as process documentation. Implemented DevOps concepts (Docker, Kubernetes) and cloud computing (AWS, GCP, Oracle) on the base level. Took interviews for the positisions available for developers as the side tasks.",
    },
    {
      position: "Full Stack Developer - Intern",
      company: "Techivies Solutions Pvt. Ltd.",
      duration: "Sept 2022 - Oct 2022",
      location: "Ahmedabad",
      description:
        "Did a two-month program learning to build websites with AngularJS. Helped with big projects, working on the insides of websites and using AngularJS. Learned to use tools like Swagger for making projects easier. Got the hang of the MERN stack and how to do backend development, thanks to some smart guidance.,",
    },
    {
      position: "Full Stack Developer - Intern",
      company: "iPangram",
      duration: "June 2022 - June 2022",
      location: "Surat",
      description:
        "Hands-on experience in Full Stack development, applying core concepts to real-world projects. Designed and developed CRUD applications, aligning with specified task given. Demonstrated strong time management skills, consistently completing daily tasks. Maintained open communication with senior team members, submitting progress reports for efficient task coordination and supervision.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications",
      school: "Veer Narmad South Gujarat University",
      graduationYear: "2022",
    },
    {
      degree: "Executive Post Graduate Program in Software Development",
      school: "International Institute of Information Technology - Bangalore",
      graduationYear: "2023",
    },
    {
      degree: "Master of Science in Computer Science",
      school: "Liverpool John Moores University",
      graduationYear: "Present",
    },
  ],
  projects: [
    {
      name: "Online Shopping Store",
      description:
        "Created a responsive website using React, focusing on learning state hooks and building a responsive online shopping site.",
      imageLink: "/projectImages/Online-Shopping.png",
      technologies: "css,javascript,react",
      githubLink: "https://github.com/Himal-Gautam/React-Online-Shopping-Store",
      deployedLink: "https://react-online-shopping-store.netlify.app/",
    },
    {
      name: "NCSC Student Management",
      description:
        "Developed as a final year full-stack project, this system aimed to learn the MERN Stack by implementing a comprehensive student management solution for a college.",
      imageLink: "/projectImages/NCSC-Student-Management.png",
      technologies:
        "html,css,typescript,javascript,react,nodejs,express,mongodb",
      githubFrontendLink: "https://github.com/Himal-Gautam/NCSC-app",
      githubBackendLink: "https://github.com/Himal-Gautam/NCSC-Server",
      deployedLink: "https://ncsc-student-management.netlify.app/",
    },

    {
      name: "Task Manager",
      description:
        "Designed a task management application to help users organize and prioritize their tasks effectively.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      githubFrontendLink: "https://github.com/Himal-Gautam/Task-Manager-App",
      githubBackendLink: "https://github.com/Himal-Gautam/task-manager-server",
      deployedLink: "https://task-manager-full-stack-project.netlify.app/",
    },
    {
      name: "Markdown Viewer",
      description:
        "Created a tool that enables users to preview Markdown text in real-time, simplifying the process of formatting and styling text.",
      imageLink: "/projectImages/Mark-Down-Viewer.png",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      githubFrontendLink:
        "https://github.com/Himal-Gautam/markdown-viewer-frontend",
      githubBackendLink:
        "https://github.com/Himal-Gautam/markdown-viewer-backend",
      deployedLink: "https://markdown-viewer-full-stack-project.netlify.app/",
    },
    {
      name: "Hotel Room Booking Application",
      description:
        "Implemented microservices-based backend architecture for a hotel room booking application, focusing on scalability and maintainability. ",
      imageLink: "/projectImages/Hotel-Room-Booking-Application.png",
      technologies: "java,spring",
      githubLink: "https://github.com/Himal-Gautam/Sweet-home",
    },
    {
      name: "URL Shortener",
      description:
        "Built a URL shortening service, allowing users to shorten long URLs into more manageable ones.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      githubFrontendLink:
        "https://github.com/Himal-Gautam/url-shortner-frontend",
      githubBackendLink: "https://github.com/Himal-Gautam/url-shortner-server",
      // deployedLink: "https://url-shortner-full-stack-project.netlify.app/",
    },
    {
      name: "Book My Movie",
      description:
        "Developed a platform where users can explore upcoming and released movies, view movie details, and book show tickets, enhancing the movie-watching experience.",
      imageLink: "/projectImages/Book-My-Movie.png",
      technologies: "html,css,javascript,react",
      githubLink: "https://github.com/Himal-Gautam/BookMovieApp",
      deployedLink: "https://book-movie-app-pgp-frontend-project.netlify.app/",
    },
    {
      name: "Restaurant Apllication",
      description:
        "Created a Java-based restaurant application as a project during PGP, focusing on functionalities such as menu management and order processing.",
      technologies: "java,spring",
      githubLink: "https://github.com/Himal-Gautam/Gautam_Himal_C3_Project",
    },
    {
      name: "Book My Consultation App",
      description:
        "Capstone project for PGP in Software Development, enabling users to consult healthcare specialists remotely, emphasizing accessibility and convenience.",
      imageLink: "/projectImages/Book-My-Consultation.png",
      technologies: "html,css,javascript,react,java,spring",
      githubFrontendLink:
        "https://github.com/Himal-Gautam/BookMyConsultationUI",
      githubBackendLink: "https://github.com/Himal-Gautam/bookmyconsultation",
    },
    {
      name: "Design Patterns",
      description:
        "Designed an application that retrieves disease statistics using design patterns, integrating data from various APIs and implementing filtering mechanisms.",
      technologies: "java,spring",
      githubLink: "https://github.com/Himal-Gautam/patterns",
    },
    {
      name: "Web Scrapper",
      description:
        "Developed an e-commerce scraping application to extract product data from various websites, facilitating searching items by creating own dataset.",
      technologies: "html,css,javascript,react,nodejs,express,mongodb",
      githubFrontendLink: "https://github.com/Himal-Gautam/web-scrapper-ui",
      githubBackendLink: "https://github.com/Himal-Gautam/web-scrapper-server",
      deployedLink:
        "https://ecommerce-scrapper-full-stack-project.netlify.app/",
    },
    {
      name: "Disposable Mail Checker",
      description:
        "Used a 3rd-party API to create a front end for checking if an email address is disposable or not, enhancing email validation processes.",
      imageLink: "/projectImages/Disposable-Mail-Checker.png",
      technologies: "html,css,javascript",
      githubLink:
        "https://github.com/Himal-Gautam/Use-Disposable-Email-Checker-API",
      deployedLink: "https://disposable-mail-checker.netlify.app/",
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
      title: "Foundations of Project Management",
      description:
        "Completed Foundations of Project Management. Equipped with skills to streamline tasks and boost efficiency.",
    },
    {
      issuer: "Microsoft",
      title: "MTA: Introduction to Programming Using Python",
      description:
        "Successfully passed MTA: Introduction to Python. Ready for advanced programming projects.",
    },
    {
      issuer: "Amazon-Web-Services",
      title: "AWS Cloud Practitioner Essentials (Course Completion)",
      description:
        "Mastered AWS Cloud Practitioner Essentials. Ready to optimize cloud resources.",
    },
    {
      issuer: "Oracle",
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      description:
        "Achieved Oracle Cloud Infrastructure 2023 Certified Foundations Associate. Ready to contribute to cloud projects.",
    },
    {
      issuer: "Guvi",
      title: "Full Stack MERN Web Developer",
      description:
        "Completed Full Stack MERN Web Developer program. Prepared for roles in web development.",
    },
    {
      issuer: "Hacker-Rank",
      title:
        "Python (Basics), JavaScript (Basics), React (Basics), SQL (Basics)",
      description:
        "Completed Python, JavaScript, React, and SQL courses. Ready for advanced learning and projects.",
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
