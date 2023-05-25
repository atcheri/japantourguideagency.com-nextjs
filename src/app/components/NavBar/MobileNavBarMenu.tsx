import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { FC } from "react";
import Link from "next/link";
import { MenuItem } from "../../../helpers/constants";
import { RxDot } from "react-icons/rx";

type MobileNavBarMenuProps = {
  title: string;
  items: MenuItem[];
  mobileMenuClose: () => void;
};

const MobileNavBarMenu: FC<MobileNavBarMenuProps> = ({
  title,
  items,
  mobileMenuClose,
}) => {
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg mt-4 py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            {title}
            <ChevronDownIcon
              className={`h-5 w-5 flex-none duration-300 ${
                open && "rotate-180 transform"
              }`}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {items.map(({ name, href }, i) => (
              <Link
                key={`${title}-${name}-${i}`}
                href={href}
                onClick={mobileMenuClose}
                className="group relative flex items-center gap-x-4 rounded-lg pl-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <RxDot
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <Disclosure.Button className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50">
                  {name}
                </Disclosure.Button>
              </Link>
            ))}
          </Disclosure.Panel>{" "}
        </>
      )}
    </Disclosure>
  );
};

export default MobileNavBarMenu;
