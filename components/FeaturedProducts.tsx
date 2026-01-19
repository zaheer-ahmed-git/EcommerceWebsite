import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/catalog";

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="bg-crescent-light-beige py-16" aria-labelledby="featured-heading">
      <div className="container mx-auto px-4">
        <h2
          id="featured-heading"
          className="mb-4 text-center text-3xl font-bold text-crescent-dark-brown"
        >
          Our premium salt selection
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-crescent-dark-brown">
          The same prices appear here and in the shop. Checkout on this website is not open yet.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} headingLevel="h3" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-crescent-dark-brown px-6 py-3 text-lg font-bold text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
          >
            View all products
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
