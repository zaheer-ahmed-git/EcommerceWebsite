import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplet, Leaf, Recycle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "How Crescent Saline describes harvesting, packaging, and community work. These are aims, not audited certificates.",
};

const practices = [
  {
    icon: Leaf,
    title: "Packaging",
    text: "We prefer paper and glass where the product allows it. A pack is not recyclable in every city.",
  },
  {
    icon: Droplet,
    title: "Water",
    text: "Solar evaporation uses sun and wind. We still use water to wash tools and packs.",
  },
  {
    icon: Users,
    title: "People",
    text: "Questions about wages and local work are answered by email, not by a public audit on this site.",
  },
  {
    icon: Recycle,
    title: "Waste",
    text: "Broken packs and off-cuts should be reused or recycled when the local service accepts them.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-crescent-light-beige">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-crescent-dark-brown">
          Sustainability
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-lg text-crescent-dark-brown">
          We want the salt catalog to stay light on waste. The notes below are
          working aims. This page is not a certificate, and it does not claim a
          year when every aim will be finished.
        </p>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Image
            src="/images/sustainable-harvesting.svg"
            alt="Illustration of salt pans beside still water"
            width={800}
            height={520}
            className="h-auto w-full rounded-lg"
          />
          <div>
            <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">
              Harvesting
            </h2>
            <p className="mb-4 text-crescent-dark-brown">
              The salt in this catalog is described as harvested with sun, wind,
              and hand work where that method fits the source. We do not publish
              a live map of each pond on this website.
            </p>
            <p className="text-crescent-dark-brown">
              If you need the source of a product before you request it, ask in
              the email. We answer from the records we have for that item.
            </p>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {practices.map((practice) => (
            <div key={practice.title} className="rounded-lg bg-white p-6">
              <practice.icon className="mb-4 text-crescent-dark-brown" size={40} aria-hidden="true" />
              <h2 className="mb-2 text-xl font-semibold text-crescent-dark-brown">
                {practice.title}
              </h2>
              <p className="text-crescent-dark-brown">{practice.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-crescent-dark-brown">
            What we are working on
          </h2>
          <div className="rounded-lg bg-white p-8">
            <ul className="list-disc space-y-4 pl-5 text-crescent-dark-brown">
              <li>Lower the fuel used to move orders, once orders exist.</li>
              <li>Choose packs that more cities can recycle or compost.</li>
              <li>Reuse wash water in the work space where the building allows it.</li>
              <li>Answer community questions in the same email thread as the order.</li>
              <li>Use renewable power where the workshop can buy it.</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">
            Ask about a product
          </h2>
          <p className="mb-8 text-crescent-dark-brown">
            If you want to know how a listed product is packed, send a short note.
          </p>
          <Link
            href="/contact?topic=sustainability"
            className="inline-block rounded-full bg-crescent-dark-brown px-8 py-3 text-lg font-semibold text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
          >
            Write to us
          </Link>
        </div>
      </div>
    </div>
  );
}
