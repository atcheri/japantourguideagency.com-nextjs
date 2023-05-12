"use client";

import { FC, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

import { QuestionAnswerType } from ".";

type QuestionAnswerProps = QuestionAnswerType;

const QuestionAnswerItem: FC<QuestionAnswerProps> = ({ question, answer }) => {
  const [opened, setOpened] = useState(false);

  const handleTitleClick = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <button
        className="flex items-center focus:outline-none"
        onClick={handleTitleClick}
      >
        {opened ? (
          <HiMinus className="flex-shrink-0 w-6 h-6 text-slate-500 dark:text-slate-300" />
        ) : (
          <HiPlus className="flex-shrink-0 w-6 h-6 text-blue-700 dark:text-blue-400" />
        )}

        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
          {question}
        </h1>
      </button>

      {opened && (
        <div className="flex mt-8 md:mx-10 duration-150">
          <span className="border border-blue-700 dark:border-blue-400"></span>

          <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswerItem;
