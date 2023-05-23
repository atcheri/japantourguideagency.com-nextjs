import Features from "./components/Features";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import SwiperSlider from "./components/SwiperSlider";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import { getRandomPhotoPairUrls } from "../helpers/images";

export default function Home() {
  const photos = getRandomPhotoPairUrls();

  return (
    <>
      <Hero />
      <Welcome photos={photos} />
      <Features />
      <SwiperSlider />
      <Testimonials />
      <NewsLetter />
    </>
  );
}
