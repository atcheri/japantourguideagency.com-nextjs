import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";
import { NavBarMenuType } from "./constants";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBarMenu = ({ title, items, actions }: NavBarMenuType) => {
  const { textColor } = useScrollColor();
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
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
            <Popover.Panel className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-1">
                {items.map((menu) => (
                  <div
                    key={menu.name}
                    className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <menu.icon
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
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {actions.map((action) => (
                  <Popover.Button
                    key={action.name}
                    as={Link}
                    href={action.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm text-black font-semibold leading-6 hover:bg-gray-100"
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
  );
};

export default DesktopNavBarMenu;
