"use client";

import { Button } from "flowbite-react";
import ResponseToast from "./ResponseToast";
import { sendContactEmail } from "./actions";
import { useState } from "react";

export type ContactFormState = "empty" | "sending" | "success" | "error";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<ContactFormState>("empty");
  const labelClass = "text-white font-semibold leading-none";

  const handleSendContactEmail = async (data: FormData) => {
    setLoading(() => true);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    try {
      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });

      setState("success");
    } catch (err) {
      setState("error");
    } finally {
      setLoading(() => false);
    }
  };

  return (
    <section className="w-full h-screen max-md:mb-24">
      <div className=" h-2/4 bg-contact-computer bg-fixed bg-center bg-cover" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-opacity-75 bg-slate-950 w-full shadow rounded p-8 sm:p-12 -mt-64 lg:-mt-96">
          <h1 className="text-white text-3xl font-bold leading-7 text-center mb-8">
            Contact us
          </h1>
          <form action={handleSendContactEmail} className="flex flex-col gap-6">
            <div className="md:flex items-center">
              <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-gray-900 leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 rounded"
                />
              </div>
            </div>
            <div className="md:flex items-center">
              <div className="w-full flex flex-col">
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="h-40 text-base leading-none p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 rounded"
                ></textarea>
              </div>
            </div>
            <Button
              type="submit"
              className="self-center"
              disabled={loading || state === "success"}
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <ResponseToast state={state} />
      </div>
    </section>
  );
};

export default Contact;
