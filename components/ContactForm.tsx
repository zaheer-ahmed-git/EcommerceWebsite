"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatPrice, getProductBySlug } from "@/lib/catalog";
import { company } from "@/lib/site";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const product = getProductBySlug(searchParams.get("product") ?? "");
  const topic = searchParams.get("topic");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailAppOpened, setEmailAppOpened] = useState(false);

  useEffect(() => {
    if (product) {
      setMessage(
        `I would like to request ${product.name} (${formatPrice(product.priceCents)} USD).`
      );
      return;
    }
    if (topic === "sustainability") {
      setMessage("I would like to ask about your sustainability work.");
    }
  }, [product, topic]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(
      product ? `Product request: ${product.name}` : "Message for Crescent Saline"
    );
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setEmailAppOpened(true);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-crescent-dark-brown md:p-10">
      <form onSubmit={handleSubmit} noValidate={false}>
        <div className="mb-6">
          <label htmlFor="name" className="mb-2 block text-lg font-semibold">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-lg border border-crescent-beige px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crescent-dark-brown"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-lg font-semibold">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-crescent-beige px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crescent-dark-brown"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="mb-2 block text-lg font-semibold">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="h-40 w-full rounded-lg border border-crescent-beige px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-crescent-dark-brown"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded-lg bg-crescent-dark-brown px-8 py-3 font-bold text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
          >
            Open email app
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm">
        This page does not store your message. The button opens your email app
        with the text filled in. You still need to press send there.
        {emailAppOpened
          ? ` If nothing opened, write to ${company.email}.`
          : ""}
      </p>
    </div>
  );
}
