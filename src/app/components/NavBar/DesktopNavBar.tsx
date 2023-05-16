import DesktopNavBarMenu from "./DesktopNavBarMenu";
import { FC } from "react";
import { Popover } from "@headlessui/react";
import { navBarMenu } from "./constants";
import { useScrollColor } from "./hooks/useScrollColor";

const DesktopNavBar: FC = () => {
  const { textColor } = useScrollColor();

  return (
    <>
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
      {/* <div
        style={{ color: textColor }}
        className="hidden lg:flex lg:flex-1 lg:justify-end"
      >
        <a href="/" className="text-sm font-semibold leading-6">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div> */}
    </>
  );
};
export default DesktopNavBar;
