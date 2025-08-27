"use client";

import Link from "next/link";

export default function DonatePage() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D334A] to-[#35682D]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Donate to MSBT
            </h1>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              As an undergraduate research organization, our members work hard
              to acquire independent funding. We rely on the support from people
              like you to make our unique research experience possible.
              Donations will directly fund this year&apos;s{" "}
              <Link
                href="/current-project"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                research project
              </Link>
              , benefiting our team of {process.env.student_count} undergraduate
              students.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mx-auto max-w-7xl px-6 p-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
            What Your Gift Supports
          </h2>
          <h3 className="text-xl font-semibold text-blue-400 mb-8">
            All donations will go towards:
          </h3>
          <ul className="space-y-6 text-lg leading-8 text-gray-300 list-disc pl-8 mb-12">
            <li>registering for the iGEM competition</li>
            <li>purchasing the resources necessary to run our experiments</li>
            <li>hosting outreach events in our Ann Arbor community</li>
            <li>
              travelling to Paris to present our findings at the{" "}
              {process.env.year} iGEM jamboree
            </li>
          </ul>
          <p className="text-lg leading-8 text-gray-300">
            Donations of any size have the ability to empower us to achieve our
            research goals this year. Please consider donating to our team!
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1D334A] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Friends & Family
              </h2>
              <p className="text-lg leading-8 text-gray-300 mb-8">
                Friends, family members, and peers alike can donate to MSBT
                using our donor form. This form will direct you through the
                necessary steps to complete your contribution.
              </p>
              <a
                href="https://docs.google.com/forms/d/1wF6D9Beo2Xu938YeWUqNNrfceGRFta_A_25ejVyjuxE/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
              >
                Donor Form
              </a>
            </div>

            <div className="bg-[#35682D] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested Companies
              </h2>
              <p className="text-lg leading-8 text-gray-300 mb-8">
                The process of donation differs slightly for company sponsors.
                If you are a company interested in sponsoring MSBT, we ask that
                you fill out the following form, and we will get back to you
                shortly.
              </p>
              <a
                href="https://forms.gle/6Ah7iQxwA9EoTpjk9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
              >
                Company Donor Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
