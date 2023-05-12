import { load } from "cheerio";

export const stylePostContent = (content: string): string => {
  const $ = load(content);
  $("h2").addClass("text-xl font-semibold lg:text-2xl");
  $("figure").addClass("w-full my-6");
  $("p").addClass(
    "text-base font-light my-3 text-slate-700 dark:text-slate-300"
  );
  return $.html();
};
