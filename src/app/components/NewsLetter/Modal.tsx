import { Dialog, Transition } from "@headlessui/react";
import {
  EnvelopeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import { Fragment } from "react";

type ModalProps = {
  modalShow: boolean;
  modalClose: () => void;
  success: boolean;
  title: string;
  mainText: string;
  buttonText: string;
};

export default function Modal({
  modalShow,
  modalClose,
  success,
  title,
  mainText,
  buttonText,
}: ModalProps) {
  return (
    <Transition appear show={modalShow} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={modalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-green-50 text-green-600 border border-green-300 ${
                  !success &&
                  "bg-orange-100 text-orange-600 border border-orange-300"
                }`}
              >
                <div className="flex flex-wrap gap-2">
                  {success ? (
                    <EnvelopeIcon className="h-6 w-6" />
                  ) : (
                    <ExclamationTriangleIcon className="h-6 w-6" />
                  )}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>
                </div>
                <div className="mt-2">
                  <p className="text-sm">{mainText}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium bg-green-50  hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 ${
                      !success &&
                      "bg-orange-50 hover:bg-orange-50 hover:border-orange-200  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                    }`}
                    onClick={modalClose}
                  >
                    {buttonText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
