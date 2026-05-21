import Image from 'next/image';
import ProjectLayout from '@/components/casestudy/ProjectLayout';
import CaseHero from '@/components/casestudy/CaseHero';
import CaseSection from '@/components/casestudy/CaseSection';
import PlaybackRateVideo from '@/components/casestudy/PlaybackRateVideo';
import SeeMore from '@/components/casestudy/SeeMore';
import HeroMediaReveal from '@/components/motion/HeroMediaReveal';
const ASSETS = '/assets/projects/in-the-light';
const inTheLightHero = `${ASSETS}/inthelight_main_p.png`;
const boxImage = `${ASSETS}/box.png`;
const box02Image = `${ASSETS}/box_02.png`;
const businessCardImage = `${ASSETS}/business_card.png`;
const graphicImage = `${ASSETS}/graphic.png`;
const logoMarkImage = `${ASSETS}/logo_m.png`;
const app02Image = `${ASSETS}/app02.png`;
const app02_2Image = `${ASSETS}/app02-2.png`;
const app03Image = `${ASSETS}/app03.png`;
const packageImage = `${ASSETS}/package.png`;
const invoiceImage = `${ASSETS}/invoice.png`;

const NAV = [
  { id: 'overview',      label: 'Overview'      },
  { id: 'story',         label: 'Brand Story'   },
  { id: 'concept',       label: 'Concept'       },
  { id: 'design-system', label: 'Design System' },
  { id: 'application',   label: 'Application'   },
];

const COLOR_PALETTE = [
  { name: 'Trust Blue', type: 'Primary color', hex: '#3D4E9A', rgb: '61 78 154',    dark: true  },
  { name: 'Sub Blue',   type: 'Sub Color',     hex: '#50A2DA', rgb: '80 162 218',   dark: true  },
  { name: 'Light Blue', type: 'Sub Color',     hex: '#A8D4EE', rgb: '168 212 238',  dark: false },
  { name: 'Base Grey',  type: 'Sub Color',     hex: '#F5F5F5', rgb: '245 245 245',  dark: false },
  { name: 'Ink Black',  type: 'Sub Color',     hex: '#202020', rgb: '32 32 32',     dark: true  },
];

