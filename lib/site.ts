export const company = {
  name: "Crescent Saline",
  email: "zaheer.ahmad.contact@gmail.com",
  phone: "+92 (0) 336 786 00 90",
  phoneHref: "tel:+923367860090",
  addressLines: [
    "H-1, Main Mujahid Town, Sangjani",
    "near Sangjani Toll Plaza, GT-Road",
    "Islamabad, 44000, Pakistan",
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/zaheer.ahmadabbasi.77",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/zaheer_abbasi99/",
    },
    {
      name: "X",
      href: "https://x.com/DataSAZ",
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Our Salt" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/shipping", label: "Shipping & Returns" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;
