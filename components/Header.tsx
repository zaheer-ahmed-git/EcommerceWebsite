"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { navLinks } from "@/lib/site";

function isCurrent(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  return (
    <header>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-crescent-dark-brown"
      >
        Skip to content
      </a>
      <div className="bg-crescent-dark-brown py-2 text-center text-sm text-white">
        Online checkout is not open yet. Request a product and we reply by email.
      </div>
      <nav aria-label="Main" className="border-b border-crescent-beige bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Crescent Saline"
                width={150}
                height={50}
                priority
                className="h-12 w-auto"
                style={{ height: "3rem", width: "auto" }}
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const current = isCurrent(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-crescent-dark-brown ${
                      current
                        ? "font-semibold text-crescent-dark-brown"
                        : "text-crescent-dark-brown/80 hover:text-crescent-dark-brown"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <form action="/shop" method="get" role="search" className="relative hidden md:block">
                <label htmlFor="site-search" className="sr-only">
                  Search salts
                </label>
                <input
                  id="site-search"
                  name="q"
                  type="search"
                  placeholder="Search salts..."
                  className="rounded-full border border-crescent-beige py-2 pl-10 pr-4 text-crescent-dark-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-crescent-dark-brown"
                />
                <Search
                  className="pointer-events-none absolute left-3 top-2.5 text-crescent-dark-brown"
                  size={18}
                  aria-hidden="true"
                />
              </form>

              <button
                type="button"
                className="text-crescent-dark-brown md:hidden"
                aria-expanded={isSearchOpen}
                aria-controls="mobile-search"
                onClick={() => setIsSearchOpen((open) => !open)}
              >
                <span className="sr-only">
                  {isSearchOpen ? "Close search" : "Open search"}
                </span>
                <Search size={24} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="text-crescent-dark-brown md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isSearchOpen ? (
        <form
          id="mobile-search"
          action="/shop"
          method="get"
          role="search"
          className="border-b border-crescent-beige bg-white px-4 py-3 md:hidden"
        >
          <label htmlFor="mobile-site-search" className="sr-only">
            Search salts
          </label>
          <input
            id="mobile-site-search"
            name="q"
            type="search"
            placeholder="Search salts..."
            className="w-full rounded-full border border-crescent-beige px-4 py-2 text-crescent-dark-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-crescent-dark-brown"
          />
        </form>
      ) : null}

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-b border-crescent-beige bg-white px-4 py-2 md:hidden">
          {navLinks.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className="block py-2 text-crescent-dark-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
