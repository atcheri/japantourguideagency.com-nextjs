import { FC } from "react";

type TestimonialContentProps = {
  content: string;
};

const TestimonialContent: FC<TestimonialContentProps> = ({ content }) => {
  return (
    <>
      {content.slice(0, 144)} ... <br />
      <span className="italic">read more</span>
    </>
  );
};

export default TestimonialContent;
