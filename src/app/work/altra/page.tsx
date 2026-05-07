import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import HoverVideo from '@/components/casestudy/HoverVideo';
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

export default function AltraPage() {
  return (
    <ProjectLayout projectNav={NAV}>
      <CaseHero
        title="Altra"
        headline="From 25% to 75% risk awareness making hiking safer in uncertain conditions"
        description="By restructuring navigation around safety states rather than routes, ALTRA helps hikers understand their current risk and make confident decisions in unpredictable situations."
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
          <HoverVideo
            src="https://golden-parfait-60a7b7.netlify.app/001.mp4"
            fallback="https://cdn.prod.website-files.com/67cf995ac794a925d9518c2e/69b1dd97e3c9f0b640b0d1df_alltra-main01.png"
            alt="Altra"
            className="w-full h-auto block rounded-[8px]"
          />
        </div>

        <div className="ml-[30%] px-7 pt-12">
          {/* Overview */}
          <CaseSection id="overview">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Overview</p>
            <p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6] max-w-2xl">
              Most trail apps tell you where you are.<br />Altra tells you what to do next.
            </p>
          </CaseSection>

          {/* The Problem */}
          <CaseSection id="context">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">The Problem</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Knowing where you are<br />isn&apos;t the same as knowing<br />what to do next.
            </h2>
            <TwoCol
              left={
                <div className="font-satoshi">
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">What apps provide</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>GPS coordinates</li>
                    <li>Route maps</li>
                    <li>ETA</li>
                    <li>Elevation</li>
                  </ul>
                </div>
              }
              right={
                <div className="font-satoshi">
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">What hikers face</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>Ambiguous junctions</li>
                    <li>Scale distortion</li>
                    <li>Fading daylight</li>
                    <li>Unclear thresholds</li>
                  </ul>
                </div>
              }
            />
            <QuoteBlock>
              Even with exact GPS, the right next step isn&apos;t always obvious.
            </QuoteBlock>
          </CaseSection>

          {/* Research & Insight */}
          <CaseSection id="research">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Research</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-3">
              15 hikers. One question:<br />when do you stop trusting the map?
            </h2>
            <p className="font-satoshi text-[#ADADAD] dark:text-[#555] mb-10">
              Google Forms · 12 beginner + 3 peer hikers · ages 25–40
            </p>
            <div className="grid grid-cols-3 gap-4">
              <PersonaCard icon="🐴" quote="I thought I was on the right path until it was too late." />
              <PersonaCard icon="🐦" quote="I kept checking the map, but I still wasn't sure." />
              <PersonaCard icon="🐈" quote="I didn't know if turning back was overreacting." />
            </div>
            <QuoteBlock>
              Hikers don&apos;t need precision. They need a signal that their next step is safe.
            </QuoteBlock>
          </CaseSection>

          {/* Design System */}
          <CaseSection id="system">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Design System</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-12">
              From route to state.
            </h2>

            <div className="space-y-16">
              <div>
                <NumberedBlock number={1} title="Route → State">
                  The primary screen reads Safe, Caution, or Critical — not coordinates.
                </NumberedBlock>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ImagePlaceholder ratio="9/16" label="Safe state — phone mockup" />
                  <ImagePlaceholder ratio="9/16" label="Critical state — phone mockup" />
                </div>
              </div>

              <div>
                <NumberedBlock number={2} title="Metrics → Signals">
                  ETA, daylight, and weather collapse into a single judgment line.
                </NumberedBlock>
                <ImagePlaceholder ratio="16/7" label="Timeline — Now / Sunset / Arrival" className="mt-8" />
              </div>

              <div>
                <NumberedBlock number={3} title="Safety State Model">
                  Each state has a defined threshold — temporal (return time + 30min &lt; sunset) and environmental (weather, trail condition).
                </NumberedBlock>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <ImagePlaceholder ratio="9/16" label="Temporal boundary — Safe" />
                  <ImagePlaceholder ratio="9/16" label="Temporal boundary — Critical" />
                </div>
              </div>

              <div>
                <NumberedBlock number={4} title="State → Tokens">
                  Color, weight, and hierarchy shift with risk — not brand.
                </NumberedBlock>
                <ImagePlaceholder ratio="16/9" label="Variable tokens — safe / critical" className="mt-8" />
              </div>
            </div>
          </CaseSection>

          {/* User Testing */}
          <CaseSection id="testing">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">User Testing</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Recognition got 58% faster.
            </h2>
            <BigStat
              before="4.88s"
              after="2.06s"
              delta="−58%"
              caption="Time to identify safety status — route-first vs state-first layout."
            />
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">A: Route-first</p>
                <ImagePlaceholder ratio="9/16" label="Layout A" />
              </div>
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">B: State-first</p>
                <ImagePlaceholder ratio="9/16" label="Layout B" />
              </div>
            </div>
            <div className="space-y-4">
              <ABTestCard
                objective="Decision confidence (1–5)"
                beforeLabel="A: Route-first"
                afterLabel="B: State-first"
                beforeContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">4.0</p>}
                afterContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">4.75</p>}
                finding="Users felt more certain about whether to continue or turn back."
              />
              <ABTestCard
                objective="Risk awareness accuracy"
                beforeLabel="A: Route-first"
                afterLabel="B: State-first"
                beforeContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">25%</p>}
                afterContent={<p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">75%</p>}
                finding="Three times more users correctly identified the current risk level."
              />
            </div>
          </CaseSection>

          {/* Result */}
          <CaseSection id="results">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Result</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-10">
              Before / After
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Before</p>
                <ImagePlaceholder ratio="9/16" label="Route-first home" />
              </div>
              <div>
                <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">After</p>
                <ImagePlaceholder ratio="9/16" label="State-first home" />
              </div>
            </div>
            <MetricRow label="Risk awareness"      before="25%"     after="75%"           />
            <MetricRow label="Recognition time"    before="8.44s"   after="5.87s (−30%)"  />
            <MetricRow label="Decision confidence" before="4.0 / 5" after="4.75 / 5"      />
          </CaseSection>

          {/* Reflection */}
          <CaseSection id="reflection">
            <p className="font-satoshi type-eyebrow text-[#ADADAD] dark:text-[#555] mb-4">Reflection</p>
            <h2 className="font-satoshi type-hero text-[#1E1E1E] dark:text-[#E6E6E6] mb-12">
              Takeaways
            </h2>
            <div className="space-y-10">
              <NumberedBlock number={1} title="Confidence matters more than speed">
                Hikers act on certainty, not on latency.
              </NumberedBlock>
              <NumberedBlock number={2} title="Safety needs thresholds, not warnings">
                &ldquo;Be careful&rdquo; performs no better than nothing.
              </NumberedBlock>
              <NumberedBlock number={3} title="Binary states beat fuzzy ones">
                Removing the middle &ldquo;Warning&rdquo; tier sharpened decisions.
              </NumberedBlock>
            </div>
          </CaseSection>

          <SeeMore
            projects={[
              { slug: 'billow', title: 'Billow', category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
              { slug: 'velot',  title: 'Velot',  category: 'Branding',       thumbnail: '/assets/projects/VELOT.jpg'  },
            ]}
          />
        </div>
      </div>
    </ProjectLayout>
  );
}
