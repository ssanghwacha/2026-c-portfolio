export type Category = 'all' | 'product' | 'branding';

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: Exclude<Category, 'all'>;
  thumbnail?: string;
  description: string;
};

export const projects: Project[] = [
  { slug: 'billow',      title: 'Billow',      year: 2025, category: 'product',   thumbnail: '/assets/projects/billow/thumbnail.jpg',      description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { slug: 'altra',       title: 'Altra',       year: 2025, category: 'product',   thumbnail: '/assets/projects/altra/thumbnail.jpg',       description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { slug: 'bgzt',        title: 'BGZT',        year: 2025, category: 'branding',  thumbnail: '/assets/projects/bgzt/thumbnail.jpg',        description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { slug: 'velot',       title: 'Velot',       year: 2025, category: 'branding',  thumbnail: '/assets/projects/velot/thumbnail.jpg',       description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { slug: 'fianchetto',  title: 'Fianchetto',  year: 2025, category: 'branding',  thumbnail: '/assets/projects/fianchetto/thumbnail.jpg',  description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
  { slug: 'revisit',     title: 'Revisit',     year: 2025, category: 'branding',                                                 description: 'Shaping urban car sharing into a clear and cohesive digital brand.' },
];

export const categoryLabel: Record<string, string> = {
  branding: 'Branding',
  product: 'Product | UXUI',
};
