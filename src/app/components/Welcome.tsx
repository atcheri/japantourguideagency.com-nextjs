"use client";

import { FC, useMemo, useState } from "react";

import Image from "next/image";

const photoLinks = [
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/yohei-shimomae-VkYbDqseTy4-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/syuhei-inoue-kaoHI0iHJPM-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/andre-benz-cATZ2eHu5ys-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/yoav-aziz-tKCd-IWc4gI-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/tomas-malik-N9Fl32CFMfU-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/sophie-keen-iYjerlfwBhA-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/redd-f-Lm5rkxzgiFQ-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/josh-soto-M76ZhVCMtYw-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/fahrul-azmi-chTe2CU58L0-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/erik-eastman-4HG5hlhmZg8-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/david-emrich-VCM99u6HltA-unsplash-scaled.jpg",
  "https://store.japantourpguideagency.com/wp-content/uploads/2022/04/chantal-lim-TUsye76z6Fg-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/azamat-esmurziyev-qhdGyb-jw2M-unsplash-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/atul-vinayak-PpYRtDK8l0g-unsplash-scaled.jpg",
];

const getRandomInt = (
  min: number = 0,
  max: number = photoLinks.length
): number => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
};

const getRandomPhotoPairUrls = (): string[] => {
  const linkOne = photoLinks[getRandomInt()];
  const filteredPhotoLinks = photoLinks.filter((l) => l !== linkOne);
  const linkTwo = filteredPhotoLinks[getRandomInt()];
  return [linkOne, linkTwo];
};

const Welcome: FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [photoOne, photoTwo] = useMemo(() => getRandomPhotoPairUrls(), []);

  function toggleWelcomeText() {
    setShowMore(!showMore);
  }

  return (
    // <div>
    //   <p>
    //     Welcome to our Japan Tour Guide agency, where we believe that travel is
    //     more than just visiting a destination, but rather a transformational
    //     experience that can change your life. We believe that travel is a
    //     pilgrimage that can help you discover new perspectives, connect with
    //     different cultures, and create lifelong memories. Our team of
    //     specialized guides are not just experts in their fields, but they are
    //     also passionate about creating unique and personalized experiences for
    //     each of our clients. We call them our &ldquo;&ldquo;star
    //     guides&ldquo;&ldquo; because they go above and beyond to ensure that
    //     every journey is exceptional.
    //   </p>
    //   <p>
    //     We understand that each traveler has their own interests and
    //     preferences. That&lsquo;s why we offer personalized journeys that can be
    //     customized to suit your individual needs. Whether you&lsquo;re in search
    //     of the vibrant energy of Tokyo and Osaka, the rich cultural heritage of
    //     Kyoto and Nara, the stunning natural beauty of Okinawa and Hokkaido, or
    //     the awe-inspiring majesty of Mt. Fuji, we have a range of tours and
    //     itineraries that can be tailored to meet your specific interests and
    //     preferences.
    //   </p>
    //   <p>
    //     Our guides are not just knowledgeable about the history and culture of
    //     Japan, but they are also experts in finding hidden gems and
    //     off-the-beaten-path destinations that are not typically included in
    //     tourist itineraries. This ensures that each journey with us is unique
    //     and unforgettable.
    //   </p>
    //   <p>
    //     At our agency, we believe that travel should be an inclusive and
    //     sustainable experience. That&lsquo;s why we work with local communities
    //     and businesses to support responsible tourism and to help preserve
    //     Japan&lsquo;s natural and cultural heritage.
    //   </p>
    //   <p>
    //     We are committed to providing our clients with exceptional service and
    //     ensuring that every journey with us is memorable, transformative, and
    //     tailored to your needs. Contact us today to start planning your
    //     unforgettable journey through Japan with our star guides.
    //   </p>
    // </div>
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-sm"
            src={photoOne}
            alt="Welcome to Japan"
            width={0}
            height={0}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-sm"
            src={photoTwo}
            alt="Discover the beauty of Japan"
            width={0}
            height={0}
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
