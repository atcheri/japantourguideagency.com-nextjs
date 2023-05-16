import { Action, Item } from "./constants";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import Link from "next/link";

type MobileNavBarMenuProps = {
  title: string;
  items: Item[];
  actions: Action[];
  mobileMenuClose: () => void;
};

const MobileNavBarMenu: FC<MobileNavBarMenuProps> = ({
  title,
  items,
  mobileMenuClose,
}) => {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            {title}
            <ChevronDownIcon
              className={`h-5 w-5 flex-none duration-300 ${
                open && "rotate-180 transform"
              }`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {items.map(({ name, description, href, icon: Icon }) => (
              <div
                key={name}
                className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <Icon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <Disclosure.Button
                  onClick={mobileMenuClose}
                  as={Link}
                  href={href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50"
                >
                  {name}
                </Disclosure.Button>
              </div>
            ))}
          </Disclosure.Panel>{" "}
        </>
      )}
    </Disclosure>
  );
};

export default MobileNavBarMenu;
