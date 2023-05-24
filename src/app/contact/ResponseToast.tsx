"use client";

import Contact, { ContactFormState } from "./page";
import { HiCheck, HiXMark } from "react-icons/hi2";

import { FC } from "react";
import { Toast } from "flowbite-react";

type ResponseToastProps = {
  state: ContactFormState;
};

const ContactEmailSuccessToast: FC = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <HiCheck className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">
        Thank you for contacting us.
      </div>
    </Toast>
  );
};

const ContactEmailErrorToast: FC = () => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
        <HiXMark className="h-5 w-5" />
      </div>
      <div className="flex flex-col ml-3 text-sm font-normal">
        <div>Your email could not be sent.</div>
        <div>Please try again</div>
      </div>
    </Toast>
  );
};

const ResponseToast: FC<ResponseToastProps> = ({ state }) => {
  switch (state) {
    case "empty":
      return null;
    case "success":
      return <ContactEmailSuccessToast />;
    case "error":
      return <ContactEmailErrorToast />;
    default:
      return null;
  }
};

export default ResponseToast;
