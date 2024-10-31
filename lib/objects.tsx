import { JobPostTypes, LatestType } from "./types";

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
    id: "000001-compliance-manager-consumer-protection",
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
    id: "000002-frontend-developer",
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
    id: "000003-data-scientist",
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
    id: "000004-devops-engineer",
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
    id: "000005-backend-developer",
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
    id: "000006-product-manager",
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
    id: "000007-ux-designer",
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
    id: "000008-blockchain-engineer",
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
