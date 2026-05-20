import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import SeeMore from '@/components/casestudy/SeeMore';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';

const NAV = [
  { id: 'overview',     label: 'Overview'        },
  { id: 'story',        label: 'Brand Story'     },
  { id: 'approach',     label: 'Approach'        },
  { id: 'identity',     label: 'Visual Identity' },
  { id: 'application',  label: 'Application'     },
];

const COLOR_SCALES = [
  {
    label: 'Blue Scale',
    stops: [
      { hex: '#F0F0EE', name: 'Soft White',     dark: false },
      { hex: '#C5D8F8', name: 'Ice Blue',       dark: false },
      { hex: '#6FA3F4', name: 'Sky Blue',       dark: false },
      { hex: '#4B7EC8', name: 'Steel Blue',     dark: true  },
      { hex: '#1F6DEA', name: 'Signature Blue', dark: true  },
      { hex: '#102F6E', name: 'Dark Blue',      dark: true  },
    ],
  },
  {
    label: 'Black Scale',
    stops: [
      { hex: '#F0F0EE', name: 'Soft White', dark: false },
      { hex: '#D0D0CE', name: 'Light Grey', dark: false },
      { hex: '#8C8C8C', name: 'Mid Grey',   dark: true  },
      { hex: '#4A4A4A', name: 'Dark Grey',  dark: true  },
      { hex: '#2A2A2A', name: 'Charcoal',   dark: true  },
      { hex: '#0C0C0C', name: 'Deep Black', dark: true  },
    ],
  },
];

const TYPE_WEIGHTS = [
  { label: 'Light',   num: '300', weight: 300 },
  { label: 'Regular', num: '400', weight: 400 },
  { label: 'Medium',  num: '500', weight: 500 },
  { label: 'Bold',    num: '700', weight: 700 },
];

