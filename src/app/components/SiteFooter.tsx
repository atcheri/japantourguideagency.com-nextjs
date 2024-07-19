import { FC } from "react";
import { Footer } from "flowbite-react";
import LogoLink from "./LogoLink";

const SiteFooter: FC = () => {
  return (
    <Footer container={true}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <LogoLink />
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="/"
          by="All rights reserved"
          year={new Date().getFullYear()}
        />
      </div>
    </Footer>
  );
};

export default SiteFooter;
