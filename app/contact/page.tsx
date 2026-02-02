import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ask Crescent Saline about a salt product. The form opens your email app. This site does not store the message.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-crescent-light-beige text-crescent-dark-brown">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-semibold tracking-tight">Get in touch</h1>
          <p className="text-lg">
            Write to us about a product, a bulk request, or a delivery address.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Mail aria-hidden="true" size={36} />
            <h2 className="mt-4 text-2xl font-semibold">Email us</h2>
            <a href={`mailto:${company.email}`} className="mt-2 underline">
              {company.email}
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone aria-hidden="true" size={36} />
            <h2 className="mt-4 text-2xl font-semibold">Call us</h2>
            <a href={company.phoneHref} className="mt-2 underline">
              {company.phone}
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin aria-hidden="true" size={36} />
            <h2 className="mt-4 text-2xl font-semibold">Visit us</h2>
            <address className="mt-2 not-italic">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <Suspense
          fallback={
            <p className="text-center">Loading the form…</p>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
