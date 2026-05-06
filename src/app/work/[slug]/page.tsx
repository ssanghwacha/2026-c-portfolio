import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="pt-[120px] pb-[150px] px-9">
        <p className="text-sm text-[#ADADAD] dark:text-[#555]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
          {project.title} — {project.year}
        </p>
      </main>
      <Footer />
    </>
  );
}
