import Image from 'next/image';
import { BirdIcon, CatIcon, RabbitIcon, NumberCircleOneIcon, NumberCircleTwoIcon, NumberCircleThreeIcon } from '@phosphor-icons/react/ssr';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import HoverVideo from '@/components/casestudy/HoverVideo';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import NumberCountUp from '@/components/casestudy/NumberCountUp';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const NAV = [
  { id: 'overview',      label: 'Overview'             },
  { id: 'problem',       label: 'The Problem'          },
  { id: 'reframing',     label: 'Reframing Goal'       },
  { id: 'direction',     label: 'Direction'            },
  { id: 'results',       label: 'Testing & Results'    },
  { id: 'design-system', label: 'Design System'        },
  { id: 'reflection',    label: 'Reflection'           },
];

const PARTICIPANT_QUOTES = [
  {
    icon: BirdIcon,
    quote: 'I thought I was on the right path until it was too late.',
  },
  {
    icon: CatIcon,
    quote: "I kept checking the map, but I still wasn't sure.",
  },
  {
    icon: RabbitIcon,
    quote: "I didn't know if turning back was overreacting.",
  },
];

function TextBlock({
  eyebrow,
  headline,
  children,
  className = 'mb-10',
  headlineClassName = 'max-w-[520px]',
}: {
  eyebrow: string;
  headline: string;
  children?: React.ReactNode;
  className?: string;
  headlineClassName?: string;
}) {
  return (
    <div className={`${className} flex max-w-[839px] flex-col gap-[22px]`}>
      <div className={`flex ${headlineClassName} flex-col items-start gap-5`}>
        <span className="inline-flex items-center justify-center rounded-[11px] border border-primary/90 px-2 py-0.5 font-satoshi text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-primary dark:border-[#555] dark:text-[#999]">
          {eyebrow}
        </span>
        <h2 className="font-rethink text-[38px] font-medium leading-[1.2] tracking-[-0.02em] text-primary dark:text-[#E6E6E6]">
          {headline}
        </h2>
      </div>
      {children && (
        <div className="font-satoshi text-[18px] font-medium leading-[1.6] text-[#6F6F6F] dark:text-[#999]">
          {children}
        </div>
      )}
    </div>
  );
}


