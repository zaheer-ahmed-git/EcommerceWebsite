import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Crescent Saline and the salt products listed in the catalog.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-crescent-light-beige">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-crescent-dark-brown">
          About Crescent Saline
        </h1>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Image
            src="/images/salt-harvesting.svg"
            alt="Illustration of salt flats"
            width={800}
            height={520}
            className="h-auto w-full rounded-lg"
          />
          <div>
            <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">Our story</h2>
            <p className="mb-4 text-crescent-dark-brown">
              Crescent Saline started from an interest in cooking salt and salt
              objects for the home. The catalog focuses on pink salt, lamps,
              grinders, soaps, and bath salts.
            </p>
            <p className="mb-4 text-crescent-dark-brown">
              This website shows the products and their prices. It does not take
              payment. A request goes out by email, and we reply with availability.
            </p>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="md:order-1">
            <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">
              What we check
            </h2>
            <p className="mb-4 text-crescent-dark-brown">
              We look at the salt before it is listed: the grain, the color, and
              the pack. Questions about a batch are answered by email, not by an
              automatic page on this site.
            </p>
            <p className="mb-4 text-crescent-dark-brown">
              We do not describe these products as medical treatment. A salt lamp
              is a light. An inhaler in the catalog is a home object, not a device
              that treats breathing.
            </p>
          </div>
          <Image
            src="/images/salt-quality-check.svg"
            alt="Illustration of salt crystals in a tray"
            width={800}
            height={520}
            className="h-auto w-full rounded-lg md:order-2"
          />
        </div>

        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">
            What you can browse
          </h2>
          <ul className="mx-auto max-w-md list-disc space-y-2 text-left text-crescent-dark-brown">
            <li>Cooking salts</li>
            <li>Himalayan salt lamps</li>
            <li>Salt soaps</li>
            <li>Salt inhalers, sold as home objects</li>
            <li>Salt blocks for cooking and serving</li>
            <li>Bath salts</li>
          </ul>
        </div>

        <div className="rounded-lg bg-white p-8">
          <h2 className="mb-6 text-center text-3xl font-bold text-crescent-dark-brown">
            Our aim
          </h2>
          <p className="text-center text-lg text-crescent-dark-brown">
            To show clear salt products for cooking and the home, and to answer
            product requests by email until checkout exists.
          </p>
        </div>
      </div>
    </div>
  );
}
