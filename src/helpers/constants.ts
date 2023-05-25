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
    description: "Explore the unparalleled natural beauty of Mt. Fuji",
  },
  {
    name: "Mt. Fuji Hakone",
    href: "https://store.japantourguideagency.com/st_tour/mount-fuji-and-hakone/",
    description:
      "Experience the best views of Japan's iconic landmark, Mt. Fuji",
  },
  {
    name: "Mt. Fuji Gotemba Outlet",
    href: "https://store.japantourguideagency.com/st_tour/mt-fuji-and-gotemba-premium-outlet/",
    description:
      "explore the natural wonders of Mt. Fuji then head to the Gotemba Premium Outlet",
  },
  {
    name: "Tokyo",
    href: "https://store.japantourguideagency.com/st_tour/tokyo/",
    description: "Experience the vibrant city of Tokyo",
  },
  {
    name: "Kamakura, Enoshima, Yokohama",
    href: "https://store.japantourguideagency.com/st_tour/kamakura-enoshima-yokohama/",
    description:
      "Explore Kamakura's cultural heritage with optional stops in Yokohama and Enoshima",
  },
  {
    name: "Nikko, Toshogu, Edo Wonderland",
    href: "https://store.japantourguideagency.com/st_tour/nikko-toshogu-edo-wonderland/",
    description: "Embark on an unforgettable journey through Nikko",
  },
];

export const japaneseResorts: MenuItem[] = [
  {
    name: ROUTES.ARTICLES_WELLNESS.name,
    href: ROUTES.ARTICLES_WELLNESS.path,
    description: "Sustainable and well-being in Japan",
  },
  {
    name: ROUTES.ARTICLES_SKI_RESORTS.name,
    href: ROUTES.ARTICLES_SKI_RESORTS.path,
    description: "Discover the beauty of Japan in winter",
  },
  {
    name: ROUTES.ARTICLES_GOLF_RESORTS.name,
    href: ROUTES.ARTICLES_GOLF_RESORTS.path,
    description: "Golfing journey in the Land of the Rising Sun",
  },
  {
    name: ROUTES.ARTICLES_BEACH_RESORTS.name,
    href: ROUTES.ARTICLES_BEACH_RESORTS.path,
    description: "Coral reefs or coastal towns",
  },
  {
    name: ROUTES.ARTICLES_CRUISE_BOAT.name,
    href: ROUTES.ARTICLES_CRUISE_BOAT.path,
    description: "Harmony between traditional and modern Japan",
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

export const tripAdvisorReviewsUrl =
  "https://www.tripadvisor.com/Attraction_Review-g1066450-d13144726-Reviews-or30-Tokyo_Star_Agency-Meguro_Tokyo_Tokyo_Prefecture_Kanto.html";
