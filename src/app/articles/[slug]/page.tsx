import { stylePostContent } from "../helpers";

const apiEndpoint = process.env.API_ENDPOINT;
if (!apiEndpoint) {
  throw Error(
    "no API_ENDPOINT environement variable defined. Please check your .env file"
  );
}
const postEndpoint = `${apiEndpoint}/posts`;

// doc: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// mostly for the performance
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const response = await fetch(postEndpoint).then<{ slug: string }[]>((r) =>
    r.json()
  );
  return response.map((p) => ({ slug: p.slug }));
}

type ArticleProps = {
  title: string;
  content: string;
};

const fetchPostData = async (slug: string): Promise<ArticleProps> => {
  const response = await fetch(`${postEndpoint}?slug=${slug}`, {
    // cache: "no-store",
    next: { revalidate: 10 }, // 10seconds
  });
  if (!response) {
    throw new Error("Failed to fetch data");
  }

  const posts = await response.json();
  if (!posts.length) {
    throw new Error("No data found");
  }

  const post = posts[0];

  return {
    title: post.title.rendered,
    content: stylePostContent(post.content.rendered),
  };
};

// The rendered component part
const Article = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await fetchPostData(slug);

  return (
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 lg:mb-6 lg:text-4xl dark:text-white">
        {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export default Article;
