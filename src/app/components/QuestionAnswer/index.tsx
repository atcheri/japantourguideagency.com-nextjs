"use client";

import React, { ChangeEvent, FC, Fragment, useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import QuestionAnswerItem from "./QuestionAnswerItem";

export type QuestionAnswerType = {
  question: string;
  answer: string;
};

const filterQuestionAnswer =
  (search: string) =>
  (qa: QuestionAnswerType): boolean => {
    const q = qa.question.toUpperCase();
    const a = qa.answer.toUpperCase();
    return q.includes(search) || a.includes(search);
  };

const QuestionAnswer: FC<{ questions: QuestionAnswerType[] }> = ({
  questions,
}) => {
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFilteredQuestions(questions);
      return;
    }

    const {
      target: { value },
    } = e;

    const fqas = questions.filter(filterQuestionAnswer(value.toUpperCase()));
    setFilteredQuestions(fqas);
  };

  return (
    <div>
      <div className="text-center relative mt-6 mb-12">
        <span className="absolute p-[15px]">
          <IoSearchOutline fill="red" />
        </span>
        <input
          type="search"
          name="Search"
          placeholder="type here and find an answer ..."
          className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
          onChange={handleSearch}
        />
      </div>
      {filteredQuestions.map(({ question, answer }, i) => (
        <Fragment key={`question-answer-${i}`}>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <QuestionAnswerItem question={question} answer={answer} />
        </Fragment>
      ))}
    </div>
  );
};

export default QuestionAnswer;
