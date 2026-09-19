import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './story.module.css';

import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import AutoplayVideo from '@/components/casestudy/AutoplayVideo';
import HorizontalDragScroll from '@/components/casestudy/HorizontalDragScroll';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Grocery Nav - Product Design Case Study',
  description:
    'A product design case study connecting grocery items with their locations through an in-store mobile map.',
};

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'decision', label: 'In-store test' },
  { id: 'system', label: 'Design System' },
  { id: 'workflow', label: 'Product image system' },
  { id: 'outcome', label: 'Final prototype' },
];



function TextBlock({
  eyebrow,
  headline,
  children,
  className = 'mb-10',
}: {
  eyebrow: string;
  headline: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} flex max-w-[850px] flex-col gap-[22px]`}>
      <div className="flex max-w-[850px] flex-col items-start gap-5">
        <span className="inline-flex items-center justify-center rounded-[11px] border border-primary/90 px-2 py-0.5 font-satoshi text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-primary dark:border-[#555] dark:text-[#999]">
          {eyebrow}
        </span>
        <h2 className="font-rethink text-[38px] font-medium leading-[1.2] tracking-[-0.02em] text-primary dark:text-[#E6E6E6]">
          {headline}
        </h2>
      </div>
      {children ? (
        <div className="font-satoshi text-[18px] font-medium leading-[1.6] text-[#6F6F6F] dark:text-[#999]">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function PatternCard({
  variant,
  label,
  selected = false,
  title,
  video,
  description,
  strengths,
  tradeoff,
}: {
  variant: 'A' | 'B';
  label: string;
  selected?: boolean;
  title: string;
  video: string;
  description: string;
  strengths: string[];
  tradeoff: string;
}) {
  return (
    <Card
      className={`overflow-hidden p-0 ${
        selected
          ? 'border-[#1D1D1F] bg-[#F5F5F5] dark:border-[#E6E6E6] dark:bg-[#262626]'
          : 'border-[#E1E4E8] bg-[#F5F5F5] dark:border-[#444] dark:bg-[#262626]'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-6 py-5 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#1D1D1F] font-rethink text-lg font-semibold text-white shadow-sm dark:bg-[#E6E6E6] dark:text-[#1D1D1F]">
            {variant}
          </span>
          <p className="font-satoshi text-[11px] font-bold uppercase tracking-[0.08em] text-[#1D1D1F] dark:text-[#E6E6E6]">
            {label}
          </p>
        </div>
        {selected && (
          <span className="rounded-full bg-[#1D1D1F] px-2.5 py-1 font-satoshi text-[10px] font-bold uppercase tracking-[0.08em] text-white dark:bg-[#E6E6E6] dark:text-[#1D1D1F]">
            Selected
          </span>
        )}
      </div>
      <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-[#F0F0F0] p-6 sm:p-8 dark:bg-[#202020]">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-contain"
          aria-label={`${title} interaction pattern`}
        />
      </div>
      <CardContent className="p-6 sm:p-7">
        <h3 className="font-rethink text-[24px] font-medium leading-[1.2] text-[#1D1D1F] dark:text-[#E6E6E6]">
          {title}
        </h3>
        <p className="mt-3 font-satoshi text-[15px] leading-[1.6] text-[#6F6F6F] dark:text-[#B2B2B2]">
          {description}
        </p>

        <div className="mt-7">
          <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#1D1D1F] dark:text-[#E6E6E6]">
            What worked
          </p>
          <ul className="mt-3 space-y-2 font-satoshi text-sm text-[#1D1D1F] dark:text-[#D9D9D9]">
          {strengths.map((strength) => (
            <li key={strength} className="flex gap-3">
              <span className="text-[#1D1D1F] dark:text-[#E6E6E6]">+</span>
              <span>{strength}</span>
            </li>
          ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#8A8A8A] dark:text-[#999]">
            Trade-off
          </p>
          <div className="mt-3 flex gap-3 font-satoshi text-sm text-[#6F6F6F] dark:text-[#B2B2B2]">
            <span>−</span>
            <span>{tradeoff}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function GroceryNavPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            {
              slug: 'billow',
              title: 'Billow',
              category: 'Product · UXUI',
              thumbnail: '/assets/projects/billow/thumbnail.jpg',
            },
            {
              slug: 'altra',
              title: 'Altra',
              category: 'Product · UXUI',
              thumbnail: '/assets/projects/altra/thumbnail.jpg',
            },
            {
              slug: 'in-the-light',
              title: 'In the light',
              category: 'Branding',
              thumbnail: '/assets/projects/in-the-light/inthelight_main.png',
            },
          ]}
        />
      }
      heroSlot={
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Grocery Nav mobile product selection and location feedback"
            className="block h-auto w-full rounded-[8px] sm:hidden"
          >
            <source src="/assets/projects/grocery-nav/hero-video-mobile.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
          <video
            width={3840}
            height={2160}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Grocery Nav showing product selection and location feedback on a store map"
            className="hidden h-auto w-full rounded-[8px] sm:block"
          >
            <source src="/assets/projects/grocery-nav/hero-video.mp4?v=5" type="video/mp4" />
            <source src="/assets/projects/grocery-nav/hero-video.webm?v=3" type="video/webm" />
            Your browser does not support this video.
          </video>
        </>
      }
      sidebar={
        <CaseHero
          title="Grocery Nav"
          meta="Product · Mobile UX"
          headline="Find what you need. Leave sooner."
          description="An independent concept that connects a shopping list to an in-store map, helping shoppers locate products while keeping the next task in view. Designed and tested with a functional Android prototype in a real grocery store."
          role={['Interaction & UI Design', 'Design System', 'Usability Testing']}
          team={[
            { initials: 'SC', color: '#5C6BC0' },
            { initials: 'TK', color: '#9F9F9F' },
          ]}
          timeline="Jul 2026"
          tools={[
            { name: 'Figma', bg: '#A259FF', textColor: '#fff', phosphorIcon: 'FigmaLogo' },
            { name: 'Codex', src: '/assets/icons/codex-colored.svg', bg: '#1D1D1F' },
          ]}
          nav={NAV}
          layout="flow"
        />
      }
    >
      <div className={`${styles.story} w-full min-w-0 lg:mx-auto lg:max-w-[980px]`}>
        <CaseSection id="overview">
          <TextBlock eyebrow="Overview" headline="Find what you need. Leave sooner.">
            <p>Large grocery stores turn a quick shopping trip into a search through unfamiliar aisles. Grocery Nav connects a shopping list to an in-store map, helping shoppers locate each item without losing time.</p>
          </TextBlock>

          <figure className={styles.overviewVideoFigure}>
            <video
              src="/assets/projects/grocery-nav/overview-hero.mp4?v=2"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={styles.overviewVideo}
              aria-label="Grocery Nav in-store overview video"
            />
          </figure>
        </CaseSection>

        <CaseSection id="decision">
          <TextBlock
            eyebrow="User testing & design decision"
            headline="Which layout helps shoppers find the next item?"
          >
            <p>
              I tested two competing navigation patterns in a real aisle. The first round revealed useful feedback, but the prototypes differed in more than layout. I rebuilt the comparison for a second round, keeping the task and product states aligned before choosing a direction.
            </p>
          </TextBlock>

          <div>
            <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">
              First round
            </p>
            <h3 className="mt-3 font-rethink text-[28px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">
              A directional comparison, not a controlled result.
            </h3>
            <p className="mt-3 max-w-[850px] font-satoshi text-[16px] leading-[1.65] text-[#6F6F6F] dark:text-[#999]">
              The prototypes used different product states, button treatments, and interaction details alongside different layouts. The feedback showed where to look, but it could not isolate which layout caused a preference.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <PatternCard
              variant="A"
              label="Fixed header"
              title="Keep the list in view"
              video="/assets/projects/grocery-nav/pattern-header.mp4"
              description="Products remain visible above the map, so switching items does not require opening another layer."
              strengths={['View the list and map together', 'Switch products in one tap']}
              tradeoff="Reduces the vertical space available to the map"
            />
            <PatternCard
              variant="B"
              label="Collapsible bottom sheet"
              title="Give the map more room"
              video="/assets/projects/grocery-nav/pattern-sheet.mp4"
              description="The list can collapse to reveal more of the floor plan, then expand when the shopper needs another item."
              strengths={['Maximizes the map when collapsed', 'Places list controls near the thumb']}
              tradeoff="Covers the map when open and adds a step before switching"
            />
          </div>

          <div className="mt-20 border-t border-[#DEDEDE] pt-8 dark:border-[#393939]">
            <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">
              Second round
            </p>
            <h3 className="mt-3 font-rethink text-[28px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">
              The same task, with one variable isolated.
            </h3>
            <p className="mt-3 max-w-[850px] font-satoshi text-[16px] leading-[1.65] text-[#6F6F6F] dark:text-[#999]">
              Both versions used the same product list, product states, task flow, and interaction feedback. Layout was the only meaningful difference left for shoppers to compare.
            </p>
          </div>

          <div className="mt-8 py-2">
            <div className="grid gap-6 sm:grid-cols-[1.1fr_1.9fr] sm:items-center sm:gap-8">
              <div>
                <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">
                  Test sequence
                </p>
                <p className="mt-2 font-rethink text-xl font-medium text-[#1D1D1F] dark:text-[#E6E6E6]">
                  Each participant tried both layouts.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-0">
                {[
                  { participant: 'P1', sequence: ['A', 'B'] },
                  { participant: 'P2', sequence: ['B', 'A'] },
                  { participant: 'P3', sequence: ['A', 'B'] },
                ].map((item, index) => (
                  <div
                    key={item.participant}
                    className={`${index === 0 ? 'border-l-0 lg:border-l' : 'border-l'} border-[#D5D5D5] px-5 py-1 dark:border-[#444]`}
                  >
                    <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.08em] text-[#1D1D1F] dark:text-[#E6E6E6]">
                      {item.participant}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      {item.sequence.map((version, index) => (
                        <span key={`${item.participant}-${version}`} className="flex items-center gap-2">
                          {index > 0 && <span className="text-sm font-medium text-[#1D1D1F] dark:text-[#E6E6E6]">→</span>}
                          <span className="flex size-7 items-center justify-center rounded-full bg-[#1D1D1F] font-rethink text-sm font-semibold text-white dark:bg-[#E6E6E6] dark:text-[#1D1D1F]">
                            {version}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <PatternCard
              variant="A"
              label="Fixed header"
              selected
              title="Keep the list in view"
              video="/assets/projects/grocery-nav/pattern-header-round-2.mp4"
              description="Products remain visible above the map, so switching items does not require opening another layer."
              strengths={['View the list and map together', 'Switch products in one tap']}
              tradeoff="Reduces the vertical space available to the map"
            />
            <PatternCard
              variant="B"
              label="Collapsible bottom sheet"
              title="Give the map more room"
              video="/assets/projects/grocery-nav/pattern-sheet-round-2.mp4"
              description="The list can collapse to reveal more of the floor plan, then expand when the shopper needs another item."
              strengths={['Maximizes the map when collapsed', 'Places list controls near the thumb']}
              tradeoff="Covers the map when open and adds a step before switching"
            />
          </div>
        </CaseSection>

        <CaseSection id="findings">
          <TextBlock
            eyebrow="In the aisle"
            headline="What shoppers noticed in a real aisle."
          >
            <p>
              I brought both layouts into a real grocery store and focused on how clearly shoppers could understand the next item and its location. The sessions were directional: I used what people noticed, missed, and asked for to choose the pattern.
            </p>
          </TextBlock>

          <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              {
                src: '/assets/projects/grocery-nav/testing/produce-tomatoes.jpg',
                alt: 'Shopper using Grocery Nav in the produce section',
              },
              {
                src: '/assets/projects/grocery-nav/testing/produce-carrots.jpg',
                alt: 'Shopper locating carrots with Grocery Nav',
              },
              {
                src: '/assets/projects/grocery-nav/testing/meat-aisle.jpg',
                alt: 'Shopper checking Grocery Nav in the meat aisle',
              },
              {
                src: '/assets/projects/grocery-nav/testing/pantry-aisle.jpg',
                alt: 'Shopper confirming a product location with Grocery Nav',
              },
            ].map((image) => (
              <figure key={image.src} className="aspect-[9/16] overflow-hidden rounded-[12px] bg-[#F5F5F5] dark:bg-[#262626]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1134}
                  height={2016}
                  className="h-full w-full object-cover"
                />
              </figure>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  label: 'Participant feedback',
                  title: 'The fixed header made the next step easier to read.',
                  body: 'Participants said the item list and map were easier to take in together when the selected product stayed visible at the top of the screen.',
                },
                {
                  label: 'Interaction gap',
                  title: 'The bottom sheet did not always signal that it could move.',
                  body: 'Several shoppers did not notice the sheet was expandable or collapsible. The map gained space only when an interaction people missed was discovered.',
                },
                {
                  label: 'Decision',
                  title: 'Keep the item and map visible by default.',
                  body: 'The fixed header became the final direction because it kept the current product in view without requiring shoppers to discover another control.',
                },
              ].map((item) => (
                <Card key={item.label} className="rounded-none border-0 bg-transparent shadow-none">
                  <CardContent className="px-0 py-5">
                    <div>
                      <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">
                        {item.label}
                      </p>
                      <h3 className="mt-2 font-rethink text-[21px] font-medium leading-[1.3] text-primary dark:text-[#E6E6E6]">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-satoshi text-sm leading-[1.65] text-[#6F6F6F] dark:text-[#999]">
                        {item.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <p className="mt-6 max-w-[780px] font-satoshi text-sm leading-[1.7] text-[#777] dark:text-[#888]">
            <span className="font-medium text-[#555] dark:text-[#BBB]">Prototype constraint: </span>
            Live positioning was not available during the test. When shoppers asked where they were, a store employee provided location confirmation. This let me evaluate the clarity of product and map information, but not autonomous self-positioning.
          </p>
        </CaseSection>

        <CaseSection id="system">
          <TextBlock
            eyebrow="A speculative extension"
            headline="What if Walmart helped shoppers find products in-store?"
          >
            <p>
              Grocery Nav imagines how Walmart&apos;s familiar shopping experience could extend from search and cart into the physical aisle. I used public Brand OS guidance as a reference while designing the components needed for item finding and in-store navigation.
            </p>
            <a
              href="https://brandcenter.walmart.com/brand/brand-identity/brand-os"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex font-satoshi text-xs font-semibold text-[#0B57D0] underline decoration-[#0B57D0]/30 underline-offset-4 dark:text-[#8DB7FF]"
            >
              Referenced Walmart Brand OS ↗
            </a>
          </TextBlock>

          <figure className="mb-4 overflow-hidden rounded-[12px] bg-[#F5F5F5] dark:bg-[#262626]">
            <AutoplayVideo
              src="/assets/projects/grocery-nav/brand-guide.mp4?v=2"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              playbackRate={0.6}
              className="h-auto w-full"
              aria-label="Summary of referenced Walmart UI guidance"
            />
          </figure>

          <figure className="overflow-hidden rounded-[12px] bg-[#F5F5F5] dark:bg-[#262626]">
            <AutoplayVideo
              src="/assets/projects/grocery-nav/system-example.mp4?v=2"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-auto w-full"
              aria-label="Grocery Nav components using the referenced visual language"
            />
          </figure>

          <div className="mt-20">
            <div className="mb-8">
              <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">
                Design to code
              </p>
              <h3 className="mt-3 font-rethink text-[28px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">
                How the design system connected to code
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                ['01', 'Existing language', 'Public Walmart brand guidance and established app patterns created the recognizable base.'],
                ['02', 'Semantic meaning', 'Tokens described purpose, such as selected, found, route, and surface. They did not describe a specific hex value.'],
                ['03', 'Component states', 'The same state rules applied to item icons, map pins, controls, and feedback.'],
                ['04', 'Developer alignment', 'Figma variables and React tokens followed shared names so design and implementation could be checked against the same rule.'],
              ].map(([number, title, body]) => (
                <div key={number} className="rounded-[12px] bg-[#F5F5F5] p-5 dark:bg-[#262626]">
                  <div>
                    <span className="font-satoshi text-xs font-bold text-[#0B57D0] dark:text-[#8DB7FF]">{number}</span>
                    <h3 className="mt-3 font-rethink text-[19px] font-medium text-primary dark:text-[#E6E6E6]">{title}</h3>
                    <p className="mt-2 font-satoshi text-sm leading-[1.6] text-[#6F6F6F] dark:text-[#999]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <HorizontalDragScroll className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
              <figure className="w-[88%] shrink-0 snap-center overflow-hidden rounded-[12px] bg-[#F5F5F5] dark:bg-[#262626] md:w-auto">
                <Image
                  src="/assets/projects/grocery-nav/system/figma-variables.png"
                  alt="Semantic tokens linked to their primitive values in Figma"
                  width={1672}
                  height={2300}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </figure>
              <figure className="aspect-[1672/2300] w-[88%] shrink-0 snap-center overflow-hidden rounded-[12px] bg-[#F5F5F5] p-3 dark:bg-[#262626] md:w-auto">
                <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                  <Image
                    src="/assets/projects/grocery-nav/system/react-tokens.png"
                    alt="The same semantic names used in React tokens"
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </figure>
            </HorizontalDragScroll>
          </div>
        </CaseSection>

        <CaseSection id="workflow">
          <TextBlock
            eyebrow="Product image system"
            headline="The small details had to work at scale."
          >
            <p>
              To populate the prototype, the developer registered real products in the database. I built an automated image-processing system to prepare every product image to the same visual standard, so the interface remained consistent as the catalog grew.
            </p>
          </TextBlock>

          <div className="rounded-[12px] bg-[#F5F5F5] p-5 dark:bg-[#262626] sm:p-8">
            <div className="mb-8 max-w-[720px]">
              <Badge>From source to slot</Badge>
              <h3 className="mt-5 font-rethink text-[28px] font-medium leading-[1.25] text-primary dark:text-[#E6E6E6]">
                Different source photos. One consistent product asset.
              </h3>
              <p className="mt-4 font-satoshi text-[16px] leading-[1.65] text-[#6F6F6F] dark:text-[#999]">
                The prototype needed more than 100 product images with different backgrounds, padding, and proportions. I created a Python tool that removes backgrounds and prepares each product for a repeatable in-app treatment.
              </p>
              <p className="mt-4 font-satoshi text-[16px] leading-[1.65] text-[#6F6F6F] dark:text-[#999]">
                Each output uses a transparent <strong className="font-semibold text-[#1D1D1F] dark:text-[#E6E6E6]">60 × 60 PNG canvas</strong>. The product keeps its original proportions, fills <strong className="font-semibold text-[#1D1D1F] dark:text-[#E6E6E6]">70% of the circle</strong>, and stays centered so every item reads consistently in the interface.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['/assets/projects/grocery-nav/product-source.png', '01 · Original image', 'Original product image on a dark source background', 'h-full w-full', 'bg-[#3F3F3F]'],
                ['/assets/projects/grocery-nav/product-cutout.png', '02 · Background removed', 'Product cutout with its background removed', 'h-full w-full', 'bg-[#F8F8F8] dark:bg-[#242424]'],
                ['/assets/projects/grocery-nav/product-in-context.svg', '03 · Standardized placement', 'Product shown at its 60 by 60 pixel in-app size', 'h-[66px] w-[66px]', 'bg-[#F8F8F8] dark:bg-[#242424]'],
              ].map(([src, label, alt, imageClass, stageClass]) => (
                <figure key={src} className="rounded-[10px] bg-white p-4 dark:bg-[#1E1E1E]">
                  <div className={`flex aspect-square items-center justify-center overflow-hidden rounded-[8px] ${stageClass}`}>
                    <Image src={src} alt={alt} width={512} height={512} className={`${imageClass} object-contain`} />
                  </div>
                  <figcaption className="mt-3 font-satoshi text-xs font-bold uppercase tracking-[0.06em] text-[#6F6F6F] dark:text-[#999]">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <a
              href="https://github.com/ssanghwacha/product-image-processor"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-full border border-primary px-4 py-2 font-satoshi text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white dark:border-[#E6E6E6] dark:text-[#E6E6E6] dark:hover:bg-[#E6E6E6] dark:hover:text-[#1E1E1E]"
            >
              View the image-processing tool ↗
            </a>
          </div>

        </CaseSection>

        <CaseSection id="outcome">
          <TextBlock eyebrow="Final prototype" headline="From an empty list to a completed trip.">
            <p>The final Android prototype connects search, product selection, aisle location, and completion in one persistent map experience.</p>
          </TextBlock>
          <figure className="overflow-hidden rounded-[12px] bg-black">
            <Image
              src="/assets/projects/grocery-nav/final/final-flow.svg"
              alt="Grocery Nav from an empty shopping list to a completed in-store trip"
              width={1920}
              height={1054}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 980px, 100vw"
            />
          </figure>
          <a
            href="#"
            className="mt-6 inline-flex rounded-full border border-primary px-4 py-2 font-satoshi text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white dark:border-[#E6E6E6] dark:text-[#E6E6E6] dark:hover:bg-[#E6E6E6] dark:hover:text-[#1E1E1E]"
          >
            Download Android prototype ↗
          </a>

          <div className="mt-20">
            <div className="max-w-[720px]">
              <p className="font-satoshi text-[10px] font-bold uppercase tracking-[0.1em] text-[#ADADAD]">Reflection</p>
              <h3 className="mt-3 font-rethink text-[28px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">
                What the prototype surfaced
              </h3>
            </div>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
              {[
                ['Store mapping', 'Product locations were difficult to verify from the floor plan alone. Store staff confirmed locations during testing, which made the map useful for evaluation but not independently maintained.'],
                ['Indoor positioning', 'The prototype could not reliably show a shopper\'s precise current position. A production version would need indoor positioning infrastructure and live store data.'],
              ].map(([title, body]) => (
                <div key={title}>
                  <h4 className="font-rethink text-[22px] font-medium text-primary dark:text-[#E6E6E6]">{title}</h4>
                  <p className="mt-3 font-satoshi text-[16px] leading-[1.65] text-[#6F6F6F] dark:text-[#999]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-[#DEDEDE] pt-8 dark:border-[#393939]">
            <h3 className="font-rethink text-[28px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">
              What I would carry into the next test
            </h3>
            <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
              {[
                ['01', 'Control one variable at a time.', 'In the first round, product states and interaction details differed alongside the layout. Rebuilding the comparison showed that small differences can change what participants report.'],
                ['02', 'Make movement discoverable.', 'The bottom sheet could collapse, but some shoppers did not notice that it moved. An interaction should communicate its behavior before it is used.'],
                ['03', 'Extend item finding into route planning.', 'The next iteration would add Route mode to sequence the remaining items into a clearer path and reduce backtracking across the store.'],
              ].map(([number, title, body]) => (
                <div key={number}>
                  <span className="font-satoshi text-xs font-bold text-[#0B57D0] dark:text-[#8DB7FF]">{number}</span>
                  <h4 className="mt-3 font-rethink text-[20px] font-medium leading-[1.25] text-[#1D1D1F] dark:text-[#E6E6E6]">{title}</h4>
                  <p className="mt-3 font-satoshi text-sm leading-[1.65] text-[#6F6F6F] dark:text-[#999]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </CaseSection>
      </div>
    </ProjectLayout>
  );
}
