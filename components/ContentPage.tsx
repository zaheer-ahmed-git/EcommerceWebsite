import type { ReactNode } from "react";

export default function ContentPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-crescent-light-beige">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-crescent-dark-brown">
          {title}
        </h1>
        <div className="space-y-4 rounded-lg bg-white p-8 text-crescent-dark-brown">
          {children}
        </div>
      </div>
    </div>
  );
}
