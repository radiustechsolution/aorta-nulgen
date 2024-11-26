import { siteConfig } from "@/config/site";
import { JobPostTypes, LatestType } from "./types";
import { subtitle } from "@/components/primitives";

export const WhyObjects = [
  {
    id: 0,
    logo: "/asset/why.svg",
    bgImg: "/asset/why-1.jpeg",
    path: "/",
  },
  {
    id: 1,
    logo: "/asset/why-1.svg",
    bgImg: "/asset/why-2.jpeg",
    path: "/",
  },
  {
    id: 2,
    logo: "/asset/why-2.svg",
    bgImg: "/asset/why-3.jpeg",
    path: "/",
  },
  {
    id: 3,
    logo: "/asset/why-3.svg",
    bgImg: "/asset/why-4.jpeg",
    path: "/",
  },
  {
    id: 4,
    logo: "/asset/why-4.svg",
    bgImg: "/asset/why-5.jpeg",
    path: "/",
  },
  {
    id: 5,
    logo: "/asset/why-5.svg",
    bgImg: "/asset/why-6.jpeg",
    path: "/",
  },
];

export const testimonials = [
  {
    heading: "I have been working with Toptal...",
    testimony:
      "I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond...",
    author: "Ian Stokes-Rees",
    title: "Partner",
    company: "/asset/svg/comp3.svg",
    rating: 5,
  },
  {
    heading: "Toptal is my go-to source",
    testimony:
      "Toptal is my go-to source to find high-quality talent I can’t find elsewhere. I’ve been very impressed with the breadth and depth of talent they have been able to deliver.",
    author: "Tess Caputo",
    title: "Chief Operations Officer",
    company: "/asset/svg/comp6.svg",
    rating: 5,
  },
  {
    heading: "Creating an app for game",
    testimony:
      "With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand-new fan engagement platform.",
    author: "Conor Kenney",
    title: "VP, Product and Technology",
    company: "/asset/svg/comp4.svg",
    rating: 5,
  },
];

export const Latest: LatestType[][] = [
  [
    {
      id: 0,
      title:
        "Exploring the Post-crash Cryptocurrency Market: Blockchain, Regulations, and Beyond",
      author: "Jeffrey Mazer",
      description:
        "The 2022 crash shook the cryptocurrency market to its core, but investors are still buying digital coins. How does crypto work, and what does the future hold for it?",
      category: "FINANCE",
      subcategory: "FINANCE PROCESSES",
      time: "17 MINUTE READ",
      image: "/asset/latest1.jpeg",
      bgImage: "/asset/latest1.png",
    },
  ],
  [
    {
      id: 1,
      title:
        "Architecting Effective Data Labeling Systems for Machine Learning Pipelines",
      author: "Reza Fazeli",
      category: "ENGINEERING",
      subcategory: "DATA SCIENCE AND DEVELOPMENT",
      image: "/asset/latest2.jpeg",
      bgImage: "/asset/latest2.png",
    },
    {
      id: 2,
      title: "IT Integration in Mergers and Acquisitions: Structuring Synergy",
      author: "John S. Doss",
      category: "FINANCE",
      subcategory: "REVENUE AND GROWTH",
      image: "/asset/latest3.jpeg",
      bgImage: "/asset/latest3.png",
    },
    {
      id: 3,
      title:
        "Boost Ad Performance on Facebook and Instagram With Advanced Audience Targeting",
      author: "Jake Madoff",
      category: "MARKETING",
      subcategory: "SOCIAL MEDIA",
      image: "/asset/latest4.jpeg",
      bgImage: "/asset/latest4.png",
    },
    {
      id: 4,
      title: "Effective Facebook Ads: 5 Creative Tips to Drive Growth",
      author: "Jake Madoff",
      category: "MARKETING",
      subcategory: "SOCIAL MEDIA",
      image: "/asset/latest4.jpeg",
      bgImage: "/asset/latest5.png",
    },
  ],
];

