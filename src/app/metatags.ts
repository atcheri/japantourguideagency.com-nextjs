import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { domain } from "@/constants/routes";

export const SITE_NAME = "Japan Tour Guide Agency";
export const SITE_TITLE =
  "Japan Tour Guide Agency - Your Ultimate Guide to Japan";
export const SITE_DESCRIPTION =
  "Experience the beauty of Japan with Japan Tour Guide Agency. Our expert guides will show you the best sights and sounds of Japan. Book now!";
// TODO: modify the site ID for twitter
const TWITTER_CREATOR = "@japantourguideagency";
const TWITTER_SITE_ID = "1234"; // TODO: modify the site ID for twitter

export const keywordMeta = [
  "Japan",
  "travel",
  "tour guide",
  "tourist",
  "agency",
  "hakone",
  "mount fuji",
  "onsen",
];

export const openGraphMeta = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: domain,
  siteName: SITE_NAME,
  // images: [],
  // locale: 'en-US',
  type: "website",
};

export const robotsMeta: null | string | Robots = {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
    index: true,
    follow: false,
    noimageindex: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export const twitterMeta: Twitter = {
  card: "summary_large_image",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  siteId: TWITTER_SITE_ID,
  creator: TWITTER_CREATOR,
  creatorId: TWITTER_SITE_ID,
  images: [],
};

export const viewPortMeta = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
