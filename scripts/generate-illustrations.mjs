import fs from "fs";
import path from "path";

const root = path.resolve("public/images");

function write(relativePath, svg) {
  const file = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, svg.trim() + "\n");
}

function scene({ width, height, shapes, caption }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${caption}">
  <title>${caption}</title>
  <rect width="${width}" height="${height}" fill="#EADBCC"/>
  <rect x="0" y="${height * 0.72}" width="${width}" height="${height * 0.28}" fill="#D4B595"/>
  ${shapes}
</svg>`;
}

const products = [
  {
    file: "salt-lamp.svg",
    caption: "Illustration of a Himalayan salt lamp",
    shapes: `
      <polygon points="400,150 490,390 520,620 280,620 310,390" fill="#C89B67"/>
      <polygon points="400,180 455,390 470,560 330,560 345,390" fill="#E7C8A4"/>
      <rect x="360" y="620" width="80" height="36" rx="6" fill="#763A22"/>
      <circle cx="400" cy="430" r="28" fill="#F4E3D0" opacity="0.85"/>
    `,
  },
  {
    file: "pink-salt.svg",
    caption: "Illustration of a bowl of pink salt",
    shapes: `
      <ellipse cx="400" cy="470" rx="190" ry="70" fill="#763A22"/>
      <ellipse cx="400" cy="440" rx="170" ry="58" fill="#C89B67"/>
      <ellipse cx="360" cy="430" rx="18" ry="12" fill="#F3D3C0"/>
      <ellipse cx="410" cy="418" rx="22" ry="14" fill="#E7B8A4"/>
      <ellipse cx="450" cy="436" rx="16" ry="10" fill="#F7E6DC"/>
    `,
  },
  {
    file: "grinder-set.svg",
    caption: "Illustration of a salt grinder set",
    shapes: `
      <rect x="250" y="180" width="90" height="390" rx="40" fill="#763A22"/>
      <rect x="270" y="230" width="50" height="250" rx="16" fill="#EADBCC"/>
      <rect x="460" y="220" width="90" height="350" rx="40" fill="#C89B67"/>
      <rect x="480" y="270" width="50" height="210" rx="16" fill="#FFF8F2"/>
      <rect x="268" y="560" width="54" height="18" fill="#4A2416"/>
      <rect x="478" y="560" width="54" height="18" fill="#4A2416"/>
    `,
  },
  {
    file: "salt-sampler.svg",
    caption: "Illustration of a gourmet salt sampler",
    shapes: `
      <rect x="180" y="300" width="140" height="180" rx="12" fill="#763A22"/>
      <rect x="330" y="250" width="140" height="230" rx="12" fill="#C89B67"/>
      <rect x="480" y="320" width="140" height="160" rx="12" fill="#A97445"/>
      <rect x="200" y="320" width="100" height="70" fill="#F3D3C0"/>
      <rect x="350" y="270" width="100" height="80" fill="#FFF8F2"/>
      <rect x="500" y="340" width="100" height="60" fill="#EADBCC"/>
    `,
  },
  {
    file: "salt-soap.svg",
    caption: "Illustration of a salt soap bar",
    shapes: `
      <rect x="230" y="280" width="340" height="200" rx="36" fill="#C89B67"/>
      <rect x="260" y="310" width="280" height="140" rx="24" fill="#F3E1D0"/>
      <circle cx="340" cy="380" r="8" fill="#763A22"/>
      <circle cx="390" cy="360" r="6" fill="#763A22"/>
      <circle cx="430" cy="400" r="7" fill="#763A22"/>
    `,
  },
  {
    file: "salt-inhaler.svg",
    caption: "Illustration of a ceramic salt inhaler",
    shapes: `
      <rect x="330" y="150" width="140" height="70" rx="20" fill="#763A22"/>
      <rect x="300" y="210" width="200" height="360" rx="80" fill="#C89B67"/>
      <rect x="345" y="280" width="110" height="220" rx="40" fill="#F7EFE6"/>
      <circle cx="400" cy="185" r="16" fill="#EADBCC"/>
    `,
  },
  {
    file: "cooking-block.svg",
    caption: "Illustration of a salt cooking block",
    shapes: `
      <polygon points="180,520 620,520 560,300 240,300" fill="#C89B67"/>
      <polygon points="240,300 560,300 520,230 280,230" fill="#E7C8A4"/>
      <polygon points="300,250 360,250 340,210 280,210" fill="#763A22"/>
    `,
  },
  {
    file: "bath-salt-set.svg",
    caption: "Illustration of a bath salt set",
    shapes: `
      <rect x="210" y="240" width="120" height="300" rx="16" fill="#763A22"/>
      <rect x="340" y="180" width="120" height="360" rx="16" fill="#C89B67"/>
      <rect x="470" y="270" width="120" height="270" rx="16" fill="#A97445"/>
      <rect x="230" y="270" width="80" height="120" fill="#F7E6DC"/>
      <rect x="360" y="210" width="80" height="140" fill="#FFF8F2"/>
      <rect x="490" y="300" width="80" height="110" fill="#EADBCC"/>
    `,
  },
];

for (const product of products) {
  write(
    product.file,
    scene({
      width: 800,
      height: 800,
      shapes: product.shapes,
      caption: product.caption,
    })
  );
}

const wide = [
  {
    file: "hero-premium.svg",
    caption: "Illustration of bowls of cooking salt",
    shapes: `
      <circle cx="260" cy="340" r="150" fill="#C89B67"/>
      <circle cx="600" cy="300" r="120" fill="#763A22"/>
      <circle cx="920" cy="360" r="170" fill="#D4B595"/>
      <circle cx="260" cy="340" r="70" fill="#F7E6DC"/>
      <circle cx="600" cy="300" r="48" fill="#EADBCC"/>
      <circle cx="920" cy="360" r="80" fill="#FFF8F2"/>
    `,
  },
  {
    file: "hero-lamps.svg",
    caption: "Illustration of three salt lamps",
    shapes: `
      <polygon points="280,160 360,360 390,520 170,520 200,360" fill="#C89B67"/>
      <polygon points="600,120 700,340 740,520 460,520 500,340" fill="#A97445"/>
      <polygon points="920,200 990,370 1010,520 820,520 850,370" fill="#763A22"/>
    `,
  },
  {
    file: "hero-granulated.svg",
    caption: "Illustration of piles of granulated salt",
    shapes: `
      <polygon points="180,520 420,520 300,220" fill="#F3D3C0"/>
      <polygon points="460,520 760,520 610,180" fill="#C89B67"/>
      <polygon points="780,520 1080,520 930,250" fill="#763A22"/>
    `,
  },
  {
    file: "salt-harvesting.svg",
    caption: "Illustration of salt flats",
    shapes: `
      <rect x="80" y="180" width="640" height="80" fill="#F7EFE6"/>
      <rect x="80" y="280" width="640" height="80" fill="#E7C8A4"/>
      <rect x="80" y="380" width="640" height="80" fill="#F7EFE6"/>
      <rect x="80" y="480" width="640" height="70" fill="#C89B67"/>
    `,
  },
  {
    file: "salt-quality-check.svg",
    caption: "Illustration of salt crystals in a tray",
    shapes: `
      <rect x="140" y="220" width="520" height="320" rx="20" fill="#763A22"/>
      <rect x="180" y="260" width="440" height="240" fill="#F7EFE6"/>
      <polygon points="280,360 320,300 360,360" fill="#C89B67"/>
      <polygon points="400,400 450,310 500,400" fill="#A97445"/>
      <polygon points="500,340 530,290 560,340" fill="#763A22"/>
    `,
  },
  {
    file: "sustainable-harvesting.svg",
    caption: "Illustration of salt pans beside still water",
    shapes: `
      <rect x="70" y="200" width="300" height="300" fill="#7EA1A8"/>
      <rect x="400" y="200" width="320" height="70" fill="#F7EFE6"/>
      <rect x="400" y="280" width="320" height="70" fill="#E7C8A4"/>
      <rect x="400" y="360" width="320" height="70" fill="#F7EFE6"/>
      <rect x="400" y="440" width="320" height="60" fill="#C89B67"/>
    `,
  },
];

for (const item of wide) {
  write(
    item.file,
    scene({
      width: item.file.startsWith("hero") ? 1200 : 800,
      height: item.file.startsWith("hero") ? 700 : 520,
      shapes: item.shapes,
      caption: item.caption,
    })
  );
}
