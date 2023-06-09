import Features from "./components/Features";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";
import { fetchProducts } from "@/helpers/products";
import { getRandomPhotoPairUrls } from "../helpers/images";

const Home = async (): Promise<JSX.Element> => {
  const photos = getRandomPhotoPairUrls();
  const tours = await fetchProducts();

  return (
    <>
      <Hero />
      <Welcome photos={photos} />
      <Features />
      <Products tours={tours} />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default Home;
