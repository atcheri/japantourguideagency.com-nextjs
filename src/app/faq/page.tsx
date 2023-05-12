import QuestionAnswer, {
  QuestionAnswerType,
} from "../components/QuestionAnswer";

import { FC } from "react";
import Illustration from "../components/QuestionAnswer/Illustration";

const qas: QuestionAnswerType[] = [
  {
    question: "How can I pay for my appointment ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    question: "What can I expect at my first consultation ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    question: "What are your opening hours ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    question: "Do I need a referral ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
  {
    question:
      "Is the cost of the appointment covered by private health insurance",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
  },
];

const Faq: FC = () => {
  return (
    <section className="w-full px-6 py-10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          FAQ&lsquo;s
        </h1>
        <h2 className="my-2 text-slate-500 dark:text-slate-50">
          The most common questions about how out trips and policy.{" "}
        </h2>
        <Illustration className="h-64 w-64 fill-blue-700 dark:fill-blue-300" />
      </div>
      <QuestionAnswer questions={qas} />
    </section>
  );
};

export default Faq;
