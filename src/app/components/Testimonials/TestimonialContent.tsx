import { FC } from "react";

type TestimonialContentProps = {
  content: string;
};

const TestimonialContent: FC<TestimonialContentProps> = ({ content }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: `${content.slice(0, 144)}...` }}
      />
      <br />
      <span className="italic">read more</span>
    </>
  );
};

export default TestimonialContent;
