export const domain =
  process.env.DOMAIN_URL || process.env.NEXT_PUBLIC_DOMAIN_URL;

if (!domain) {
  throw Error(
    "no DOMAIN_URL environement variable defined. Please check your .env file"
  );
}

type PathType = {
  name: string;
  path: string;
};

export const STORE_ROUTES: Record<string, PathType> = Object.freeze({
  STORE: {
    name: "STORE",
    path: `https://store.japantourguideagency.com`,
  },
});

export const ROUTES: Record<string, PathType> = Object.freeze({
  HOME: {
    name: "Home",
    path: "/",
  },
  COMPANY: {
    name: "Company",
    path: "/company-info",
  },
  CONTACT: {
    name: "Contact",
    path: "/contact/tailwindui",
  },
  FAQ: {
    name: "FAQ",
    path: "/faq",
  },
  PARTNERS: {
    name: "Partners",
    path: "/partners",
  },
  POLICIY: {
    name: "Policy",
    path: "/policy",
  },
  ARTICLES_GOLF_RESORTS: {
    name: "Golf Resorts",
    path: "/articles/golf-resorts",
  },
  ARTICLES_SKI_RESORTS: {
    name: "Ski And Snow Resorts",
    path: "/articles/ski-and-snow-resorts",
  },
  ARTICLES_WELLNESS: {
    name: "Wellness And Eco-Tours In Japan",
    path: "/articles/wellness-and-eco-tours-in-japan",
  },
});
