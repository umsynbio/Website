'use client';

import { motion } from 'framer-motion';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
});

interface Project {
  year: string;
  title: string;
  link: string;
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Bioxane',
    link: 'https://2024.igem.wiki/michigan/'
  },
  {
    year: '2023',
    title: 'Point-of-Care rs773902 Genetic Testing to Inform Antiplatelet Pharmacotherapy',
    link: 'https://2023.igem.wiki/michigan/'
  },
  {
    year: '2022',
    title: 'Amplify: Encapsulin-Facilitated Antimicrobial Peptide Biosynthesis',
    link: 'https://2022.igem.wiki/michigan/'
  },
  {
    year: '2021',
    title: 'Investigating the Versatility of Encapsulin Protein Nanocompartments for Drug Delivery',
    link: 'https://2021.igem.org/Team:Michigan'
  },
  {
    year: '2019',
    title: 'Got Milk? Reducing Food Waste with AHL Detection',
    link: 'https://2019.igem.org/Team:Michigan/Team'
  },
  {
    year: '2018',
    title: 'CRISPR Testing Model: Competitive Binding',
    link: 'https://2018.igem.org/Team:Michigan'
  },
  {
    year: '2017',
    title: 'Thermolyze: A Temperature Controlled Kill-Switch for Containment of Pathogenic Bacteria in Research Labs',
    link: 'https://2017.igem.org/Team:Michigan'
  },
  {
    year: '2016',
    title: 'Aptamer-based Protein Detection',
    link: 'https://2016.igem.org/Team:Michigan'
  },
  {
    year: '2015',
    title: 'Aptapaper: Detecting Any Protein on Paper Test Strips',
    link: 'https://2015.igem.org/Team:Michigan'
  },
  {
    year: '2014',
    title: 'Antibody scFv Secretion in E. coli',
    link: 'https://2014.igem.org/Team:Michigan'
  },
  {
    year: '2013',
    title: 'A Completely Unidirectional Biological Transistor Utilizing an Engineered Fim Switch',
    link: 'https://2013.igem.org/Team:Michigan'
  },
  {
    year: '2012',
    title: 'Utilizing FimE and HBif Recombinases to Tightly Control a Bi-directional and Inheritable Switch',
    link: 'https://2012.igem.org/Team:Michigan'
  },
  {
    year: '2011',
    title: 'DNA Directed Cell Immobilization using Outer Membrane Protetin Containing Zinc Finger Domain',
    link: 'https://2011.igem.org/Team:Michigan'
  },
  {
    year: '2010',
    title: 'Algae Bioflocculation for Biofuel Production and Bioremediation of Oil Sands Tailings Water',
    link: 'https://2010.igem.org/Team:Michigan'
  },
  {
    year: '2009',
    title: 'The Toluene Terminator',
    link: 'https://2009.igem.org/Team:Michigan'
  },
  {
    year: '2008',
    title: 'Beauty...and the CLOCK',
    link: 'https://2008.igem.org/Team:Michigan'
  },
  {
    year: '2007',
    title: 'Divide-By-Two Circuit and BioBrick Landing Pad',
    link: 'https://2007.igem.org/Michigan'
  },
  {
    year: '2006',
    title: 'Plasmene',
    link: 'https://2006.igem.org/wiki/index.php/University_of_Michigan_2006'
  }
];

export default function PreviousProjects() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D334A] to-[#35682D]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Project Archive</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every year, the Michigan Synthetic Biology Team travels to Paris to participate in the International Genetically Engineered Machine (iGEM) competition. Exemplary teams are awarded with gold, silver, or bronze medals based on the competition deliverables established by the iGEM committee each year. As a part of each submission to the iGEM competition, each team must create a Wiki Page detailing their project. Check out some of MSBT's previous projects and Wiki Pages below!
            </p>
          </div>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#1D334A] text-white text-xl font-bold">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200 ${merriweather.className}`}
                    >
                      {project.title}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 