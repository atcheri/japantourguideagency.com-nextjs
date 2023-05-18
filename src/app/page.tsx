import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Welcome from "./components/Welcome";
import WhyChooseUs from "./components/WhyChooseUs";
import { getRandomPhotoPairUrls } from "../helpers/images";

export default function Home() {
  const photos = getRandomPhotoPairUrls();

  return (
    <>
      <Hero />
      <Welcome photos={photos} />
      <WhyChooseUs />
      <Carousel />
      <NewsLetter />
    </>
  );
}
