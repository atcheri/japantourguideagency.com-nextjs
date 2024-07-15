import { welcomeVideoThumbnail, welcomeVideoUrl } from "@/helpers/constants";
import Image from "next/image";
import { WelcomeVideodialog } from "./VideoDialog";
import { Youtube } from "@/components/icons/youtube";

export const VideoComponent = () => {
  return (
    <WelcomeVideodialog>
      <div className="cursor-pointer flex items-center justify-center h-full">
        <Image
          src={welcomeVideoThumbnail}
          alt="Enjoy my Japan | Concept movie | JNTO"
          className="object-contain aspect-video"
          width={1000}
          height={1000}
        />
        <Youtube className="absolute size-16" />
      </div>
    </WelcomeVideodialog>
  );
};
