"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] bg-crescent-light-beige px-4 py-24 text-center text-crescent-dark-brown">
      <h1 className="mb-4 text-4xl font-bold">This page did not load</h1>
      <p className="mb-8">Try again. If it still fails, use the contact page.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-crescent-dark-brown px-6 py-3 text-white hover:brightness-125"
      >
        Try again
      </button>
    </div>
  );
}
