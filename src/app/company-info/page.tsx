import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { FOUNDER_MAIL_ADDRESS } from "@/constants/misc";
import Link from "next/link";

const OurCompany = () => {
  return (
    <section className="mx-auto max-w-4xl p-10">
      <article className="min-h-[100svh]">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          Company Profile
        </h1>
        <div className="text-slate-700">
          <ul className="px-6 space-y-3 text-lg font-semibold">
            <li>Company Name: Tokyo Star Agency</li>
            <li>Founder: Taiji ENDO</li>
            <li>
              E-mail:&nbsp;
              <a
                href={`mailto:${FOUNDER_MAIL_ADDRESS}`}
                className="hover:text-blue-800 hover:underline"
              >
                {FOUNDER_MAIL_ADDRESS}
              </a>
            </li>
            <li>Location: Tokyo, Japan</li>
          </ul>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="py-6 px-4 bg-white rounded">
          <h2 className="flex items-center justify-between gap-2 mb-2 font-semibold text-xl">
            Message from CEO
          </h2>
          <div className="px-6 text-slate-700">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <RiDoubleQuotesL className="h-8 w-8 -top-5 -right-5 opacity-40" />
                </div>
              </div>
              Japan Tour Guide Agency originally started as Tokyo Star Agency,
              providing tour guide services for foreign tourists in the Tokyo
              area. As a tour guide myself, I have noticed that many foreign
              tourists share the same impressions about Japan:
              <p>The cleanliness of the streets and cities.</p>
              <p>The sense of safety and freedom from theft.</p>
              <p>
                The feeling of security while walking around the city at any
                time.
              </p>
              <p>
                While these may seem ordinary to Japanese people, they can be
                quite the opposite for others. Unfortunately, littering and
                polluting the environment, theft, and violence can occur in many
                countries.
              </p>
              <p>
                In 604 AD, our country established its first constitution, which
                began with the phrase <q>Cherish the harmony.</q> This reflects
                the idea that conflicts should be resolved through peaceful
                discussions and avoiding the sparks of disputes.
              </p>
              <p>
                The impressions that tourists have about Japan can be traced
                back to this constitution, which has been in place for over 1400
                years. I believe that the collective values ingrained in the
                Japanese people, passed down through generations, contribute to
                the consistent impression of
                <q>safety, security, and cleanliness</q> experienced by foreign
                visitors.
              </p>
              <p>
                That is why we also refer to Japan as <q>Wa no Kuni,</q> meaning
                the <q>Land of Harmony</q> in Japanese.
              </p>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                  <RiDoubleQuotesR className="h-8 w-8 -top-5 -right-5 opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="py-6 px-4 bg-white rounded">
          <h2 className="flex items-center justify-between gap-2 mb-4 font-semibold text-xl">
            Our Mission
          </h2>
          <div className="px-6 text-slate-700">
            <div className="space-y-3">
              <p>Has traveling ever changed your perspective on life?</p>
              <p>
                Traveling allows our bodies and minds to break free from the
                routine, opening up new experiences and emotions. When our
                hearts are liberated, we become more easily moved, able to
                absorb these experiences in their purest form. The positive
                moments and lessons gained during these journeys contribute to a
                more fulfilling and happier life.
              </p>
              <p>
                For me, it was a three-month trip after leaving my job at the
                age of 27 that brought about this change. Encounters in
                extraordinary moments, along with the luxury of time, deepened
                my insights and allowed me to see the world from a completely
                different perspective.
              </p>
              <p>
                That trip altered my values and perception of the world,
                prompting me to contemplate the potential within myself and the
                future I aspire to. It became a catalyst for a more enriching
                and meaningful life.
              </p>
              <p>
                Throughout this transformative journey, the most significant key
                was the connections forged with others.
              </p>
              <p>
                In Japanese, there are two phrases that hold great importance to
                me:
              </p>
              <p>
                <Link
                  href="https://en.wikipedia.org/wiki/Ichi-go_ichi-e"
                  target="_blank"
                  className="font-semibold text-blue-800 underline"
                >
                  Ichigo Ichie
                </Link>
                &nbsp;(Treasure every encounter as it may not come again)
              </p>
              <p>
                <Link
                  href="https://www.masterspeakingjapanese.com/blog/japanese-calligraphy-en"
                  target="_blank"
                  className="font-semibold text-blue-800 underline"
                >
                  Goen
                </Link>
                &nbsp;(Relationship/Fate)
              </p>
              <p>
                I believe that people around the world, not just in Japan, value
                the connections between individuals.
              </p>
              <p>
                The COVID-19 pandemic forcefully divided and restricted our
                connections with others, making us realize the importance of
                these bonds more than ever before. Consequently, the
                significance of encounters during our travels has increased.
              </p>
              <p>
                For many, traveling to Japan may be a once-in-a-lifetime
                opportunity. In light of this, we treasure the concept of
                <q>Ichigo Ichie,</q> aiming to ensure that each person&apos;s
                experience becomes a positive essence that enriches their
                future.
              </p>
              <p>
                We strive to provide value that can extend from individuals to
                their families, friends, colleagues, local communities, and even
                contribute to global peace. It is our daily commitment to offer
                experiences that bring joy and enrichment to the hearts of
                everyone involved.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default OurCompany;
