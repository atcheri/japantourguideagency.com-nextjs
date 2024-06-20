import { IoShieldCheckmarkOutline } from "react-icons/io5";
import React from "react";

const TermsOfService = () => {
  return (
    <section className="mx-auto max-w-4xl p-10">
      <article className="min-h-[100svh]">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          Terms and conditions
        </h1>
        <p className="text-slate-700">
          <span className="italic font-bold text-muted-foreground">
            省く: (example: Read about the terms and conditions for using our
            service. If you have any question? Feel free to contact us and we
            will help you out.)
          </span>
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
              <li>Tour fee will be fully refunded 21 days prior to the tour</li>
              <li>
                20% will be charged from less than 20 days prior to the tour
              </li>
              <li>
                30% will be charged from less than 7 days prior to the tour
              </li>
              <li>No refund after 24H and less prior to the tour</li>
              <li>
                Refunds will be processed within a week of receiving the
                customer&apos;s bank account information
              </li>
              <li>
                Transfer fee for 5% will be deducted from the refund amount.
              </li>
              <li>
                Tours may be cancelled due to unexpected conditions such as
                natural disasters or any unforeseen circumstances. If a tour is
                cancelled in such cases, you will be fully reimbursed for the
                tour or offered a rescheduled date, subject to mutual agreement.
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
