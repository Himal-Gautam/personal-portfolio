// portfolio.js

const portfolioDetails = {
  name: "Himal Gautam",
  title: "Full Stack Software Developer",
  // about:
  //   "Results-oriented Full Stack Developer with a solid background in computer science, dedicated to optimizing your organization's digital presence. Proficient in a diverse range of programming languages and cutting-edge technologies. Eager to embrace new challenges, continually expand my skill set, and drive innovation. Let's connect to discuss how I can contribute to your team's success and growth.",
  about:
    "Dynamic software developer with over 1+ year of experience in software development, currently pursuing a Master's degree in Computer Science. Demonstrated expertise in technical problem-solving and a passion for technology. Seeking to leverage skills and academic background to excel and contributing to the future of flight innovation while honing leadership abilities and technical acumen.",
  contact: {},
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
      description: "Did a two-month program learning to build websites with AngularJS. Helped with big projects, working on the insides of websites and using AngularJS. Learned to use tools like Swagger for making projects easier. Got the hang of the MERN stack and how to do backend development, thanks to some smart guidance.,"
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
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project1",
      deployedLink: "https://yourproject1.com",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project2",
      deployedLink: "https://yourproject2.com",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project3",
      deployedLink: "https://yourproject3.com",
    },
    {
      name: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project4",
      deployedLink: "https://yourproject4.com",
    },
    {
      name: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project5",
      deployedLink: "https://yourproject5.com",
    },
    {
      name: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius magna. Duis dapibus risus ut magna laoreet, et malesuada mauris sodales.",
      githubLink: "https://github.com/yourusername/project6",
      deployedLink: "https://yourproject6.com",
    },
    // Add more projects if needed
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
