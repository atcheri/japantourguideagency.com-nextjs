"use client";

import { FC, useState } from "react";

import Image from "next/image";

const IMAGE_WIDTH = 284;
const IMAGE_HEIGHT = 426;

const Welcome: FC<{ photos: string[] }> = ({
  photos: [photoOne, photoTwo],
}) => {
  const [showMore, setShowMore] = useState(false);

  function toggleWelcomeText() {
    setShowMore(!showMore);
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-6 mt-8 px-0 md:px-28 lg:px-0 justify-items-center">
          <Image
            className="w-fit rounded-sm max-h-[426px] md:h-[426px]"
            src={photoOne}
            alt="Welcome to Japan"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
          <Image
            className="mt-4 w-fit lg:mt-10 rounded-sm max-h-[426px] md:h-[426px]"
            src={photoTwo}
            alt="Discover the beauty of Japan"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 rounded-">
          <h2 className="max-lg:mt-8 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome 👋 to Tokyo Star Agency
          </h2>
          <div className="mb-4">
            <p>
              Since our founding in 2017, we have been providing customized
              private tours and assisting our guests in creating lifelong
              memories in Japan.
            </p>
            <div className={!showMore ? "gradient-mask-b-50" : ""}>
              <p>
                We believe that travel is more than just visiting a destination;
                it&apos;s a transformational experience that can change your
                life. Travel is a pilgrimage that can help you discover new
                perspectives, connect with different cultures, and give you an
                opportunity to re-examine yourself.
              </p>
              <p>
                Our team of specialized guides are not only experts in their
                fields but also passionate about creating unique and
                personalized experiences for each of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
