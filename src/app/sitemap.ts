import { ROUTES } from "@/constants/routes";
import { fetchPosts } from "@/helpers/post";

const domain = process.env.DOMAIN_URL;

if (!domain) {
  throw Error(
    "no DOMAIN_URL environement variable defined. Please check your .env file"
  );
}

const sitemap = async () => {
  const now = new Date().toISOString();
  const articles = (await fetchPosts()).map((p) => ({
    url: `${domain}/articles/${p.slug}`,
    lastModified: now,
  }));
  // const tours = getToursInfo()

  const routes = Object.values(ROUTES).map((r) => ({
    url: r.path,
    lastModified: now,
  }));
  return [...routes, ...articles /*, ...tours*/];
};

export default sitemap;
