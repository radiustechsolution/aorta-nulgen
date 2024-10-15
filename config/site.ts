export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Toptal - Hire Freelance Talent from the Top 3%",
  description: "Make beautiful websites regardless of your design experience.",
  siteColors: {
    primary: "#0F256E",
    secondary: "#03CC83",
    bgPrimary: "#D2D6E2",
    bgPrimaryFaint: "#F7F8FB",
  },
  path: {
    navbarLinks: [
      {
        title: "Top 3%",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Hire Talent",
        path: "/",
        isDropDown: true,
      },
      {
        title: "Consulting & Services",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Clients",
        path: "/",
        isDropDown: false,
      },
      {
        title: "Blog",
        path: "/",
        isDropDown: false,
      },
      {
        title: "About Us",
        path: "/",
        isDropDown: false,
      },
    ],
  },
};
