import Features from "./components/Features";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import { getRandomPhotoPairUrls } from "../helpers/images";
import ProductsCarousel from "./components/Products/products-carousel";

const Home = async (): Promise<JSX.Element> => {
  const photos = getRandomPhotoPairUrls();

  return (
    <>
      <Hero />
      <Welcome photos={photos} />
      <Features />
      <ProductsCarousel />
      <Testimonials />
      {/* <NewsLetter /> */}
    </>
  );
};

export default Home;
