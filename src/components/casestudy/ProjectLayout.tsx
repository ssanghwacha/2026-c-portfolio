import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionMain from '@/components/motion/MotionMain';

type NavItem = { id: string; label: string };

export default function ProjectLayout({
  children,
  sidebar,
  belowGrid,
  heroSlot,
}: {
  children: React.ReactNode;
  projectNav?: NavItem[];
  sidebar?: React.ReactNode;
  belowGrid?: React.ReactNode;
  heroSlot?: React.ReactNode;
}) {
  return (
    <>
      <Header stableNav hideOnScroll />
      {sidebar ? (
        <MotionMain className="min-h-screen bg-white dark:bg-[#1E1E1E]">
          {/* Mobile: hero full-bleed, above info card */}
          {heroSlot && (
            <div className="w-full min-w-0 lg:hidden pt-[190px] pb-4 px-4">
              {heroSlot}
            </div>
          )}

          {/* Desktop: right hero fills the top; left starts at Overview */}
          {heroSlot ? (
            <div className="hidden lg:block">
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[90vh] w-screen overflow-hidden -mt-[1px]">
                <div className="h-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-center [&_img]:rounded-none [&_video]:h-full [&_video]:w-full [&_video]:object-cover [&_video]:object-center [&_video]:rounded-none">
                  {heroSlot}
                </div>
              </div>
            </div>
          ) : null}

          <div className="w-full min-w-0 px-4 lg:px-9">

            <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-[360px_1fr] gap-4 lg:gap-10">
              <div data-page-panel className="w-full min-w-0">
                {sidebar}
              </div>
              <section data-page-panel className="w-full min-w-0">
                {children}
              </section>
            </div>
          </div>
          {belowGrid}
        </MotionMain>
      ) : (
        <MotionMain className="min-h-screen bg-white dark:bg-[#1E1E1E]">{children}</MotionMain>
      )}
      <Footer />
    </>
  );
}
