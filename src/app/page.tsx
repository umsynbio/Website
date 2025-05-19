'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* Hero section with background image */}
      <div className="relative isolate">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={`${basePath}/images/group_home.webp`}
            alt="MSBT Team Photo"
            fill
            className="object-cover object-center"
            objectPosition="center 35%"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Michigan Synthetic Biology Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The Michigan Synthetic Biology Team is an entirely student run research and engineering design team in the biological sciences. We develop and execute our own research projects in the area of synthetic biology.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#what-we-do"
                className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
              >
                Learn more
              </a>
              <Link href="/join" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-300 group">
                Join our team <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature section */}
      <div id="what-we-do" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-blue-400">What We Do</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Advancing Synthetic Biology Research
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our team works on cutting-edge research projects in synthetic biology, combining engineering principles with biological systems to solve real-world problems.
            </p>
          </div>
          <div className="relative w-[500px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`${basePath}/images/about/comp_modeling_team.jpg`}
              alt="Computational modeling team, made up of five members, smiling."
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Who We Are section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Who We Are</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Student-Driven Research Team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The Michigan Synthetic Biology Team provides students the opportunity to gain hands on experience in conducting scientific research, running a laboratory, engineering novel biological systems, fundraising, public outreach, leadership, and working as part of a multidisciplinary team. Every year, the team competes in the International Genetically Engineered Machine (iGEM) jamboree competition in Paris.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-[250px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={`${basePath}/images/about/emily_sophia_vertical.jpg`}
                alt="The presidents of the Michigan Synthetic Biology Team, Sophia Tesic and Emily Wallace, smiling."
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative w-[250px] aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <Image
                src={`${basePath}/images/about/kimi_kareem.jpg`}
                alt="Graduate advisor, Kareem Aboulhosn, and Finance Director, Kimi Lillios, smiling."
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What is Synthetic Biology section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:ml-0 lg:mr-auto">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What is Synthetic Biology?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Intersection of Biology and Engineering
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Synthetic Biology combines biology and engineering to design, construct, and test biological devices and systems. Combining these two disciplines allows us to better understand life and use that understanding to benefit society. Synthetic Biology is distinct from Genetic Engineering in that the latter only alters existing genes, whereas the former utilizes existing, modified, and man-made genes to make life perform useful functions not normally found in nature. Through synthetic biology, it may be possible to solve some of the world&apos;s most challenging problems such as energy shortage, environmental pollution, and disease. However, we must be wary of potential safety and ethical issues along the way.
          </p>
        </div>
      </div>

      {/* What is iGEM section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto">
          <h2 className="text-base font-semibold leading-7 text-blue-400">What is iGEM?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            International Competition in Synthetic Biology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            iGEM is an international undergraduate synthetic biology competition. In 2015, iGEM consisted of 259 teams and 2700 participants from all over the world. Every year, teams research, design, construct, and test a novel biological system. Students have at their disposal bits of DNA from the iGEM Registry of Standard Biological parts to help aid them in building their biological &quot;machine&quot;. In addition, students are encouraged to build their own parts and develop new techniques to make life easier to engineer. Teams also help to increase awareness for synthetic biology through public outreach and analyze safety concerns as a part of the project design process. Projects are wide ranging and are divided into the following categories: Environment, Food and Nutrition, Energy, Foundational Advance, Health and Medicine, Information Processing, Manufacturing, Software Tools, and New Applications. Visit the <a href="https://igem.org/" className="text-blue-400" target="_blank" rel="noopener noreferrer">iGem website</a> for more information.
          </p>
        </div>
      </div>

      {/* Who can Join section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Who can Join?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Open to All Undergraduate Students
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Any undergraduate student with an interest in synthetic biology and biological engineering is welcome to join! Students will become acquainted with the theory and techniques during weekly meetings from February to the end of winter semester. We then transition to working on the year&apos;s project through the spring, summer, and following fall semester. The iGEM competition takes place in late October. To join, applications start in the middle of January!
          </p>
          <div className="mt-10">
            <a
              href="/join"
              className="inline-block rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
            >
              Join MSBT!
            </a>
          </div>
        </div>
      </div>

      {/* Awards section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-4xl text-center border-2 border-blue-400 rounded-lg p-8 bg-gray-800/50">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">Awards</h2>
          </div>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-gray-300">
            <li>Gold Medal, iGEM 2022 Competition</li>
            <li>
              <a href="https://competition.igem.org/sponsorships/impact-grant" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                iGEM Team Impact Grant Recipient 2023
              </a>
            </li>
            <li>Gold Medal, Global Open Genetic Engineering Competition 2023</li>
            <li>2023 Nomination for Best Diagnostics Project</li>
            <li>2024 Silver Medal, Nomination for Best Sustainable Impact</li>
            <li>&quot;Sustaining Ann Arbor Together&quot; Grant Recipient 2024</li>
            <li>Whirlpool Sustainability Grant Recipient 2024</li>
          </ul>
        </div>
      </div>

      {/* Current Project section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">2025 Project</h2>
          <h3 className="mt-4 text-xl font-semibold text-blue-400">Delivery of Target Cancer Therapy Using Magnetotactic Bacteria Vehicles</h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Coming Soon
          </p>
        </div>
      </div>

      {/* Previous Projects section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Previous Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Want to learn more about our past projects? Check out our <a href="/previous-projects" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">previous projects</a> to see what we&apos;ve accomplished.
          </p>
        </div>
      </div>
    </div>
  );
}
