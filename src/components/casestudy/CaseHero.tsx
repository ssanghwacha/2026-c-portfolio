'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FigmaLogo } from '@phosphor-icons/react';

type TeamMember = { initials: string; color: string };
type Tool = { name: string; src?: string; bg: string; textColor?: string; phosphorIcon?: string };
type NavItem = { id: string; label: string };

const PHOSPHOR_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string; weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' }>> = {
  FigmaLogo,
};

export default function CaseHero({
  title,
  headline,
  description,
  role,
  team,
  timeline,
  tools,
  nav,
  prototypeUrl,
}: {
  title: string;
  headline: string;
  description: string;
  role: string | string[];
  team: TeamMember[];
  timeline: string;
  tools: Tool[];
  nav?: NavItem[];
  prototypeUrl?: string;
}) {
  const [top, setTop] = useState(200);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;
    const update = () => setTop(header.getBoundingClientRect().bottom + 12);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!nav?.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [nav]);

  const roleLines = Array.isArray(role) ? role : [role];
  const teamText = team.map((m) => m.initials).join(', ');

  return (
    <aside
      className="fixed left-9 w-[calc(30vw-60px)] z-30 flex flex-col gap-4 overflow-y-auto"
      style={{ top, maxHeight: `calc(100vh - ${top}px - 24px)` }}
    >
      {/* Card 1: Project info + CTA */}
      <div className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[8px] p-4 flex flex-col gap-5 shrink-0">
        <div className="flex flex-col gap-5">
          <p className="font-satoshi text-sm text-primary dark:text-white leading-[1.4]">
            {title}
          </p>
          <h1 className="font-satoshi text-[22px] font-medium text-primary dark:text-[#E6E6E6] leading-[1.2]">
            {headline}
          </h1>
          <p className="font-satoshi text-sm text-primary dark:text-[#ADADAD] leading-[1.4]">
            {description}
          </p>
        </div>
        {prototypeUrl && (
          <div>
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-satoshi inline-block bg-[#191919] dark:bg-[#E6E6E6] dark:text-[#1E1E1E] text-white text-xl font-medium leading-[1.2] px-7 py-3 rounded-full"
            >
              Prototype
            </a>
          </div>
        )}
      </div>

      {/* Card 2: Meta */}
      <div className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[8px] p-4 shrink-0">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-3">
            <p className="font-satoshi text-sm font-bold text-primary dark:text-[#ADADAD] leading-normal">Role</p>
            <div>
              {roleLines.map((r, i) => (
                <p key={i} className="font-satoshi text-sm text-primary dark:text-[#E6E6E6] leading-[1.5]">{r}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-satoshi text-sm font-bold text-primary dark:text-[#ADADAD] leading-normal">Team</p>
            <p className="font-satoshi text-sm text-primary dark:text-[#E6E6E6] leading-[1.5] whitespace-nowrap">
              {team.slice(0, 2).map(m => m.initials).join(' / ')}<br />
              {team.slice(2).map(m => m.initials).join(' / ')}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-satoshi text-sm font-bold text-primary dark:text-[#ADADAD] leading-normal">Timeline</p>
            <p className="font-satoshi text-sm text-primary dark:text-[#E6E6E6] leading-[1.5]">{timeline}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-satoshi text-sm font-bold text-primary dark:text-[#ADADAD] leading-normal">Tool</p>
            <div className="flex flex-wrap gap-2">
              {tools.map(({ name, src, bg, textColor, phosphorIcon }) => {
                const PhosphorIcon = phosphorIcon ? PHOSPHOR_ICONS[phosphorIcon] : null;
                if (PhosphorIcon) {
                  return (
                    <span key={name} className="text-primary dark:text-[#E6E6E6]">
                      <PhosphorIcon size={24} color="currentColor" weight="regular" />
                    </span>
                  );
                }
                return (
                  <div
                    key={name}
                    className="w-7 h-7 rounded-[6px] flex items-center justify-center overflow-hidden shrink-0"
                    style={{ backgroundColor: bg }}
                    title={name}
                  >
                    {src ? (
                      <Image src={src} alt={name} width={28} height={28} className="object-contain" />
                    ) : (
                      <span className="font-satoshi text-[9px] font-bold" style={{ color: textColor ?? '#fff' }}>
                        {name.slice(0, 2)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3: On this Page nav */}
      {nav?.length ? (
        <div className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[8px] p-4 shrink-0">
          <div className="flex flex-col gap-3">
            <p className="font-satoshi text-sm font-bold text-[#2B2B2B] dark:text-[#E6E6E6] leading-normal">
              On this Page
            </p>
            {nav.map(({ id, label }, i) => {
              const isActive = (activeSection || nav[0].id) === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`font-satoshi flex gap-3 items-start text-sm font-medium leading-[1.5] transition-colors duration-150 ${
                    isActive ? 'text-primary dark:text-white' : 'text-[#868686] dark:text-[#555]'
                  }`}
                >
                  <span className="shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
