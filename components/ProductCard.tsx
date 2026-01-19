import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";

export default function ProductCard({
  product,
  headingLevel = "h2",
}: {
  product: Product;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-crescent-beige bg-white">
      <Image
        src={product.image}
        alt={product.imageAlt}
        width={800}
        height={800}
        className="h-auto w-full"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="flex flex-1 flex-col p-4">
        <Heading className="mb-2 text-lg font-semibold text-crescent-dark-brown">
          {product.name}
        </Heading>
        <p className="mb-4 text-sm text-crescent-dark-brown/80">
          {product.description}
        </p>
        <p className="mb-4 font-bold text-crescent-dark-brown">
          {formatPrice(product.priceCents)}
          <span className="ml-2 text-sm font-normal">USD</span>
        </p>
        <Link
          href={`/contact?product=${product.slug}`}
          className="mt-auto inline-flex justify-center rounded-full bg-crescent-dark-brown px-4 py-2 text-center text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
        >
          Request this product
        </Link>
      </div>
    </article>
  );
}
