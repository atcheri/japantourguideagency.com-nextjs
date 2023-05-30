import { IoShieldCheckmarkOutline } from "react-icons/io5";
import React from "react";

const TermsOfService = () => {
  return (
    <section className="mx-auto max-w-4xl pt-10">
      <article className="h-[100svh]">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          Our Terms of Service
        </h1>
        <p className="text-slate-700">
          Read about the terms and conditions for using our service. If you have
          any question? Feel free to contact us and we will help you out.
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="py-6 px-4 bg-white rounded">
          <h2 className="flex items-center justify-between gap-2 mb-4 font-semibold text-xl">
            <span>Cancellation policy</span>
            <div className="p-2 rounded-full bg-green-400 shadow-xl">
              <IoShieldCheckmarkOutline className="h-8 w-8" />
            </div>
          </h2>
          <div className="px-6 text-slate-700">
            <ol className="list-decimal space-y-3">
              <li>
                Tour fee will be fully refunded 21 days prior to the tour
                (Please note that 5 percent will be deducted for the payment
                company)
              </li>
              <li>
                20% will be charged from less than 20 days prior to the tour
              </li>
              <li>
                30% will be charged from less than 7 days prior to the tour
              </li>
              <li>No refund after 24H and less prior to the tour</li>
              <li>
                Tours may be cancelled due to unexpected conditions such as bad
                weather, natural disasters, or any unforeseen circumstances. If
                a tour is cancelled in such cases, you will be fully reimbursed
                for the tour or offered a rescheduled date, subject to mutual
                agreement.
              </li>
              <li>
                Please note that tours will not be cancelled or refunded solely
                based on limited visibility of certain spots due to weather
                conditions.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TermsOfService;
