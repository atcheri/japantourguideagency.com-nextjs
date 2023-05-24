import { Dialog, Disclosure, Transition } from "@headlessui/react";

import { Fragment } from "react";
import Link from "next/link";
import MobileNavBarMenu from "./MobileNavBarMenu";
import { ROUTES } from "@/constants/routes";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { navBarMenu } from "../../../helpers/constants";

type MobileMenuProps = {
  mobileMenuOpen: boolean;
  mobileMenuClose: () => void;
};

const MobileNavBar = ({ mobileMenuOpen, mobileMenuClose }: MobileMenuProps) => {
  return (
    <Transition show={mobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="md:hidden" onClose={mobileMenuClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-5/6 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={mobileMenuClose}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <Link href={ROUTES.HOME.path} onClick={mobileMenuClose}>
              <Disclosure
                as="div"
                className="mt-4 py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 cursor-pointer"
              >
                <Disclosure.Button>Home</Disclosure.Button>
              </Disclosure>
            </Link>
            {navBarMenu.map(({ menuTitle, menuItems }) => (
              <MobileNavBarMenu
                key={menuTitle}
                title={menuTitle}
                items={menuItems}
                mobileMenuClose={mobileMenuClose}
              />
            ))}
            <Link href={ROUTES.CONTACT.path} onClick={mobileMenuClose}>
              <Disclosure
                as="div"
                className="mt-4 py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 cursor-pointer"
              >
                <Disclosure.Button>Contact Us</Disclosure.Button>
              </Disclosure>
            </Link>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileNavBar;
