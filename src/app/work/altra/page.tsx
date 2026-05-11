import Image from 'next/image';
import { BirdIcon, CatIcon, RabbitIcon } from '@phosphor-icons/react/ssr';
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
  { id: 'overview',   label: 'Overview'           },
  { id: 'context',    label: 'Context'            },
  { id: 'problem',    label: 'The Problem'        },
  { id: 'research',   label: 'Research'           },
  { id: 'system',     label: 'Design Direction'   },
  { id: 'results',    label: 'Testing & Results'  },
  { id: 'reflection', label: 'Reflection'         },
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

export default function AltraPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'billow',     title: 'Billow',     category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
            { slug: 'velot',      title: 'Velot',      category: 'Branding',       thumbnail: '/assets/projects/VELOT.jpg' },
            { slug: 'fianchetto', title: 'Fianchetto', category: 'Branding',       thumbnail: '/assets/projects/fianchetto/thumbnail.jpg' },
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
    >
      <div>
        <div className="pt-[40px]">
          <HeroMediaReveal>
            <HoverVideo
              src="https://golden-parfait-60a7b7.netlify.app/001.mp4"
              fallback="https://cdn.prod.website-files.com/67cf995ac794a925d9518c2e/69b1dd97e3c9f0b640b0d1df_alltra-main01.png"
              alt="Altra"
              className="w-full h-auto block rounded-[8px]"
            />
          </HeroMediaReveal>
        </div>

        <div className="mx-auto max-w-[980px] pt-12">
          {/* Overview */}
          <CaseSection id="overview">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Overview</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-12 max-w-3xl">
                ALTRA is a hiking safety navigation concept designed for beginner hikers.
              </h2>
              <div className="type-body-lg text-[#6F6F6F] dark:text-[#999] space-y-5 max-w-2xl mb-16">
                <p>
                  Instead of focusing on route precision, the system prioritizes real-time risk awareness through a state-first interface.
                </p>
                <p>
                  By translating environmental conditions into clear safety states such as Safe, Caution, and Critical, the redesign gave hikers a more readable decision layer.
                </p>
              </div>
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

          {/* Context */}
          <CaseSection id="context">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Context</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                Vancouver&apos;s trails are crowded.<br />Search and rescue calls keep rising.
              </h2>
              <p className="type-body-lg max-w-[720px] text-[#6F6F6F] dark:text-[#999] mb-16">
                The North Shore sits twenty minutes from downtown. Grouse, Seymour, and the Chief draw thousands of casual hikers every weekend, many of them new to the trails.
              </p>

              <Card className="mb-10 w-full">
                <CardContent className="space-y-8">
                  <Badge>System insight</Badge>
                  <p className="text-[30px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                    The pattern is rarely &ldquo;lost in the wilderness.&rdquo;
                  </p>
                  <p className="max-w-2xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                    It is hikers continuing forward after something already felt wrong. That gap between having information and acting on it became the starting point of this project.
                  </p>
                </CardContent>
              </Card>

              <div className="w-full py-12">
                <div className="mb-8 flex items-center justify-between gap-6">
                  <p className="type-eyebrow text-primary dark:text-[#ADADAD]">App audit</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#ADADAD] dark:text-[#555]">AllTrails · Gaia · Google Maps · Strava</p>
                </div>
                <Separator className="mb-8" />
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-sm font-medium text-[#1E1E1E] dark:text-[#E6E6E6]">What they solve</p>
                    <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Where am I, where is the trail, and how do I keep following the route.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 text-sm font-medium text-[#1E1E1E] dark:text-[#E6E6E6]">What remains unresolved</p>
                    <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Whether the current situation still supports continuing forward.
                    </p>
                  </div>
                </div>
                <Separator className="mt-8" />
              </div>

              <Card className="w-full bg-[#F5F5F5]/50 dark:bg-[#2A2A2A]/50">
                <CardContent className="space-y-6">
                  <Badge>The question</Badge>
                  <h3 className="text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-primary dark:text-[#E6E6E6]">
                    Should I keep going?
                  </h3>
                </CardContent>
              </Card>
              <div className="sr-only">
                <p>
                  We audited the apps hikers actually use on the North Shore. AllTrails, Gaia, Google Maps, Strava. They all solve the same problem well. Where am I, and where is the trail.
                </p>
                <p>
                  None of them answer the question hikers keep asking themselves on the way up.
                </p>
              </div>
            </div>
          </CaseSection>

          {/* The Problem */}
          <CaseSection id="problem">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">The Problem</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-4xl">
                Knowing where you are isn&apos;t the same as knowing what to do next.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                Most hiking interfaces assume information automatically creates confidence. <span className="whitespace-nowrap">In reality</span>, hikers hesitate even when the map is technically accurate.
              </p>

              <Card className="mb-10 w-full">
                <CardContent className="space-y-8">
                  <Badge>Behavior gap</Badge>
                  <p className="text-[30px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                    The issue wasn&apos;t a lack of information. It was the absence of interpretation.
                  </p>
                  <Separator />
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Map gives</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        Position, route, elevation, ETA, and a dense set of environmental details.
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Hiker needs</p>
                      <p className="text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                        A readable signal that clarifies whether continuing still makes sense.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full bg-[#F5F5F5]/50 dark:bg-[#2A2A2A]/50">
                <CardContent className="space-y-6">
                  <Badge>Insight</Badge>
                  <p className="text-[28px] font-medium leading-[130%] text-primary dark:text-[#E6E6E6]">
                    Even with exact GPS, the right next step isn&apos;t always obvious.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CaseSection>

          {/* Research */}
          <CaseSection id="research">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Research</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-8 max-w-4xl">
                15 hikers. One question. When do you stop trusting the map?
              </h2>
              <p className="mb-12 text-xs uppercase tracking-[0.16em] text-[#ADADAD] dark:text-[#555]">
                Exploratory survey · Google Forms · 12 beginner + 3 peer hikers · ages 25-40 · Vancouver
              </p>
              <div className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] space-y-5 mb-16">
                <p>
                  This was lightweight, directional research. The goal was to surface patterns of hesitation, not measure prevalence.
                </p>
                <p>
                  Participants described a gradual loss of confidence. They kept moving forward while feeling less and less sure.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mb-10">
                {PARTICIPANT_QUOTES.map(({ icon: Icon, quote }) => (
                  <Card key={quote}>
                    <CardContent className="flex min-h-[180px] flex-col justify-between">
                      <Avatar className="h-8 w-8 bg-primary text-white dark:bg-[#E6E6E6] dark:text-[#1E1E1E]">
                        <AvatarFallback className="bg-transparent text-white dark:text-[#1E1E1E]">
                          <Icon size={17} weight="bold" />
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-base leading-[160%] text-[#6F6F6F] dark:text-[#999]">&ldquo;{quote}&rdquo;</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="w-full">
                <CardContent className="space-y-6">
                  <Badge>Research insight</Badge>
                  <p className="text-[30px] font-medium leading-[125%] text-primary dark:text-[#E6E6E6]">
                    Hikers don&apos;t need more precision. They need a signal that their next step is safe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CaseSection>

          {/* Design Direction */}
          <CaseSection id="system">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Design Direction</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                From route to state.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                Testing revealed users still hesitated when too many metrics competed for attention. The interface needed to communicate a decision, not just information.
              </p>

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
                        <Image
                          src="/assets/projects/altra/safe.jpg"
                          alt="Altra safe safety state card"
                          width={786}
                          height={586}
                          className="aspect-[393/293] h-auto w-full object-cover"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Safe</p>
                      </div>
                      <div>
                        <Image
                          src="/assets/projects/altra/critical.jpg"
                          alt="Altra critical safety state card"
                          width={786}
                          height={586}
                          className="aspect-[393/293] h-auto w-full object-cover"
                        />
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
                    <Image
                      src="/assets/projects/altra/metric.png"
                      alt="Altra metrics translated into safety signals"
                      width={1083}
                      height={393}
                      className="mx-auto h-auto w-full max-w-[520px]"
                    />
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
                        <Image
                          src="/assets/projects/altra/03_safe.png"
                          alt="Altra safe safety state phone screen"
                          width={310}
                          height={672}
                          className="mx-auto h-auto w-full max-w-[310px] rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Safe</p>
                      </div>
                      <div>
                        <Image
                          src="/assets/projects/altra/03_critical.png"
                          alt="Altra critical safety state phone screen"
                          width={310}
                          height={672}
                          className="mx-auto h-auto w-full max-w-[310px] rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Critical</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <div className="mb-6 flex items-center gap-3">
                      <Badge>04</Badge>
                      <p className="text-[20px] font-medium leading-[125%] text-[#6F6F6F] dark:text-[#E6E6E6]">
                        State to Tokens
                      </p>
                    </div>
                    <p className="max-w-2xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                      Color, weight, and hierarchy shift with risk. Not brand.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/assets/projects/altra/token.png"
                      alt="Altra state to token system"
                      width={1600}
                      height={613}
                      className="h-auto w-full rounded-[8px]"
                    />
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
              </div>
            </div>
          </CaseSection>

          {/* Testing & Results */}
          <CaseSection id="results">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Testing & Results</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-8 max-w-4xl">
                Three tests. One question — does the safety state register first?
              </h2>
              <p className="mb-12 text-xs uppercase tracking-[0.16em] text-[#ADADAD] dark:text-[#555]">
                Pilot study · 4 participants · Figma prototype · A/B comparison
              </p>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-20">
                Each test isolated one decision: how users read the state, the time pressure, and the next action. Findings fed directly back into the layout.
              </p>

              <div className="space-y-20">
                {/* Test 01 — Label clarity */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Badge>Test 01</Badge>
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
                        A named state — Safe, Caution, Critical — was identified almost immediately. Without it, users scanned and second-guessed.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#F5F5F5] p-12 dark:bg-[#2A2A2A]">
                    <div className="grid justify-center gap-6 md:grid-cols-[310px_310px]">
                      <div>
                        <Image
                          src="/assets/projects/altra/testing/user_testing_02_a.png"
                          alt="Altra before testing phone screen"
                          width={400}
                          height={866}
                          className="mx-auto h-auto w-full rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image
                          src="/assets/projects/altra/testing/user_testing_02_b.png"
                          alt="Altra after testing phone screen"
                          width={400}
                          height={866}
                          className="mx-auto h-auto w-full rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Recognition time</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      4.88s → 2.06s <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">58% faster</span>
                    </p>
                  </div>
                </div>

                {/* Test 02 — Timeline orientation */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Badge>Test 02</Badge>
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
                        <Image
                          src="/assets/projects/altra/testing/user_testing_05_a_v2.png"
                          alt="Altra timeline comparison before"
                          width={654}
                          height={321}
                          className="mx-auto h-auto w-full"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image
                          src="/assets/projects/altra/testing/user_testing_05_b_v2.png"
                          alt="Altra timeline comparison after"
                          width={654}
                          height={321}
                          className="mx-auto h-auto w-full"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Risk awareness</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      25% → 75% <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">3× accuracy</span>
                    </p>
                  </div>
                </div>

                {/* Test 03 — Critical action */}
                <div>
                  <div className="mb-8 flex items-center gap-3">
                    <Badge>Test 03</Badge>
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
                        <Image
                          src="/assets/projects/altra/testing/user_testing_07_a.png"
                          alt="Altra critical action before"
                          width={400}
                          height={866}
                          className="mx-auto h-auto w-full rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">Before</p>
                      </div>
                      <div>
                        <Image
                          src="/assets/projects/altra/testing/user_testing_07_b.png"
                          alt="Altra critical action after"
                          width={400}
                          height={866}
                          className="mx-auto h-auto w-full rounded-[8px]"
                        />
                        <p className="mt-5 text-center text-base text-[#6F6F6F] dark:text-[#D9D9D9]">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-[#E6E6E6] pt-6 dark:border-[#3A3A3A]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Confidence rating</p>
                    <p className="text-[24px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                      4.0 → 4.75 <span className="ml-2 text-sm text-[#6F6F6F] dark:text-[#777]">+0.75 pts</span>
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
                        <span className="text-[#ADADAD] dark:text-[#777]">4.88s → 2.06s</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Test 02 · Confidence</p>
                      <p className="mt-3 text-[40px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                        <NumberCountUp to={0.75} decimals={2} prefix="+" />
                      </p>
                      <p className="mt-3 text-sm leading-[150%] text-[#6F6F6F] dark:text-[#999]">
                        confidence with spatial timeline<br />
                        <span className="text-[#ADADAD] dark:text-[#777]">4.0 → 4.75</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#ADADAD] dark:text-[#555]">Test 03 · Awareness</p>
                      <p className="mt-3 text-[40px] font-medium leading-none text-primary dark:text-[#E6E6E6]">
                        <NumberCountUp to={25} suffix="%" />
                      </p>
                      <p className="mt-3 text-sm leading-[150%] text-[#6F6F6F] dark:text-[#999]">
                        recognized both risks<br />
                        <span className="text-[#ADADAD] dark:text-[#777]">warning ≠ relationship</span>
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-full rounded-[8px]"
                >
                  <source src="https://sprightly-licorice-9f95a4.netlify.app/001.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </CaseSection>

          {/* Reflection */}
          <CaseSection id="reflection">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:text-[#ADADAD] mb-8">Reflection</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                Designing for safety means designing for certainty.
              </h2>
              <div className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] space-y-5 mb-16">
                <p>
                  I assumed better information would build user confidence. Research showed the opposite. Under stress, more data made users less sure.
                </p>
                <p>
                  The clearest lesson was that binary states outperformed vague ones. Ambiguity transferred from the environment to the interface itself.
                </p>
              </div>

              <Card className="w-full">
                <CardContent className="space-y-8">
                  <Badge>Takeaway</Badge>
                  <p className="text-[30px] font-medium leading-[125%] text-primary dark:text-[#E6E6E6]">
                    ALTRA wasn&apos;t built to replace maps. It was built to reduce uncertainty.
                  </p>
                  <Separator />
                  <p className="max-w-xl text-base leading-[170%] text-[#6F6F6F] dark:text-[#999]">
                    Generic alerts like &ldquo;Be careful&rdquo; didn&apos;t change behavior. Explicit thresholds did.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CaseSection>

        </div>
      </div>
    </ProjectLayout>
  );
}
