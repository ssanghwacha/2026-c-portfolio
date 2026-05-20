import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';

const NAV = [
  { id: 'overview',    label: 'Overview'       },
  { id: 'brand-story', label: 'Brand Story'    },
  { id: 'approach',    label: 'Approach'       },
  { id: 'process',     label: 'Design Process' },
  { id: 'application', label: 'Application'    },
];

export default function BgztPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'billow',     title: 'Billow',     category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
            { slug: 'altra',      title: 'Altra',      category: 'Product · UXUI', thumbnail: '/assets/projects/altra/thumbnail.jpg' },
            { slug: 'fianchetto', title: 'Fianchetto', category: 'Branding',       thumbnail: '/assets/projects/fianchetto/fian_main_01.png' },
          ]}
        />
      }
      sidebar={
        <CaseHero
          title="BGZT"
          meta="Branding · Client Work"
          headline="A new BGZT sub-brand that visualizes convenience and trust through a one-way delivery identity system."
          role="Brand Designer"
          team={[{ initials: 'SC', color: '#5C6BC0' }]}
          timeline="4 weeks"
          tools={[
            { name: 'Photoshop', src: '/assets/icons/ps.png', bg: '#31A8FF' },
            { name: 'Illustrator', src: '/assets/icons/ai.png', bg: '#FF9A00' },
            { name: 'Figma', src: '/assets/projects/bgzt/figma.svg', bg: 'transparent' },
            { name: 'Cinema 4D', src: '/assets/icons/c4d.svg', bg: 'transparent' },
          ]}
          nav={NAV}
          layout="static"
        />
      }
      heroSlot={
        <div>
          <HeroMediaReveal>
            <Image
              src="/assets/projects/bgzt/bgzt_main.jpg"
              alt="BGZT Delivery brand identity"
              width={1600}
              height={900}
              className="w-full h-auto block rounded-[8px]"
              priority
            />
          </HeroMediaReveal>
        </div>
      }
    >
      <div>

        <div className="w-full min-w-0 pt-12 lg:mx-auto lg:max-w-[980px]">

          {/* Overview */}
          <CaseSection id="overview">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Overview</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                BGZT Delivery. A sub-brand for a simpler way to sell.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                BGZT is a secondhand marketplace. To make selling even easier, they introduced a pickup and delivery service: you list the item, they pick it up, pack it, and ship it for you. This project builds the visual identity for that service.
              </p>
              <Image
                src="/assets/projects/bgzt/bgzt_overview.jpg"
                alt="BGZT Delivery overview"
                width={1600}
                height={900}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </CaseSection>

          {/* Brand Story */}
          <CaseSection id="brand-story">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Brand Story</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                BGZT started as a marketplace. It became a cultural platform.
              </h2>
              <div className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] space-y-5 mb-16">
                <p>
                  BGZT (Bungeajangter) is one of the largest secondhand marketplaces, similar to Craigslist or Facebook Marketplace.
                  Beyond buying and selling, it offers curated retail spaces, trend reports, and brand experiences, making it more than just a resale platform.
                </p>
                <p>
                  As the platform expanded into logistics, it needed an identity that could stand on its own
                  while staying grounded in BGZT&apos;s values.
                </p>
              </div>
              <Image
                src="/assets/projects/bgzt/process.jpg"
                alt="BGZT Delivery design process"
                width={1600}
                height={900}
                className="w-full h-auto rounded-[8px] mt-10"
              />
            </div>
          </CaseSection>

          {/* Approach */}
          <CaseSection id="approach">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Approach</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                ONE WAY.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                ONE WAY is the sub-brand name for BGZT&apos;s pickup and delivery flow.
                The name reflects the simplicity of the process: pick up, pack, deliver, done.
                No back-and-forth. No ambiguity.
              </p>
              <div className="relative aspect-video overflow-hidden rounded-[8px]">
                <Image
                  src="/assets/projects/bgzt/one way.jpg"
                  alt="ONE WAY delivery brand identity"
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </CaseSection>

          {/* Design Process */}
          <CaseSection id="process">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Design Process</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                From sketches to system.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                The packaging and delivery system needed to fit different item sizes while staying
                consistent and recognizable. Early sketches explored how structure, form, and label
                placement could communicate the brand without heavy graphics.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
                  <Image
                    src="/assets/projects/bgzt/sketch.jpg"
                    alt="BGZT Delivery early sketch"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
                  <Image
                    src="/assets/projects/bgzt/sketch_02.jpg"
                    alt="BGZT Delivery refined sketch"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CaseSection>

          {/* Application */}
          <CaseSection id="application">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Application</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                ONE WAY in use.
              </h2>
              <p className="type-body-lg max-w-2xl text-[#6F6F6F] dark:text-[#999] mb-16">
                From packaging to print, the ONE WAY identity scales across every touchpoint in the delivery flow.
              </p>
              <div className="flex flex-col gap-4">
                <Image
                  src="/assets/projects/bgzt/mockup_01.png"
                  alt="BGZT Delivery mockup 01"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/box_01.png"
                  alt="ONE WAY delivery box packaging"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_07.png"
                  alt="BGZT Delivery mockup 07"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_02.png"
                  alt="BGZT Delivery mockup 02"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_03.png"
                  alt="BGZT Delivery mockup 03"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_04.png"
                  alt="BGZT Delivery mockup 04"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_05.png"
                  alt="BGZT Delivery mockup 05"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/bgzt/mockup_06.png"
                  alt="BGZT Delivery mockup 06"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </CaseSection>

        </div>
      </div>
    </ProjectLayout>
  );
}
