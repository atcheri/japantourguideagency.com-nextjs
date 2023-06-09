import DesktopNavBarMenu from "./DesktopNavBarMenu";
import { FC } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ROUTES } from "@/constants/routes";
import { navBarMenu } from "../../../helpers/constants";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBar: FC = () => {
  const { textColor } = useScrollColor();

  return (
    <Popover.Group
      style={{ color: textColor }}
      className="hidden md:flex md:gap-x-8 lg:gap-x-12"
    >
      {navBarMenu.map((menu) => (
        <DesktopNavBarMenu
          key={menu.menuTitle}
          title={menu.menuTitle}
          items={menu.menuItems}
        />
      ))}
      <Link
        href={ROUTES.CONTACT.path}
        className="flex items-center font-semibold"
      >
        Contact Us
      </Link>
    </Popover.Group>
  );
};
export default DesktopNavBar;
