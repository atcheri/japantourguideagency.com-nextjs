import { ROUTES } from "@/constants/routes";

export type MenuItem = {
  name: string;
  image?: string;
  href: string;
  description?: string;
};

export type NavbarMenuType = {
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
    name: "Mt. Fuji, Hakone",
    href: "https://store.japantourguideagency.com/st_tour/mount-fuji-and-hakone/",
    description:
      "Experience the best views of Mt. Fuji, relax at traditional Onsen resort",
  },
  {
    name: "Mt. Fuji, Gotemba Outlet",
    href: "https://store.japantourguideagency.com/st_tour/mt-fuji-and-gotemba-premium-outlet/",
    description:
      "Explore the natural wonders of Mt. Fuji, then shop at Gotemba Outlet",
  },
  {
    name: "Tokyo",
    href: "https://store.japantourguideagency.com/st_tour/tokyo/",
    description:
      "Explore the vibrant city of Tokyo from small alley to landmark",
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
    description:
      "Discover UNESCO-listed temples and shrines, blending beautiful nature",
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
    name: "Company Information",
    image: "/assets/images/tsa_logo.png",
    href: ROUTES.COMPANY.path,
    description: "information about our company",
  },
  {
    name: "Privacy Policy",
    href: ROUTES.TERMS_SERVICE.path,
    description: "information about our privacy policy",
  },
  {
    name: "Terms & conditions",
    href: ROUTES.TERMS_SERVICE.path,
    description: "information about our terms and conditions",
  },
];

export const navBarMenu: {
  menuTitle: string;
  menuItems: MenuItem[];
}[] = [
  {
    menuTitle: "Tours",
    menuItems: bestTours,
  },
  // {
  //   menuTitle: "Japanese Resorts",
  //   menuItems: japaneseResorts,
  // },
  {
    menuTitle: "About us",
    menuItems: companyInfo,
  },
];

export const tripAdvisorReviewsUrl = "https://www.viator.com/operator/40436";
