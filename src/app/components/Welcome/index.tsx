"use client";

import { FC, useState } from "react";

import Image from "next/image";
import { VideoComponent } from "./VideoComponent";

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
      <div className="lg:gap-x-8 2xl:gap-x-16 px-0 lg:px-4 xl:px-10 py-8 lg:py-16 container mx-auto lg:grid lg:grid-cols-12">
        <div className="lg:col-span-6">
          <VideoComponent />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:col-span-6 px-10 lg:px-0 lg:pr-4 lg:max-w-md xl:max-w-lg 2xl:max-w-2xl">
          <h2 className="max-lg:mt-8 mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome 👋 to Tokyo Star Agency
          </h2>
          <div className="mb-4">
            <p className="text-lg leading-relaxed">
              Since our founding in 2017, we have been providing customized
              private tours and assisting our guests in creating lifelong
              memories in Japan.
            </p>
            <div className={!showMore ? "gradient-mask-b-50" : ""}>
              <p className="text-lg leading-relaxed">
                We believe that travel is more than just visiting a destination;
                it&apos;s a transformational experience that can change your
                life. Travel is a pilgrimage that can help you discover new
                perspectives, connect with different cultures, and give you an
                opportunity to re-examine yourself.
              </p>
              <p className="text-lg leading-relaxed">
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
