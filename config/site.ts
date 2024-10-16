export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nulgen - AI Powered Career Companion",
  description: "Learn in-demand job skills for free and apply for internships",
  siteColors: {
    primary: "#0F256E",
    secondary: "#03CC83",
    bgPrimary: "#D2D6E2",
    bgPrimaryFaint: "#F7F8FB",
  },
  path: {
    navbarLinks: [
      {
        title: "Get Internship",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Master Skill",
        path: "/",
        isDropDown: true,
      },
      {
        title: "About Us",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Blog",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Contact",
        path: "/",
        isDropDown: false,
      },
    ],
  },
};
