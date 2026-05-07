import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import QuoteBlock from '@/components/casestudy/QuoteBlock';
import TwoCol from '@/components/casestudy/TwoCol';
import PersonaCard from '@/components/casestudy/PersonaCard';
import NumberedBlock from '@/components/casestudy/NumberedBlock';
import ABTestCard from '@/components/casestudy/ABTestCard';
import MetricRow from '@/components/casestudy/MetricRow';
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
      {/* Fixed left sidebar */}
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

      {/* Right column */}
      <div className="ml-[30%]">
        {/* Hero image — edge to edge within right column */}
        <div className="relative h-screen">
          <Image
            src="/assets/projects/altra.jpg"
            alt="Altra"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Case study content */}
        <div className="px-7">
          {/* Overview */}
          <CaseSection id="overview">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Overview</p>
            <p className="text-xl text-[#1E1E1E] dark:text-[#E6E6E6] max-w-2xl leading-[160%]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Altra is a hiking safety navigation app that restructures the experience around real-time safety states.
              Most trail apps tell you where you are — Altra tells you what to do next.
            </p>
          </CaseSection>

          {/* Context */}
          <CaseSection id="context">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Context</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              On the trail, you do not always know which direction is correct.
            </h2>
            <TwoCol
              left={
                <div style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">What apps provide</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>GPS coordinates</li>
                    <li>Route maps</li>
                    <li>Distance to destination</li>
                    <li>Elevation data</li>
                  </ul>
                </div>
              }
              right={
                <div style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-4">What hikers actually need</p>
                  <ul className="space-y-3 text-[#1E1E1E] dark:text-[#E6E6E6]">
                    <li>Is it safe to continue?</li>
                    <li>How much daylight remains?</li>
                    <li>Should I turn back now?</li>
                    <li>What are the risks ahead?</li>
                  </ul>
                </div>
              }
            />
            <QuoteBlock>
              The problem is not knowing where you are. It is knowing what to do next.
            </QuoteBlock>
          </CaseSection>

          {/* Research */}
          <CaseSection id="research">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Research</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Understanding the Behaviour
            </h2>
            <p className="text-[#ADADAD] dark:text-[#555] mb-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Google Forms questionnaire · 12 beginner hikers, 3 peer hikers · Ages 25–40
            </p>
            <div className="grid grid-cols-3 gap-4">
              <PersonaCard icon="🐴" quote="I always feel unsure about whether to keep going or turn back, especially when it gets cloudy." />
              <PersonaCard icon="🐦" quote="The hardest part isn't finding the trail — it's knowing when conditions have changed too much." />
              <PersonaCard icon="🐈" quote="I wish the app would just tell me: is it safe? Instead of showing me coordinates I can't interpret." />
            </div>
          </CaseSection>

          {/* Design System */}
          <CaseSection id="system">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Design System</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-12" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Translating Safety into Structure
            </h2>
            <div className="space-y-10">
              <NumberedBlock number={1} title="Route → State">
                Shift the interface focus from destination-based routing to current safety state. The primary screen
                communicates Safe, Caution, or Critical — not GPS coordinates.
              </NumberedBlock>
              <NumberedBlock number={2} title="Metrics → Judgment Signals">
                Distance, ETA, and daylight are integrated into a unified timeline. Rather than displaying raw data,
                the system interprets it: "1.5 hrs to summit, 2.2 hrs of daylight remaining."
              </NumberedBlock>
              <NumberedBlock number={3} title="Safety State Model">
                Three states with defined temporal and environmental thresholds. Each state triggers a distinct visual
                hierarchy and recommended action set.
              </NumberedBlock>
              <NumberedBlock number={4} title="State-Driven Tokens">
                Design tokens are mapped to safety states, not aesthetic preferences. Color, iconography, and typography
                shift with context — not brand guidelines.
              </NumberedBlock>
            </div>
          </CaseSection>

          {/* User Testing */}
          <CaseSection id="testing">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>User Testing</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              A/B Testing
            </h2>
            <div className="space-y-4">
              <ABTestCard
                objective="Test 1 — Risk state recognition speed"
                beforeLabel="A: Route-first"
                afterLabel="B: State-first"
                beforeContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>4.88s</p>}
                afterContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>2.06s</p>}
                finding="State-first layout reduced recognition time by 58%. Users immediately identified risk level without scanning."
              />
              <ABTestCard
                objective="Test 2 — Decision confidence score (1–5)"
                beforeLabel="A: Route-first"
                afterLabel="B: State-first"
                beforeContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>4.0</p>}
                afterContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>4.75</p>}
                finding="Confidence improved significantly. Users reported feeling more certain about whether to continue or turn back."
              />
              <ABTestCard
                objective="Test 3 — Risk awareness accuracy"
                beforeLabel="A: Route-first"
                afterLabel="B: State-first"
                beforeContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>25%</p>}
                afterContent={<p className="text-3xl font-bold text-[#1E1E1E] dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>75%</p>}
                finding="Three times more users correctly identified the risk level in the state-first interface."
              />
            </div>
          </CaseSection>

          {/* Results */}
          <CaseSection id="results">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Results</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Before / After
            </h2>
            <MetricRow label="Recognition time"   before="8.44s"    after="5.87s (−30%)" />
            <MetricRow label="Risk awareness"      before="25%"      after="75%"          />
            <MetricRow label="Decision confidence" before="4.0 / 5"  after="4.75 / 5"    />
            <MetricRow label="Task completion"     before="67%"      after="92%"          />
          </CaseSection>

          {/* Reflection */}
          <CaseSection id="reflection">
            <p className="text-sm text-[#ADADAD] dark:text-[#555] mb-3" style={{ fontFamily: "'Satoshi', sans-serif" }}>Reflection</p>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#1E1E1E] dark:text-[#E6E6E6] mb-12" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Takeaways
            </h2>
            <div className="space-y-10">
              <NumberedBlock number={1} title="Confidence matters more than speed">
                Speed improvements were measurable, but the more meaningful outcome was users feeling certain about
                their decisions. That confidence directly maps to safety.
              </NumberedBlock>
              <NumberedBlock number={2} title="Safety requires defined thresholds">
                Vague risk communication ("be careful") performs no better than none. Clear state logic with defined
                thresholds drives actionable behaviour.
              </NumberedBlock>
              <NumberedBlock number={3} title="Clear state logic improves recognition">
                When the interface commits to a single, dominant state rather than layering multiple data points,
                recognition speed and accuracy both improve.
              </NumberedBlock>
            </div>
          </CaseSection>

          <SeeMore
            projects={[
              { slug: 'billow', title: 'Billow', category: 'Product · UXUI', thumbnail: '/assets/projects/billow.jpg' },
              { slug: 'velot',  title: 'Velot',  category: 'Branding',       thumbnail: '/assets/projects/VELOT.jpg'  },
            ]}
          />
        </div>
      </div>
    </ProjectLayout>
  );
}
