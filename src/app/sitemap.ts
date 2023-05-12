import { ROUTES, domain } from "@/constants/routes";

import { fetchPosts } from "@/helpers/post";

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
