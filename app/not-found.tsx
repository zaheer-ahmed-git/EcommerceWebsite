import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-crescent-light-beige px-4 py-24 text-center text-crescent-dark-brown">
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <p className="mb-8">That address is not part of this catalog.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-crescent-dark-brown px-6 py-3 text-white hover:brightness-125"
        >
          Back to home
        </Link>
        <Link href="/shop" className="rounded-full border border-crescent-dark-brown px-6 py-3">
          Browse salts
        </Link>
      </div>
    </div>
  );
}
