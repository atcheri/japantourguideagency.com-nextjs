const photoLinks = [
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/andre-benz-cATZ2eHu5ys-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/sophie-keen-iYjerlfwBhA-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/david-emrich-VCM99u6HltA-unsplash.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2022/04/chantal-lim-TUsye76z6Fg-unsplash.jpg",
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
