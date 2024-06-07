import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "../metatags";

type LogoLinkProps = {
  src?: string;
  height?: number;
  width?: number;
};

const LogoLink: FC<LogoLinkProps> = ({
  src = "/assets/images/tsa_logo.png",
  height = 48,
  width = 48,
}) => {
  return (
    <Link href="/" className="bg-white rounded-full p-0.5">
      <Image
        className="h-10 w-auto"
        src={src}
        alt={SITE_NAME}
        height={height}
        width={width}
      />
    </Link>
  );
};

export default LogoLink;
