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
      <Header stableNav />
      {sidebar ? (
        <MotionMain className="min-h-screen bg-white dark:bg-[#1E1E1E]">
          {/* Mobile: hero full-bleed, above info card */}
          {heroSlot && (
            <div className="w-full min-w-0 lg:hidden pt-[190px] pb-4 px-4">
              {heroSlot}
            </div>
          )}

          <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-[360px_1fr] gap-4 px-4 lg:gap-10 lg:px-9">
            <div data-page-panel className="w-full min-w-0">{sidebar}</div>
            <section data-page-panel className="w-full min-w-0">
              {/* Desktop: hero inside content column */}
              {heroSlot && <div className="hidden lg:block">{heroSlot}</div>}
              {children}
            </section>
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
