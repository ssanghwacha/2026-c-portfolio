'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects, categoryLabel, type Category } from '@/data/projects';

export default function WorkGrid({ active: externalActive }: { active?: Category }) {
  const [internalActive, setInternalActive] = useState<Category>('all');
  const active = externalActive ?? internalActive;

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="w-full px-4 sm:px-8 pt-20 sm:pt-0 pb-20 sm:pb-32">
      {/* Filter — 외부 active 없을 때만 표시 (홈 페이지) */}
      {!externalActive && (
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10">
        {(
          [
            { key: 'all', label: 'Everything' },
            { key: 'product', label: 'Product | UXUI' },
            { key: 'branding', label: 'Branding' },
          ] as { key: Category; label: string }[]
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setInternalActive(key)}
            className={`flex items-center text-sm sm:text-base lg:text-[18px] font-medium transition-colors ${
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
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[clamp(12px,1.0417vw,20px)] gap-y-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="flex flex-col gap-3 group"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <div className="relative w-full bg-[#D9D9D9] dark:bg-[#2A2A2A] rounded-lg overflow-hidden aspect-[7/10]">
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} project thumbnail`}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) calc(100vw - 64px), (max-width: 1024px) calc((100vw - 84px) / 2), calc((100vw - 104px) / 3)"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
          </Link>
        ))}
      </div>
    </section>
  );
}
