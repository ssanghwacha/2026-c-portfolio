'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowUpRight, CaretDown, FigmaLogo } from '@phosphor-icons/react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type TeamMember = { initials: string; color: string };
type Tool = { name: string; src?: string; bg: string; textColor?: string; phosphorIcon?: string };
type NavItem = { id: string; label: string };

const PHOSPHOR_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string; weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' }>> = {
  FigmaLogo,
};

export default function CaseHero({
  title,
  meta,
  headline,
  description,
  role,
  team,
  timeline,
  tools,
  nav,
  prototypeUrl,
  liveDemoUrl,
  layout = 'fixed',
}: {
  title: string;
  meta?: string;
  headline?: string;
  description?: string;
  role: string | string[];
  team: TeamMember[];
  timeline: string;
  tools: Tool[];
  nav?: NavItem[];
  prototypeUrl?: string;
  liveDemoUrl?: string;
  layout?: 'fixed' | 'static';
}) {
  const [top, setTop] = useState(200);
  const [activeSection, setActiveSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

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
  const orderedTeam = team;
  const teamLayerByInitials = new Map(team.map((member, index) => [member.initials, team.length - index]));
  const currentNavItem = nav?.find(({ id }) => id === activeSection) ?? nav?.[0];
  const currentNavIndex = currentNavItem && nav ? nav.findIndex(({ id }) => id === currentNavItem.id) : -1;
  const metaPills = meta?.split('·').map((item) => item.trim()).filter(Boolean) ?? [];
  const ctaCount = Number(Boolean(prototypeUrl)) + Number(Boolean(liveDemoUrl));
  const primaryCtaClass = 'border border-primary bg-primary text-white hover:border-[#2F4FC8] hover:bg-[#2F4FC8] dark:border-[#E6E6E6] dark:bg-[#E6E6E6] dark:text-[#1E1E1E] dark:hover:border-white dark:hover:bg-white';
  const secondaryCtaClass = 'border border-[#E1E1E1] bg-white text-[#313A60] hover:border-[#D3D3D3] hover:bg-[#E9E9E9] dark:border-white/10 dark:bg-[#333] dark:text-[#E6E6E6] dark:hover:bg-[#3C3C3C]';

  return (
    <aside
      className={
        layout === 'static'
          ? 'w-full min-w-0 lg:sticky z-30 flex flex-col gap-3 overflow-y-auto'
          : 'fixed left-9 w-[calc(30vw-60px)] z-30 flex flex-col gap-3 overflow-y-auto'
      }
      style={{ top, maxHeight: `calc(100vh - ${top}px - 24px)` }}
    >
      {/* Card 1: Project info + meta */}
      <div className="flex shrink-0 flex-col gap-5 overflow-hidden rounded-[10px] bg-[#F5F5F5] p-5 dark:bg-[#2A2A2A] lg:rounded-[14px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-between gap-4">
              <p className="font-satoshi shrink-0 text-sm font-medium leading-[1.4] text-[#6F6F6F] dark:text-[#ADADAD]">
                {title}
              </p>
              {metaPills.length ? (
                <div className="flex flex-wrap items-center justify-end gap-1.5">
                  {metaPills.map((item) => (
                    <span
                      key={item}
                      className="font-satoshi rounded-[6px] bg-[#EEE] px-2 py-1 text-[10px] font-medium leading-[1.2] text-[#313A60] dark:bg-[#333] dark:text-[#D9D9D9]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            {headline ? (
                <h1 className="font-rethink text-[19px] font-medium leading-[1.3] tracking-[-0.01em] text-primary dark:text-[#E6E6E6]">
                {headline}
              </h1>
            ) : null}
            {description ? (
              <p className="font-satoshi text-sm leading-[1.4] text-[#6F6F6F] dark:text-[#ADADAD]">
                {description}
              </p>
            ) : null}
          </div>
          {(prototypeUrl || liveDemoUrl) && (
            <div className="flex flex-wrap gap-2">
              {prototypeUrl ? (
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
	                  className={`font-satoshi inline-flex h-[32px] items-center gap-1 rounded-full px-3.5 text-[13px] font-medium leading-[1.2] transition-colors duration-150 ${ctaCount === 1 ? primaryCtaClass : secondaryCtaClass}`}
                >
                  Prototype
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              ) : null}
              {liveDemoUrl ? (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-satoshi inline-flex h-[32px] items-center gap-1 rounded-full border border-primary bg-primary px-3.5 text-[13px] font-medium leading-[1.2] text-white transition-colors duration-150 hover:border-[#2F4FC8] hover:bg-[#2F4FC8] dark:border-[#E6E6E6] dark:bg-[#E6E6E6] dark:text-[#1E1E1E] dark:hover:border-white dark:hover:bg-white"
                >
                  Live Demo
                  <ArrowUpRight size={14} weight="bold" />
                </a>
              ) : null}
            </div>
          )}
        </div>

        <div className="h-px w-full bg-[#E1E1E1] dark:bg-[#3A3A3A]" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="flex flex-col gap-2">
            <p className="font-satoshi text-[10px] font-semibold uppercase tracking-[0.08em] leading-normal text-[#ADADAD] dark:text-[#777]">Role</p>
            <div>
              {roleLines.map((r, i) => (
                <p key={i} className="font-satoshi text-[13px] font-medium leading-[1.3] text-[#313A60] dark:text-[#E6E6E6]">{r}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-satoshi text-[10px] font-semibold uppercase tracking-[0.08em] leading-normal text-[#ADADAD] dark:text-[#777]">Team ({team.length})</p>
            <div className="flex w-fit items-center" aria-label={`${team.length} team members`}>
              {orderedTeam.map(({ initials }) => (
                <Avatar
                  key={initials}
                  className="-ml-2.5 size-[22px] border-[1.5px] border-[#F5F5F5] first:ml-0 dark:border-[#2A2A2A]"
                  style={{ zIndex: teamLayerByInitials.get(initials) }}
                  title={initials}
                >
                  <AvatarFallback
                    className={`font-satoshi text-[10px] font-medium leading-[1.2] ${
                      initials === 'SC'
                        ? 'bg-primary text-white dark:bg-[#E6E6E6] dark:text-[#1E1E1E]'
                        : 'bg-[#9F9F9F] text-white dark:bg-[#3A3A3A] dark:text-[#E6E6E6]'
                    }`}
                  >
                    {initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-satoshi text-[10px] font-semibold uppercase tracking-[0.08em] leading-normal text-[#ADADAD] dark:text-[#777]">Timeline</p>
            <p className="font-satoshi text-[13px] font-medium leading-[1.3] text-[#313A60] dark:text-[#E6E6E6]">{timeline}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-satoshi text-[10px] font-semibold uppercase tracking-[0.08em] leading-normal text-[#ADADAD] dark:text-[#777]">Tool</p>
            <div className="flex flex-wrap gap-2">
              {tools.map(({ name, src, bg, textColor, phosphorIcon }) => {
                const PhosphorIcon = phosphorIcon ? PHOSPHOR_ICONS[phosphorIcon] : null;
                if (PhosphorIcon) {
                  return (
                    <span key={name} className="text-[#313A60] dark:text-[#E6E6E6]" title={name}>
                      <PhosphorIcon size={20} color="currentColor" weight="regular" />
                    </span>
                  );
                }
                return (
                  <div
                    key={name}
                    className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-[5px]"
                    style={{ backgroundColor: bg }}
                    title={name}
                  >
                    {src ? (
                      <Image src={src} alt={name} width={24} height={24} className="object-contain" />
                    ) : (
                      <span className="font-satoshi text-[8px] font-bold" style={{ color: textColor ?? '#fff' }}>
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
        <div className="hidden lg:block bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[14px] p-5 shrink-0">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setIsNavOpen((value) => !value)}
              aria-expanded={isNavOpen}
              className="font-satoshi flex w-full items-center justify-between gap-4 text-left text-[13px] font-semibold leading-normal text-[#6F6F6F] dark:text-[#ADADAD]"
            >
              <span>On this Page</span>
              <CaretDown
                size={15}
                weight="bold"
                className={`shrink-0 text-[#6F6F6F] transition-transform duration-150 dark:text-[#ADADAD] ${isNavOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {currentNavItem ? (
              <a
                href={`#${currentNavItem.id}`}
                className="font-satoshi flex gap-2.5 items-start text-[14px] font-semibold leading-[1.5] text-primary transition-colors duration-150 dark:text-[#E6E6E6]"
              >
                <span className="shrink-0">{String(currentNavIndex + 1).padStart(2, '0')}</span>
                <span>{currentNavItem.label}</span>
              </a>
            ) : null}

            {isNavOpen ? (
              <div className="flex flex-col gap-2.5 border-t border-black/10 pt-3 dark:border-white/10">
                {nav.map(({ id, label }, i) => {
                  const isActive = (activeSection || nav[0].id) === id;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setIsNavOpen(false)}
                      className={`font-satoshi flex gap-2.5 items-start text-[14px] leading-[1.5] transition-colors duration-150 ${
                        isActive
                          ? 'font-semibold text-primary opacity-100 dark:text-[#E6E6E6]'
                          : 'font-medium text-black/35 hover:text-black/60 dark:text-white/30 dark:hover:text-white/65'
                      }`}
                    >
                      <span className="shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{label}</span>
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
