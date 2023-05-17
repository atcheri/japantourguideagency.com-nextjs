import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Welcome from "./components/Welcome";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Carousel />
      <NewsLetter />
    </>
  );
}
