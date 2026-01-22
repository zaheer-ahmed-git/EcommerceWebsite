"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/catalog";

export default function ShopCatalog() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const visibleProducts = useMemo(() => {
    const normalized = query.toLowerCase();
    if (!normalized) {
      return products;
    }

    return products.filter((product) => {
      const haystack = `${product.name} ${product.description}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <div>
      <p className="mb-8 text-center text-crescent-dark-brown" aria-live="polite">
        {query
          ? `${visibleProducts.length} result${visibleProducts.length === 1 ? "" : "s"} for “${query}”.`
          : `${products.length} products. Prices are in USD.`}
      </p>
      {visibleProducts.length === 0 ? (
        <div className="mx-auto max-w-lg rounded-lg bg-white p-8 text-center text-crescent-dark-brown">
          <p className="mb-4">No salts match that search.</p>
          <Link
            href="/shop"
            className="font-semibold underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crescent-dark-brown"
          >
            Clear search
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
