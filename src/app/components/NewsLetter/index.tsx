"use client";

import { FC, useRef, useState } from "react";

import { BsCalendarRange } from "react-icons/bs";
import { Button } from "flowbite-react";
import { MdOutlineFrontHand } from "react-icons/md";
import Modal from "./Modal";
import { sendNewsLetterEmail } from "./actions";

const initialModalState = { title: "", mainText: "", buttonText: "" };

const NewsLetter: FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState<{
    title: string;
    mainText: string;
    buttonText: string;
  }>(initialModalState);
  const [success, setSuccess] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  const handleNewsLetterSubmit = async (data: FormData) => {
    setLoading(() => true);
    const email = data.get("email") as string;
    try {
      await sendNewsLetterEmail(email);
      setModalState({
        title: "Successfully subscribed to our NewsLetter",
        mainText: `Thank you for subscribing to our NewsLetter.
          You can check your mailbox to see the confirmation.`,
        buttonText: "Got it, thanks!",
      });
      setSuccess(true);
      inputRef.current.value = "";
    } catch {
      setModalState({
        title: "Suscription to our NewsLetter could not be established.",
        mainText:
          "The email address you entered was not found. Please verify and try again.",
        buttonText: "Retry.",
      });
      setSuccess(false);
    } finally {
      setLoading(() => false);
    }
  };

  const showModal =
    modalState.title !== "" &&
    modalState.mainText !== "" &&
    modalState.buttonText !== "";

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Stay up-to-date with the latest travel insights, exclusive offers,
              and insider tips for an unforgettable journey through Japan.
              Subscribe to our newsletter and embark on a personalized tour
              experience like no other.
            </p>
            <form
              action={handleNewsLetterSubmit}
              className="mt-6 flex max-w-md gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                ref={inputRef}
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button type="submit" disabled={loading} isProcessing={loading}>
                Join
              </Button>
            </form>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-4 ring-1 ring-white/10">
                <BsCalendarRange className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">Rare emails</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Expect our newsletters to be delivered sparingly, ensuring each
                message is valuable and packed with useful information.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-4 ring-1 ring-white/10">
                <MdOutlineFrontHand className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Rest assured, we prioritize your privacy and promise to never
                inundate your inbox with unsolicited emails or share your
                personal information with third parties.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <Modal
        modalShow={showModal}
        modalClose={() => setModalState(initialModalState)}
        title={modalState.title}
        mainText={modalState.mainText}
        buttonText={modalState.buttonText}
        success={success}
      />
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-500 to-red-800 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};
export default NewsLetter;
