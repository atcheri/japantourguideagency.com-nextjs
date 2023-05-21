import { GiFuji, GiHiking, GiShintoShrine } from "react-icons/gi";
import {
  RiCreativeCommonsByLine,
  RiCustomerService2Line,
} from "react-icons/ri";

import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IconType } from "react-icons";

type Feature = {
  title: string;
  text: string;
  icon: IconType;
};

const features: Feature[] = [
  {
    title: "Tailored Private Experience",
    text: "Various tour options are available, allowing you to unlock unique tours and customize your itinerary according to your preferences.",
    icon: RiCreativeCommonsByLine,
  },
  {
    title: "Full Immersion in Japanese Culture",
    text: "Immerse yourself in the vibrant tapestry of Japanese culture, exploring ancient villages, sacred shrines, and savoring local cuisine.",
    icon: GiShintoShrine,
  },
  {
    title: "Expert Local Guides and Drivers",
    text: "Experience Japan like a local with friendly guides, gaining insider tips and personalized attention to uncover hidden gems.",
    icon: GiHiking,
  },
  {
    title: "Safety Comfort and Seriousness",
    text: "Experience worry-free travel in Tokyo with a focus on safety, comfort, and expert guidance.",
    icon: AiOutlineSafetyCertificate,
  },
  {
    title: "Discover Iconic Sites",
    text: "Experience the wonders of Japan, from its famous landmarks to lesser-known neighborhoods whilst enjoying the cherry blossoms in spring and autumn foliage.",
    icon: GiFuji,
  },
  {
    title: "Dedicated Customer Service",
    text: "Receive excellent customer support with high levels of professionalism and attention to detail. Enjoy a seamless and unforgettable travel experience.",
    icon: RiCustomerService2Line,
  },
];

const Features = () => {
  return (
    <section className="container my-12 md:my-24 mx-auto text-gray-800">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 px-3">
          <p className="uppercase text-blue-600 font-bold mb-6">
            Our strengths
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Why discover <u className="text-blue-600">Japan </u>with us?
          </h2>
          <p className="text-gray-500 mb-12">
            Embark on an unforgettable journey through Japan with our tailored
            and customized private tours, where we offer exceptional service,
            personalized itineraries, and expert guides to ensure an immersive
            and extraordinary travel experience that will create lifelong
            memories.
          </p>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
          <div className="flex flex-wrap gap-y-12">
            {features.map(({ title, text, icon: Icon }, i) => (
              <div
                key={title}
                className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3"
              >
                <div className="flex">
                  <div className="shrink-0">
                    <div className="p-4 rounded-md shadow-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">{title}</p>
                    <p className="text-gray-500">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
