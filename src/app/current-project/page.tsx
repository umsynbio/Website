'use client';

import Image from 'next/image';
import { Space_Mono, Merriweather } from 'next/font/google';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function CurrentProject() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function OriginalCurrentProject() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D334A] to-[#35682D]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Current Project</h1>
            <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
              Point-of-Care rs773902 Genetic Testing to Inform Antiplatelet Pharmacotherapy
            </h2>
            <h3 className="mt-4 text-xl text-blue-400">
              <span className="font-bold">Stay tuned</span> as we continue to work on our project!
            </h3>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
            <h2 className={`text-3xl font-bold text-white mb-8 tracking-tight ${merriweather.className}`}>Abstract</h2>
            <div className={`prose prose-lg prose-invert ${merriweather.className}`}>
                <p className="text-lg leading-relaxed text-gray-300 font-light">
                    PAR4 is a platelet receptor that causes blood clotting when activated. A prevalent point mutation in the gene for this receptor makes commonly prescribed antiplatelet therapies less effective; however, alternative, unaffected options are available. We will develop an accessible test for this mutation that can be performed in a physician&apos;s office using isothermal DNA amplification and a fluorescent marker.
                </p>
            </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="mx-auto max-w-7xl px-6 pt-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-12">Background</h2>
          <div className="space-y-8 text-lg leading-8 text-gray-300">
            <p>
              Disparities in thrombosis are a significant contributor to racial healthcare inequalities in America, with rates of venous thromboembolism incidence 30-100% higher in African Americans than whites (Folsom et al.). Evidence shows differential PAR4 platelet activation by race may contribute to this disparity (Tourdot et al.). A single nucleotide polymorphism (SNP) in the PAR4 gene encoding an Ala to Thr mutation may be responsible for about 50% of racial differences in PAR4 activation, with 81% of alleles in persons of European ancestry coding for PAR4-Ala120, while 57% of alleles in persons of African ancestry code for PAR4-Thr120 (Tourdot et al.). Patients with this mutation have an increased risk of stroke, with an Odds Ratio of 1.166 for each additional copy of the gene (Whitley et al.). Further, individuals with at least one allele coding for PAR4-Thr120 may experience resistance to common treatments, demonstrating increased clotting relative to PAR4-Ala120 ex-vivo in the presence of aspirin and clopidogrel (Tourdot et al.). This effect may be abolished by treating platelets with heparin (Tourdot et al.) or ticagrelor (Whitley et al.).
            </p>
            <p>
              Recent advances in sequencing technology make genome-directed therapy a viable strategy when indicated in high resource settings. However, in many places access to traditional sequencing services may be affected by lack of access to expensive equipment and the need for a second, follow-up patient contact (Kaplan-Lewis, E., & Percac-Lima, S., 2013) to discuss sequencing results and implement treatment adjustments. Cheap, fast, and accessible point-of-care testing (POCT) may address these challenges. Recent work on loop-mediated isothermal DNA amplification (LAMP) with competitive fluorescent probes for SNP detection is a promising strategy toward this end, with evidence demonstrating the system&apos;s ability to detect a SNP rapidly and accurately by producing a fluorescent signal in its presence (Hyman et al.).
            </p>
          </div>
        </div>
      </section>

      {/* Our Plan Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/current/plan_background.jpg"
            alt="Laboratory background"
            fill
            className="object-cover object-center object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Our Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-lg text-gray-300">
                <h3 className="text-xl font-semibold text-white mb-4">Design & Development</h3>
                <p>Design primers for and develop an effective LAMP based test with conventionally purified PAR4 gene sequences and standard fluorescence detection techniques.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-lg text-gray-300">
                <h3 className="text-xl font-semibold text-white mb-4">DNA Extraction</h3>
                <p>Test and develop methods for extraction of human DNA compatible with our test and the constraints of POCT using immortal human cell lines.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-lg text-gray-300">
                <h3 className="text-xl font-semibold text-white mb-4">Detection Methods</h3>
                <p>Test and develop fluorescence detection methodology compatible with our test and POCT.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 