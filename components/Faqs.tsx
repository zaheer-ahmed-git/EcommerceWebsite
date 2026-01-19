"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/faqs";

function FAQItem({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-crescent-beige py-4">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="font-semibold text-crescent-dark-brown">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 shrink-0 text-crescent-dark-brown" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-5 w-5 shrink-0 text-crescent-dark-brown" aria-hidden="true" />
          )}
        </button>
      </h3>
      <div id={panelId} hidden={!isOpen}>
        <p className="mt-3 text-crescent-dark-brown/80">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-white py-12 px-6 sm:px-8 lg:px-12" aria-labelledby={showHeading ? "faq-heading" : undefined}>
      <div className="mx-auto max-w-4xl">
        {showHeading ? (
          <h2 id="faq-heading" className="mb-10 text-center text-3xl font-extrabold text-crescent-dark-brown">
            Frequently asked questions
          </h2>
        ) : null}
        <div className="space-y-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
