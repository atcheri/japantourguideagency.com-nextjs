import { FC } from "react";
import { Footer } from "flowbite-react";
import Link from "next/link";

const SiteFooter: FC = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Japan Tour Guide Agency - Logo"
            name="JTGA"
          />
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
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="JTGA" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
};

export default SiteFooter;
