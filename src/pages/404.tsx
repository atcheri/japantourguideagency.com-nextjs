import { Button } from "flowbite-react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const page404 = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn&lsquo;t find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <Button color="light">
              Back to <HiOutlineHomeModern className="ml-2 mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="max-w-lg">
          <Image
            src="/assets/images/404Error.svg"
            alt="Error 404"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page404;
