import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionMain from '@/components/motion/MotionMain';

type NavItem = { id: string; label: string };

export default function ProjectLayout({
  children,
  sidebar,
  belowGrid,
}: {
  children: React.ReactNode;
  projectNav?: NavItem[];
  sidebar?: React.ReactNode;
  belowGrid?: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {sidebar ? (
        <MotionMain className="min-h-screen bg-white dark:bg-[#1E1E1E]">
          <div className="grid grid-cols-[360px_1fr] gap-10 px-9">
            {sidebar}
            <section className="w-full">{children}</section>
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
