import { Article } from "@/app/articles/types";
import { apiEndpoint } from "@/constants/routes";

/**
 * Interface for post title, content and excerpt
 */
interface WPContentObject {
  //This property is always present
  rendered: string;
  //This property is only present in some contexts
  raw?: string;
}

/**
 * Interface for describing post title
 */
interface WPPostTitle extends WPContentObject {}
/**
 * Interface for describing post content
 */
interface WPPostContent extends WPContentObject {}
/**
 * Interface for describing post content
 */
interface WPPostExcerpt extends WPContentObject {}

/**
 * Interface descrinbing a WordPress post
 */
interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  title: WPPostTitle;
  content: WPPostContent;
  excerpt: WPPostExcerpt;
}

const postEndpoint = `${apiEndpoint}/posts`;

export const fetchPostBySlug = async (slug: string): Promise<Article> => {
  const response = await fetch(`${postEndpoint}?slug=${slug}`, {
    // cache: "no-store",
    next: { revalidate: 10 }, // 10seconds
  });
  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const posts = await response.json().then<WPPost[]>((r) => r);
  if (!posts.length) {
    throw new Error("No data found");
  }

  const post = posts[0];

  return {
    title: post.title.rendered,
    content: post.content.rendered,
  };
};

export const fetchPosts = async (): Promise<WPPost[]> => {
  const response = await fetch(postEndpoint, {
    next: { revalidate: 10 },
  });

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
