"use client";

import { FC, useState } from "react";

import Image from "next/image";

// import ImageSkelton from "../Skelton/ImageSkelton";

// const imageLoader = () => {
//   return <ImageSkelton />;
// };

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
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-sm"
            // loader={imageLoader}
            src={photoOne}
            alt="Welcome to Japan"
            width={500}
            height={500}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-sm"
            // loader={imageLoader}
            src={photoTwo}
            alt="Discover the beauty of Japan"
            width={500}
            height={500}
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 rounded-">
          <h2 className="max-lg:mt-8 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome to Japan Tour Guide agency
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p className="gradient-mask-b-50">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
          {!showMore && (
            <button onClick={toggleWelcomeText}>Read more...</button>
          )}

          {showMore && (
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
              <div>
                <button onClick={toggleWelcomeText}>Read less...</button>
              </div>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
