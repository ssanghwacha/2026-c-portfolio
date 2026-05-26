import type { Metadata } from 'next';
import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';

export const metadata: Metadata = {
  title: 'Aperture Coffee Bar - Work',
  description: 'Case study: Aperture Coffee Bar web design and visual direction.',
};

const ASSETS = '/assets/projects/aperture-coffee-bar';
const heroImage = `${ASSETS}/apreture coffee bar.png`;

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'direction', label: 'Direction' },
  { id: 'experience', label: 'Experience' },
  { id: 'application', label: 'Application' },
  { id: 'reflection', label: 'Reflection' },
];

const DIRECTION_POINTS = [
  {
    title: 'Warm, but edited',
    body: 'The visual direction keeps the cafe feeling local and human while avoiding a cluttered coffee-shop aesthetic.',
  },
  {
    title: 'Photography first',
    body: 'Large imagery carries the tone so the interface can stay simple, quiet, and easy to scan.',
  },
  {
    title: 'Clear paths',
    body: 'Core actions such as checking hours, location, and menu context stay close to the first impression.',
  },
];

const EXPERIENCE_POINTS = [
  'A first viewport that makes the cafe itself immediately recognizable.',
  'A restrained layout system that gives photography enough room to breathe.',
  'Simple content hierarchy for visitors who just need practical details quickly.',
];

export default function ApertureCoffeeBarPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'in-the-light', title: 'In the light', category: 'Branding', thumbnail: '/assets/projects/in-the-light/inthelight_main.png' },
            { slug: 'velot', title: 'Velot', category: 'Branding', thumbnail: '/assets/projects/velot/thumbnail.jpg' },
            { slug: 'billow', title: 'Billow', category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
          ]}
        />
      }
      sidebar={
        <CaseHero
          title="Aperture Coffee Bar"
          meta="Web Design · Visual Direction"
          headline="A calm digital presence for a local Vancouver coffee bar."
          role={['Web Designer', 'Visual Designer']}
          team={[{ initials: 'SC', color: '#313A60' }]}
          timeline="2025"
          tools={[
            { name: 'Figma', src: '/assets/projects/bgzt/figma.svg', bg: 'transparent' },
            { name: 'Photoshop', src: '/assets/icons/ps.png', bg: '#31A8FF' },
          ]}
          nav={NAV}
          layout="static"
        />
      }
      heroSlot={
        <div>
          <HeroMediaReveal>
            <div className="relative aspect-square w-full overflow-hidden rounded-[8px] lg:hidden">
              <Image
                src={heroImage}
                alt="Aperture Coffee Bar hero visual"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative hidden w-full overflow-hidden lg:block" style={{ aspectRatio: '3248 / 1827' }}>
              <Image
                src={heroImage}
                alt="Aperture Coffee Bar hero visual"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </HeroMediaReveal>
        </div>
      }
    >
      <div>
        <div className="w-full min-w-0 pt-12 lg:mx-auto lg:max-w-[980px]">
          <CaseSection id="overview">
            <div className="font-satoshi max-w-[839px] mb-16">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Overview</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[620px]">
                A website direction shaped around atmosphere, clarity, and place.
              </h2>
              <p className="type-body-lg text-[#6F6F6F] dark:text-[#999]">
                Aperture Coffee Bar needed a web presence that could feel as considered as the physical space. The project focuses on translating the cafe&apos;s photographic, warm, and minimal character into a digital experience that is easy to understand at a glance.
              </p>
            </div>
            <Image
              src={heroImage}
              alt="Aperture Coffee Bar website visual direction"
              width={3248}
              height={1827}
              className="h-auto w-full rounded-[8px]"
              priority
            />
          </CaseSection>

          <CaseSection id="direction">
            <div className="font-satoshi max-w-[839px] mb-16">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Direction</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[560px]">
                Keep the interface quiet so the cafe can lead.
              </h2>
              <p className="type-body-lg text-[#6F6F6F] dark:text-[#999]">
                The page direction uses restrained typography, generous image areas, and direct information architecture to make the brand feel polished without becoming overly decorative.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {DIRECTION_POINTS.map(({ title, body }, index) => (
                <div
                  key={title}
                  className="flex min-h-[220px] flex-col justify-between rounded-[12px] bg-[#F5F5F5] p-5 dark:bg-[#2A2A2A]"
                >
                  <span className="type-eyebrow text-[#ADADAD] dark:text-[#777]">0{index + 1}</span>
                  <div>
                    <h3 className="mb-4 font-rethink text-[22px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6]">
                      {title}
                    </h3>
                    <p className="font-satoshi text-[15px] font-medium leading-[1.55] text-[#6F6F6F] dark:text-[#999]">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="experience">
            <div className="font-satoshi max-w-[839px] mb-16">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Experience</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[540px]">
                Designed for people deciding where to go next.
              </h2>
              <p className="type-body-lg text-[#6F6F6F] dark:text-[#999]">
                The experience prioritizes recognition and useful details. Visitors should quickly understand the mood of the space, then move naturally toward practical information.
              </p>
            </div>

            <div className="rounded-[12px] bg-[#F5F5F5] p-5 dark:bg-[#2A2A2A] sm:p-8">
              <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <Image
                    src={heroImage}
                    alt="Aperture Coffee Bar visual detail"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  {EXPERIENCE_POINTS.map((point) => (
                    <div key={point} className="border-t border-black/10 pt-5 dark:border-white/10">
                      <p className="font-satoshi text-[20px] font-medium leading-[1.45] text-primary dark:text-[#E6E6E6]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CaseSection>

          <CaseSection id="application">
            <div className="font-satoshi max-w-[839px] mb-16">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Application</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[560px]">
                A flexible visual system for web and content.
              </h2>
              <p className="type-body-lg text-[#6F6F6F] dark:text-[#999]">
                The same direction can extend across landing pages, social posts, and campaign moments through image-led compositions and concise editorial copy.
              </p>
            </div>

            <div className="grid gap-4">
              <Image
                src={heroImage}
                alt="Aperture Coffee Bar application overview"
                width={3248}
                height={1827}
                className="h-auto w-full rounded-[8px]"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative aspect-square overflow-hidden rounded-[8px]">
                  <Image
                    src={heroImage}
                    alt="Aperture Coffee Bar application crop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-left"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[8px]">
                  <Image
                    src={heroImage}
                    alt="Aperture Coffee Bar website crop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </CaseSection>

          <CaseSection id="reflection">
            <div className="font-satoshi max-w-[839px]">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Reflection</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[620px]">
                The strongest cafe websites do less, but say more clearly.
              </h2>
              <p className="type-body-lg text-[#6F6F6F] dark:text-[#999]">
                This setup leaves room for more project-specific content as the case study grows: menu details, photography direction, responsive screens, and final launch metrics can be added without changing the page structure.
              </p>
            </div>
          </CaseSection>
        </div>
      </div>
    </ProjectLayout>
  );
}
