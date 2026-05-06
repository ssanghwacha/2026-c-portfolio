import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkGrid from '@/components/WorkGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
