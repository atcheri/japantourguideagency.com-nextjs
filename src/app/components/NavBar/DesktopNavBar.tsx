import DesktopNavBarMenu from "./DesktopNavBarMenu";
import { FC } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ROUTES } from "@/constants/routes";
import { navBarMenu } from "./constants";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBar: FC = () => {
  const { textColor } = useScrollColor();

  return (
    <Popover.Group
      style={{ color: textColor }}
      className="hidden lg:flex lg:gap-x-12"
    >
      {navBarMenu.map((menu) => (
        <DesktopNavBarMenu
          key={menu.menuTitle}
          title={menu.menuTitle}
          items={menu.menuItems}
        />
      ))}
      <Link href={ROUTES.CONTACT.path}>Contact Us</Link>
    </Popover.Group>
  );
};
export default DesktopNavBar;
