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

    paths: {
      flow1: "/auth/flow",
      waitingList: "/wait-list",
      getInternship: "/auth/flow/internship",
      highSchool: "/auth/flow/highschool",
      undergraduate: "/auth/flow/undergraduate",
      jobBoard: "/jobs",
      course: "/course",
      signup: "/auth/signup",
      signin: "/auth/signin",
      dashboard: "/dashboard",
      dashboardNotification: "/dashboard/notification",
      dashboardJob: "/dashboard/job",
      dashboardSkill: "/dashboard/skill",
      dashboardPreferences: "/dashboard/preferences",
      error: "/error",
    },
  },
};
