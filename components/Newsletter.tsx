"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { company } from "@/lib/site";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [emailAppOpened, setEmailAppOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Newsletter request");
    const body = encodeURIComponent(
      `Please add this address to the Crescent Saline newsletter:\n${email}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setEmailAppOpened(true);
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="flex w-full items-center justify-center bg-crescent-dark-brown py-6 text-white md:py-16 lg:py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 id="newsletter-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stay in touch with Crescent Saline
          </h2>
          <p className="max-w-[600px] md:text-xl">
            Send us your email address if you want news about products. This form does not subscribe you by itself.
          </p>
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              className="flex-1 bg-white text-gray-800"
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              type="submit"
              className="bg-white text-crescent-dark-brown hover:bg-crescent-beige"
            >
              Open email app
            </Button>
          </form>
          <p className="max-w-md text-xs text-white/90">
            The button opens your email app so you can send the request. Read the{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
            {emailAppOpened ? ` If nothing opened, write to ${company.email}.` : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
