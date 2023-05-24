const photoLinks = [
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/1-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/2-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/3-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/4-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/6-scaled.jpg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/GundamDay-scaled.jpeg",
  "https://store.japantourguideagency.com/wp-content/uploads/2023/05/GundamNight-scaled.jpg",
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
