import Image from 'next/image';
import { Smiley, Airplay, Users, Circle, NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, NumberCircleFive, UserPlus, ChatDots, CheckCircle, Pause, SlidersHorizontal } from '@phosphor-icons/react/ssr';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import HoverVideo from '@/components/casestudy/HoverVideo';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';
import NumberedBlock from '@/components/casestudy/NumberedBlock';
import QuoteBlock from '@/components/casestudy/QuoteBlock';
import ABTestCard from '@/components/casestudy/ABTestCard';
import ShiftRulesShowcase from '@/components/casestudy/ShiftRulesShowcase';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'friction', label: 'The Friction' },
  { id: 'shift', label: 'The Shift' },
  { id: 'system', label: 'Building the System' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'changed', label: 'What Changed' },
  { id: 'reflection', label: 'Reflection' },
];

const SYSTEM_PRINCIPLES = [
  {
    title: 'Build from parts',
    body: 'Interfaces are built from primitives, not new components.',
    image: '/assets/projects/billow/shift_01.png',
    imageAlt: 'Billow primitive component layout',
  },
  {
    title: 'Meaning over placement',
    body: 'Layout follows semantic roles, not manual arrangement.',
    image: '/assets/projects/billow/shift_02.png',
    imageAlt: 'Billow semantic component structure',
  },
  {
    title: 'Recomposition over redesign',
    body: 'New screens emerge by reorganizing the same semantic blocks.',
    image: '/assets/projects/billow/shift_03.png',
    imageAlt: 'Billow recomposed interface card',
  },
  {
    title: 'A scalable interface set built from the same rules.',
    body: '',
  },
];

const SYSTEM_FOUNDATIONS = SYSTEM_PRINCIPLES.slice(0, 3) as Array<{
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}>;

const SYSTEM_RESULT = SYSTEM_PRINCIPLES[3];

const STORY_CHARACTERS = [
  {
    name: "Alex",
    role: "HR manager",
    needs: "Opens Billow and registers Lina through the chat. With AI guiding the flow, he assigns the tools she needs in just a few clicks.",
    image: "/assets/projects/billow/alex.png",
  },
  {
    name: "Lina",
    role: "New designer",
    needs: "is joining the team and needs access to design tools like Figma, Adobe, and Slack.",
    image: "/assets/projects/billow/lina.png",
  },
];

const ONBOARDING_STEPS = [
  {
    title: "Main page",
    body: "Alex starts Lina’s onboarding directly from Quick Action — adding a member in seconds.",
    video: "https://candid-fenglisu-fd262f.netlify.app/01.mp4",
    fallback: "/assets/projects/billow/chat.png",
    boxIcon: <UserPlus size={18} weight="fill" />,
    boxTitle: "Add member in seconds",
    boxContent: "Alex starts Lina’s onboarding directly from Quick Action.",
  },
  {
    title: "Chat",
    body: "Name, role, and required tools are filled out conversationally inside the chat.",
    video: "https://astonishing-heliotrope-405710.netlify.app/02.mp4",
    fallback: "/assets/projects/billow/chat.png",
    boxIcon: <ChatDots size={18} weight="fill" />,
    boxTitle: "Enter Lina’s info through chat",
    boxContent: "Name, role, and required tools are filled out conversationally.",
  },
  {
    title: "Assign seat",
    body: "Billow scans active subscriptions, identifies required tools, and suggests available seats.",
    video: "https://neon-tulumba-4b620a.netlify.app/03.mp4",
    fallback: "/assets/projects/billow/chat.png",
    boxIcon: <CheckCircle size={18} weight="fill" />,
    boxTitle: "AI finds the right seats",
    boxContent: "Billow scans active subscriptions, identifies the required tools, and suggests available seats for Lina.",
  },
  {
    title: "Canvas view",
    body: "The canvas updates in real time, visually reflecting each tool Alex confirms through chat.",
    video: "https://charming-kataifi-01f52b.netlify.app/04.mp4",
    fallback: "/assets/projects/billow/chat.png",
    boxIcon: <Pause size={18} weight="fill" />,
    boxTitle: "Progress shown at a glance",
    boxContent: "The canvas updates in real time, visually reflecting each tool Alex confirms through chat.",
  },
  {
    title: "Members page",
    body: "Alex reviews Lina’s assigned tools and adds Slack with a single click — onboarding done.",
    video: "https://gorgeous-biscotti-4fc290.netlify.app/05.mp4",
    fallback: "/assets/projects/billow/chat.png",
    boxIcon: <SlidersHorizontal size={18} weight="fill" />,
    boxTitle: "Review and add tools instantly",
    boxContent: "Alex reviews Lina’s assigned tools and adds Slack with a single click.",
  },
];

