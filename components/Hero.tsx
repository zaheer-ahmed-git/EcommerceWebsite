"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero-premium.svg",
    imageAlt: "Illustration of bowls of cooking salt",
    title: "Discover premium salts",
    subtitle: "A catalog for cooking and the home",
  },
  {
    image: "/images/hero-lamps.svg",
    imageAlt: "Illustration of three salt lamps",
    title: "Natural salt lamps",
    subtitle: "Warm light for a side table",
  },
  {
    image: "/images/hero-granulated.svg",
    imageAlt: "Illustration of piles of granulated salt",
    title: "Granulated salt collection",
    subtitle: "Request a product by email",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function showNext() {
    setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
  }

  function showPrevious() {
    setCurrentSlide(
      (previous) => (previous - 1 + heroSlides.length) % heroSlides.length
    );
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
      }
      if (event.key === "ArrowLeft") {
        setCurrentSlide(
          (previous) => (previous - 1 + heroSlides.length) % heroSlides.length
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-[70vh] overflow-hidden" aria-roledescription="carousel" aria-label="Featured salts">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-crescent-dark-brown/60">
          <div className="px-6 text-center text-white" aria-live="polite">
            <h1 className="mb-3 text-4xl font-bold md:text-6xl">{slide.title}</h1>
            <p className="mb-6 text-lg md:text-2xl">{slide.subtitle}</p>
            <Link
              href="/shop"
              className="inline-block rounded-full bg-white px-6 py-2 text-lg font-semibold text-crescent-dark-brown hover:bg-crescent-light-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore our collection
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-crescent-dark-brown hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <ChevronLeft size={28} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-crescent-dark-brown hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <ChevronRight size={28} aria-hidden="true" />
      </button>
    </section>
  );
}
