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
  ABOUT: {
    name: "About",
    path: "/about",
  },
  CONTACT: {
    name: "Contact",
    path: "/contact",
  },
  FAQ: {
    name: "FAQ",
    path: "/faq",
  },
});
