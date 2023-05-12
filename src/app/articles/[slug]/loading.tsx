"use client";

import { FC } from "react";
import { Spinner } from "flowbite-react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner aria-label="Please wait. Loading data ... " size="xl" />
    </div>
  );
};

export default Loading;
