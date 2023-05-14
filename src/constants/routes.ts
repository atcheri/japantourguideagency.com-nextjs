export const domain = process.env.DOMAIN_URL;

if (!domain) {
  throw Error(
    "no DOMAIN_URL environement variable defined. Please check your .env file"
  );
}

export const apiEndpoint = process.env.API_ENDPOINT;
if (!apiEndpoint) {
  throw Error(
    "no API_ENDPOINT environement variable defined. Please check your .env file"
  );
}

type PathType = {
  name: string;
  path: string;
};

export const ROUTES: Record<string, PathType> = Object.freeze({
  HOME: {
    name: "Home",
    path: "",
  },
  COMPANY: {
    name: "Company",
    path: "/company-info",
  },
  CONTACT: {
    name: "Contact",
    path: "/contact",
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
  STORE: {
    name: "STORE",
    path: `https://store.japantourguideagency.com`,
  },
});
