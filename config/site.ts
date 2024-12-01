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

  colors: {
    primary: "#6B68DF",
    cardLightColor: "#ffffff",
    cardDarkColor: "#171717",
    bgLightColor: "#F3F3F3",
    bgDarkColor: "#212121",
  },
  path: {
    navbarLinks: [
      {
        title: "exploreCareer",
        path: "/course",
        isDropDown: false,
        original: "Explorer Career",
      },
      {
        title: "findInternship",
        path: "/jobs",
        isDropDown: false,
        original: "Find Internship",
      },
      {
        title: "contact",
        path: "/",
        isDropDown: false,
        original: "Contact",
      },
    ],

    paths: {
      index: "/",
      flow1: "/auth/flow",
      waitingList: "/wait-list",
      getInternship: "/auth/flow/internship",
      highSchool: "/auth/flow/highschool",
      undergraduate: "/auth/flow/undergraduate",
      jobBoard: "/jobs",
      course: "/course",
      signup: "/auth",
      signin: "/auth",
      dashboard: "/dashboard/home",
      dashboardNotification: "/dashboard/notification",
      dashboardJob: "/dashboard/job",
      dashboardSkill: "/dashboard/skill",
      dashboardPreferences: "/dashboard/preferences",
      error: "/error",
      chatHome: "/chat",
    },
  },
};
