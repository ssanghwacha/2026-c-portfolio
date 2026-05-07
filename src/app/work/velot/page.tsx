import { projects, categoryLabel } from '@/data/projects';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import QuoteBlock from '@/components/casestudy/QuoteBlock';
import TwoCol from '@/components/casestudy/TwoCol';
import PersonaCard from '@/components/casestudy/PersonaCard';
import NumberedBlock from '@/components/casestudy/NumberedBlock';
import ABTestCard from '@/components/casestudy/ABTestCard';
import MetricRow from '@/components/casestudy/MetricRow';
import BigStat from '@/components/casestudy/BigStat';
import ImagePlaceholder from '@/components/casestudy/ImagePlaceholder';
import SeeMore from '@/components/casestudy/SeeMore';

const NAV = [
  { id: 'overview',   label: 'Project Overview'  },
  { id: 'context',    label: 'The Problem'        },
  { id: 'research',   label: 'Research & Insight' },
  { id: 'system',     label: 'Design System'      },
  { id: 'testing',    label: 'User Testing'       },
  { id: 'results',    label: 'Result'             },
  { id: 'reflection', label: 'Reflection'         },
];

const project = projects.find((p) => p.slug === 'velot')!;

export default function VelotPage() {
  const seeMoreProjects = projects
    .filter((p) => p.slug !== project.slug && p.thumbnail)
    .slice(0, 2)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      category: categoryLabel[p.category] ?? p.category,
      thumbnail: p.thumbnail,
    }));

  return (
    <ProjectLayout projectNav={NAV}>
      <CaseHero
        title={project.title}
        headline={`${project.title} case study layout placeholder`}
        description={project.description}
        role="UI/UX Designer"
        team={[
          { initials: 'SC', color: '#5C6BC0' },
          { initials: 'TN', color: '#AB47BC' },
          { initials: 'WL', color: '#26A69A' },
          { initials: 'BD', color: '#424242' },
        ]}
        timeline="8 weeks"
        tools={[
          { name: 'Figma', bg: '#A259FF', textColor: '#fff', phosphorIcon: 'FigmaLogo' },
        ]}
        nav={NAV}
      />

      <div>
        <div className="ml-[30%] pr-9 pt-[40px]">
          <ImagePlaceholder ratio="16/9" label={`${project.title} hero media placeholder`} />
        </div>

        <div className="ml-[30%] px-7 pt-12">
          <CaseSection id="overview">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Overview</p>
            <p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6] max-w-2xl">
              {project.title} overview content will be added here.
            </p>
          </CaseSection>

          <CaseSection id="context">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">The Problem</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Define the problem<br />and the design opportunity.
            </h2>
            <TwoCol
              left={
                <div className="font-satoshi">
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">Current state</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>Placeholder insight</li>
                    <li>Placeholder constraint</li>
                    <li>Placeholder user need</li>
                    <li>Placeholder business context</li>
                  </ul>
                </div>
              }
              right={
                <div className="font-satoshi">
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">Design focus</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>Clarify hierarchy</li>
                    <li>Improve decision flow</li>
                    <li>Reduce ambiguity</li>
                    <li>Build a flexible system</li>
                  </ul>
                </div>
              }
            />
            <QuoteBlock>
              Replace this quote with the core project insight.
            </QuoteBlock>
          </CaseSection>

          <CaseSection id="research">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Research</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-3">
              Research findings and insight.
            </h2>
            <p className="font-satoshi text-[#ADADAD] dark:text-[#555] mb-10">
              Interviews · desk research · competitive analysis
            </p>
            <div className="grid grid-cols-3 gap-4">
              <PersonaCard icon="01" quote="Placeholder user quote." />
              <PersonaCard icon="02" quote="Placeholder user quote." />
              <PersonaCard icon="03" quote="Placeholder user quote." />
            </div>
            <QuoteBlock>
              Add the strongest research takeaway here.
            </QuoteBlock>
          </CaseSection>

          <CaseSection id="system">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Design System</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-12">
              System, structure, and key screens.
            </h2>

            <div className="space-y-16">
              <div>
                <NumberedBlock number={1} title="Structure">
                  Add the primary information architecture or brand system decision.
                </NumberedBlock>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ImagePlaceholder ratio="9/16" label="Screen placeholder" />
                  <ImagePlaceholder ratio="9/16" label="Screen placeholder" />
                </div>
              </div>

              <div>
                <NumberedBlock number={2} title="Key Flow">
                  Add the main flow, campaign logic, or interaction pattern.
                </NumberedBlock>
                <ImagePlaceholder ratio="16/7" label="Flow placeholder" className="mt-8" />
              </div>

              <div>
                <NumberedBlock number={3} title="Visual System">
                  Add color, type, layout, component, or brand system notes.
                </NumberedBlock>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ImagePlaceholder ratio="9/16" label="System placeholder" />
                  <ImagePlaceholder ratio="9/16" label="System placeholder" />
                </div>
              </div>

              <div>
                <NumberedBlock number={4} title="Final Direction">
                  Add the final design direction and why it works.
                </NumberedBlock>
                <ImagePlaceholder ratio="16/9" label="Final direction placeholder" className="mt-8" />
              </div>
            </div>
          </CaseSection>

          <CaseSection id="testing">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">User Testing</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Testing and iteration.
            </h2>
            <BigStat
              before="Before"
              after="After"
              delta="Result"
              caption="Replace this with the strongest measurable outcome."
            />
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Before</p>
                <ImagePlaceholder ratio="9/16" label="Before placeholder" />
              </div>
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">After</p>
                <ImagePlaceholder ratio="9/16" label="After placeholder" />
              </div>
            </div>
            <div className="space-y-4">
              <ABTestCard
                objective="Decision confidence"
                beforeLabel="Before"
                afterLabel="After"
                beforeContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">TBD</p>}
                afterContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">TBD</p>}
                finding="Add the key finding here."
              />
              <ABTestCard
                objective="Task clarity"
                beforeLabel="Before"
                afterLabel="After"
                beforeContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">TBD</p>}
                afterContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">TBD</p>}
                finding="Add the key finding here."
              />
            </div>
          </CaseSection>

          <CaseSection id="results">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Result</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Before / After
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Before</p>
                <ImagePlaceholder ratio="9/16" label="Before placeholder" />
              </div>
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">After</p>
                <ImagePlaceholder ratio="9/16" label="After placeholder" />
              </div>
            </div>
            <MetricRow label="Outcome" before="TBD" after="TBD" />
            <MetricRow label="Efficiency" before="TBD" after="TBD" />
            <MetricRow label="Confidence" before="TBD" after="TBD" />
          </CaseSection>

          <CaseSection id="reflection">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Reflection</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-12">
              Takeaways
            </h2>
            <div className="space-y-10">
              <NumberedBlock number={1} title="Takeaway one">
                Add reflection content here.
              </NumberedBlock>
              <NumberedBlock number={2} title="Takeaway two">
                Add reflection content here.
              </NumberedBlock>
              <NumberedBlock number={3} title="Takeaway three">
                Add reflection content here.
              </NumberedBlock>
            </div>
          </CaseSection>

          <SeeMore projects={seeMoreProjects} />
        </div>
      </div>
    </ProjectLayout>
  );
}
