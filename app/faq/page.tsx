import type { Metadata } from "next";
import FAQSection from "@/components/Faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Crescent Saline requests, shipping, and returns. Checkout is not open on this website.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-center text-4xl font-bold text-crescent-dark-brown">
          Questions
        </h1>
      </div>
      <FAQSection showHeading={false} />
    </div>
  );
}
