import { FC } from "react";
import { Footer } from "flowbite-react";
import LogoLink from "./LogoLink";

const SiteFooter: FC = () => {
  return (
    <Footer container={true}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <LogoLink />

          <Footer.LinkGroup className="">
            {/* 
            <Footer.LinkGroup className="flex justify-between">
            <Footer.Link href="/about" as={Link}>
              About
            </Footer.Link>
            <Footer.Link href="#" as={Link}>
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" as={Link}>
              Licensing
            </Footer.Link>
            <Footer.Link href="/faq" as={Link}>
              FAQ
            </Footer.Link>
            <Footer.Link href="/contact" as={Link}>
              Contact
            </Footer.Link> */}
          </Footer.LinkGroup>
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
