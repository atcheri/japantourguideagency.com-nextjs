import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";
import { NavBarMenuType } from "../../../helpers/constants";
import { RxDot } from "react-icons/rx";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBarMenu = ({ title, items }: NavBarMenuType) => {
  const { textColor } = useScrollColor();
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1 font-semibold leading-6">
            {title}
            <ChevronDownIcon
              style={{ color: textColor }}
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
            <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-80 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-1">
                {items.map((menu) => (
                  <div
                    key={menu.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <RxDot
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto text-black">
                      <Popover.Button
                        as={Link}
                        href={menu.href}
                        className="block font-semibold"
                      >
                        {menu.name}
                        <span className="absolute inset-0" />
                      </Popover.Button>
                      <p className="mt-1 text-gray-600">{menu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DesktopNavBarMenu;
