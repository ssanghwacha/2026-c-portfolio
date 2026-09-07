import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grocery Nav - Work',
  description: 'Case study: Grocery Nav project design work.',
};

import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import NumberedBlock from '@/components/casestudy/NumberedBlock';
import { Card, CardContent } from '@/components/ui/card';

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'process', label: 'Design Process' },
  { id: 'solution', label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
];

const OVERVIEW_ITEMS = [
  {
    label: 'Timeline',
    value: '3 months',
  },
  {
    label: 'Collaborators',
    value: 'Tk',
  },
  {
    label: 'Role',
    value: 'Product Designer',
  },
];

const CHALLENGE_POINTS = [
  {
    title: 'Complex Navigation',
    body: 'Users struggled with finding products in large grocery stores.',
  },
  {
    title: 'Information Overload',
    body: 'Too many categories and options made the experience overwhelming.',
  },
  {
    title: 'Poor Search Experience',
    body: 'Existing search functionality didn\'t meet user expectations.',
  },
];

const DESIGN_PRINCIPLES = [
  {
    title: 'Intuitive Hierarchy',
    body: 'Clear organization of categories and products for easy browsing.',
  },
  {
    title: 'Smart Search',
    body: 'Intelligent search with suggestions and filters.',
  },
  {
    title: 'Personalization',
    body: 'Tailored recommendations based on shopping history.',
  },
];

export default function GroceryNavPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      sidebar={
        <CaseHero
          title="Grocery Nav"
          meta="Product · UXUI"
          headline="Reimagining grocery shopping navigation through intuitive design and smart recommendations."
          role="Product Designer"
          team={[{ initials: 'SC', color: '#5C6BC0' }]}
          timeline="3 months"
          tools={[
            { name: 'Figma', bg: '#A259FF', textColor: '#fff', phosphorIcon: 'FigmaLogo' },
          ]}
          nav={NAV}
          layout="static"
        />
      }
    >
      <div className="w-full min-w-0 pt-12 lg:mx-auto lg:max-w-[980px]">

      <CaseSection id="overview">
        <h2 className="mb-10 font-rethink text-[38px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
          Overview
        </h2>
        <div className="grid grid-cols-3 gap-8 mb-12">
          {OVERVIEW_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="text-sm text-primary/60 dark:text-accent/60 mb-2">{item.label}</p>
              <p className="text-lg font-medium text-primary dark:text-accent">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-base leading-relaxed text-primary/80 dark:text-accent/80">
          Grocery Nav is a mobile navigation system designed to transform how shoppers find products in large supermarkets.
          By combining intuitive categorization with smart search and personalization, we created a seamless shopping experience
          that reduces friction and increases user satisfaction.
        </p>
      </CaseSection>

      <CaseSection id="challenge">
        <h2 className="mb-10 font-rethink text-[38px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
          The Challenge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHALLENGE_POINTS.map((point, index) => (
            <Card key={index} className="bg-primary/5 dark:bg-accent/5 border-primary/10 dark:border-accent/10">
              <CardContent className="pt-6">
                <h3 className="font-medium text-primary dark:text-accent mb-2">{point.title}</h3>
                <p className="text-sm text-primary/70 dark:text-accent/70">{point.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="process">
        <h2 className="mb-10 font-rethink text-[38px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
          Design Process
        </h2>
        <div className="space-y-8">
          {[
            { number: 1, title: 'Research', description: 'Conducted user interviews and observed shopping behaviors in actual stores.' },
            { number: 2, title: 'Ideation', description: 'Explored multiple navigation patterns and information architectures.' },
            { number: 3, title: 'Prototyping', description: 'Created interactive prototypes to test navigation flows.' },
            { number: 4, title: 'Testing', description: 'Validated designs through user testing and iterated based on feedback.' },
            { number: 5, title: 'Refinement', description: 'Polished the interface and finalized all interactions.' },
          ].map((step) => (
            <NumberedBlock key={step.number} number={step.number} title={step.title}>
              {step.description}
            </NumberedBlock>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="solution">
        <h2 className="mb-10 font-rethink text-[38px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
          Solution
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-medium text-primary dark:text-accent mb-4">Design Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DESIGN_PRINCIPLES.map((principle, index) => (
                <div key={index}>
                  <h4 className="font-medium text-primary dark:text-accent mb-2">{principle.title}</h4>
                  <p className="text-sm text-primary/70 dark:text-accent/70">{principle.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection id="reflection">
        <h2 className="mb-10 font-rethink text-[38px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
          Reflection
        </h2>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-primary/80 dark:text-accent/80">
            This project taught me the importance of understanding real user contexts and constraints.
            By immersing ourselves in the actual shopping environment, we discovered pain points that weren&apos;t
            apparent from user interviews alone.
          </p>
          <p className="text-base leading-relaxed text-primary/80 dark:text-accent/80">
            The iterative design process and continuous user feedback were crucial in refining the navigation system
            into something truly useful and intuitive. Moving forward, I&apos;d like to explore how personalization can be
            extended to provide even more tailored experiences for different shopper personas.
          </p>
        </div>
      </CaseSection>
      </div>
    </ProjectLayout>
  );
}