export default function InTheLight() {
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
          title="IN THE LIGHT"
          meta="Brand Identity"
          headline="Try hobbies lightly, and find the one that's yours."
          role="Brand Designer"
          team={[{ initials: 'SC', color: '#1F6DEA' }]}
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
            {/* Mobile / Tablet */}
            <div className="relative w-full aspect-square overflow-hidden rounded-[12px] lg:hidden">
              <Image
                src="/assets/projects/in-the-light/inthelight_main_2.png"
                alt="IN THE LIGHT project hero"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Desktop */}
            <div className="relative w-full aspect-[3536/1970] overflow-hidden hidden lg:block">
              <Image
                src={inTheLightHero}
                alt="IN THE LIGHT project hero"
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
            <div className="font-satoshi">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Overview</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[520px]">
                Try hobbies lightly, and find the one that's yours.
              </h2>
              <p className="type-body-lg max-w-[839px] text-[#6F6F6F] dark:text-[#999] mb-16">
                Hobbies often start with excitement but end in abandoned supplies. IN THE LIGHT is designed for the explorers celebrating the discovery process itself, making it okay to try without commitment until you find what sticks.
              </p>
              <Image
                src={boxImage}
                alt="IN THE LIGHT box"
                width={3840}
                height={2160}
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </CaseSection>

          {/* Brand Story */}
          <CaseSection id="story">
            <div className="font-satoshi">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Brand Story</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[520px]">
                Finding a hobby is like sculpting.
              </h2>
              <p className="type-body-lg max-w-[839px] text-[#6F6F6F] dark:text-[#999] mb-16">
                I used the sculpting process as a metaphor for hobby discovery. This concept became the visual language that drives the brand.
              </p>
              <video
                src="/assets/projects/in-the-light/story.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[8px]"
              />
            </div>
          </CaseSection>

          {/* Concept */}
          <CaseSection id="concept">
            <div className="font-satoshi">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Concept</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[520px]">
                Three values drive the brand.
              </h2>
              <p className="type-body-lg max-w-[839px] text-[#6F6F6F] dark:text-[#999] mb-16">
                All hobbies begin with curiosity. This brand helps sustain that spark and nurture it into something meaningful.
              </p>
              <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
                {[
                  {
                    number: '1',
                    title: 'OWN',
                    english: 'Focus on finding hobbies',
                  },
                  {
                    number: '2',
                    title: 'CONTINUING',
                    english: 'To continue hobbies',
                  },
                  {
                    number: '3',
                    title: 'LIGHT',
                    english: 'Experience hobbies easily',
                  },
                ].map(({ number, title, english }) => (
                  <div key={title} className="flex flex-col border-t border-black/10 pt-4 dark:border-white/10">
                    <span className="type-eyebrow mb-4 text-[#ADADAD] dark:text-[#777]">
                      0{number}
                    </span>
                    <h3 className="mb-5 text-[20px] font-medium leading-[1.2] text-primary dark:text-[#E6E6E6] sm:text-[22px]">
                      {title}
                    </h3>
                    <p className="type-ui text-[#6F6F6F] dark:text-[#999]">
                      {english}
                    </p>
                  </div>
                ))}
              </div>
              <PlaybackRateVideo
                src="/assets/projects/in-the-light/logo.mp4"
                playbackRate={0.7}
                autoPlay
                loop
                muted
                playsInline
                className="mb-16 h-auto w-full rounded-[8px]"
              />
            </div>
          </CaseSection>

          {/* Design System */}
          <CaseSection id="design-system">
            <div className="font-satoshi">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Design System</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-10 max-w-[520px]">
                The design system
              </h2>
              <p className="type-body-lg max-w-[839px] text-[#6F6F6F] dark:text-[#999] mb-16">
                I built the system around a grounded blue that establishes trust. Secondary colors and graphic elements bring energy while maintaining clarity.
              </p>

              <div className="flex flex-col gap-10">

                {/* Color Palette */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#ADADAD] mb-3">Color Palette</p>

                  {/* Inspiration image */}
                  <div className="relative mb-2 aspect-[2/1] w-full overflow-hidden rounded-[8px]">
                    <Image
                      src="/assets/projects/in-the-light/angelina-litvin-S6wHfOpdGkY-unsplash.jpg"
                      alt="Inspiration of the color"
                      fill
                      sizes="(max-width: 1024px) 100vw, 980px"
                      className="object-cover"
                    />
                  </div>

                  {/* Color blocks */}
                  <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-[8px] sm:grid-cols-5">
                    {COLOR_PALETTE.map(({ name, type, hex, rgb, dark }) => {
                      const textColor = dark ? '#FFFFFF' : '#3F3F3F';
                      const subTextColor = dark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.55)';
                      return (
                        <div
                          key={hex}
                          className="flex flex-col gap-3 p-4 min-h-[160px] sm:min-h-[200px]"
                          style={{ backgroundColor: hex }}
                        >
                          <p className="text-[14px] font-medium" style={{ color: textColor }}>{name}</p>
                          <div className="font-mono text-[10px] leading-[1.6]" style={{ color: subTextColor }}>
                            <p>{type}</p>
                            <p>RGB {rgb}</p>
                            <p>HEX {hex.replace('#', '')}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Logo System */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#ADADAD] mb-2">Logo System</p>
                  <div className="flex items-center justify-center overflow-hidden rounded-[8px] bg-[#EDEDED] px-10 py-14 sm:px-16 sm:py-20">
                    <Image
                      src={logoMarkImage}
                      alt="IN THE LIGHT logo system"
                      width={3840}
                      height={2160}
                      className="h-auto w-full max-w-[520px]"
                    />
                  </div>
                </div>

                {/* Graphic Element */}
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#ADADAD] mb-2">Graphic Element</p>
                  <div className="overflow-hidden rounded-[8px] bg-[#EDEDED]">
                    <Image
                      src={graphicImage}
                      alt="IN THE LIGHT graphic element system"
                      width={3840}
                      height={1692}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

              </div>
            </div>
          </CaseSection>

          {/* Application */}
          <CaseSection id="application">
            <div className="font-satoshi">
              <p className="type-eyebrow text-primary dark:border-[#555] dark:text-[#999] mb-8">Application</p>
              <h2 className="type-hero text-primary dark:text-[#E6E6E6] mb-16 max-w-[520px]">
                Applied across touchpoints.
              </h2>
              <p className="type-body-lg max-w-[839px] text-[#6F6F6F] dark:text-[#999] mb-16">
                Business cards, packaging, posters, tote bags. Each touchpoint carries the same lightness the brand stands for.
              </p>
              <div className="flex flex-col gap-4">
                <Image
                  src={inTheLightHero}
                  alt="IN THE LIGHT main application"
                  width={3536}
                  height={1970}
                  className="h-auto w-full rounded-[8px]"
                />
                <Image
                  src={businessCardImage}
                  alt="IN THE LIGHT business card application"
                  width={3840}
                  height={1486}
                  className="h-auto w-full rounded-[8px]"
                />
                <Image
                  src={boxImage}
                  alt="IN THE LIGHT box"
                  width={3840}
                  height={2160}
                  className="h-auto w-full rounded-[8px]"
                />
                <Image
                  src={box02Image}
                  alt="IN THE LIGHT box 02"
                  width={3840}
                  height={2160}
                  className="h-auto w-full rounded-[8px]"
                />
                <div className="overflow-hidden rounded-[8px] bg-[#EDEDED] p-2 sm:p-3">
                  <Image
                    src={app02Image}
                    alt="IN THE LIGHT application 02"
                    width={3840}
                    height={2838}
                    className="h-auto w-full"
                  />
                </div>
                <div className="overflow-hidden rounded-[8px] bg-[#000000] px-4 py-3 sm:px-6 sm:py-5">
                  <Image
                    src={app02_2Image}
                    alt="IN THE LIGHT application 02-2"
                    width={1925}
                    height={975}
                    className="h-auto w-full"
                  />
                </div>
                <Image
                  src={app03Image}
                  alt="IN THE LIGHT application 03"
                  width={3404}
                  height={2082}
                  className="h-auto w-full rounded-[8px]"
                />
                <Image
                  src={packageImage}
                  alt="IN THE LIGHT package"
                  width={3840}
                  height={2160}
                  className="h-auto w-full rounded-[8px]"
                />
                <div className="overflow-hidden rounded-[8px] bg-[#0a0a0a] px-24 py-12 sm:px-32 sm:py-16">
                  <Image
                    src={invoiceImage}
                    alt="IN THE LIGHT invoice"
                    width={5230}
                    height={3509}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </CaseSection>

        </div>
      </div>
    </ProjectLayout>
  );
}
