'use client';

import Image from 'next/image';
import { useState } from 'react';

type Category = 'all' | 'product' | 'branding';

type Project = {
  id: number;
  title: string;
  year: number;
  category: Exclude<Category, 'all'>;
  thumbnail?: string;
  description: string;
};

const projects: Project[] = [
  { id: 1, title: 'Billow', year: 2025, category: 'product', thumbnail: '/assets/projects/billow.jpg', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { id: 2, title: 'Altra', year: 2025, category: 'product', thumbnail: '/assets/projects/altra.jpg', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { id: 3, title: 'BGZT', year: 2025, category: 'branding', thumbnail: '/assets/projects/BGZT.jpg', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { id: 4, title: 'Velot', year: 2025, category: 'branding', thumbnail: '/assets/projects/VELOT.jpg', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { id: 5, title: 'Fianchetto', year: 2025, category: 'branding', thumbnail: '/assets/projects/Fianchetto.jpg', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { id: 6, title: 'Velot', year: 2025, category: 'branding', description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
];

const categoryLabel: Record<string, string> = {
  branding: 'Branding',
  product: 'Product | UXUI',
};

export default function WorkGrid() {
  const [active, setActive] = useState<Category>('all');

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="w-full px-8 pb-32">
      {/* Filter */}
      <div className="flex items-center justify-center gap-10 mb-10">
        {(
          [
            { key: 'all', label: 'Everything' },
            { key: 'product', label: 'Product | UXUI' },
            { key: 'branding', label: 'Branding' },
          ] as { key: Category; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex items-center text-[18px] font-medium transition-colors ${
              active === key
                ? 'text-black dark:text-[#E6E6E6]'
                : 'text-[#ADADAD] dark:text-[#555] hover:text-black dark:hover:text-[#E6E6E6]'
            }`}
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <span
              className={`mr-1.5 h-[10px] w-[10px] rounded-full bg-current transition-opacity ${
                active === key ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,1.0417vw,20px)] gap-y-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-3"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <div className="relative w-full aspect-[7/10] bg-[#D9D9D9] dark:bg-[#2A2A2A] rounded-lg overflow-hidden">
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} project thumbnail`}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1024px) calc((100vw - 84px) / 2), calc((100vw - 104px) / 3)"
                  className="object-cover"
                />
              )}
              <span className="absolute top-3 left-3 bg-white dark:bg-[#2E2E2E] text-black dark:text-[#E6E6E6] text-sm font-medium px-3 py-1 rounded-full border border-black/10 dark:border-white/10">
                {categoryLabel[project.category] ?? project.category}
              </span>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[18px] text-black dark:text-[#E6E6E6]">
                {project.title}
              </span>
              <span className="font-bold text-[18px] text-black dark:text-[#E6E6E6]">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-[#666] dark:text-[#888] leading-snug">
              {project.description}
            </p>

            <button className="self-start bg-black dark:bg-[#E6E6E6] text-white dark:text-black text-sm font-semibold px-6 py-2 rounded-full hover:opacity-80 transition-opacity">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
