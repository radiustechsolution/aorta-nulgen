// types.ts
export interface JobPostTypes {
  id: string;
  position: string;
  company: string;
  location: string;
  posted: string;
  categories: string[];
  employees: string;
  companyLogo: string;
  more: {
    location: string;
    level: string;
    type: string;
    category: string;
  };
  action: {
    label: string;
    link: string;
  };
}

export type LatestType = {
  id: number;
  title: string;
  author: string;
  description?: string;
  category: string;
  subcategory: string;
  time?: string;
  image: string;
  bgImage: string;
};
