import { FC, Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { bestTours, callsToAction, companyInfo } from "./constants";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBar: FC = () => {
  const { textColor } = useScrollColor();

  return (
    <Popover.Group
      style={{ color: textColor }}
      className="hidden lg:flex lg:gap-x-12"
    >
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Our Best Tours
              <ChevronDownIcon
                className={`h-5 w-5 flex-none text-gray-400 duration-300 ${
                  open && "rotate-180 transform"
                }`}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {bestTours.map((tour) => (
                    <div
                      key={tour.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <tour.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a href={tour.href} className="block font-semibold">
                          {tour.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{tour.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <a href="#" className="text-sm font-semibold leading-6">
        Recommended Tours
      </a>
      <a href="#" className="text-sm font-semibold leading-6">
        Japanese Resorts
      </a>

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              About Us
              <ChevronDownIcon
                className={`h-5 w-5 flex-none text-gray-400 duration-300 ${
                  open && "rotate-180 transform"
                }`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-10"
            >
              <Popover.Panel className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {companyInfo.map((info) => (
                    <div
                      key={info.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <info.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Popover.Button
                          as={Link}
                          href={info.href}
                          className="block font-semibold"
                        >
                          {info.name}
                          <span className="absolute inset-0" />
                        </Popover.Button>
                        <p className="mt-1 text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((action) => (
                    <Popover.Button
                      key={action.name}
                      as={Link}
                      href={action.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-gray-100"
                    >
                      <action.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {action.name}
                    </Popover.Button>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
    // <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //   <a href="/" className="text-sm font-semibold leading-6">
    //     Log in <span aria-hidden="true">&rarr;</span>
    //   </a>
    // </div>
  );
};
export default DesktopNavBar;
