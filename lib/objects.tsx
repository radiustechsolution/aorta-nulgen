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

type LatestType = {
  id: number;
  title: string;
  author: string;
  category: string;
  subcategory: string;
  description?: string;
  time?: string;
  image: string;
  bgImage: string;
};

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
