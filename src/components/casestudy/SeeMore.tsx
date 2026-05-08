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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,1.0417vw,20px)] gap-y-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group flex flex-col gap-3"
          >
            <div className="relative w-full aspect-[7/10] bg-[#D9D9D9] dark:bg-[#2A2A2A] rounded-lg overflow-hidden">
              {p.thumbnail && (
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] font-bold text-black dark:text-[#E6E6E6] font-satoshi">
                {p.title}
              </p>
              <p className="text-sm text-[#666] dark:text-[#888] font-satoshi">
                {p.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
