import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { domain } from "@/constants/routes";

export const SITE_NAME = "Japan Tour Guide Agency";
export const SITE_TITLE =
  "Japan Tour Guide Agency - Your Ultimate Guide to Japan";
export const SITE_DESCRIPTION =
  "Experience the beauty of Japan with Japan Tour Guide Agency. Our expert guides will show you the best sights and sounds of Japan. Book now!";
export const SITE_IMAGE_URL = process.env.SITE_IMAGE_URL;
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

const images = [
  {
    width: 300,
    height: 225,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-300x225.jpg`,
  },
  {
    width: 1024,
    height: 768,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-1024x768.jpg`,
  },
  {
    width: 150,
    height: 150,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-150x150.jpg`,
  },
  {
    width: 768,
    height: 576,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-768x576.jpg`,
  },
  {
    width: 1536,
    height: 1152,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-1536x1152.jpg`,
  },
  {
    width: 2048,
    height: 1536,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-2048x1536.jpg`,
  },
  {
    width: 2560,
    height: 1920,
    type: "image/jpeg",
    url: `${SITE_IMAGE_URL}-scaled.jpg`,
  },
];

export const openGraphMeta = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: domain,
  siteName: SITE_NAME,
  images,
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
  images,
};

export const viewPortMeta = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