export const TalentsObject = [
  {
    id: 0,
    talent: "talent_developers", // Translation key
    description: "description_developers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 1,
    talent: "talent_marketing_experts", // Translation key
    description: "description_marketing_experts", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 2,
    talent: "talent_designers", // Translation key
    description: "description_designers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 3,
    talent: "talent_engineers", // Translation key
    description: "description_engineers", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 4,
    talent: "talent_product_managers", // Translation key
    description: "description_product_managers", // Translation key
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 5,
    talent: "talent_content_creators", // Translation key
    description: "description_content_creators", // Translation key
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
];

export const jobBoardLocations = [
  { id: 1, name: "Zurich, Switzerland" },
  { id: 2, name: "Vienna, Austria" },
  { id: 3, name: "Luxembourg City, Luxembourg" },
  { id: 4, name: "Brussels, Belgium" },
  { id: 5, name: "Amsterdam, Netherlands" },
  { id: 6, name: "Copenhagen, Denmark" },
  { id: 7, name: "Prague, Czech Republic" },
  { id: 8, name: "Warsaw, Poland" },
  { id: 9, name: "Paris, France" },
  { id: 10, name: "Strasbourg, France" },
];

// Logos array for company icons
export const jobBoardHerologos = [
  { src: "/asset/job/comp1.svg", width: 100 },
  { src: "/asset/job/comp2.svg", width: 100 },
  { src: "/asset/job/comp7.svg", width: 70 },
  { src: "/asset/job/comp4.svg", width: 100 },
];

export const jobCard: JobPostTypes[] = [
  {
    id: "1",
    position: "Compliance Manager, Consumer Protection",
    company: "Coinbase",
    jobDescription:
      "Lead Coinbase's consumer protection compliance efforts by managing and ensuring regulatory adherence across all programs and operations. Design and implement compliance frameworks to safeguard customer interests and ensure legal standards are upheld.",
    Responsibilities:
      "• Develop and maintain robust compliance policies for consumer protection.\n• Conduct regular audits and risk assessments to ensure regulatory compliance.\n• Collaborate with legal teams to manage regulatory filings and reporting.\n• Provide strategic advice on compliance issues and improve compliance programs.",
    jobRequirements:
      "• Bachelor's degree in Finance, Law, or related field.\n• 5+ years of compliance experience, preferably in finance or blockchain.\n• Strong knowledge of consumer protection laws and regulatory frameworks.\n• Excellent communication and analytical skills.",
    location: "Ireland",
    posted: "Today",
    more: {
      location: "Remote",
      category: "Blockchain",
      level: "Senior",
      type: "Full Time",
    },
    categories: [
      "Blockchain and Crypto",
      "Finance",
      "Lending and Investments",
      "Software",
    ],
    employees: "51 - 200 employees",
    companyLogo: "/path-to-coinbase-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "2",
    position: "Frontend Developer",
    company: "Google",
    jobDescription:
      "Design and implement cutting-edge user interfaces for Google's web applications, working closely with UX/UI designers to ensure a seamless user experience.",
    Responsibilities:
      "• Collaborate with UX/UI designers to transform designs into responsive interfaces.\n• Write clean, maintainable, and scalable code using JavaScript, HTML, CSS, and React.\n• Optimize applications for maximum speed and scalability.\n• Debug and troubleshoot issues across browsers and platforms.",
    jobRequirements:
      "• Proficiency in JavaScript, HTML, CSS, and modern frameworks such as React.\n• 3+ years of experience in frontend development.\n• Strong understanding of web performance optimization and cross-browser compatibility.\n• Excellent problem-solving skills and attention to detail.",
    location: "California",
    posted: "1 day ago",
    more: {
      location: "Remote",
      category: "Software Development",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Software", "Frontend Development", "JavaScript", "React"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-google-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "3",
    position: "Data Scientist",
    company: "Microsoft",
    jobDescription:
      "Drive business impact through advanced data analysis, creating predictive models and actionable insights from large datasets.",
    Responsibilities:
      "• Collect, process, and analyze large data sets to uncover trends and insights.\n• Develop machine learning models to solve complex business problems.\n• Create data visualizations to communicate findings to stakeholders.\n• Collaborate with cross-functional teams to integrate data-driven decisions.",
    jobRequirements:
      "• Master's degree in Data Science, Statistics, or related field.\n• 3+ years of experience in data science, with proficiency in Python and R.\n• Strong knowledge of machine learning algorithms and statistical techniques.\n• Excellent communication and data visualization skills.",
    location: "USA",
    posted: "2 days ago",
    more: {
      location: "On-site",
      category: "Data Science",
      level: "Senior",
      type: "Full Time",
    },
    categories: ["AI", "Data Science", "Machine Learning"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-microsoft-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "4",
    position: "DevOps Engineer",
    company: "Amazon",
    jobDescription:
      "Manage infrastructure for development and production environments, enabling rapid and reliable deployment of software applications.",
    Responsibilities:
      "• Automate deployment pipelines using CI/CD tools.\n• Monitor and maintain cloud-based infrastructure for scalability and performance.\n• Troubleshoot issues and ensure high availability of services.\n• Implement security best practices and disaster recovery plans.",
    jobRequirements:
      "• 3+ years of experience in DevOps, with expertise in AWS and containerization.\n• Experience with CI/CD tools such as Jenkins or CircleCI.\n• Strong knowledge of cloud infrastructure and automation frameworks.\n• Problem-solving mindset and strong communication skills.",
    location: "London",
    posted: "3 days ago",
    more: {
      location: "On-site",
      category: "Cloud and DevOps",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Cloud", "DevOps", "AWS", "Automation"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-amazon-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "5",
    position: "Backend Developer",
    company: "Netflix",
    jobDescription:
      "Develop and maintain high-performance backend services and APIs to power Netflix's streaming platform and other services.",
    Responsibilities:
      "• Design and implement scalable server-side logic.\n• Collaborate with frontend developers to integrate user-facing elements.\n• Write efficient, testable, and reusable code for database integration.\n• Troubleshoot and debug applications for reliability and performance.",
    jobRequirements:
      "• Proficiency in Node.js and backend frameworks.\n• 3+ years of experience in backend development.\n• Strong understanding of databases, API development, and microservices architecture.\n• Excellent problem-solving skills and attention to detail.",
    location: "Los Angeles",
    posted: "Today",
    more: {
      location: "On-site",
      category: "Backend Development",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Software", "Backend Development", "Node.js", "Microservices"],
    employees: "5,000 - 10,000 employees",
    companyLogo: "/path-to-netflix-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "6",
    position: "Product Manager",
    company: "Spotify",
    jobDescription:
      "Lead the development and execution of product strategies for Spotify's global user base, from conception to delivery.",
    Responsibilities:
      "• Define and communicate the product vision and strategy.\n• Collaborate with cross-functional teams to gather and prioritize product requirements.\n• Oversee product development from ideation to launch.\n• Monitor product performance and iterate based on feedback.",
    jobRequirements:
      "• 5+ years of experience in product management.\n• Strong understanding of product lifecycle management and agile methodologies.\n• Excellent communication, leadership, and analytical skills.\n• Experience working with engineering teams to deliver tech products.",
    location: "Stockholm",
    posted: "4 days ago",
    more: {
      location: "On-site",
      category: "Product Management",
      level: "Senior",
      type: "Full Time",
    },
    categories: ["Product Management", "Agile", "Tech"],
    employees: "1,000 - 5,000 employees",
    companyLogo: "/path-to-spotify-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "7",
    position: "UX Designer",
    company: "Adobe",
    jobDescription:
      "Design user-centered solutions for Adobe's suite of software products, ensuring exceptional user experiences across platforms.",
    Responsibilities:
      "• Conduct user research to understand pain points and needs.\n• Create wireframes, prototypes, and high-fidelity designs.\n• Collaborate with developers to ensure design feasibility.\n• Test and iterate on designs based on user feedback.",
    jobRequirements:
      "• 3+ years of experience in UX design, with proficiency in tools like Sketch or Figma.\n• Strong portfolio showcasing UX/UI design skills.\n• Understanding of user research methods and design principles.\n• Excellent communication and teamwork skills.",
    location: "USA",
    posted: "5 days ago",
    more: {
      location: "On-site",
      category: "Design",
      level: "Mid-level",
      type: "Full Time",
    },
    categories: ["Design", "UX", "UI", "Software"],
    employees: "10,000+ employees",
    companyLogo: "/path-to-adobe-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
  {
    id: "8",
    position: "Blockchain Engineer",
    company: "Ripple",
    jobDescription:
      "Design and implement blockchain-based systems and smart contracts to support Ripple's financial solutions.",
    Responsibilities:
      "• Develop and maintain blockchain applications and services.\n• Implement smart contracts and consensus algorithms.\n• Collaborate with software engineers to integrate blockchain technology into products.\n• Monitor and optimize blockchain network performance.",
    jobRequirements:
      "• 3+ years of experience in blockchain development.\n• Proficiency in Solidity, smart contracts, and consensus algorithms.\n• Strong understanding of distributed systems and cryptography.\n• Excellent problem-solving skills and attention to detail.",
    location: "USA",
    posted: "6 days ago",
    more: {
      location: "On-site",
      category: "Blockchain",
      level: "Lead",
      type: "Full Time",
    },
    categories: ["Blockchain", "Cryptography", "Distributed Systems"],
    employees: "500 - 1,000 employees",
    companyLogo: "/path-to-ripple-logo.png",
    action: {
      label: "Read more",
      link: "#",
    },
  },
];

export const courseFilterObject = [
  {
    id: 0,
    course_id: "DS101",
    title: "Data Science",
    icon: "/asset/course-icon/bg1.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Clean up messy data, uncover patterns and insights, and communicate your findings. You'll start with an introduction to data analysis tools, including Jupyter Notebook, NumPy, pandas, and Matplotlib. Using these tools, you will ask questions about data and answer them through data.",
    level: "Beginner",
    skillsToLearn: [
      "Basic spreadsheet use",
      "Business KPIs",
      "SQL aggregations",
      "SQL joins",
      "Basic descriptive statistics",
      "Spreadsheet functions",
      "Quantitative data visualization",
    ],

    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Data Science",
        welcome:
          "Welcome to the Data Science course! This module will guide you through the foundational concepts of data analysis and introduce the tools and methods used in data science.",
        lessons: [
          {
            lesson: 1,
            title: "What is Data Science?",
            description:
              "An overview of data science, including its applications and why it's important in today's data-driven world.",
            videoLink: "https://www.youtube.com/embed/RBSUwFGa6Fk",
          },
          {
            lesson: 2,
            title: "Introduction to Jupyter Notebook",
            description:
              "Learn how to set up and use Jupyter Notebook for data analysis projects.",
            videoLink: "https://www.youtube.com/embed/5pf0_bpNbkw",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Data Cleaning and Preparation",
        welcome:
          "In this module, you'll learn how to clean and prepare raw data for analysis using pandas and other Python tools.",
        lessons: [
          {
            lesson: 1,
            title: "Handling Missing Data",
            description:
              "Learn techniques to identify, handle, and impute missing data.",
            videoLink: "https://www.youtube.com/embed/Vg4JLbxVuFA",
          },
          {
            lesson: 2,
            title: "Data Transformation",
            description:
              "Learn how to transform and normalize data for analysis using pandas.",
            videoLink: "https://www.youtube.com/embed/utfFv5a5CEY",
          },
          {
            lesson: 3,
            title: "Dealing with Outliers",
            description:
              "Understand what outliers are and how to handle them in your data set.",
            videoLink: "https://www.youtube.com/embed/3lQydBqWYk0",
          },
          {
            lesson: 4,
            title: "Working with Time Series Data",
            description:
              "Learn how to manage and process time series data in pandas.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Data Visualization and Insights",
        welcome:
          "This module will introduce you to Matplotlib and how to use visualizations to extract and communicate insights from data.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Matplotlib",
            description:
              "Learn the basics of Matplotlib and how to create visual representations of your data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Creating Bar Charts and Histograms",
            description:
              "Learn how to use Matplotlib to create bar charts and histograms for data comparison.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Line Charts and Scatter Plots",
            description:
              "Visualize trends and relationships between variables using line charts and scatter plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Advanced Data Visualization",
            description:
              "Learn advanced plotting techniques, such as subplots, dual-axis plots, and 3D plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "Interactive Data Visualization",
            description:
              "Explore interactive plotting libraries like Plotly for creating dynamic, web-based visualizations.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Statistical Analysis and Hypothesis Testing",
        welcome:
          "Dive deep into statistical methods and learn how to perform hypothesis testing using Python.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Descriptive Statistics",
            description:
              "Learn about measures of central tendency, variability, and how to describe data sets.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Probability Distributions",
            description:
              "Understand the different types of probability distributions, such as normal, binomial, and Poisson distributions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Sampling Methods",
            description:
              "Learn about various sampling techniques and how to select samples for statistical analysis.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Hypothesis Testing",
            description:
              "Learn the fundamentals of hypothesis testing, including null and alternative hypotheses, p-values, and significance levels.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "T-tests and Chi-Square Tests",
            description:
              "Perform t-tests and chi-square tests to compare groups and examine relationships between categorical variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 6,
            title: "Correlation and Regression Analysis",
            description:
              "Explore correlation and regression techniques to analyze the relationships between variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 7,
            title: "ANOVA (Analysis of Variance)",
            description:
              "Learn how to use ANOVA to compare multiple groups and determine if there are significant differences between them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 1,
    course_id: "PD102",
    title: "Programming & Development",
    icon: "/asset/course-icon/bg2.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Master essential programming languages and frameworks to build innovative software solutions. Learn the foundations of coding and software development with hands-on projects.",
    level: "Intermediate",
    skillsToLearn: [
      "Programming basics",
      "Version control with Git",
      "Frontend development (HTML, CSS, JavaScript)",
      "Backend development (Node.js, Express)",
      "Database integration",
      "Debugging and testing",
      "RESTful APIs",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Programming",
        welcome:
          "Welcome to the world of coding! This module covers the fundamentals of programming, including data types, control structures, and basic algorithms.",
        lessons: [
          {
            lesson: 1,
            title: "Programming Basics",
            description:
              "Learn the basics of programming, including variables, loops, and conditionals.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Data Types and Variables",
            description:
              "Explore the different data types and how to work with variables in programming.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Frontend Development",
        welcome:
          "Learn how to create visually appealing and interactive websites using HTML, CSS, and JavaScript.",
        lessons: [
          {
            lesson: 1,
            title: "HTML Basics",
            description:
              "Get familiar with the structure and syntax of HTML for building webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "CSS Styling",
            description:
              "Learn how to style your webpages and make them visually attractive using CSS.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "JavaScript Basics",
            description:
              "Understand the basics of JavaScript to add interactivity to your webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Backend Development with Node.js",
        welcome:
          "Master server-side development with Node.js and Express to create scalable web applications.",
        lessons: [
          {
            lesson: 1,
            title: "Node.js Basics",
            description:
              "Learn the basics of Node.js, a JavaScript runtime environment for server-side development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Express Framework",
            description:
              "Understand how to use Express.js to build backend APIs and handle HTTP requests.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Connecting to a Database",
            description:
              "Learn how to connect your Node.js application to databases like MongoDB.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "RESTful API Development",
        welcome:
          "Understand how to design and build RESTful APIs to enable communication between your frontend and backend.",
        lessons: [
          {
            lesson: 1,
            title: "What is a RESTful API?",
            description:
              "Learn the principles of RESTful architecture and how it facilitates communication between systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building APIs with Express",
            description:
              "Build RESTful APIs using Express and handle HTTP requests effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "API Authentication",
            description:
              "Learn about authentication methods for securing your APIs, including JWT and OAuth.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    course_id: "AI103",
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/bg3.jpeg",
    rating: 3,
    duration: 5,
    subtitle:
      "Dive into the fascinating world of AI and machine learning. Build intelligent systems and learn to solve real-world problems using cutting-edge AI techniques.",
    level: "Master",
    skillsToLearn: [
      "Machine learning algorithms",
      "Natural language processing (NLP)",
      "Computer vision",
      "Deep learning",
      "TensorFlow and Keras",
      "Model evaluation and optimization",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to AI",
        welcome:
          "Welcome to the AI course! This module covers the basic concepts of artificial intelligence, including its history and future potential.",
        lessons: [
          {
            lesson: 1,
            title: "What is Artificial Intelligence?",
            description:
              "Get an overview of artificial intelligence and its key subfields, including machine learning, NLP, and computer vision.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "History of AI",
            description:
              "Learn about the history of artificial intelligence and how it has evolved over the years.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Machine Learning Fundamentals",
        welcome:
          "In this module, you'll explore the core principles of machine learning, including supervised and unsupervised learning.",
        lessons: [
          {
            lesson: 1,
            title: "Supervised vs Unsupervised Learning",
            description:
              "Understand the difference between supervised and unsupervised learning and their respective use cases.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Linear Regression",
            description:
              "Learn the fundamentals of linear regression and its application in predicting continuous values.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Classification Algorithms",
            description:
              "Explore classification algorithms such as decision trees and k-nearest neighbors (KNN).",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deep Learning and Neural Networks",
        welcome:
          "Understand deep learning and neural networks, and learn how to implement these techniques using TensorFlow.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Neural Networks",
            description:
              "Learn the basics of neural networks and how they are used in deep learning.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building Neural Networks with TensorFlow",
            description:
              "Learn how to implement neural networks using TensorFlow and Keras for machine learning tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Training Neural Networks",
            description:
              "Understand how to train neural networks and optimize their performance using backpropagation and gradient descent.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Natural Language Processing (NLP)",
        welcome:
          "Explore NLP techniques and learn how to process and analyze text data.",
        lessons: [
          {
            lesson: 1,
            title: "Text Preprocessing",
            description:
              "Learn how to clean and preprocess text data for NLP tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Sentiment Analysis",
            description:
              "Understand how to use NLP techniques for sentiment analysis in social media or customer reviews.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Named Entity Recognition",
            description:
              "Learn how to identify named entities like names, dates, and locations in text data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    course_id: "BU104",
    title: "Business",
    icon: "/asset/course-icon/bg4.jpeg",
    rating: 5,
    duration: 4,
    subtitle:
      "Develop your business acumen and learn the essentials of entrepreneurship, strategy, and management. Perfect for aspiring business leaders and managers.",
    level: "Beginner",
    skillsToLearn: [
      "Business communication",
      "Strategic planning",
      "Market research",
      "Financial management basics",
      "Leadership skills",
      "Project management",
      "Risk assessment",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Business Fundamentals",
        welcome:
          "Welcome to the Business course! This module introduces key concepts in business, including entrepreneurship and organizational management.",
        lessons: [
          {
            lesson: 1,
            title: "What is Business?",
            description:
              "Learn the basic principles of business, including types of businesses, business models, and key concepts.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Understanding Business Structures",
            description:
              "Explore different types of business structures and how they affect operations, taxation, and management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Strategic Business Planning",
        welcome:
          "This module focuses on strategic planning, including SWOT analysis and how to create effective business plans.",
        lessons: [
          {
            lesson: 1,
            title: "Strategic Planning Basics",
            description:
              "Learn the fundamentals of strategic planning and its importance in business success.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "SWOT Analysis",
            description:
              "Learn how to conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for business strategy.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Market Research and Business Intelligence",
        welcome:
          "Understand the role of market research and business intelligence in identifying opportunities and making informed decisions.",
        lessons: [
          {
            lesson: 1,
            title: "Market Research Techniques",
            description:
              "Learn various methods of market research, including surveys, focus groups, and data analytics.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Business Intelligence Tools",
            description:
              "Understand how to use business intelligence tools to gather, analyze, and interpret business data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Leadership and Management",
        welcome:
          "Learn essential leadership and management skills to lead teams and organizations effectively.",
        lessons: [
          {
            lesson: 1,
            title: "Leadership Styles",
            description:
              "Explore different leadership styles and determine which one suits your approach to management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Team Building and Management",
            description:
              "Learn how to build high-performing teams and manage them effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Conflict Resolution",
            description:
              "Understand how to handle conflicts within teams and organizations to maintain a productive work environment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    course_id: "AS105",
    title: "Autonomous Systems",
    icon: "/asset/course-icon/bg5.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Explore the future of technology with autonomous systems. Learn how robotics and AI interact to create self-operating devices and intelligent systems.",
    level: "Beginner",
    skillsToLearn: [
      "Robotics fundamentals",
      "AI for robotics",
      "Embedded systems basics",
      "Path planning algorithms",
      "Sensor integration",
      "Control systems",
      "Simulating autonomous systems",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Autonomous Systems",
        welcome:
          "In this module, you will learn the basics of autonomous systems, including key concepts and applications in robotics and AI.",
        lessons: [
          {
            lesson: 1,
            title: "What are Autonomous Systems?",
            description:
              "Understand what autonomous systems are and explore the key components involved in building them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "AI in Robotics",
            description:
              "Learn how AI is integrated into robotics to create self-operating systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Robotics Fundamentals",
        welcome:
          "Dive deeper into robotics, covering sensors, actuators, and control systems that are essential for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Sensors in Robotics",
            description:
              "Explore different types of sensors used in robotics, such as vision sensors, motion sensors, and distance sensors.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Actuators and Motors",
            description:
              "Learn about actuators and how motors are used to control robot movement.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Embedded Systems for Autonomous Systems",
        welcome:
          "Learn the fundamentals of embedded systems, including microcontrollers and how they integrate with robots for control.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Embedded Systems",
            description:
              "Understand the role of embedded systems in robotics and autonomous systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Microcontrollers and Sensors",
            description:
              "Learn how microcontrollers work with sensors to gather data and control robotic actions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Path Planning and Control Algorithms",
        welcome:
          "This module covers advanced topics in path planning and control algorithms for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Path Planning Algorithms",
            description:
              "Learn different algorithms for path planning in robotics, such as A* and Dijkstra's algorithm.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Control Systems",
            description:
              "Explore various control systems used in robotics, including feedback loops and PID controllers.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    course_id: "PM106",
    title: "Product Management",
    icon: "/asset/course-icon/bg6.jpeg",
    rating: 3,
    duration: 4,
    subtitle:
      "Master the art of bringing ideas to life. Learn product strategy, roadmap planning, and managing teams to deliver impactful products.",
    level: "Master",
    skillsToLearn: [
      "Roadmap planning",
      "Agile methodologies",
      "Stakeholder communication",
      "Market analysis",
      "Product lifecycle management",
      "Prioritization frameworks",
      "User experience basics",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Product Management",
        welcome:
          "This module introduces the basics of product management, including the role of a product manager and the product lifecycle.",
        lessons: [
          {
            lesson: 1,
            title: "What is Product Management?",
            description:
              "Learn about the product manager's role in a company and the stages of product development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "The Product Lifecycle",
            description:
              "Understand the different stages of the product lifecycle and how product managers contribute to each stage.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Agile Methodologies and Roadmap Planning",
        welcome:
          "Learn how Agile methodologies drive product development and how to create and manage a product roadmap.",
        lessons: [
          {
            lesson: 1,
            title: "Agile Principles",
            description:
              "Understand the principles of Agile development and how they apply to product management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building a Product Roadmap",
            description:
              "Learn how to plan and prioritize features for your product roadmap.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Stakeholder Management and Communication",
        welcome:
          "Master the skills needed to effectively communicate with stakeholders and manage their expectations.",
        lessons: [
          {
            lesson: 1,
            title: "Understanding Stakeholder Needs",
            description:
              "Learn how to identify and understand the needs and concerns of stakeholders.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Effective Communication Strategies",
            description:
              "Explore strategies for clear and effective communication with stakeholders, including presentation and reporting skills.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "User Experience and Market Analysis",
        welcome:
          "Learn how to apply user experience principles and market research to build successful products.",
        lessons: [
          {
            lesson: 1,
            title: "User Experience Design Basics",
            description:
              "Understand the principles of user experience (UX) and how to design user-centric products.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Market Research and Competitive Analysis",
            description:
              "Learn how to analyze market trends and conduct competitive analysis to inform product decisions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    course_id: "CC107",
    title: "Cloud Computing",
    icon: "/asset/course-icon/bg7.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Understand the core concepts of cloud infrastructure. Learn to deploy, manage, and scale applications on popular cloud platforms.",
    level: "Intermediate",
    skillsToLearn: [
      "Cloud infrastructure basics",
      "Virtualization",
      "Cloud security fundamentals",
      "Deploying applications on cloud platforms",
      "Managing cloud resources",
      "Serverless computing",
      "Cost optimization in cloud computing",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Cloud Computing",
        welcome:
          "This module covers the basics of cloud computing, including cloud models, services, and infrastructure.",
        lessons: [
          {
            lesson: 1,
            title: "What is Cloud Computing?",
            description:
              "Understand the basic concepts of cloud computing, including the different cloud service models.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cloud Deployment Models",
            description:
              "Explore different cloud deployment models, such as public, private, and hybrid clouds.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Cloud Security and Virtualization",
        welcome:
          "Learn about the key principles of cloud security and how virtualization plays a role in cloud computing.",
        lessons: [
          {
            lesson: 1,
            title: "Cloud Security Fundamentals",
            description:
              "Understand the essential concepts of cloud security and how to protect cloud-based resources.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Virtualization in Cloud Computing",
            description:
              "Learn how virtualization enables cloud computing and its role in resource management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deploying and Managing Cloud Applications",
        welcome:
          "Learn how to deploy and manage applications in the cloud using popular platforms like AWS, Azure, and Google Cloud.",
        lessons: [
          {
            lesson: 1,
            title: "Deploying Applications on AWS",
            description:
              "Learn how to deploy and manage cloud applications on AWS, a popular cloud computing platform.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Managing Cloud Resources",
            description:
              "Understand how to manage cloud resources, such as storage, compute, and networking services.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Serverless Computing and Cost Optimization",
        welcome:
          "Explore serverless computing and how to optimize cloud costs to maximize efficiency and reduce expenses.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Serverless Computing",
            description:
              "Understand the concept of serverless computing and how it simplifies application deployment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cost Optimization in Cloud Computing",
            description:
              "Learn techniques to optimize cloud resources and minimize costs while maintaining performance.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },
];

export const PopularCourses = [
  {
    id: 0,
    course_id: "DS101",
    title: "Data Science",
    icon: "/asset/course-icon/bg1.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Clean up messy data, uncover patterns and insights, and communicate your findings. You'll start with an introduction to data analysis tools, including Jupyter Notebook, NumPy, pandas, and Matplotlib. Using these tools, you will ask questions about data and answer them through data.",
    level: "Beginner",
    skillsToLearn: [
      "Basic spreadsheet use",
      "Business KPIs",
      "SQL aggregations",
      "SQL joins",
      "Basic descriptive statistics",
      "Spreadsheet functions",
      "Quantitative data visualization",
    ],

    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Data Science",
        welcome:
          "Welcome to the Data Science course! This module will guide you through the foundational concepts of data analysis and introduce the tools and methods used in data science.",
        lessons: [
          {
            lesson: 1,
            title: "What is Data Science?",
            description:
              "An overview of data science, including its applications and why it's important in today's data-driven world.",
            videoLink: "https://www.youtube.com/embed/RBSUwFGa6Fk",
          },
          {
            lesson: 2,
            title: "Introduction to Jupyter Notebook",
            description:
              "Learn how to set up and use Jupyter Notebook for data analysis projects.",
            videoLink: "https://www.youtube.com/embed/5pf0_bpNbkw",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Data Cleaning and Preparation",
        welcome:
          "In this module, you'll learn how to clean and prepare raw data for analysis using pandas and other Python tools.",
        lessons: [
          {
            lesson: 1,
            title: "Handling Missing Data",
            description:
              "Learn techniques to identify, handle, and impute missing data.",
            videoLink: "https://www.youtube.com/embed/Vg4JLbxVuFA",
          },
          {
            lesson: 2,
            title: "Data Transformation",
            description:
              "Learn how to transform and normalize data for analysis using pandas.",
            videoLink: "https://www.youtube.com/embed/utfFv5a5CEY",
          },
          {
            lesson: 3,
            title: "Dealing with Outliers",
            description:
              "Understand what outliers are and how to handle them in your data set.",
            videoLink: "https://www.youtube.com/embed/3lQydBqWYk0",
          },
          {
            lesson: 4,
            title: "Working with Time Series Data",
            description:
              "Learn how to manage and process time series data in pandas.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Data Visualization and Insights",
        welcome:
          "This module will introduce you to Matplotlib and how to use visualizations to extract and communicate insights from data.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Matplotlib",
            description:
              "Learn the basics of Matplotlib and how to create visual representations of your data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Creating Bar Charts and Histograms",
            description:
              "Learn how to use Matplotlib to create bar charts and histograms for data comparison.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Line Charts and Scatter Plots",
            description:
              "Visualize trends and relationships between variables using line charts and scatter plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Advanced Data Visualization",
            description:
              "Learn advanced plotting techniques, such as subplots, dual-axis plots, and 3D plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "Interactive Data Visualization",
            description:
              "Explore interactive plotting libraries like Plotly for creating dynamic, web-based visualizations.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Statistical Analysis and Hypothesis Testing",
        welcome:
          "Dive deep into statistical methods and learn how to perform hypothesis testing using Python.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Descriptive Statistics",
            description:
              "Learn about measures of central tendency, variability, and how to describe data sets.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Probability Distributions",
            description:
              "Understand the different types of probability distributions, such as normal, binomial, and Poisson distributions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Sampling Methods",
            description:
              "Learn about various sampling techniques and how to select samples for statistical analysis.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Hypothesis Testing",
            description:
              "Learn the fundamentals of hypothesis testing, including null and alternative hypotheses, p-values, and significance levels.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "T-tests and Chi-Square Tests",
            description:
              "Perform t-tests and chi-square tests to compare groups and examine relationships between categorical variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 6,
            title: "Correlation and Regression Analysis",
            description:
              "Explore correlation and regression techniques to analyze the relationships between variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 7,
            title: "ANOVA (Analysis of Variance)",
            description:
              "Learn how to use ANOVA to compare multiple groups and determine if there are significant differences between them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 1,
    course_id: "PD102",
    title: "Programming & Development",
    icon: "/asset/course-icon/bg2.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Master essential programming languages and frameworks to build innovative software solutions. Learn the foundations of coding and software development with hands-on projects.",
    level: "Intermediate",
    skillsToLearn: [
      "Programming basics",
      "Version control with Git",
      "Frontend development (HTML, CSS, JavaScript)",
      "Backend development (Node.js, Express)",
      "Database integration",
      "Debugging and testing",
      "RESTful APIs",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Programming",
        welcome:
          "Welcome to the world of coding! This module covers the fundamentals of programming, including data types, control structures, and basic algorithms.",
        lessons: [
          {
            lesson: 1,
            title: "Programming Basics",
            description:
              "Learn the basics of programming, including variables, loops, and conditionals.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Data Types and Variables",
            description:
              "Explore the different data types and how to work with variables in programming.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Frontend Development",
        welcome:
          "Learn how to create visually appealing and interactive websites using HTML, CSS, and JavaScript.",
        lessons: [
          {
            lesson: 1,
            title: "HTML Basics",
            description:
              "Get familiar with the structure and syntax of HTML for building webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "CSS Styling",
            description:
              "Learn how to style your webpages and make them visually attractive using CSS.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "JavaScript Basics",
            description:
              "Understand the basics of JavaScript to add interactivity to your webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Backend Development with Node.js",
        welcome:
          "Master server-side development with Node.js and Express to create scalable web applications.",
        lessons: [
          {
            lesson: 1,
            title: "Node.js Basics",
            description:
              "Learn the basics of Node.js, a JavaScript runtime environment for server-side development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Express Framework",
            description:
              "Understand how to use Express.js to build backend APIs and handle HTTP requests.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Connecting to a Database",
            description:
              "Learn how to connect your Node.js application to databases like MongoDB.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "RESTful API Development",
        welcome:
          "Understand how to design and build RESTful APIs to enable communication between your frontend and backend.",
        lessons: [
          {
            lesson: 1,
            title: "What is a RESTful API?",
            description:
              "Learn the principles of RESTful architecture and how it facilitates communication between systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building APIs with Express",
            description:
              "Build RESTful APIs using Express and handle HTTP requests effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "API Authentication",
            description:
              "Learn about authentication methods for securing your APIs, including JWT and OAuth.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    course_id: "AI103",
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/bg3.jpeg",
    rating: 3,
    duration: 5,
    subtitle:
      "Dive into the fascinating world of AI and machine learning. Build intelligent systems and learn to solve real-world problems using cutting-edge AI techniques.",
    level: "Master",
    skillsToLearn: [
      "Machine learning algorithms",
      "Natural language processing (NLP)",
      "Computer vision",
      "Deep learning",
      "TensorFlow and Keras",
      "Model evaluation and optimization",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to AI",
        welcome:
          "Welcome to the AI course! This module covers the basic concepts of artificial intelligence, including its history and future potential.",
        lessons: [
          {
            lesson: 1,
            title: "What is Artificial Intelligence?",
            description:
              "Get an overview of artificial intelligence and its key subfields, including machine learning, NLP, and computer vision.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "History of AI",
            description:
              "Learn about the history of artificial intelligence and how it has evolved over the years.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Machine Learning Fundamentals",
        welcome:
          "In this module, you'll explore the core principles of machine learning, including supervised and unsupervised learning.",
        lessons: [
          {
            lesson: 1,
            title: "Supervised vs Unsupervised Learning",
            description:
              "Understand the difference between supervised and unsupervised learning and their respective use cases.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Linear Regression",
            description:
              "Learn the fundamentals of linear regression and its application in predicting continuous values.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Classification Algorithms",
            description:
              "Explore classification algorithms such as decision trees and k-nearest neighbors (KNN).",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deep Learning and Neural Networks",
        welcome:
          "Understand deep learning and neural networks, and learn how to implement these techniques using TensorFlow.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Neural Networks",
            description:
              "Learn the basics of neural networks and how they are used in deep learning.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building Neural Networks with TensorFlow",
            description:
              "Learn how to implement neural networks using TensorFlow and Keras for machine learning tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Training Neural Networks",
            description:
              "Understand how to train neural networks and optimize their performance using backpropagation and gradient descent.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Natural Language Processing (NLP)",
        welcome:
          "Explore NLP techniques and learn how to process and analyze text data.",
        lessons: [
          {
            lesson: 1,
            title: "Text Preprocessing",
            description:
              "Learn how to clean and preprocess text data for NLP tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Sentiment Analysis",
            description:
              "Understand how to use NLP techniques for sentiment analysis in social media or customer reviews.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Named Entity Recognition",
            description:
              "Learn how to identify named entities like names, dates, and locations in text data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    course_id: "BU104",
    title: "Business",
    icon: "/asset/course-icon/bg4.jpeg",
    rating: 5,
    duration: 4,
    subtitle:
      "Develop your business acumen and learn the essentials of entrepreneurship, strategy, and management. Perfect for aspiring business leaders and managers.",
    level: "Beginner",
    skillsToLearn: [
      "Business communication",
      "Strategic planning",
      "Market research",
      "Financial management basics",
      "Leadership skills",
      "Project management",
      "Risk assessment",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Business Fundamentals",
        welcome:
          "Welcome to the Business course! This module introduces key concepts in business, including entrepreneurship and organizational management.",
        lessons: [
          {
            lesson: 1,
            title: "What is Business?",
            description:
              "Learn the basic principles of business, including types of businesses, business models, and key concepts.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Understanding Business Structures",
            description:
              "Explore different types of business structures and how they affect operations, taxation, and management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Strategic Business Planning",
        welcome:
          "This module focuses on strategic planning, including SWOT analysis and how to create effective business plans.",
        lessons: [
          {
            lesson: 1,
            title: "Strategic Planning Basics",
            description:
              "Learn the fundamentals of strategic planning and its importance in business success.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "SWOT Analysis",
            description:
              "Learn how to conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for business strategy.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Market Research and Business Intelligence",
        welcome:
          "Understand the role of market research and business intelligence in identifying opportunities and making informed decisions.",
        lessons: [
          {
            lesson: 1,
            title: "Market Research Techniques",
            description:
              "Learn various methods of market research, including surveys, focus groups, and data analytics.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Business Intelligence Tools",
            description:
              "Understand how to use business intelligence tools to gather, analyze, and interpret business data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Leadership and Management",
        welcome:
          "Learn essential leadership and management skills to lead teams and organizations effectively.",
        lessons: [
          {
            lesson: 1,
            title: "Leadership Styles",
            description:
              "Explore different leadership styles and determine which one suits your approach to management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Team Building and Management",
            description:
              "Learn how to build high-performing teams and manage them effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Conflict Resolution",
            description:
              "Understand how to handle conflicts within teams and organizations to maintain a productive work environment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    course_id: "AS105",
    title: "Autonomous Systems",
    icon: "/asset/course-icon/bg5.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Explore the future of technology with autonomous systems. Learn how robotics and AI interact to create self-operating devices and intelligent systems.",
    level: "Beginner",
    skillsToLearn: [
      "Robotics fundamentals",
      "AI for robotics",
      "Embedded systems basics",
      "Path planning algorithms",
      "Sensor integration",
      "Control systems",
      "Simulating autonomous systems",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Autonomous Systems",
        welcome:
          "In this module, you will learn the basics of autonomous systems, including key concepts and applications in robotics and AI.",
        lessons: [
          {
            lesson: 1,
            title: "What are Autonomous Systems?",
            description:
              "Understand what autonomous systems are and explore the key components involved in building them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "AI in Robotics",
            description:
              "Learn how AI is integrated into robotics to create self-operating systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Robotics Fundamentals",
        welcome:
          "Dive deeper into robotics, covering sensors, actuators, and control systems that are essential for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Sensors in Robotics",
            description:
              "Explore different types of sensors used in robotics, such as vision sensors, motion sensors, and distance sensors.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Actuators and Motors",
            description:
              "Learn about actuators and how motors are used to control robot movement.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Embedded Systems for Autonomous Systems",
        welcome:
          "Learn the fundamentals of embedded systems, including microcontrollers and how they integrate with robots for control.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Embedded Systems",
            description:
              "Understand the role of embedded systems in robotics and autonomous systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Microcontrollers and Sensors",
            description:
              "Learn how microcontrollers work with sensors to gather data and control robotic actions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Path Planning and Control Algorithms",
        welcome:
          "This module covers advanced topics in path planning and control algorithms for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Path Planning Algorithms",
            description:
              "Learn different algorithms for path planning in robotics, such as A* and Dijkstra's algorithm.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Control Systems",
            description:
              "Explore various control systems used in robotics, including feedback loops and PID controllers.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    course_id: "PM106",
    title: "Product Management",
    icon: "/asset/course-icon/bg6.jpeg",
    rating: 3,
    duration: 4,
    subtitle:
      "Master the art of bringing ideas to life. Learn product strategy, roadmap planning, and managing teams to deliver impactful products.",
    level: "Master",
    skillsToLearn: [
      "Roadmap planning",
      "Agile methodologies",
      "Stakeholder communication",
      "Market analysis",
      "Product lifecycle management",
      "Prioritization frameworks",
      "User experience basics",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Product Management",
        welcome:
          "This module introduces the basics of product management, including the role of a product manager and the product lifecycle.",
        lessons: [
          {
            lesson: 1,
            title: "What is Product Management?",
            description:
              "Learn about the product manager's role in a company and the stages of product development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "The Product Lifecycle",
            description:
              "Understand the different stages of the product lifecycle and how product managers contribute to each stage.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Agile Methodologies and Roadmap Planning",
        welcome:
          "Learn how Agile methodologies drive product development and how to create and manage a product roadmap.",
        lessons: [
          {
            lesson: 1,
            title: "Agile Principles",
            description:
              "Understand the principles of Agile development and how they apply to product management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building a Product Roadmap",
            description:
              "Learn how to plan and prioritize features for your product roadmap.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Stakeholder Management and Communication",
        welcome:
          "Master the skills needed to effectively communicate with stakeholders and manage their expectations.",
        lessons: [
          {
            lesson: 1,
            title: "Understanding Stakeholder Needs",
            description:
              "Learn how to identify and understand the needs and concerns of stakeholders.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Effective Communication Strategies",
            description:
              "Explore strategies for clear and effective communication with stakeholders, including presentation and reporting skills.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "User Experience and Market Analysis",
        welcome:
          "Learn how to apply user experience principles and market research to build successful products.",
        lessons: [
          {
            lesson: 1,
            title: "User Experience Design Basics",
            description:
              "Understand the principles of user experience (UX) and how to design user-centric products.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Market Research and Competitive Analysis",
            description:
              "Learn how to analyze market trends and conduct competitive analysis to inform product decisions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    course_id: "CC107",
    title: "Cloud Computing",
    icon: "/asset/course-icon/bg7.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Understand the core concepts of cloud infrastructure. Learn to deploy, manage, and scale applications on popular cloud platforms.",
    level: "Intermediate",
    skillsToLearn: [
      "Cloud infrastructure basics",
      "Virtualization",
      "Cloud security fundamentals",
      "Deploying applications on cloud platforms",
      "Managing cloud resources",
      "Serverless computing",
      "Cost optimization in cloud computing",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Cloud Computing",
        welcome:
          "This module covers the basics of cloud computing, including cloud models, services, and infrastructure.",
        lessons: [
          {
            lesson: 1,
            title: "What is Cloud Computing?",
            description:
              "Understand the basic concepts of cloud computing, including the different cloud service models.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cloud Deployment Models",
            description:
              "Explore different cloud deployment models, such as public, private, and hybrid clouds.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Cloud Security and Virtualization",
        welcome:
          "Learn about the key principles of cloud security and how virtualization plays a role in cloud computing.",
        lessons: [
          {
            lesson: 1,
            title: "Cloud Security Fundamentals",
            description:
              "Understand the essential concepts of cloud security and how to protect cloud-based resources.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Virtualization in Cloud Computing",
            description:
              "Learn how virtualization enables cloud computing and its role in resource management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deploying and Managing Cloud Applications",
        welcome:
          "Learn how to deploy and manage applications in the cloud using popular platforms like AWS, Azure, and Google Cloud.",
        lessons: [
          {
            lesson: 1,
            title: "Deploying Applications on AWS",
            description:
              "Learn how to deploy and manage cloud applications on AWS, a popular cloud computing platform.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Managing Cloud Resources",
            description:
              "Understand how to manage cloud resources, such as storage, compute, and networking services.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Serverless Computing and Cost Optimization",
        welcome:
          "Explore serverless computing and how to optimize cloud costs to maximize efficiency and reduce expenses.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Serverless Computing",
            description:
              "Understand the concept of serverless computing and how it simplifies application deployment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cost Optimization in Cloud Computing",
            description:
              "Learn techniques to optimize cloud resources and minimize costs while maintaining performance.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },
];

export const DataSkillsCourses = [
  {
    id: 0,
    course_id: "DS101",
    title: "Data Science",
    icon: "/asset/course-icon/bg1.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Clean up messy data, uncover patterns and insights, and communicate your findings. You'll start with an introduction to data analysis tools, including Jupyter Notebook, NumPy, pandas, and Matplotlib. Using these tools, you will ask questions about data and answer them through data.",
    level: "Beginner",
    skillsToLearn: [
      "Basic spreadsheet use",
      "Business KPIs",
      "SQL aggregations",
      "SQL joins",
      "Basic descriptive statistics",
      "Spreadsheet functions",
      "Quantitative data visualization",
    ],

    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Data Science",
        welcome:
          "Welcome to the Data Science course! This module will guide you through the foundational concepts of data analysis and introduce the tools and methods used in data science.",
        lessons: [
          {
            lesson: 1,
            title: "What is Data Science?",
            description:
              "An overview of data science, including its applications and why it's important in today's data-driven world.",
            videoLink: "https://www.youtube.com/embed/RBSUwFGa6Fk",
          },
          {
            lesson: 2,
            title: "Introduction to Jupyter Notebook",
            description:
              "Learn how to set up and use Jupyter Notebook for data analysis projects.",
            videoLink: "https://www.youtube.com/embed/5pf0_bpNbkw",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Data Cleaning and Preparation",
        welcome:
          "In this module, you'll learn how to clean and prepare raw data for analysis using pandas and other Python tools.",
        lessons: [
          {
            lesson: 1,
            title: "Handling Missing Data",
            description:
              "Learn techniques to identify, handle, and impute missing data.",
            videoLink: "https://www.youtube.com/embed/Vg4JLbxVuFA",
          },
          {
            lesson: 2,
            title: "Data Transformation",
            description:
              "Learn how to transform and normalize data for analysis using pandas.",
            videoLink: "https://www.youtube.com/embed/utfFv5a5CEY",
          },
          {
            lesson: 3,
            title: "Dealing with Outliers",
            description:
              "Understand what outliers are and how to handle them in your data set.",
            videoLink: "https://www.youtube.com/embed/3lQydBqWYk0",
          },
          {
            lesson: 4,
            title: "Working with Time Series Data",
            description:
              "Learn how to manage and process time series data in pandas.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Data Visualization and Insights",
        welcome:
          "This module will introduce you to Matplotlib and how to use visualizations to extract and communicate insights from data.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Matplotlib",
            description:
              "Learn the basics of Matplotlib and how to create visual representations of your data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Creating Bar Charts and Histograms",
            description:
              "Learn how to use Matplotlib to create bar charts and histograms for data comparison.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Line Charts and Scatter Plots",
            description:
              "Visualize trends and relationships between variables using line charts and scatter plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Advanced Data Visualization",
            description:
              "Learn advanced plotting techniques, such as subplots, dual-axis plots, and 3D plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "Interactive Data Visualization",
            description:
              "Explore interactive plotting libraries like Plotly for creating dynamic, web-based visualizations.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Statistical Analysis and Hypothesis Testing",
        welcome:
          "Dive deep into statistical methods and learn how to perform hypothesis testing using Python.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Descriptive Statistics",
            description:
              "Learn about measures of central tendency, variability, and how to describe data sets.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Probability Distributions",
            description:
              "Understand the different types of probability distributions, such as normal, binomial, and Poisson distributions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Sampling Methods",
            description:
              "Learn about various sampling techniques and how to select samples for statistical analysis.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Hypothesis Testing",
            description:
              "Learn the fundamentals of hypothesis testing, including null and alternative hypotheses, p-values, and significance levels.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "T-tests and Chi-Square Tests",
            description:
              "Perform t-tests and chi-square tests to compare groups and examine relationships between categorical variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 6,
            title: "Correlation and Regression Analysis",
            description:
              "Explore correlation and regression techniques to analyze the relationships between variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 7,
            title: "ANOVA (Analysis of Variance)",
            description:
              "Learn how to use ANOVA to compare multiple groups and determine if there are significant differences between them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 1,
    course_id: "PD102",
    title: "Programming & Development",
    icon: "/asset/course-icon/bg2.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Master essential programming languages and frameworks to build innovative software solutions. Learn the foundations of coding and software development with hands-on projects.",
    level: "Intermediate",
    skillsToLearn: [
      "Programming basics",
      "Version control with Git",
      "Frontend development (HTML, CSS, JavaScript)",
      "Backend development (Node.js, Express)",
      "Database integration",
      "Debugging and testing",
      "RESTful APIs",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Programming",
        welcome:
          "Welcome to the world of coding! This module covers the fundamentals of programming, including data types, control structures, and basic algorithms.",
        lessons: [
          {
            lesson: 1,
            title: "Programming Basics",
            description:
              "Learn the basics of programming, including variables, loops, and conditionals.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Data Types and Variables",
            description:
              "Explore the different data types and how to work with variables in programming.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Frontend Development",
        welcome:
          "Learn how to create visually appealing and interactive websites using HTML, CSS, and JavaScript.",
        lessons: [
          {
            lesson: 1,
            title: "HTML Basics",
            description:
              "Get familiar with the structure and syntax of HTML for building webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "CSS Styling",
            description:
              "Learn how to style your webpages and make them visually attractive using CSS.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "JavaScript Basics",
            description:
              "Understand the basics of JavaScript to add interactivity to your webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Backend Development with Node.js",
        welcome:
          "Master server-side development with Node.js and Express to create scalable web applications.",
        lessons: [
          {
            lesson: 1,
            title: "Node.js Basics",
            description:
              "Learn the basics of Node.js, a JavaScript runtime environment for server-side development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Express Framework",
            description:
              "Understand how to use Express.js to build backend APIs and handle HTTP requests.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Connecting to a Database",
            description:
              "Learn how to connect your Node.js application to databases like MongoDB.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "RESTful API Development",
        welcome:
          "Understand how to design and build RESTful APIs to enable communication between your frontend and backend.",
        lessons: [
          {
            lesson: 1,
            title: "What is a RESTful API?",
            description:
              "Learn the principles of RESTful architecture and how it facilitates communication between systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building APIs with Express",
            description:
              "Build RESTful APIs using Express and handle HTTP requests effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "API Authentication",
            description:
              "Learn about authentication methods for securing your APIs, including JWT and OAuth.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    course_id: "AI103",
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/bg3.jpeg",
    rating: 3,
    duration: 5,
    subtitle:
      "Dive into the fascinating world of AI and machine learning. Build intelligent systems and learn to solve real-world problems using cutting-edge AI techniques.",
    level: "Master",
    skillsToLearn: [
      "Machine learning algorithms",
      "Natural language processing (NLP)",
      "Computer vision",
      "Deep learning",
      "TensorFlow and Keras",
      "Model evaluation and optimization",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to AI",
        welcome:
          "Welcome to the AI course! This module covers the basic concepts of artificial intelligence, including its history and future potential.",
        lessons: [
          {
            lesson: 1,
            title: "What is Artificial Intelligence?",
            description:
              "Get an overview of artificial intelligence and its key subfields, including machine learning, NLP, and computer vision.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "History of AI",
            description:
              "Learn about the history of artificial intelligence and how it has evolved over the years.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Machine Learning Fundamentals",
        welcome:
          "In this module, you'll explore the core principles of machine learning, including supervised and unsupervised learning.",
        lessons: [
          {
            lesson: 1,
            title: "Supervised vs Unsupervised Learning",
            description:
              "Understand the difference between supervised and unsupervised learning and their respective use cases.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Linear Regression",
            description:
              "Learn the fundamentals of linear regression and its application in predicting continuous values.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Classification Algorithms",
            description:
              "Explore classification algorithms such as decision trees and k-nearest neighbors (KNN).",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deep Learning and Neural Networks",
        welcome:
          "Understand deep learning and neural networks, and learn how to implement these techniques using TensorFlow.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Neural Networks",
            description:
              "Learn the basics of neural networks and how they are used in deep learning.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building Neural Networks with TensorFlow",
            description:
              "Learn how to implement neural networks using TensorFlow and Keras for machine learning tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Training Neural Networks",
            description:
              "Understand how to train neural networks and optimize their performance using backpropagation and gradient descent.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Natural Language Processing (NLP)",
        welcome:
          "Explore NLP techniques and learn how to process and analyze text data.",
        lessons: [
          {
            lesson: 1,
            title: "Text Preprocessing",
            description:
              "Learn how to clean and preprocess text data for NLP tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Sentiment Analysis",
            description:
              "Understand how to use NLP techniques for sentiment analysis in social media or customer reviews.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Named Entity Recognition",
            description:
              "Learn how to identify named entities like names, dates, and locations in text data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    course_id: "BU104",
    title: "Business",
    icon: "/asset/course-icon/bg4.jpeg",
    rating: 5,
    duration: 4,
    subtitle:
      "Develop your business acumen and learn the essentials of entrepreneurship, strategy, and management. Perfect for aspiring business leaders and managers.",
    level: "Beginner",
    skillsToLearn: [
      "Business communication",
      "Strategic planning",
      "Market research",
      "Financial management basics",
      "Leadership skills",
      "Project management",
      "Risk assessment",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Business Fundamentals",
        welcome:
          "Welcome to the Business course! This module introduces key concepts in business, including entrepreneurship and organizational management.",
        lessons: [
          {
            lesson: 1,
            title: "What is Business?",
            description:
              "Learn the basic principles of business, including types of businesses, business models, and key concepts.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Understanding Business Structures",
            description:
              "Explore different types of business structures and how they affect operations, taxation, and management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Strategic Business Planning",
        welcome:
          "This module focuses on strategic planning, including SWOT analysis and how to create effective business plans.",
        lessons: [
          {
            lesson: 1,
            title: "Strategic Planning Basics",
            description:
              "Learn the fundamentals of strategic planning and its importance in business success.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "SWOT Analysis",
            description:
              "Learn how to conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for business strategy.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Market Research and Business Intelligence",
        welcome:
          "Understand the role of market research and business intelligence in identifying opportunities and making informed decisions.",
        lessons: [
          {
            lesson: 1,
            title: "Market Research Techniques",
            description:
              "Learn various methods of market research, including surveys, focus groups, and data analytics.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Business Intelligence Tools",
            description:
              "Understand how to use business intelligence tools to gather, analyze, and interpret business data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Leadership and Management",
        welcome:
          "Learn essential leadership and management skills to lead teams and organizations effectively.",
        lessons: [
          {
            lesson: 1,
            title: "Leadership Styles",
            description:
              "Explore different leadership styles and determine which one suits your approach to management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Team Building and Management",
            description:
              "Learn how to build high-performing teams and manage them effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Conflict Resolution",
            description:
              "Understand how to handle conflicts within teams and organizations to maintain a productive work environment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    course_id: "AS105",
    title: "Autonomous Systems",
    icon: "/asset/course-icon/bg5.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Explore the future of technology with autonomous systems. Learn how robotics and AI interact to create self-operating devices and intelligent systems.",
    level: "Beginner",
    skillsToLearn: [
      "Robotics fundamentals",
      "AI for robotics",
      "Embedded systems basics",
      "Path planning algorithms",
      "Sensor integration",
      "Control systems",
      "Simulating autonomous systems",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Autonomous Systems",
        welcome:
          "In this module, you will learn the basics of autonomous systems, including key concepts and applications in robotics and AI.",
        lessons: [
          {
            lesson: 1,
            title: "What are Autonomous Systems?",
            description:
              "Understand what autonomous systems are and explore the key components involved in building them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "AI in Robotics",
            description:
              "Learn how AI is integrated into robotics to create self-operating systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Robotics Fundamentals",
        welcome:
          "Dive deeper into robotics, covering sensors, actuators, and control systems that are essential for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Sensors in Robotics",
            description:
              "Explore different types of sensors used in robotics, such as vision sensors, motion sensors, and distance sensors.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Actuators and Motors",
            description:
              "Learn about actuators and how motors are used to control robot movement.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Embedded Systems for Autonomous Systems",
        welcome:
          "Learn the fundamentals of embedded systems, including microcontrollers and how they integrate with robots for control.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Embedded Systems",
            description:
              "Understand the role of embedded systems in robotics and autonomous systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Microcontrollers and Sensors",
            description:
              "Learn how microcontrollers work with sensors to gather data and control robotic actions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Path Planning and Control Algorithms",
        welcome:
          "This module covers advanced topics in path planning and control algorithms for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Path Planning Algorithms",
            description:
              "Learn different algorithms for path planning in robotics, such as A* and Dijkstra's algorithm.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Control Systems",
            description:
              "Explore various control systems used in robotics, including feedback loops and PID controllers.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    course_id: "PM106",
    title: "Product Management",
    icon: "/asset/course-icon/bg6.jpeg",
    rating: 3,
    duration: 4,
    subtitle:
      "Master the art of bringing ideas to life. Learn product strategy, roadmap planning, and managing teams to deliver impactful products.",
    level: "Master",
    skillsToLearn: [
      "Roadmap planning",
      "Agile methodologies",
      "Stakeholder communication",
      "Market analysis",
      "Product lifecycle management",
      "Prioritization frameworks",
      "User experience basics",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Product Management",
        welcome:
          "This module introduces the basics of product management, including the role of a product manager and the product lifecycle.",
        lessons: [
          {
            lesson: 1,
            title: "What is Product Management?",
            description:
              "Learn about the product manager's role in a company and the stages of product development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "The Product Lifecycle",
            description:
              "Understand the different stages of the product lifecycle and how product managers contribute to each stage.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Agile Methodologies and Roadmap Planning",
        welcome:
          "Learn how Agile methodologies drive product development and how to create and manage a product roadmap.",
        lessons: [
          {
            lesson: 1,
            title: "Agile Principles",
            description:
              "Understand the principles of Agile development and how they apply to product management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building a Product Roadmap",
            description:
              "Learn how to plan and prioritize features for your product roadmap.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Stakeholder Management and Communication",
        welcome:
          "Master the skills needed to effectively communicate with stakeholders and manage their expectations.",
        lessons: [
          {
            lesson: 1,
            title: "Understanding Stakeholder Needs",
            description:
              "Learn how to identify and understand the needs and concerns of stakeholders.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Effective Communication Strategies",
            description:
              "Explore strategies for clear and effective communication with stakeholders, including presentation and reporting skills.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "User Experience and Market Analysis",
        welcome:
          "Learn how to apply user experience principles and market research to build successful products.",
        lessons: [
          {
            lesson: 1,
            title: "User Experience Design Basics",
            description:
              "Understand the principles of user experience (UX) and how to design user-centric products.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Market Research and Competitive Analysis",
            description:
              "Learn how to analyze market trends and conduct competitive analysis to inform product decisions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    course_id: "CC107",
    title: "Cloud Computing",
    icon: "/asset/course-icon/bg7.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Understand the core concepts of cloud infrastructure. Learn to deploy, manage, and scale applications on popular cloud platforms.",
    level: "Intermediate",
    skillsToLearn: [
      "Cloud infrastructure basics",
      "Virtualization",
      "Cloud security fundamentals",
      "Deploying applications on cloud platforms",
      "Managing cloud resources",
      "Serverless computing",
      "Cost optimization in cloud computing",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Cloud Computing",
        welcome:
          "This module covers the basics of cloud computing, including cloud models, services, and infrastructure.",
        lessons: [
          {
            lesson: 1,
            title: "What is Cloud Computing?",
            description:
              "Understand the basic concepts of cloud computing, including the different cloud service models.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cloud Deployment Models",
            description:
              "Explore different cloud deployment models, such as public, private, and hybrid clouds.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Cloud Security and Virtualization",
        welcome:
          "Learn about the key principles of cloud security and how virtualization plays a role in cloud computing.",
        lessons: [
          {
            lesson: 1,
            title: "Cloud Security Fundamentals",
            description:
              "Understand the essential concepts of cloud security and how to protect cloud-based resources.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Virtualization in Cloud Computing",
            description:
              "Learn how virtualization enables cloud computing and its role in resource management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deploying and Managing Cloud Applications",
        welcome:
          "Learn how to deploy and manage applications in the cloud using popular platforms like AWS, Azure, and Google Cloud.",
        lessons: [
          {
            lesson: 1,
            title: "Deploying Applications on AWS",
            description:
              "Learn how to deploy and manage cloud applications on AWS, a popular cloud computing platform.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Managing Cloud Resources",
            description:
              "Understand how to manage cloud resources, such as storage, compute, and networking services.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Serverless Computing and Cost Optimization",
        welcome:
          "Explore serverless computing and how to optimize cloud costs to maximize efficiency and reduce expenses.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Serverless Computing",
            description:
              "Understand the concept of serverless computing and how it simplifies application deployment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cost Optimization in Cloud Computing",
            description:
              "Learn techniques to optimize cloud resources and minimize costs while maintaining performance.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },
];

export const LearnNewSkill = [
  {
    id: 0,
    course_id: "DS101",
    title: "Data Science",
    icon: "/asset/course-icon/bg1.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Clean up messy data, uncover patterns and insights, and communicate your findings. You'll start with an introduction to data analysis tools, including Jupyter Notebook, NumPy, pandas, and Matplotlib. Using these tools, you will ask questions about data and answer them through data.",
    level: "Beginner",
    skillsToLearn: [
      "Basic spreadsheet use",
      "Business KPIs",
      "SQL aggregations",
      "SQL joins",
      "Basic descriptive statistics",
      "Spreadsheet functions",
      "Quantitative data visualization",
    ],

    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Data Science",
        welcome:
          "Welcome to the Data Science course! This module will guide you through the foundational concepts of data analysis and introduce the tools and methods used in data science.",
        lessons: [
          {
            lesson: 1,
            title: "What is Data Science?",
            description:
              "An overview of data science, including its applications and why it's important in today's data-driven world.",
            videoLink: "https://www.youtube.com/embed/RBSUwFGa6Fk",
          },
          {
            lesson: 2,
            title: "Introduction to Jupyter Notebook",
            description:
              "Learn how to set up and use Jupyter Notebook for data analysis projects.",
            videoLink: "https://www.youtube.com/embed/5pf0_bpNbkw",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Data Cleaning and Preparation",
        welcome:
          "In this module, you'll learn how to clean and prepare raw data for analysis using pandas and other Python tools.",
        lessons: [
          {
            lesson: 1,
            title: "Handling Missing Data",
            description:
              "Learn techniques to identify, handle, and impute missing data.",
            videoLink: "https://www.youtube.com/embed/Vg4JLbxVuFA",
          },
          {
            lesson: 2,
            title: "Data Transformation",
            description:
              "Learn how to transform and normalize data for analysis using pandas.",
            videoLink: "https://www.youtube.com/embed/utfFv5a5CEY",
          },
          {
            lesson: 3,
            title: "Dealing with Outliers",
            description:
              "Understand what outliers are and how to handle them in your data set.",
            videoLink: "https://www.youtube.com/embed/3lQydBqWYk0",
          },
          {
            lesson: 4,
            title: "Working with Time Series Data",
            description:
              "Learn how to manage and process time series data in pandas.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Data Visualization and Insights",
        welcome:
          "This module will introduce you to Matplotlib and how to use visualizations to extract and communicate insights from data.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Matplotlib",
            description:
              "Learn the basics of Matplotlib and how to create visual representations of your data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Creating Bar Charts and Histograms",
            description:
              "Learn how to use Matplotlib to create bar charts and histograms for data comparison.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Line Charts and Scatter Plots",
            description:
              "Visualize trends and relationships between variables using line charts and scatter plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Advanced Data Visualization",
            description:
              "Learn advanced plotting techniques, such as subplots, dual-axis plots, and 3D plots.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "Interactive Data Visualization",
            description:
              "Explore interactive plotting libraries like Plotly for creating dynamic, web-based visualizations.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Statistical Analysis and Hypothesis Testing",
        welcome:
          "Dive deep into statistical methods and learn how to perform hypothesis testing using Python.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Descriptive Statistics",
            description:
              "Learn about measures of central tendency, variability, and how to describe data sets.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Probability Distributions",
            description:
              "Understand the different types of probability distributions, such as normal, binomial, and Poisson distributions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Sampling Methods",
            description:
              "Learn about various sampling techniques and how to select samples for statistical analysis.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 4,
            title: "Hypothesis Testing",
            description:
              "Learn the fundamentals of hypothesis testing, including null and alternative hypotheses, p-values, and significance levels.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 5,
            title: "T-tests and Chi-Square Tests",
            description:
              "Perform t-tests and chi-square tests to compare groups and examine relationships between categorical variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 6,
            title: "Correlation and Regression Analysis",
            description:
              "Explore correlation and regression techniques to analyze the relationships between variables.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 7,
            title: "ANOVA (Analysis of Variance)",
            description:
              "Learn how to use ANOVA to compare multiple groups and determine if there are significant differences between them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 1,
    course_id: "PD102",
    title: "Programming & Development",
    icon: "/asset/course-icon/bg2.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Master essential programming languages and frameworks to build innovative software solutions. Learn the foundations of coding and software development with hands-on projects.",
    level: "Intermediate",
    skillsToLearn: [
      "Programming basics",
      "Version control with Git",
      "Frontend development (HTML, CSS, JavaScript)",
      "Backend development (Node.js, Express)",
      "Database integration",
      "Debugging and testing",
      "RESTful APIs",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Programming",
        welcome:
          "Welcome to the world of coding! This module covers the fundamentals of programming, including data types, control structures, and basic algorithms.",
        lessons: [
          {
            lesson: 1,
            title: "Programming Basics",
            description:
              "Learn the basics of programming, including variables, loops, and conditionals.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Data Types and Variables",
            description:
              "Explore the different data types and how to work with variables in programming.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Frontend Development",
        welcome:
          "Learn how to create visually appealing and interactive websites using HTML, CSS, and JavaScript.",
        lessons: [
          {
            lesson: 1,
            title: "HTML Basics",
            description:
              "Get familiar with the structure and syntax of HTML for building webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "CSS Styling",
            description:
              "Learn how to style your webpages and make them visually attractive using CSS.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "JavaScript Basics",
            description:
              "Understand the basics of JavaScript to add interactivity to your webpages.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Backend Development with Node.js",
        welcome:
          "Master server-side development with Node.js and Express to create scalable web applications.",
        lessons: [
          {
            lesson: 1,
            title: "Node.js Basics",
            description:
              "Learn the basics of Node.js, a JavaScript runtime environment for server-side development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Express Framework",
            description:
              "Understand how to use Express.js to build backend APIs and handle HTTP requests.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Connecting to a Database",
            description:
              "Learn how to connect your Node.js application to databases like MongoDB.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "RESTful API Development",
        welcome:
          "Understand how to design and build RESTful APIs to enable communication between your frontend and backend.",
        lessons: [
          {
            lesson: 1,
            title: "What is a RESTful API?",
            description:
              "Learn the principles of RESTful architecture and how it facilitates communication between systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building APIs with Express",
            description:
              "Build RESTful APIs using Express and handle HTTP requests effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "API Authentication",
            description:
              "Learn about authentication methods for securing your APIs, including JWT and OAuth.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    course_id: "AI103",
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/bg3.jpeg",
    rating: 3,
    duration: 5,
    subtitle:
      "Dive into the fascinating world of AI and machine learning. Build intelligent systems and learn to solve real-world problems using cutting-edge AI techniques.",
    level: "Master",
    skillsToLearn: [
      "Machine learning algorithms",
      "Natural language processing (NLP)",
      "Computer vision",
      "Deep learning",
      "TensorFlow and Keras",
      "Model evaluation and optimization",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to AI",
        welcome:
          "Welcome to the AI course! This module covers the basic concepts of artificial intelligence, including its history and future potential.",
        lessons: [
          {
            lesson: 1,
            title: "What is Artificial Intelligence?",
            description:
              "Get an overview of artificial intelligence and its key subfields, including machine learning, NLP, and computer vision.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "History of AI",
            description:
              "Learn about the history of artificial intelligence and how it has evolved over the years.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Machine Learning Fundamentals",
        welcome:
          "In this module, you'll explore the core principles of machine learning, including supervised and unsupervised learning.",
        lessons: [
          {
            lesson: 1,
            title: "Supervised vs Unsupervised Learning",
            description:
              "Understand the difference between supervised and unsupervised learning and their respective use cases.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Linear Regression",
            description:
              "Learn the fundamentals of linear regression and its application in predicting continuous values.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Classification Algorithms",
            description:
              "Explore classification algorithms such as decision trees and k-nearest neighbors (KNN).",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deep Learning and Neural Networks",
        welcome:
          "Understand deep learning and neural networks, and learn how to implement these techniques using TensorFlow.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Neural Networks",
            description:
              "Learn the basics of neural networks and how they are used in deep learning.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building Neural Networks with TensorFlow",
            description:
              "Learn how to implement neural networks using TensorFlow and Keras for machine learning tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Training Neural Networks",
            description:
              "Understand how to train neural networks and optimize their performance using backpropagation and gradient descent.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Natural Language Processing (NLP)",
        welcome:
          "Explore NLP techniques and learn how to process and analyze text data.",
        lessons: [
          {
            lesson: 1,
            title: "Text Preprocessing",
            description:
              "Learn how to clean and preprocess text data for NLP tasks.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Sentiment Analysis",
            description:
              "Understand how to use NLP techniques for sentiment analysis in social media or customer reviews.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Named Entity Recognition",
            description:
              "Learn how to identify named entities like names, dates, and locations in text data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    course_id: "BU104",
    title: "Business",
    icon: "/asset/course-icon/bg4.jpeg",
    rating: 5,
    duration: 4,
    subtitle:
      "Develop your business acumen and learn the essentials of entrepreneurship, strategy, and management. Perfect for aspiring business leaders and managers.",
    level: "Beginner",
    skillsToLearn: [
      "Business communication",
      "Strategic planning",
      "Market research",
      "Financial management basics",
      "Leadership skills",
      "Project management",
      "Risk assessment",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Business Fundamentals",
        welcome:
          "Welcome to the Business course! This module introduces key concepts in business, including entrepreneurship and organizational management.",
        lessons: [
          {
            lesson: 1,
            title: "What is Business?",
            description:
              "Learn the basic principles of business, including types of businesses, business models, and key concepts.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Understanding Business Structures",
            description:
              "Explore different types of business structures and how they affect operations, taxation, and management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Strategic Business Planning",
        welcome:
          "This module focuses on strategic planning, including SWOT analysis and how to create effective business plans.",
        lessons: [
          {
            lesson: 1,
            title: "Strategic Planning Basics",
            description:
              "Learn the fundamentals of strategic planning and its importance in business success.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "SWOT Analysis",
            description:
              "Learn how to conduct a SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for business strategy.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Market Research and Business Intelligence",
        welcome:
          "Understand the role of market research and business intelligence in identifying opportunities and making informed decisions.",
        lessons: [
          {
            lesson: 1,
            title: "Market Research Techniques",
            description:
              "Learn various methods of market research, including surveys, focus groups, and data analytics.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Business Intelligence Tools",
            description:
              "Understand how to use business intelligence tools to gather, analyze, and interpret business data.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Leadership and Management",
        welcome:
          "Learn essential leadership and management skills to lead teams and organizations effectively.",
        lessons: [
          {
            lesson: 1,
            title: "Leadership Styles",
            description:
              "Explore different leadership styles and determine which one suits your approach to management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Team Building and Management",
            description:
              "Learn how to build high-performing teams and manage them effectively.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 3,
            title: "Conflict Resolution",
            description:
              "Understand how to handle conflicts within teams and organizations to maintain a productive work environment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    course_id: "AS105",
    title: "Autonomous Systems",
    icon: "/asset/course-icon/bg5.jpeg",
    rating: 4,
    duration: 3,
    subtitle:
      "Explore the future of technology with autonomous systems. Learn how robotics and AI interact to create self-operating devices and intelligent systems.",
    level: "Beginner",
    skillsToLearn: [
      "Robotics fundamentals",
      "AI for robotics",
      "Embedded systems basics",
      "Path planning algorithms",
      "Sensor integration",
      "Control systems",
      "Simulating autonomous systems",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Autonomous Systems",
        welcome:
          "In this module, you will learn the basics of autonomous systems, including key concepts and applications in robotics and AI.",
        lessons: [
          {
            lesson: 1,
            title: "What are Autonomous Systems?",
            description:
              "Understand what autonomous systems are and explore the key components involved in building them.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "AI in Robotics",
            description:
              "Learn how AI is integrated into robotics to create self-operating systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Robotics Fundamentals",
        welcome:
          "Dive deeper into robotics, covering sensors, actuators, and control systems that are essential for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Sensors in Robotics",
            description:
              "Explore different types of sensors used in robotics, such as vision sensors, motion sensors, and distance sensors.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Actuators and Motors",
            description:
              "Learn about actuators and how motors are used to control robot movement.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Embedded Systems for Autonomous Systems",
        welcome:
          "Learn the fundamentals of embedded systems, including microcontrollers and how they integrate with robots for control.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Embedded Systems",
            description:
              "Understand the role of embedded systems in robotics and autonomous systems.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Microcontrollers and Sensors",
            description:
              "Learn how microcontrollers work with sensors to gather data and control robotic actions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Path Planning and Control Algorithms",
        welcome:
          "This module covers advanced topics in path planning and control algorithms for autonomous systems.",
        lessons: [
          {
            lesson: 1,
            title: "Path Planning Algorithms",
            description:
              "Learn different algorithms for path planning in robotics, such as A* and Dijkstra's algorithm.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Control Systems",
            description:
              "Explore various control systems used in robotics, including feedback loops and PID controllers.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    course_id: "PM106",
    title: "Product Management",
    icon: "/asset/course-icon/bg6.jpeg",
    rating: 3,
    duration: 4,
    subtitle:
      "Master the art of bringing ideas to life. Learn product strategy, roadmap planning, and managing teams to deliver impactful products.",
    level: "Master",
    skillsToLearn: [
      "Roadmap planning",
      "Agile methodologies",
      "Stakeholder communication",
      "Market analysis",
      "Product lifecycle management",
      "Prioritization frameworks",
      "User experience basics",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Product Management",
        welcome:
          "This module introduces the basics of product management, including the role of a product manager and the product lifecycle.",
        lessons: [
          {
            lesson: 1,
            title: "What is Product Management?",
            description:
              "Learn about the product manager's role in a company and the stages of product development.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "The Product Lifecycle",
            description:
              "Understand the different stages of the product lifecycle and how product managers contribute to each stage.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Agile Methodologies and Roadmap Planning",
        welcome:
          "Learn how Agile methodologies drive product development and how to create and manage a product roadmap.",
        lessons: [
          {
            lesson: 1,
            title: "Agile Principles",
            description:
              "Understand the principles of Agile development and how they apply to product management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Building a Product Roadmap",
            description:
              "Learn how to plan and prioritize features for your product roadmap.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Stakeholder Management and Communication",
        welcome:
          "Master the skills needed to effectively communicate with stakeholders and manage their expectations.",
        lessons: [
          {
            lesson: 1,
            title: "Understanding Stakeholder Needs",
            description:
              "Learn how to identify and understand the needs and concerns of stakeholders.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Effective Communication Strategies",
            description:
              "Explore strategies for clear and effective communication with stakeholders, including presentation and reporting skills.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "User Experience and Market Analysis",
        welcome:
          "Learn how to apply user experience principles and market research to build successful products.",
        lessons: [
          {
            lesson: 1,
            title: "User Experience Design Basics",
            description:
              "Understand the principles of user experience (UX) and how to design user-centric products.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Market Research and Competitive Analysis",
            description:
              "Learn how to analyze market trends and conduct competitive analysis to inform product decisions.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    course_id: "CC107",
    title: "Cloud Computing",
    icon: "/asset/course-icon/bg7.jpeg",
    rating: 5,
    duration: 2,
    subtitle:
      "Understand the core concepts of cloud infrastructure. Learn to deploy, manage, and scale applications on popular cloud platforms.",
    level: "Intermediate",
    skillsToLearn: [
      "Cloud infrastructure basics",
      "Virtualization",
      "Cloud security fundamentals",
      "Deploying applications on cloud platforms",
      "Managing cloud resources",
      "Serverless computing",
      "Cost optimization in cloud computing",
    ],
    courses: [
      {
        course: 1,
        duration: "60 minutes",
        title: "Introduction to Cloud Computing",
        welcome:
          "This module covers the basics of cloud computing, including cloud models, services, and infrastructure.",
        lessons: [
          {
            lesson: 1,
            title: "What is Cloud Computing?",
            description:
              "Understand the basic concepts of cloud computing, including the different cloud service models.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cloud Deployment Models",
            description:
              "Explore different cloud deployment models, such as public, private, and hybrid clouds.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 2,
        duration: "90 minutes",
        title: "Cloud Security and Virtualization",
        welcome:
          "Learn about the key principles of cloud security and how virtualization plays a role in cloud computing.",
        lessons: [
          {
            lesson: 1,
            title: "Cloud Security Fundamentals",
            description:
              "Understand the essential concepts of cloud security and how to protect cloud-based resources.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Virtualization in Cloud Computing",
            description:
              "Learn how virtualization enables cloud computing and its role in resource management.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 3,
        duration: "120 minutes",
        title: "Deploying and Managing Cloud Applications",
        welcome:
          "Learn how to deploy and manage applications in the cloud using popular platforms like AWS, Azure, and Google Cloud.",
        lessons: [
          {
            lesson: 1,
            title: "Deploying Applications on AWS",
            description:
              "Learn how to deploy and manage cloud applications on AWS, a popular cloud computing platform.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Managing Cloud Resources",
            description:
              "Understand how to manage cloud resources, such as storage, compute, and networking services.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
      {
        course: 4,
        duration: "180 minutes",
        title: "Serverless Computing and Cost Optimization",
        welcome:
          "Explore serverless computing and how to optimize cloud costs to maximize efficiency and reduce expenses.",
        lessons: [
          {
            lesson: 1,
            title: "Introduction to Serverless Computing",
            description:
              "Understand the concept of serverless computing and how it simplifies application deployment.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
          {
            lesson: 2,
            title: "Cost Optimization in Cloud Computing",
            description:
              "Learn techniques to optimize cloud resources and minimize costs while maintaining performance.",
            videoLink: "https://www.youtube.com/embed/GE3JOFwTWVM",
          },
        ],
      },
    ],
  },
];

// Link Object
export const dashboardLinks = [
  {
    id: 0,
    title: "Personal account",
    link: siteConfig.path.paths.dashboard,
  },
  {
    id: 1,
    title: "Job",
    link: siteConfig.path.paths.dashboardJob,
  },
  {
    id: 2,
    title: "Course / Skill",
    link: siteConfig.path.paths.dashboardSkill,
  },
  {
    id: 4,
    title: "Notifications",
    link: siteConfig.path.paths.dashboardNotification,
  },
  {
    id: 5,
    title: "Preferences",
    link: siteConfig.path.paths.dashboardPreferences,
  },
];
