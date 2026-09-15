import type { StaticImageData } from 'next/image';

export type Category = 'all' | 'product' | 'branding';

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: Exclude<Category, 'all'>;
  thumbnail?: string | StaticImageData;
  thumbnailVideo?: string;
  description: string;
};

export const projects: Project[] = [
  { slug: 'grocery-nav',  title: 'Grocery Nav',  year: 2026, category: 'product',   thumbnailVideo: '/assets/projects/grocery-nav/thumbnail.mp4', description: 'An independent Android grocery navigation app, designed, built, and tested in a real grocery store.' },
  { slug: 'billow',        title: 'Billow',        year: 2025, category: 'product',   thumbnail: '/assets/projects/billow/thumbnail.jpg',        description: 'A chat-based SaaS dashboard for team subscriptions, built on a scalable UI system.' },
  { slug: 'in-the-light',  title: 'In the light',  year: 2023, category: 'branding',  thumbnail: '/assets/projects/in-the-light/inthelight_main.png', description: 'Branding for a service that turns hobby discovery into a low-stakes experience.' },
  { slug: 'altra',         title: 'Altra',         year: 2024, category: 'product',   thumbnail: '/assets/projects/altra/thumbnail.jpg',         description: 'A mobile system that helps hikers understand risk and make clearer decisions on the trail.' },
  { slug: 'bgzt',          title: 'BGZT',          year: 2022, category: 'branding',  thumbnail: '/assets/projects/bgzt/thumbnail.jpg',          description: `A brand identity designed around BGZT's delivery experience.` },
  { slug: 'velot',         title: 'Velot',         year: 2025, category: 'branding',  thumbnail: '/assets/projects/velot/thumbnail.jpg',         description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
];

export const categoryLabel: Record<string, string> = {
  branding: 'Branding',
  product: 'Product | UXUI',
};