export default function AltraPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'billow',     title: 'Billow',     category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
            { slug: 'velot',      title: 'Velot',      category: 'Branding',       thumbnail: '/assets/projects/velot/thumbnail.jpg' },
            { slug: 'fianchetto', title: 'Fianchetto', category: 'Branding',       thumbnail: '/assets/projects/fianchetto/fian_main_01.png' },
          ]}
        />
      }
      sidebar={
        <CaseHero
          title="Altra"
          meta="UX Research · Safety System"
          headline="From 25% to 75% risk awareness. Making hiking safer in uncertain conditions."
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
          prototypeUrl="https://www.figma.com/proto/YbG1sGrLudlmrOKPLFpqMg/ALTRA-2026?page-id=6%3A40&node-id=289-36220&viewport=1267%2C-1420%2C0.14&t=vDbPO984pW6SZquh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=289%3A35629&show-proto-sidebar=1"
          layout="static"
        />
      }
      heroSlot={
        <div>
          <HeroMediaReveal>
            {/* Mobile */}
            <div className="lg:hidden">
              <video
                src="https://fastidious-bombolone-8ee4b7.netlify.app/001.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[8px]"
              />
            </div>
            {/* Desktop */}
            <div className="hidden lg:block">
              <HoverVideo
                src="https://golden-parfait-60a7b7.netlify.app/001.mp4"
                fallback="https://cdn.prod.website-files.com/67cf995ac794a925d9518c2e/69b1dd97e3c9f0b640b0d1df_alltra-main01.png"
                alt="Altra"
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </HeroMediaReveal>
        </div>
      }
    >
      <div>

        <div className="w-full min-w-0 pt-12 lg:mx-auto lg:max-w-[980px]">

          {/* Overview */}
          <CaseSection id="overview">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="Overview"
                headline="ALTRA is a hiking safety navigation concept designed for beginner hikers."
                className="mb-10"
              >
                <p>
                  Instead of focusing on route precision, the system prioritizes real-time risk awareness through a state-first interface. By translating environmental conditions into clear safety states such as Safe, Caution, and Critical, the redesign gave hikers a more readable decision layer.
                </p>
              </TextBlock>
              <Card className="w-full">
                <CardContent className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <Badge>System shift</Badge>
                    <p className="mt-8 text-[28px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                      The interface moves from location accuracy to decision confidence.
                    </p>
                  </div>
                  <div className="flex flex-col justify-end gap-6">
                    <Separator />
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Recognition</p>
                        <p className="mt-2 text-[32px] font-semibold leading-none text-[#6F6F6F] dark:text-[#E6E6E6]">
                          <NumberCountUp to={58} suffix="%" />
                        </p>
                        <p className="mt-2 text-sm text-[#6F6F6F] dark:text-[#777]">faster</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Awareness</p>
                        <p className="mt-2 text-[32px] font-semibold leading-none text-[#6F6F6F] dark:text-[#E6E6E6]">
                          <NumberCountUp to={75} suffix="%" />
                        </p>
                        <p className="mt-2 text-sm text-[#6F6F6F] dark:text-[#777]">accuracy</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CaseSection>

          {/* The Problem */}
          <CaseSection id="problem">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="The Problem"
                headline="On the trail, you do not always know which direction is correct. But you still have to choose one."
                className="mb-10"
                headlineClassName="max-w-[720px]"
              >
                At unclear junctions, hikers rely on a blue dot that shows location, not confidence. The pattern is rarely getting lost. It is continuing forward after something already felt wrong, and only realizing it later.
              </TextBlock>

              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-[8px] lg:aspect-auto">
                <Image
                  src="/assets/projects/altra/alert.png"
                  alt="No hiking, not a trail sign on a rocky slope"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover lg:h-auto"
                />
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
                {/* Left: Finding box */}
                <div className="flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[14px] bg-[#F5F5F5] p-6 dark:bg-[#2A2A2A] md:w-[56%]">
                  <p className="font-satoshi text-[11px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#ADADAD] dark:text-[#555]">
                    Finding
                  </p>
                  <div className="space-y-3">
                    <p className="font-satoshi text-[24px] font-medium leading-[1.35] text-primary dark:text-[#E6E6E6]">
                      The problem is not knowing where you are. It is knowing what to do next.
                    </p>
                    <p className="text-sm leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Even if location were exact, hikers would still encounter moments where the right choice is unclear.
                    </p>
                  </div>
                </div>

                {/* Right: Gap table */}
                <div className="flex flex-col justify-between rounded-[14px] border border-[#E6E6E6] p-6 dark:border-[#3A3A3A] md:w-[44%]">
                  <div className="mb-4 grid grid-cols-[1fr_40px_1fr] items-center">
                    <p className="font-satoshi text-[11px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#ADADAD] dark:text-[#555]">Apps provide</p>
                    <span />
                    <p className="font-satoshi text-[11px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#ADADAD] dark:text-[#555] text-right">Hikers face</p>
                  </div>
                  <Separator className="mb-6" />
                  <div className="flex flex-col gap-6 flex-1 justify-between">
                    {[
                      { gives: 'GPS location',  faces: 'Ambiguous junctions' },
                      { gives: 'Route lines',   faces: 'Scale distortion'    },
                      { gives: 'ETA estimates', faces: 'Fading daylight'      },
                    ].map(({ gives, faces }) => (
                      <div key={gives} className="grid grid-cols-[1fr_40px_1fr] items-center">
                        <p className="text-sm text-[#6F6F6F] dark:text-[#999]">{gives}</p>
                        <div className="flex justify-center">
                          <div className="h-px w-full bg-[#C8C8C8] dark:bg-[#555]" />
                        </div>
                        <p className="text-sm font-medium text-primary dark:text-[#E6E6E6] text-right">{faces}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CaseSection>

          {/* Reframing Navigation */}
          <CaseSection id="reframing">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="Reframing Goal"
                headline="The goal was supporting decisions under uncertainty rather than improving navigation accuracy."
                className="mb-10"
                headlineClassName="max-w-[720px]"
              />

              {/* Method strip */}
              <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {[
                  { label: 'Method',       body: 'Google Form questionnaire + online community review + informal peer feedback' },
                  { label: 'Participants', body: '12 beginner hikers, 3 peer hikers (ages 25–40)' },
                  { label: 'Format',       body: 'Multiple-choice and short answers, with casual peer conversations' },
                  { label: 'Analysis',     body: 'Grouped recurring themes through manual clustering and pattern recognition' },
                ].map(({ label, body }) => (
                  <div key={label}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary dark:text-[#E6E6E6]">{label}</p>
                    <p className="text-sm leading-[170%] text-[#6F6F6F] dark:text-[#999]">{body}</p>
                  </div>
                ))}
              </div>

              <Separator className="mb-8" />

              {/* Quote cards */}
              <div className="mb-10 grid gap-4 md:grid-cols-3">
                {PARTICIPANT_QUOTES.map(({ icon: Icon, quote }, i) => (
                  <Card key={quote}>
                    <CardContent className="flex min-h-[160px] flex-col justify-between">
                      <Avatar className="h-7 w-7 bg-primary text-white dark:bg-[#E6E6E6] dark:text-[#1E1E1E]">
                        <AvatarFallback className="bg-transparent text-white dark:text-[#1E1E1E]">
                          <Icon size={15} weight="bold" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#ADADAD] dark:text-[#555]">Hiker {String.fromCharCode(65 + i)}</p>
                        <p className="text-sm leading-[160%] text-[#6F6F6F] dark:text-[#999]">&ldquo;{quote}&rdquo;</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center my-6">
                <div className="h-12 w-px bg-[#E6E6E6] dark:bg-[#3A3A3A]" />
              </div>

              <div className="flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[14px] bg-[#F5F5F5] p-6 dark:bg-[#2A2A2A]">
                <p className="font-satoshi text-[11px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#ADADAD] dark:text-[#555]">
                  Reframing
                </p>
                <p className="font-satoshi text-[24px] font-medium leading-[1.35] text-primary dark:text-[#E6E6E6]">
                  Hikers don&apos;t need more accurate navigation. They need a clear standard to judge whether continuing is still safe.
                </p>
              </div>
            </div>
          </CaseSection>

          {/* Direction */}
          <CaseSection id="direction">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="Direction"
                headline="From route to state."
                className="mb-10"
              >
                Testing revealed users still hesitated when too many metrics competed for attention. The interface needed to communicate a decision, not just information.
              </TextBlock>

              <div className="space-y-16">
                <div>
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-3">
                      <Badge>01</Badge>
                      <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                        Route to State
                      </p>
                    </div>
                    <p className="max-w-2xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Instead of focusing on the path, the interface centers on the current safety state.
                    </p>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="mx-auto grid max-w-[760px] gap-4 md:grid-cols-2">
                      <div>
                        <Image src="/assets/projects/altra/safe.jpg" alt="Altra safe state" width={786} height={586} className="h-auto w-full rounded-[4px] object-cover" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Safe</p>
                      </div>
                      <div>
                        <Image src="/assets/projects/altra/critical.jpg" alt="Altra critical state" width={786} height={586} className="h-auto w-full rounded-[4px] object-cover" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Critical</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-3">
                      <Badge>02</Badge>
                      <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                        Metrics to Signals
                      </p>
                    </div>
                    <p className="max-w-2xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      ETA, daylight, and route progress collapse into a single judgment line.
                    </p>
                  </div>
                  <div className="rounded-[8px] bg-white px-16 py-12 dark:bg-[#F5F5F5]">
                    <Image src="/assets/projects/altra/metric.png" alt="Altra metrics to signals" width={1083} height={393} className="mx-auto h-auto w-full max-w-[520px]" />
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-3">
                      <Badge>03</Badge>
                      <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                        Safety State Model
                      </p>
                    </div>
                    <p className="max-w-2xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Each state has defined temporal and environmental thresholds.
                    </p>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="grid justify-center gap-6 md:grid-cols-[310px_310px]">
                      <div>
                        <Image src="/assets/projects/altra/03_safe.png" alt="Altra safe state phone screen" width={310} height={672} className="mx-auto h-auto w-full max-w-[310px] rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Safe</p>
                      </div>
                      <div>
                        <Image src="/assets/projects/altra/03_critical.png" alt="Altra critical state phone screen" width={310} height={672} className="mx-auto h-auto w-full max-w-[310px] rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Critical</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CaseSection>

          {/* Testing & Results */}
          <CaseSection id="results">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="Testing & Results"
                headline="Three tests. One question — does the safety state register first?"
                className="mb-10"
                headlineClassName="max-w-[720px]"
              >
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.16em] text-[#ADADAD] dark:text-[#555]">
                    Pilot study · 4 participants · Figma prototype · A/B comparison
                  </p>
                  <p>
                    Each test isolated one decision: how users read the state, the time pressure, and the next action. Findings fed directly back into the layout.
                  </p>
                </div>
              </TextBlock>

              <div className="space-y-20">
                {/* Test 01 */}
                <div>
                  <div className="mb-8 flex items-center gap-3 pt-6">
                    <Badge className="!bg-[#3D5FE8] !text-white dark:!bg-[#333] dark:!text-[#ADADAD]">Test 01</Badge>
                    <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                      Label clarity
                    </p>
                  </div>
                  <div className="mb-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we tested</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        Whether explicit state labels would improve recognition over visual warning structure alone.
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we found</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        Naming the state (Safe, Caution, Critical) let users identify it almost immediately. Without it, users scanned and second-guessed.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="grid justify-center gap-6 md:grid-cols-[310px_310px]">
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_02_a.png" alt="Test 01 before" width={400} height={866} className="mx-auto h-auto w-full rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_02_b.png" alt="Test 01 after" width={400} height={866} className="mx-auto h-auto w-full rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Recognition time</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      4.88s to 2.06s <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">58% faster</span>
                    </p>
                  </div>
                </div>

                {/* Test 02 */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Badge className="!bg-[#3D5FE8] !text-white dark:!bg-[#333] dark:!text-[#ADADAD]">Test 02</Badge>
                    <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                      Timeline orientation
                    </p>
                  </div>
                  <div className="mb-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we tested</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        Whether users could read time pressure more intuitively when markers were aligned in one direction.
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we found</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        A single-direction timeline let users compare now, arrival, and sunset in one glance instead of mentally re-orienting.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="mx-auto grid max-w-[760px] items-center gap-8 md:grid-cols-2">
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_05_a_v2.png" alt="Test 02 before" width={654} height={321} className="mx-auto h-auto w-full" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_05_b_v2.png" alt="Test 02 after" width={654} height={321} className="mx-auto h-auto w-full" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Risk awareness</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      25% to 75% <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">3x accuracy</span>
                    </p>
                  </div>
                </div>

                {/* Test 03 */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Badge className="!bg-[#3D5FE8] !text-white dark:!bg-[#333] dark:!text-[#ADADAD]">Test 03</Badge>
                    <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                      Critical action
                    </p>
                  </div>
                  <div className="mb-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we tested</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        Whether critical-state guidance helped users understand what action to take next.
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-base font-medium leading-[140%] text-[#6F6F6F] dark:text-[#E6E6E6]">What we found</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        When the critical state surfaced a clear next step, users acted decisively instead of hesitating between options.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="grid justify-center gap-6 md:grid-cols-[310px_310px]">
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_07_a.png" alt="Test 03 before" width={400} height={866} className="mx-auto h-auto w-full rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image src="/assets/projects/altra/testing/user_testing_07_b.png" alt="Test 03 after" width={400} height={866} className="mx-auto h-auto w-full rounded-[8px]" />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Confidence rating</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      4.0 to 4.75 <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">+0.75 pts</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Aggregate insight */}
              <Card className="mt-20 w-full bg-[#F5F5F5]/50 dark:bg-[#2A2A2A]/50">
                <CardContent className="space-y-10">
                  <Badge>Across all three tests</Badge>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Test 01 · Recognition</p>
                      <p className="mt-3 text-[40px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                        <NumberCountUp to={58} suffix="%" />
                      </p>
                      <p className="mt-3 text-sm leading-[150%] text-[#6F6F6F] dark:text-[#999]">
                        faster with explicit labels<br />
                        <span className="text-[#ADADAD] dark:text-[#777]">4.88s to 2.06s</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Test 02 · Confidence</p>
                      <p className="mt-3 text-[40px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                        <NumberCountUp to={0.75} decimals={2} prefix="+" />
                      </p>
                      <p className="mt-3 text-sm leading-[150%] text-[#6F6F6F] dark:text-[#999]">
                        confidence with spatial timeline<br />
                        <span className="text-[#ADADAD] dark:text-[#777]">4.0 to 4.75</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Test 03 · Awareness</p>
                      <p className="mt-3 text-[40px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                        <NumberCountUp to={25} suffix="%" />
                      </p>
                      <p className="mt-3 text-sm leading-[150%] text-[#6F6F6F] dark:text-[#999]">
                        recognized both risks<br />
                        <span className="text-[#ADADAD] dark:text-[#777]">warning is not relationship</span>
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <p className="max-w-3xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                    Explicit labels cut recognition time by more than half. A spatial timeline lifted confidence where numbers alone could not. And under critical risk, only a quarter of users registered both threats. The warning landed, but the time relationship stayed unread.
                  </p>
                  <Separator />
                  <p className="text-[28px] font-medium leading-[130%] text-primary dark:text-[#E6E6E6]">
                    Users didn&apos;t need more data. They needed the interface to translate data into a clear safety state.
                  </p>
                </CardContent>
              </Card>

              {/* Final */}
              <div className="mt-20">
                <div className="mb-8 flex items-center gap-3">
                  <Badge>Final</Badge>
                  <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                    How the system behaves
                  </p>
                </div>
                <div className="aspect-square overflow-hidden rounded-[8px] lg:aspect-auto">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover lg:h-auto lg:object-contain"
                  >
                    <source src="https://sprightly-licorice-9f95a4.netlify.app/001.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </CaseSection>

          {/* Design System */}
          <CaseSection id="design-system">
            <div className="font-satoshi max-w-4xl">
              <TextBlock
                eyebrow="Design System"
                headline="Each safety state has its own visual language."
                className="mb-10"
              >
                The token system ensures each safety state communicates through visual language, not just labels.
              </TextBlock>

              <div className="space-y-4">
                <Image src="/assets/projects/altra/token.png" alt="Altra state to token system" width={1600} height={613} className="h-auto w-full rounded-[8px]" />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/projects/altra/token.png"
                  className="h-auto w-full rounded-[8px]"
                >
                  <source src="https://candid-rolypoly-e655c7.netlify.app/001.MP4" type="video/mp4" />
                </video>
              </div>
            </div>
          </CaseSection>

          {/* Reflection */}
          <CaseSection id="reflection">
            <div className="font-satoshi max-w-4xl">
              <TextBlock eyebrow="Reflection" headline="What I learned from this project" />

              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: <NumberCircleOneIcon size={24} weight="fill" />,
                    title: 'Confidence matters more than speed',
                    body: 'In high-risk environments, speed alone is not enough. Hikers often make decisions alone, and uncertainty can increase hesitation. This project taught me that users need reassurance as much as quick information. Designing for safety means helping users feel confident before they act.',
                  },
                  {
                    icon: <NumberCircleTwoIcon size={24} weight="fill" />,
                    title: 'Safety requires defined thresholds',
                    body: 'Safety design requires clear thresholds. Time buffers, weather limits, and trail status must be defined before the interface is built. Logic comes before visuals.',
                  },
                  {
                    icon: <NumberCircleThreeIcon size={24} weight="fill" />,
                    title: 'Clear state logic improves recognition',
                    body: 'I initially introduced three safety states. But the intermediate Warning state blurred decision boundaries. Reducing the system to clear, binary states improved recognition accuracy and reduced hesitation.',
                  },
                ].map((learning) => (
                  <div key={learning.title} className="flex gap-4 items-start rounded-[14px] bg-[#F5F5F5] p-6 dark:bg-[#2A2A2A]">
                    <div className="shrink-0 text-[#373737] dark:text-[#777]">
                      {learning.icon}
                    </div>
                    <div className="max-w-[80%]">
                      <h4 className="mb-3 text-[18px] font-medium leading-[130%] text-[#373737] dark:text-[#E6E6E6]">
                        {learning.title}
                      </h4>
                      <p className="text-[15px] font-medium leading-[160%] text-[#6F6F6F] dark:text-[#AAA]">
                        {learning.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CaseSection>

        </div>
      </div>
    </ProjectLayout>
  );
}
