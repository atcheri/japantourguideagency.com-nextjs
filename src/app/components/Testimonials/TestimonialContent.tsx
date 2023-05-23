"use client";

import { Button, Modal } from "flowbite-react";
import { FC, useState } from "react";

type TestimonialContentProps = {
  content: string;
  title: string;
};

const TestimonialContent: FC<TestimonialContentProps> = ({
  title,
  content,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div onClick={toggleShow} className="cursor-pointer">
        {content.slice(0, 144)} ... <br />
        <span className="italic">read more</span>
      </div>
      <Modal show={show} onClose={toggleShow} dismissible={true}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={toggleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TestimonialContent;
