import { MetadataRoute } from "next";
import { domain } from "@/constants/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: '/private/',
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
