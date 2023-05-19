const photoLinks = [
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/sei-0L0_WPZc5Mc-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/jezael-melgoza-7H77FWkK_x4-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/svetlana-gumerova-PMkQ7WVWqr0-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/andre-benz-cATZ2eHu5ys-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/yohei-shimomae-VkYbDqseTy4-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/yoav-aziz-tKCd-IWc4gI-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/tomas-malik-N9Fl32CFMfU-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/syuhei-inoue-kaoHI0iHJPM-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/sophie-keen-iYjerlfwBhA-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/redd-f-Lm5rkxzgiFQ-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/josh-soto-M76ZhVCMtYw-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/fahrul-azmi-chTe2CU58L0-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/erik-eastman-4HG5hlhmZg8-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/david-emrich-VCM99u6HltA-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/chantal-lim-TUsye76z6Fg-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/azamat-esmurziyev-qhdGyb-jw2M-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/atul-vinayak-PpYRtDK8l0g-unsplash.jpg",
];

const getRandomInt = (
  min: number = 0,
  max: number = photoLinks.length - 1
): number => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min)) + _min;
};

export const getRandomPhotoPairUrls = (): string[] => {
  const linkOne = photoLinks[getRandomInt()];
  const filteredPhotoLinks = photoLinks.filter((l) => l !== linkOne);
  const linkTwo = filteredPhotoLinks[getRandomInt()];
  return [linkOne, linkTwo];
};
