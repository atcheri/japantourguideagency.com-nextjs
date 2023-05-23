import { ROUTES } from "@/constants/routes";

export type MenuItem = {
  name: string;
  href: string;
  description: string;
};

export type NavBarMenuType = {
  title: string;
  items: MenuItem[];
};

export const toursByTheme: MenuItem[] = [
  {
    name: "Samurai and Ninja culture",
    href: "/",
    description: "Get a better understanding of your traffic",
  },
  {
    name: "Sustainable tourism",
    href: "/",
    description: "Speak directly to your customers",
  },
  {
    name: "Japanese cuisine",
    href: "/",
    description: "Your customers’ data will be safe and secure",
  },
  {
    name: "Japanese fruits",
    href: "/",
    description: "Connect with third-party tools",
  },
  {
    name: "Sake and Japanese beverag",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Japanese traditional culture",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Museums and art",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Architecture",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Night life",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Festivals",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Sumo",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
  {
    name: "Bike tour",
    href: "/",
    description: "Build strategic funnels that will convert",
  },
];

export const japaneseResorts: MenuItem[] = [
  {
    name: "Wellness and Eco Tourism",
    href: ROUTES.ARTICLES_WELLNESS.path,
    description: "Sustainable and well-being in Japan",
  },
  {
    name: "Ski and snow resorts",
    href: ROUTES.ARTICLES_SKI_RESORTS.path,
    description: "Discover the beauty of Japan in winter",
  },
  {
    name: "Beach resorts",
    href: "/",
    description: "Escape to incredible beaches",
  },
  {
    name: "Golf resorts",
    href: "/",
    description: "TO BE DEFINED",
  },
];

export const companyInfo: MenuItem[] = [
  {
    name: "Our Company Information",
    href: "/company-info",
    description: "information about our company",
  },
  {
    name: "Our Service Policy",
    href: "/policy",
    description: "information about our terms and policy",
  },
  {
    name: "Our Partners",
    href: "/partners",
    description: "They work with Us",
  },
];

export const navBarMenu: {
  menuTitle: string;
  menuItems: MenuItem[];
}[] = [
  {
    menuTitle: "Recommended Tours",
    menuItems: toursByTheme,
  },
  {
    menuTitle: "Japanese Resorts",
    menuItems: japaneseResorts,
  },
  {
    menuTitle: "About Us",
    menuItems: companyInfo,
  },
];