export default function VelotPage() {
  return (
    <ProjectLayout
      projectNav={NAV}
      belowGrid={
        <SeeMore
          projects={[
            { slug: 'billow',     title: 'Billow',     category: 'Product · UXUI', thumbnail: '/assets/projects/billow/thumbnail.jpg' },
            { slug: 'altra',      title: 'Altra',      category: 'Product · UXUI', thumbnail: '/assets/projects/altra/thumbnail.jpg' },
            { slug: 'bgzt',       title: 'BGZT',       category: 'Branding',       thumbnail: '/assets/projects/bgzt/thumbnail.jpg' },
          ]}
        />
      }
      sidebar={
        <CaseHero
          title="Velot"
          meta="Brand Identity · 2025"
          headline="A refined digital experience for urban car sharing."
          role="Brand Designer"
          team={[{ initials: 'SC', color: '#1F6DEA' }]}
          timeline="3 weeks"
          tools={[
            { name: 'Photoshop', src: '/assets/icons/ps.png', bg: '#31A8FF' },
            { name: 'Illustrator', src: '/assets/icons/ai.png', bg: '#FF9A00' },
            { name: 'Figma', src: '/assets/projects/bgzt/figma.svg', bg: 'transparent' },
          ]}
          nav={NAV}
          layout="static"
        />
      }
      heroSlot={
        <div>
          <HeroMediaReveal>
            {/* Mobile / Tablet */}
            <div className="relative w-full aspect-square overflow-hidden rounded-[12px] lg:hidden">
              <Image
                src="/assets/projects/velot/billow_mobile.png"
                alt="Velot hero"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Desktop */}
            <div className="relative w-full aspect-[3200/1823] overflow-hidden hidden lg:block">
              <Image
                src="/assets/projects/velot/billow_desktop.png"
                alt="Velot hero"
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

          {/* Overview */}
          <CaseSection id="overview">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Overview</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                A refined digital experience for urban car sharing.
              </h2>
              <p className="type-body-lg max-w-[90%] text-[#6F6F6F] dark:text-[#999] mb-16">
                Velot is a car-sharing brand designed to make urban mobility feel smoother, clearer, and more intuitive. Rather than focusing only on driving, the experience considers the entire flow of movement across the city, from navigation to arrival and parking.
              </p>
              <video
                src="/assets/projects/velot/logo_animation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </CaseSection>

          {/* Brand Story */}
          <CaseSection id="story">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Brand Story</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                Designed around the rhythm of urban movement.
              </h2>
              <p className="type-body-lg max-w-[90%] text-[#6F6F6F] dark:text-[#999] mb-16">
                Urban mobility is not only about getting from one place to another. Velot explores the quieter transitions within the journey, moments of slowing down, arriving, and navigating the city with ease. This idea became the foundation for the brand&apos;s visual and digital identity.
              </p>
              <div className="w-full rounded-[16px] bg-[#0c0c0c] overflow-hidden grid grid-cols-1 sm:grid-cols-2">
                <div className="flex aspect-square items-center justify-center p-10 sm:aspect-auto sm:p-12">
                  <Image
                    src="/assets/projects/velot/logo.png"
                    alt="Velot logo"
                    width={400}
                    height={400}
                    className="w-full max-w-[72px] h-auto rounded-[16px] transition-all duration-300 ease-out hover:shadow-[0_0_20px_4px_rgba(31,109,234,0.45)] sm:max-w-[96px] sm:rounded-[20px]"
                  />
                </div>
                <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src="/assets/projects/velot/mobile.jpg"
                    alt="Velot mobile"
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CaseSection>

          {/* Approach */}
          <CaseSection id="approach">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Approach</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                Geometry inspired by the city.
              </h2>
              <p className="type-body-lg max-w-[90%] text-[#6F6F6F] dark:text-[#999] mb-16">
                The identity system draws from visual patterns found in urban driving environments, including road markings, parking structures, curves, and directional flow. These elements were reduced into simple geometric forms to create a system that feels structured, fluid, and modern.
              </p>
              <div className="flex flex-col gap-4">
                <div className="w-full rounded-[8px] bg-[#0c0c0c] flex items-center justify-center p-16">
                  <Image
                    src="/assets/projects/velot/logo_detail.png"
                    alt="Velot logo construction"
                    width={800}
                    height={450}
                    className="w-full max-w-[380px] h-auto"
                  />
                </div>
                <Image
                  src="/assets/projects/velot/motif.jpg"
                  alt="Velot motif system"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
                <Image
                  src="/assets/projects/velot/mood.jpg"
                  alt="Velot brand mood"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-[8px]"
                />
              </div>
            </div>
          </CaseSection>

          {/* Visual Identity */}
          <CaseSection id="identity">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Visual Identity</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-3xl">
                Clarity through contrast.
              </h2>
              <p className="type-body-lg max-w-[90%] text-[#6F6F6F] dark:text-[#999] mb-16">
                The visual identity combines a deep black foundation with a vibrant signature blue and soft neutrals to create a clean yet expressive system. Paired with Avenir Next, the typography reinforces the brand&apos;s geometric and contemporary character across digital touchpoints.
              </p>

              <div className="flex flex-col gap-10">

                {/* Color Scales */}
                <div className="flex flex-col gap-2">
                  {COLOR_SCALES.map(({ label, stops }) => (
                    <div key={label}>
                      <p className="text-[10px] uppercase tracking-widest text-[#ADADAD] mb-2">{label}</p>
                      <div className="overflow-hidden rounded-[12px] sm:overflow-visible">
                        <div className="velot-color-strip flex h-[120px] overflow-hidden rounded-[12px] sm:w-full">
                        {stops.map(({ hex, name, dark }, i) => (
                          <div
                            key={hex}
                            className="flex-1 flex flex-col justify-between p-3"
                            style={{
                              backgroundColor: hex,
                              borderRight: i < stops.length - 1 ? '1px solid rgba(128,128,128,0.15)' : undefined,
                            }}
                          >
                            <span
                              className="text-[9px] font-medium leading-tight"
                              style={{ color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)' }}
                            >
                              {name}
                            </span>
                            <span
                              className="text-[9px] font-mono"
                              style={{ color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}
                            >
                            {hex.toUpperCase()}
                          </span>
                        </div>
                      ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Typography System */}
                <div className="w-full rounded-[12px] overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.04)' }}>
                  <div className="px-5 sm:px-8 pt-8 pb-10 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(0,0,0,0.3)' }}>Typeface</p>
                      <p
                        className="leading-none"
                        style={{ fontSize: 'clamp(28px, 6vw, 40px)', fontWeight: 300, fontFamily: "'Avenir Next', 'Avenir', sans-serif", color: '#1E1E1E' }}
                      >
                        Avenir Next
                      </p>
                    </div>
                    <p className="text-xs sm:max-w-[220px] sm:text-right leading-relaxed" style={{ color: 'rgba(0,0,0,0.35)' }}>
                      A geometric sans-serif. Clean, contemporary, and versatile across display and interface contexts.
                    </p>
                  </div>
                  {TYPE_WEIGHTS.map(({ label, num, weight }, i) => (
                    <div
                      key={label}
                      className="px-5 sm:px-8 py-4 flex items-center justify-between"
                      style={{ borderBottom: i < TYPE_WEIGHTS.length - 1 ? '1px solid rgba(0,0,0,0.07)' : undefined }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs w-16" style={{ color: 'rgba(0,0,0,0.45)' }}>{label}</span>
                        <span className="text-xs" style={{ color: 'rgba(0,0,0,0.2)' }}>{num}</span>
                      </div>
                      <span
                        className="text-lg"
                        style={{ fontWeight: weight, fontFamily: "'Avenir Next', 'Avenir', sans-serif", color: '#1E1E1E' }}
                      >
                        Share With Journey
                      </span>
                    </div>
                  ))}
                </div>

                {/* Motif Grid */}
                <div>
                <p className="text-[10px] uppercase tracking-widest text-[#ADADAD] mb-2">Graphic Element</p>
                <div className="grid gap-2 md:grid-cols-3">
                  <Image src="/assets/projects/velot/motif01.jpg" alt="Velot motif 01" width={600} height={600} className="w-full h-auto rounded-[8px]" />
                  <Image src="/assets/projects/velot/motif02.jpg" alt="Velot motif 02" width={600} height={600} className="w-full h-auto rounded-[8px]" />
                  <Image src="/assets/projects/velot/motif03.jpg" alt="Velot motif 03" width={600} height={600} className="w-full h-auto rounded-[8px]" />
                </div>
                </div>

              </div>
            </div>
          </CaseSection>

          {/* Application */}
          <CaseSection id="application">
            <div className="font-satoshi max-w-4xl">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Application</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-16 max-w-3xl">
                The identity applied across digital experiences.
              </h2>
              <div className="flex flex-col gap-4">
                {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
                  <Image
                    key={n}
                    src={`/assets/projects/velot/application${n}.jpg`}
                    alt={`Velot application ${n}`}
                    width={1600}
                    height={900}
                    className="w-full h-auto rounded-[8px]"
                  />
                ))}
              </div>
            </div>
          </CaseSection>

        </div>
      </div>
    </ProjectLayout>
  );
}
