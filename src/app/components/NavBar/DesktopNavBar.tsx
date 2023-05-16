import DesktopNavBarMenu from "./DesktopNavBarMenu";
import { FC } from "react";
import { Popover } from "@headlessui/react";
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
          actions={menu.menuActions}
        />
      ))}
    </Popover.Group>
  );
};
export default DesktopNavBar;
