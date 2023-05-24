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
    name: "Mt. Fuji",
    href: "https://store.japantourguideagency.com/st_tour/mt-fuji-tour/",
    description: "Private Tour to Mount Fuji",
  },
  {
    name: "Mt. Fuji Hakone",
    href: "https://store.japantourguideagency.com/st_tour/mount-fuji-and-hakone/",
    description: "Lorem Oposum",
  },
  {
    name: "Mt. Fuji Gotemba Outlet",
    href: "https://store.japantourguideagency.com/st_tour/mt-fuji-and-gotemba-premium-outlet/",
    description: "Lorem Oposum",
  },
  {
    name: "Tokyo",
    href: "https://store.japantourguideagency.com/st_tour/tokyo/",
    description: "Visit the best place in Tokyo in One Day",
  },
  {
    name: "Kamakura, Enoshima, Yokohama",
    href: "https://store.japantourguideagency.com/st_tour/kamakura-enoshima-yokohama/",
    description: "Lorem Oposum",
  },
  {
    name: "Nikko, Toshogu, Edo Wonderland",
    href: "https://store.japantourguideagency.com/st_tour/nikko-toshogu-edo-wonderland/",
    description: "Lorem Oposum",
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
