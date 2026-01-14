export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceCents: number;
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "salt-lamp",
    slug: "himalayan-salt-lamp",
    name: "Himalayan Salt Lamp",
    description: "A carved salt lamp with a warm glow for a side table.",
    priceCents: 2999,
    image: "/images/salt-lamp.svg",
    imageAlt: "Illustration of a Himalayan salt lamp",
    featured: true,
  },
  {
    id: "pink-salt",
    slug: "pink-himalayan-salt",
    name: "Pink Himalayan Salt",
    description: "Coarse pink salt for cooking and finishing a dish.",
    priceCents: 1299,
    image: "/images/pink-salt.svg",
    imageAlt: "Illustration of a bowl of pink salt",
    featured: true,
  },
  {
    id: "grinder-set",
    slug: "salt-grinder-set",
    name: "Salt Grinder Set",
    description: "A pair of grinders filled with coarse cooking salt.",
    priceCents: 2499,
    image: "/images/grinder-set.svg",
    imageAlt: "Illustration of a salt grinder set",
    featured: true,
  },
  {
    id: "salt-sampler",
    slug: "gourmet-salt-sampler",
    name: "Gourmet Salt Sampler",
    description: "Small tins of cooking salts for tasting side by side.",
    priceCents: 3499,
    image: "/images/salt-sampler.svg",
    imageAlt: "Illustration of a gourmet salt sampler",
    featured: true,
  },
  {
    id: "salt-soap",
    slug: "natural-salt-soap",
    name: "Natural Salt Soap",
    description: "A simple salt soap bar for everyday washing.",
    priceCents: 899,
    image: "/images/salt-soap.svg",
    imageAlt: "Illustration of a salt soap bar",
    featured: false,
  },
  {
    id: "salt-inhaler",
    slug: "salt-inhaler",
    name: "Salt Inhaler",
    description:
      "A small ceramic inhaler packed with salt crystals. Sold as a home object, not as a medical device.",
    priceCents: 1999,
    image: "/images/salt-inhaler.svg",
    imageAlt: "Illustration of a ceramic salt inhaler",
    featured: false,
  },
  {
    id: "cooking-block",
    slug: "salt-cooking-block",
    name: "Salt Cooking Block",
    description: "A salt block for searing, serving, or chilling food.",
    priceCents: 3999,
    image: "/images/cooking-block.svg",
    imageAlt: "Illustration of a salt cooking block",
    featured: false,
  },
  {
    id: "bath-salt-set",
    slug: "bath-salt-set",
    name: "Bath Salt Set",
    description: "Jars of bath salts for a home soak.",
    priceCents: 2299,
    image: "/images/bath-salt-set.svg",
    imageAlt: "Illustration of a bath salt set",
    featured: false,
  },
];

export function formatPrice(priceCents: number): string {
  return `$${(priceCents / 100).toFixed(2)}`;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}
