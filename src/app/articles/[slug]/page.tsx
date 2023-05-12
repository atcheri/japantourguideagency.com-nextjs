import { apiEndpoint } from "@/constants/routes";
import { stylePostContent } from "../helpers";
import { fetchPostBySlug } from "@/helpers/post";
import { Article } from "../types";

const postEndpoint = `${apiEndpoint}/posts`;

// doc: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// mostly for the performance
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const response = await fetch(postEndpoint).then<{ slug: string }[]>((r) =>
    r.json()
  );
  return response.map((p) => ({ slug: p.slug }));
}

type ArticleProps = Article;

const fetchAndStylePostData = async (slug: string): Promise<ArticleProps> => {
  const post = await fetchPostBySlug(slug);

  return {
    title: post.title,
    content: stylePostContent(post.content),
  };
};

// The rendered component part
const Article = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await fetchAndStylePostData(slug);

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
