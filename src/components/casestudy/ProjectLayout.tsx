import Header from '@/components/Header';
import Footer from '@/components/Footer';

type NavItem = { id: string; label: string };

export default function ProjectLayout({
  children,
  projectNav,
}: {
  children: React.ReactNode;
  projectNav?: NavItem[];
}) {
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-[#1E1E1E] min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
