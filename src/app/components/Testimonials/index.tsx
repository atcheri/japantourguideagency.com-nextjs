"use client";

import { Button, Modal } from "flowbite-react";
import { RiDoubleQuotesL, RiDoubleQuotesR, RiStarFill } from "react-icons/ri";

import Image from "next/image";
import TestimonialContent from "./TestimonialContent";
import { useState } from "react";

type FeedbackType = {
  content: string;
  image: string;
  name: string;
  stars: number;
  title: string;
};

const feedbacks: FeedbackType[] = [
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f4/5d/default-avatar-2020-32.jpg",
    name: "Allison",
    stars: 5,
    content: `I really cannot express enough how fantastic our experience was. Masae and Tak were extraordinary and really were key factors in bringing this bucket list adventure into reality for us. Let me start by saying that we were not very aware of what Japan's weather is like and for that reason we initially booked this private adventure to go and see Mt. Fuji. Masae communicated with us prior to our arrival that the likelihood of catching a glimpse of the shy mountain was not very good for our dates. Instead, she gave us several other suggestions and left the day open to whatever adventure suited the best for our desires and the weather the day of our trip.
            Tak was early to pick us up and we were all so excited that we were off earlier than expected. Because our first stop was meant to be the Digital Art Exhibit and it was not due to open yet, she added a quick stop at "Baby Liberty" (a miniature of our statue of Liberty, also gifted by the french) along with an additional stop in Odaiba, at a massive statue of one of Japan's Anime favorites, Gundam (19.7 meters). Then on to the museum. It was INCREDIBLE. Such a cool experience for our entire group (8 people from 7 to 43 years old). Lots of different rooms with different themes and interactive experiences.
            Next: Kamakura. Such a beautiful little city. Masae was spot on in this suggestion for us. We saw the great buddha, had lunch, visited Tsurugaoka Hachimangū and wandered through some of the cute streets and shops along the way.
            Lunch note: We had several people in our group on the hunt for great Ramen. Masae and Tak discussed and came up with a great stop for us at a little ramen shop for lunch. They sat and talked with us and really made the experience better for us with their company. Tak helped me decode my puzzle box that I purchased on our way to see the great Buddha. Mmmm. I am still dreaming of that ramen.
            The drive to and from: Delightful. Such a comfortable van for all eight of us. Masae was eager to share any info along the way or answer any questions. They were very accommodating to our needs, stopping for us to grab some snacks and drinks too.
            I really have only super positive memories and anecdotes from this experience. It was truly a delight spending the day with Masae and Tak both and our whole group would highly reccomend this trip!
        `,
    title: "It Was Awesome!",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/ed/ce/default-avatar-2020-7.jpg",
    name: "Josh G.",
    stars: 5,
    content: `Lots of culture and landscape to explore around the Mt. Fuji area. Our traveller group was large, 9 family members including older adults, teenagers and young children from Canada and the US.
            Our tour guide Taiji spoke English very well and catered the tour expertly for our group despite our diverse age range. He gave us lots of insights into the heritage of the sites we visited. Later in the evening, he took us to the Shibuya District in Tokyo and showed us the best gift stores and sushi. Arakura Sengen shrine with views of Mt Fuji, with a local ramen lunch was a once in a lifetime experience.
            You will get everything in the tour description, excellent service and company. Highly recommend this tour for families or large groups. Ask for Taiji to be your guide. It will be the highlight of your vacation.
        `,
    title: "Best Tour Guides!",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/f0/48/default-avatar-2020-15.jpg",
    name: "Moustafa H",
    stars: 5,
    content: `This custom-tailored tour of Mt.Fuji was a perfect way to end our trip to Japan. We saw many beautiful views of the mountain, went inside the ice/wind caves, and visited some lakes and an old-styled Japanese village.
            But our tour guide Sumiko and driver Tak truly made the whole day special. Both were super kind, funny, and a joy to just talk with. Sumiko was so knowledgeable on the history and culture of each spot, and took us to sites we wouldn't have found on our own. Tak was super funny, and even went out of his way to drive us past spots in the city that my travel party would enjoy on our way back to the hotel.
            They both also gave us recommendations for things to do for the rest of our stay in Japan. Ask for them, and you'll have an unforgettable experience!
    `,
    title: "Amazing Trip",
  },
];

const initialModal = {
  show: false,
  title: "",
  content: "",
};

const Testimonials = () => {
  const [modalContent, setModalContent] = useState<{
    show: boolean;
    title: string;
    content: string;
  }>(initialModal);

  const toggleShow = (title: string = "", content: string = "") => {
    if (modalContent.show) {
      setModalContent(initialModal);
      return;
    }

    setModalContent({ show: true, content, title });
  };

  return (
    <section className="container mx-auto my-16 sm:my-24 lg:my-32 px-3">
      <div className="flex flex-col gap-2 mb-16">
        <h2 className="text-3xl font-semibold">
          Hear from Our Satisfied Travelers
        </h2>
        <p className="text-xl text-slate-600">
          Read what our happy customers have to say about their incredible
          experiences exploring Japan with us.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {feedbacks.map(({ image, name, stars, content, title }, id) => (
          <div
            key={`feedback-${id}`}
            className="p-6 bg-white shadow-md rounded-lg cursor-pointer"
            onClick={() => toggleShow(title, content)}
          >
            <div className="flex justify-end sm:-mt-12">
              <Image
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-500"
                src={image}
                alt={`Testimonial from ${name}`}
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-600 text-2xl font-semibold">{title}</h3>
              <div className="flex">
                {[...Array(stars)].map((s, i) => (
                  <RiStarFill
                    key={`${name}-stars-${i}`}
                    className="h-6 w-6 fill-yellow-200"
                  />
                ))}
              </div>
              <p className="mt-2 text-slate-500">
                <RiDoubleQuotesL className="h-10 w-10 relative -left-5 opacity-40" />
                <TestimonialContent content={content} />
                <span className="flex justify-end">
                  <RiDoubleQuotesR className="h-10 w-10 relative -top-5 -right-5 opacity-40" />
                </span>
              </p>
              <div className="flex justify-end mt-4">
                <span className="text-xl font-medium italic text-blue-600">
                  {name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        show={modalContent.show}
        onClose={() => toggleShow()}
        dismissible={true}
      >
        <Modal.Header>{modalContent.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {modalContent.content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => toggleShow()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Testimonials;
