import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { welcomeVideoUrl } from "@/helpers/constants";

export const WelcomeVideodialog = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-lg xl:max-w-screen-xl 3xl:max-w-screen-2xl max-h-svh aspect-video p-0 border-0 text-transparent">
        <DialogDescription>
          <iframe
            src={welcomeVideoUrl}
            allowFullScreen
            title="Enjoy my Japan | Concept movie | JNTO"
            className="w-full h-full aspect-video"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
