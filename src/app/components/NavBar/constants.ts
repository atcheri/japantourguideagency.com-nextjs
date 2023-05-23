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

export const bestTours: MenuItem[] = [
  {
    name: "Tokyo",
    href: "https://store.japantourguideagency.com/st_tour/tokyo/",
    description: "Visit the best place in Tokyo in One Day",
  },
  {
    name: "Mt. Fuji",
    href: "https://store.japantourguideagency.com/st_tour/mt-fuji-tour/",
    description: "Mount Fuji Private Tour",
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
    name: "Golf resorts",
    href: ROUTES.ARTICLES_GOLF_RESORTS.path,
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
];

export const navBarMenu: {
  menuTitle: string;
  menuItems: MenuItem[];
}[] = [
  {
    menuTitle: "Recommended Tours",
    menuItems: bestTours,
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
