const links = [
  { label: 'EMAIL', href: 'mailto:sangwhacha0@gmail.com' },
  { label: 'RESUME', href: '#' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'BEHANCE', href: '#' },
];

function BicycleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
      <path d="M54.46,164.71,82.33,126.5a48,48,0,1,1-12.92-9.44L41.54,155.29a8,8,0,1,0,12.92,9.42ZM208,112a47.81,47.81,0,0,0-16.93,3.09L214.91,156A8,8,0,1,1,201.09,164l-23.83-40.86A48,48,0,1,0,208,112ZM165.93,72H192a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H152a8,8,0,0,0-6.91,12l11.65,20H99.26L82.91,60A8,8,0,0,0,76,56H48a8,8,0,0,0,0,16H71.41L85.12,95.51,69.41,117.06a47.87,47.87,0,0,1,12.92,9.44l11.59-15.9L125.09,164A8,8,0,1,0,138.91,156l-30.32-52h57.48l11.19,19.17a48.11,48.11,0,0,1,13.81-8.08Z" />
    </svg>
  );
}

function CookieIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
      <path d="M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
      <path d="M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z" />
    </svg>
  );
}

function ArrowElbowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
      <path d="M208.49,88.49a12,12,0,0,1-17,0L164,61v67A108.12,108.12,0,0,1,56,236a12,12,0,0,1,0-24,84.09,84.09,0,0,0,84-84V61L112.49,88.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48A12,12,0,0,1,208.49,88.49Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full px-[28px] flex flex-col gap-[12px]" style={{ paddingBottom: '8px' }}>
      {/* Full-width logo bar */}
      <div className="w-full bg-primary dark:bg-[#E6E6E6] flex items-center justify-between px-[2px] h-[21px]">
        <span className="font-rethink text-white dark:text-[#1E1E1E] font-medium text-2xl leading-none">C</span>
        <span className="font-rethink text-white dark:text-[#1E1E1E] font-medium text-2xl leading-none">SANGWHA</span>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between px-[2px] h-[60px] text-primary dark:text-[#E6E6E6]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
        <p className="flex items-center gap-2 text-sm font-medium leading-none">
          <span>© 2026 · BUILT WITH</span>
          <BicycleIcon />
          <CookieIcon />
          <CoffeeIcon />
        </p>

        <nav className="flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-1 text-sm font-medium leading-none hover:opacity-70 transition-opacity"
            >
              {label}
              <ArrowElbowIcon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
