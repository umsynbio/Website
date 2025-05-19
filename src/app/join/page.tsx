'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Join() {
  return (
    <div className="bg-gray-900">
      {/* Hero section with background image */}
      <div className="relative isolate">
        {/* Background image with overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/join/lab_work.jpg"
            alt="Lab work background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Why join MSBT?</h1>
          </div>
        </div>
      </div>

      {/* Logistics section */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-400">When</h2>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Our <span className="font-bold text-blue-400">2025 recruitment season</span> has ended. We will begin accepting applications for <span className="font-bold text-blue-400">2026</span> in January 2026.
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Interested in joining for 2026? <Link href="https://forms.gle/zcNKGwTx8DX3DgSq7" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">Sign up for our interest list</Link>
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-400">Who</h2>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Any undergraduate student with an interest in synthetic biology and biological engineering is welcome to join! Absolutely <span className="font-bold text-blue-400">no previous experience is required</span>.
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-lg leading-8 text-gray-300">
                In addition, we always have places for students interested in mathematical modeling, business, programming, web design, and animation. Learn more about these roles at the end of the page. We also have graduate students and faculty advisors from multiple colleges and departments on campus.
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-lg leading-8 text-gray-300">
                MSBT holds weekly content and working meetings from February to the end of the winter semester. Continuing through spring, summer, and the following fall semester, we transition to working on the year&apos;s project. The iGEM competition takes place in late October!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Majors section */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="bg-[#1D334A] rounded-lg shadow-lg p-8">
            <p className="text-lg leading-8 text-white">Our team is composed of undergraduate students from a variety of majors, including (but not limited to):</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 list-disc pl-8">
              {[
                'Molecular, Cellular, and Developmental Biology',
                'Biomedical Engineering',
                'Chemical Engineering',
                'Biology',
                'Mathematics',
                'Biochemistry',
                'Biophysics',
                'Neuroscience',
                'Microbiology',
                'Materials Science & Engineering',
                'Computer Science'
              ].map((major) => (
                <li key={major} className="text-lg text-white">{major}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Opportunities section */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Joining MSBT</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            There are boundless opportunities for our team members to learn both hard and soft skills through experience with:
          </p>
          <ul className="mt-6 space-y-3 text-lg leading-8 text-gray-300 list-disc pl-8">
            {[
              'working in the lab',
              'fundraising and managing finances',
              'community outreach',
              'helping with organization and leadership',
              'studying and communicating synthetic biology research'
            ].map((opportunity) => (
              <li key={opportunity}>{opportunity}</li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our team is a platform for budding scientists, communicators, and fascinated biologists to be introduced into the field and to the academic research process!
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Check out the various roles that the members of our club can participate in below.
          </p>
        </div>
      </div>

      {/* Interest areas section */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            {/* Wet Lab Research */}
            <div className="flex items-start space-x-4 bg-[#1D334A] rounded-[50px] p-8 shadow-lg">
              <div className="flex-shrink-0">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-8 text-white">
                  The main component of our research project takes place in the lab! Our team of undergraduates participate in <span className="font-bold">wet lab research</span> throughout the summer in MSBT&apos;s on-campus lab. We do not require new members to have prior experience in the lab as we will provide training to those who need it!
                </p>
              </div>
            </div>

            {/* Computational Modeling */}
            <div className="flex items-start space-x-4 bg-[#35682D] rounded-[50px] p-8 shadow-lg">
              <div className="flex-shrink-0">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-8 text-white">
                  We use <span className="font-bold">computational modeling</span>, both mathematical and molecular, to inform different aspects of our research project. In the past, we have used softwares such as GROMACS, PyMol, MATLAB, HADDOCK, and AlphaFold. Consider this subteam if you know how to use the <span className="font-bold">Linux command line</span> or have an interest in <span className="font-bold">biophysics</span>, <span className="font-bold">bioinformatics</span>, or even <span className="font-bold">molecular biology</span>!
                </p>
              </div>
            </div>

            {/* Human Practices */}
            <div className="flex items-start space-x-4 bg-[#1D334A] rounded-[50px] p-8 shadow-lg">
              <div className="flex-shrink-0">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-8 text-white">
                  Some of our <span className="font-bold">human practices</span> efforts include connecting with stakeholders, partnering with other <Link href="https://igem.org/" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">iGEM</Link> teams to give and receive advice on our respective projects, and participating in educational programs to introduce younger students to the field of synthetic biology. Most recently, we visited a local Ann Arbor middle school to talk about synthetic biology, present our current research project, and lead an interactive activity with the students!
                </p>
              </div>
            </div>

            {/* Finance */}
            <div className="flex items-start space-x-4 bg-[#35682D] rounded-[50px] p-8 shadow-lg">
              <div className="flex-shrink-0">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-8 text-white">
                  Since MSBT is entirely student-run, we rely on independent funding, through fundraising and donations, to purchase supplies for our research project and to send some of our members to Paris for the iGEM competition! Our <span className="font-bold">finance team</span> raises money by working with various University of Michigan departments, such as Biomedical Engineering, Chemistry, and Molecular, Cellular, and Developmental Biology, reaching out to companies and community partners, and applying for grants.
                </p>
              </div>
            </div>

            {/* Wiki Page Development */}
            <div className="flex items-start space-x-4 bg-[#1D334A] rounded-[50px] p-8 shadow-lg">
              <div className="flex-shrink-0">
                <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-8 text-white">
                  As a part of our project submission to iGEM, our team creates a <span className="font-bold">Wiki Page</span> detailing our computational modeling work, human practices efforts, lab experiments, and project results. While the entire team develops content for the page, the Wiki specific subteam codes the actual website over the summer. If you are interested in web design or web development, we encourage you to apply (even if you know nothing about biology)!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 