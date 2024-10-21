export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nulgen - AI Powered Career Companion",
  shortName: "Nulgen",
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
        title: "getInternship",
        path: "/",
        isDropDown: false,
      },
      {
        title: "masterSkill",
        path: "/",
        isDropDown: true,
      },
      {
        title: "aboutUs",
        path: "/",
        isDropDown: false,
      },
      {
        title: "blog",
        path: "/",
        isDropDown: false,
      },
      {
        title: "contact",
        path: "/",
        isDropDown: false,
      },
    ],
  },
};
