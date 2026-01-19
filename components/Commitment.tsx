import Image from "next/image";
import Link from "next/link";

export default function CommitmentSection() {
  return (
    <section className="bg-crescent-beige py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-1/2">
            <Image
              src="/images/salt-harvesting.svg"
              alt="Illustration of salt flats"
              width={800}
              height={520}
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-6 text-3xl font-bold text-crescent-dark-brown">
              How we talk about the salt
            </h2>
            <p className="mb-4 text-crescent-dark-brown">
              Crescent Saline lists cooking salts, lamps, soaps, and bath salts.
              This website does not take payment and does not track a parcel.
            </p>
            <p className="mb-6 text-crescent-dark-brown">
              If you want a product, send a request. We reply by email with
              availability and the delivery cost for your address.
            </p>
            <Link
              href="/about"
              className="inline-block rounded-full bg-crescent-dark-brown px-6 py-3 text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