const LEARNINGS = [
  {
    title: "People preferred choosing over typing when certainty mattered.",
    body: "Users did not want to explain everything in chat. When outcomes had to be clear, selecting an option felt more trustworthy than writing a message.",
  },
  {
    title: "The goal was not to simplify the UI. It was to change how decisions happen.",
    body: "Users hesitated before taking action, so the interaction pattern was changed to give them confidence earlier. Not to remove pixels.",
  },
  {
    title: "The system needed shared understanding from the beginning.",
    body: "Design handoff was difficult because alignment takes effort, not UI complexity. Developers were engaged early to define how actions, states, and responsibilities work across the system.",
  },
];

const OVERVIEW_STEPS = [
  {
    roman: 'I',
    label: 'Reality',
    body: 'Teams worked across multiple SaaS tools. Managers had to ask people to understand usage.',
  },
  {
    roman: 'II',
    label: 'Breakdown',
    body: 'Unused seats stayed active. Renewals slipped. Admin work slowed everything down.',
  },
  {
    roman: 'III',
    label: 'Insight',
    body: 'Information was distributed across tools. Managing it meant visiting each one separately.',
  },
  {
    roman: 'IV',
    label: 'Direction',
    body: 'Actions start in conversation. Confirmation happens in the dashboard.',
  },
  {
    roman: 'V',
    label: 'Outcome',
    body: 'Teams could manage subscriptions without learning each tool. The concept expanded into a scalable system.',
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
    <div className={`${className} flex w-full min-w-0 max-w-[839px] flex-col gap-[22px]`}>
      <div className={`flex w-full min-w-0 ${headlineClassName} flex-col items-start gap-5`}>
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

export default function BillowPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'altra', title: 'Altra', category: 'Product · UXUI', thumbnail: '/assets/projects/altra/thumbnail.jpg' },
            { slug: 'velot', title: 'Velot', category: 'Branding', thumbnail: '/assets/projects/velot/thumbnail.jpg' },
            { slug: 'fianchetto', title: 'Fianchetto', category: 'Branding', thumbnail: '/assets/projects/fianchetto/thumbnail.jpg' },
          ]}
        />
      }
      sidebar={
        <CaseHero
          title="Billow"
          meta="SaaS · AI Workspace"
          headline="Turning complex subscription flows into simple conversations"
          role="UX/UI Designer"
          team={[
            { initials: 'SC', color: '#5C6BC0' },
            { initials: 'TK', color: '#AB47BC' },
          ]}
          timeline="24 hours + 2 weeks"
          tools={[
            { name: 'Figma', bg: '#A259FF', textColor: '#fff', phosphorIcon: 'FigmaLogo' },
          ]}
          nav={NAV}
          prototypeUrl="#"
          liveDemoUrl="#"
          layout="static"
        />
      }
      heroSlot={
        <div className="w-full min-w-0 lg:pt-[40px]">
          <HeroMediaReveal>
            {/* Mobile */}
            <video
              src="https://polite-dusk-2d7fe6.netlify.app/001.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="lg:hidden w-full h-auto rounded-[6px] lg:rounded-[8px]"
            />
            {/* Desktop */}
            <HoverVideo
              src="https://ephemeral-monstera-5edf4b.netlify.app/001.mp4"
              fallback="https://cdn.prod.website-files.com/67cf995ac794a925d9518c2e/69b1dfe2299975f683ba812e_4be5097a2e5208bfcb4357594d6060a4_Slide%2016_9%20-%204.jpg"
              alt="Billow preview"
              className="hover-video hidden lg:block w-full h-auto rounded-[8px]"
            />
          </HeroMediaReveal>
        </div>
      }
    >
      <div>

        <div className="w-full min-w-0 pt-12 lg:mx-auto lg:max-w-[980px]">
          <CaseSection id="overview">
            <div className="mb-6 flex flex-col gap-10">
              <div className="flex w-full min-w-0 max-w-[839px] flex-col gap-[22px]">
                <div className="flex w-full min-w-0 max-w-[520px] flex-col items-start gap-5">
                  <span className="inline-flex items-center justify-center rounded-[11px] border border-primary/90 px-2 py-0.5 font-satoshi text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-primary dark:border-[#555] dark:text-[#999]">
                    Overview
                  </span>
                  <h2 className="font-rethink text-[38px] font-medium leading-[1.2] tracking-[-0.02em] text-primary dark:text-[#E6E6E6]">
                    Managing subscriptions became a conversation.
                  </h2>
                </div>
                <p className="font-satoshi text-[18px] font-medium leading-[1.6] text-[#6F6F6F] dark:text-[#999]">
                  Billow began as a 24-hour hackathon MVP built with Gemini AI and no backend. The prototype validated conversational workflows quickly, then evolved into a scalable operational system.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
                {OVERVIEW_STEPS.map(({ roman, label, body }, index) => (
                  <div
                    key={roman}
                    className={`flex min-h-[172px] flex-col justify-between overflow-hidden rounded-[10px] bg-[#F5F5F5] px-3 py-4 dark:bg-[#1C1C1C] lg:h-[205px] lg:w-[calc((100%_-_48px)_/_5)] lg:rounded-[14px] lg:px-[15px] ${index === OVERVIEW_STEPS.length - 1 ? 'col-span-2' : ''}`}
                  >
                    <div className="flex flex-col gap-1 font-satoshi text-[10px] font-bold uppercase leading-[1.3] tracking-[0.08em] text-primary dark:text-[#999] sm:flex-row sm:items-center sm:gap-2 sm:text-[11px]">
                      <span>{roman}</span>
                      <span>{label}</span>
                    </div>
                    <p className="font-satoshi text-[12px] font-medium leading-[1.35] tracking-[-0.02em] text-[#6F6F6F] dark:text-[#999] sm:text-[13px] lg:text-[14px] lg:leading-[1.4]">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Image
              src="/assets/projects/billow/overview.png"
              alt="Billow overview dashboard showing subscription management through chat"
              width={3092}
              height={1370}
              className="h-auto w-full rounded-[6px] lg:rounded-[8px]"
            />
          </CaseSection>

          <CaseSection id="friction">
            <TextBlock
              eyebrow="The Friction"
              headline="Responsibility disappeared between tools, teams, and handovers."
              className="mb-[22px]"
            >
              <p>
                I surveyed 12 people across roles (designers, HR managers, and individual users) to understand how subscription responsibility actually moves through a team. Each person only knew the subscriptions relevant to them. No one had the full picture, and no one was accountable for the gaps.
              </p>
            </TextBlock>

            <div className="mb-[38px] flex w-full min-w-0 max-w-[839px] items-center gap-4 overflow-hidden py-1">
              <div className="h-[54px] w-[3px] shrink-0 bg-[#D9D9D9] dark:bg-[#555]" />
              <p className="font-satoshi text-[18px] font-medium leading-[1.6] text-[#6F6F6F] dark:text-[#999]">
                In small teams, software subscriptions are often managed informally. Responsibilities shift as people join or leave.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              <div className="flex min-h-[313px] flex-col justify-between overflow-hidden rounded-[10px] bg-[#3D5FE8] p-6 dark:bg-[#2A2A2A] md:w-[56%] lg:rounded-[14px]">
                <p className="font-satoshi text-[11px] font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#D9D9D9]">
                  Finding
                </p>
                <p className="font-satoshi text-[28px] font-medium leading-[1.35] text-white dark:text-[#E6E6E6]">
                  The issue wasn&apos;t memory. It was the reliance on memory instead of shared visibility.
                </p>
              </div>

              <div className="flex min-h-[313px] flex-col justify-between md:w-[44%]">
                {[
                  {
                    icon: <Smiley size={24} weight="fill" />,
                    quote: 'Requesting access and cancelling goes through too many steps, so I just left it.',
                    name: 'Designer',
                  },
                  {
                    icon: <Airplay size={24} weight="fill" />,
                    quote: "I took over the account and didn't know whether it was still in use.",
                    name: 'New manager / HR',
                  },
                  {
                    icon: <Users size={24} weight="fill" />,
                    quote: 'I forgot to cancel before the renewal.',
                    name: 'Individual user',
                  },
                ].map(({ icon, quote, name }) => (
                  <div key={name} className="flex gap-3 overflow-hidden rounded-[6px] px-2 py-2.5 lg:rounded-[8px]">
                    <div className="shrink-0 text-[#3F3F3F] dark:text-[#ADADAD]">{icon}</div>
                    <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                      <p className="font-satoshi text-[18px] font-medium leading-[1.2] text-[#3F3F3F] dark:text-[#D9D9D9]">
                        &quot;{quote}&quot;
                      </p>
                      <p className="font-satoshi text-[14px] font-medium leading-none text-[#ADADAD] dark:text-[#555]">
                        {name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[38px] overflow-hidden rounded-[6px] bg-[#F5F5F5] px-4 py-5 dark:bg-[#2A2A2A] lg:rounded-[8px] lg:px-8 lg:py-10">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[6px] lg:aspect-auto lg:w-[86%] lg:max-w-none lg:overflow-visible lg:rounded-none">
                <Image
                  src="/assets/projects/billow/friction_01.png"
                  alt="Examples of inactive business email subscriptions and expired platform licenses"
                  width={2728}
                  height={1389}
                  sizes="(max-width: 1024px) calc(100vw - 96px), 843px"
                  className="h-full w-full object-contain lg:h-auto"
                />
              </div>
            </div>
          </CaseSection>

          <CaseSection id="shift">
            <TextBlock
              eyebrow="The Shift"
              headline="Change how teams take action, not just how they view data."
              className="mb-[60px]"
              headlineClassName="max-w-[620px]"
            >
              <p>
                During the hackathon, we turned the concept into a working MVP to test whether conversation-based action could function as a real interface.
              </p>
            </TextBlock>

            <ShiftRulesShowcase />
          </CaseSection>

          <CaseSection id="system">
            <div className="mb-12 flex w-full min-w-0 max-w-[839px] flex-col gap-[22px]">
              <div className="flex w-full min-w-0 max-w-[520px] flex-col items-start gap-5">
                <span className="inline-flex items-center justify-center rounded-[11px] border border-primary/90 px-2 py-0.5 font-satoshi text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-primary dark:border-[#555] dark:text-[#999]">
                  Building the System
                </span>
                <h2 className="font-rethink text-[38px] font-medium leading-[1.2] tracking-[-0.02em] text-primary dark:text-[#E6E6E6]">
                  The concept worked. But it needed a system to scale.
                </h2>
              </div>
              <p className="font-satoshi text-[18px] font-medium leading-[1.6] text-[#6F6F6F] dark:text-[#999]">
                After the MVP proved the interaction model, I defined reusable UI rules so new workflows could be built from the same structure instead of redesigned from scratch.
              </p>
            </div>

            <div className="rounded-[10px] bg-[#F5F5F5] px-4 py-5 dark:bg-[#1F1F1F] lg:rounded-[14px] lg:px-[26px] lg:py-[32px]">
              <div className="flex flex-col gap-8">
                <div className="grid gap-3 md:grid-cols-3">
                  {SYSTEM_FOUNDATIONS.map(({ title, body, image, imageAlt }, index) => (
                    <div
                      key={title}
                      className="overflow-hidden flex flex-col"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[10px] bg-[#0C0F16] lg:h-[416px] lg:aspect-auto lg:rounded-[14px]">
                        <Image
                          src={image}
                          alt={imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-contain p-5"
                        />
                      </div>
                      <div className="flex gap-3 py-6 pr-6 pl-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#373737] dark:bg-[#D9D9D9] shrink-0 flex-none mt-0.5">
                          <span className="text-sm font-bold text-white dark:text-[#373737]">{index + 1}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="font-rethink text-[18px] font-medium leading-[1.2] text-[#373737] dark:text-[#E6E6E6]">
                            {title}
                          </h3>
                          <p className="font-satoshi text-[16px] font-medium leading-[1.2] text-[#868686] dark:text-[#999]">
                            {body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {[SYSTEM_RESULT].map(({ title }) => (
                  <div key={title} className="flex flex-col gap-6">
                    <div className="space-y-4">
                      <div className="relative aspect-[1.6] overflow-hidden rounded-[10px] bg-[#0C0F16] lg:rounded-[14px]">
                        <Image
                          src="/assets/projects/billow/Color System.jpg"
                          alt="Billow color system"
                          fill
                          sizes="(max-width: 768px) 100vw, 980px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative aspect-[1.714] overflow-hidden rounded-[10px] bg-[#0C0F16] lg:rounded-[14px]">
                        <Image
                          src="/assets/projects/billow/scalable.jpg"
                          alt="Billow scalable interface set overview"
                          fill
                          sizes="(max-width: 768px) 100vw, 980px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#373737] dark:bg-[#D9D9D9] shrink-0 flex-none mt-0.5">
                        <span className="text-sm font-bold text-white dark:text-[#373737]">4</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-rethink text-[18px] font-medium leading-[1.2] text-[#373737] dark:text-[#E6E6E6]">
                          {title}
                        </h3>
                        <p className="font-satoshi text-[16px] font-medium leading-[1.2] text-[#868686] dark:text-[#999]">
                          Primitives, semantic tokens, and workspace structures were unified into a shared system language. This foundation allows new features to grow without breaking consistency or requiring designers to create from scratch.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection id="workflows">
            <TextBlock eyebrow="Workflows" headline="AI-guided onboarding, end-to-end." headlineClassName="max-w-[380px]">
              <p>
                An end-to-end onboarding flow was built using the new system. Alex (an HR manager) opens Billow to register Lina (a new designer). She needs Figma, Adobe, and Slack. Billow scans active subscriptions, suggests available seats, and as Alex confirms tools through chat, the canvas updates in real time.
              </p>
            </TextBlock>

            <div className="mt-16 mb-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.08em] text-[#ADADAD] dark:text-[#777] font-satoshi font-medium">
                  Story
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {STORY_CHARACTERS.map(({ name, role, needs, image }) => (
                  <div
                    key={name}
                    className="overflow-hidden rounded-[10px] bg-[#F5F5F5] dark:bg-[#2A2A2A] p-5 flex flex-col justify-between min-h-[200px] transition-all duration-300 hover:rotate-[-5deg] hover:bg-[#D9D9D9] dark:hover:bg-[#3A3A3A] lg:rounded-[14px]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative h-[48px] w-[48px] rounded-full overflow-hidden shrink-0">
                        <Image
                          src={image}
                          alt={name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="font-satoshi text-[16px] font-[500] leading-[120%] text-[#373737] dark:text-[#E6E6E6]">
                          {name}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.08em] text-[#ADADAD] dark:text-[#777] font-satoshi font-medium">
                          {role}
                        </p>
                      </div>
                    </div>
                    <p className="font-satoshi text-[14px] font-medium leading-[160%] text-[#6F6F6F] dark:text-[#AAA]">
                      {needs}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-[200px]">
              {ONBOARDING_STEPS.map((step, index) => {
                const getCircleIcon = () => {
                  switch (index) {
                    case 0:
                      return <NumberCircleOne size={32} weight="fill" />;
                    case 1:
                      return <NumberCircleTwo size={32} weight="fill" />;
                    case 2:
                      return <NumberCircleThree size={32} weight="fill" />;
                    case 3:
                      return <NumberCircleFour size={32} weight="fill" />;
                    case 4:
                      return <NumberCircleFive size={32} weight="fill" />;
                    default:
                      return null;
                  }
                };
                return (
                  <div key={step.title} className="flex flex-col gap-4">
                    <NumberedBlock
                      number={undefined}
                      title={step.title}
                      icon={getCircleIcon()}
                      boxIcon={step.boxIcon}
                      boxTitle={step.boxTitle}
                      boxContent={step.boxContent}
                    >
                    </NumberedBlock>
                    <HoverVideo
                      src={step.video}
                      fallback={step.fallback}
                      alt={`Workflow step: ${step.title}`}
                      className="w-full h-auto rounded-[10px] lg:rounded-[14px]"
                    />
                  </div>
                );
              })}
            </div>
          </CaseSection>

          <CaseSection id="changed">
            <TextBlock eyebrow="What Changed" headline="Users clicked when we expected them to type." />

            <div className="mt-10">
              <ABTestCard
                beforeLabel="Expected"
                afterLabel="What actually happened"
                beforeContent={<div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden lg:h-[480px] lg:aspect-auto lg:rounded-[8px]"><Image src="/assets/projects/billow/expected.jpg" alt="Expected behavior" fill className="object-cover object-left" /></div>}
                afterContent={<div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden lg:h-[480px] lg:aspect-auto lg:rounded-[8px]"><Image src="/assets/projects/billow/actually_happened.jpg" alt="What actually happened" fill className="object-cover object-left" /></div>}
                finding="Users assumed the tool cards were interactive and clicked them instead of approving via chat. As a result, the onboarding flow stopped because the system was waiting for a chat response."
              />
            </div>

            <Card className="w-full mt-10">
              <CardContent className="space-y-8 p-4 lg:p-6">
                <Badge>Outcome</Badge>
                <div className="space-y-10">
                  <div>
                    <h4 className="mb-6 text-[18px] font-medium text-[#1E1E1E] dark:text-[#E6E6E6]">Yes / No Buttons Added</h4>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3D5FE8] dark:text-[#555]">Before</p>
                        <div className="relative w-full aspect-video rounded-[6px] overflow-hidden lg:rounded-[8px]">
                          <Image src="/assets/projects/billow/01_b.jpg" alt="Before" fill className="object-cover" />
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3D5FE8] dark:text-[#555]">After</p>
                        <div className="relative w-full aspect-video rounded-[6px] overflow-hidden lg:rounded-[8px]">
                          <Image src="/assets/projects/billow/01_a.jpg" alt="After" fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-6 text-[18px] font-medium text-[#1E1E1E] dark:text-[#E6E6E6]">Confirmation Toast Added</h4>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3D5FE8] dark:text-[#555]">Before</p>
                        <div className="relative w-full aspect-[3/4] rounded-[6px] overflow-hidden lg:h-[400px] lg:aspect-auto lg:rounded-[8px]">
                          <Image src="/assets/projects/billow/02_b.jpg" alt="Before" fill className="object-cover object-top" />
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3D5FE8] dark:text-[#555]">After</p>
                        <div className="relative w-full aspect-[3/4] rounded-[6px] overflow-hidden lg:h-[400px] lg:aspect-auto lg:rounded-[8px]">
                          <Image src="/assets/projects/billow/02_a.jpg" alt="After" fill className="object-cover object-top" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[16px] font-medium leading-[160%] text-[#6F6F6F] dark:text-[#AAA] mt-8">
                  To guide users more clearly, I added explicit Yes/No buttons and a confirmation toast. These changes removed confusion and helped users complete the approval step with confidence.
                </p>
                <div className="mt-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3D5FE8] dark:text-[#555]">Result</p>
                  <div className="rounded-[10px] bg-[#F5F5F5] dark:bg-[#2A2A2A] overflow-hidden lg:rounded-[14px]">
                    <HoverVideo
                      src="https://neon-tulumba-4b620a.netlify.app/03.mp4"
                      fallback="/assets/projects/billow/chat.png"
                      alt="Outcome preview"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CaseSection>

          <CaseSection id="reflection">
            <TextBlock eyebrow="Reflection" headline="What I learned from this project" />

            <div className="space-y-4 mt-10">
              {LEARNINGS.map((learning, index) => {
                const icons = [
                  <NumberCircleOne size={24} weight="fill" />,
                  <NumberCircleTwo size={24} weight="fill" />,
                  <NumberCircleThree size={24} weight="fill" />,
                ];
                return (
                  <div key={learning.title} className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[10px] p-6 flex gap-4 items-start lg:rounded-[14px]">
                    <div className="flex-shrink-0 flex items-center justify-center text-[#373737] dark:text-[#777]">
                      {icons[index]}
                    </div>
                    <div className="max-w-[80%]">
                      <h4 className="text-[18px] font-[500] text-[#373737] dark:text-[#E6E6E6] leading-[130%] mb-3">
                        {learning.title}
                      </h4>
                      <p className="text-[15px] font-medium leading-[160%] text-[#6F6F6F] dark:text-[#AAA]">
                        {learning.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CaseSection>
        </div>
      </div>
      <div className="h-32"></div>
    </ProjectLayout>
  );
}
