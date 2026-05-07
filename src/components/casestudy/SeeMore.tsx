import Image from 'next/image';
import Link from 'next/link';

type ProjectRef = {
  slug: string;
  title: string;
  category: string;
  thumbnail?: string;
};

export default function SeeMore({ projects }: { projects: ProjectRef[] }) {
  return (
    <section className="px-7 py-[80px] border-t border-[#ADADAD]/30 dark:border-[#555]/30">
      <p
        className="text-sm text-[#ADADAD] dark:text-[#555] mb-6 font-satoshi"
      >
        See More Projects
      </p>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group block rounded-[8px] overflow-hidden bg-white dark:bg-[#2A2A2A]"
          >
            {p.thumbnail && (
              <div className="relative w-full aspect-video">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            )}
            <div className="p-4">
              <p
                className="text-[#1E1E1E] dark:text-[#E6E6E6] font-medium font-satoshi"
              >
                {p.title}
              </p>
              <p
                className="text-[#ADADAD] dark:text-[#555] text-sm font-satoshi"
              >
                {p.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
