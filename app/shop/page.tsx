import type { Metadata } from "next";
import { Suspense } from "react";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Salt products with one price list, in USD. Checkout is not open on this website. Request a product by email.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-crescent-light-beige">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-4 text-center text-4xl font-bold text-crescent-dark-brown">
          Our salt collection
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-center text-crescent-dark-brown">
          Every price on this page is the catalog price in USD. There is no cart
          and no card payment here. Choose “Request this product” and send the email.
        </p>
        <Suspense fallback={<p className="text-center text-crescent-dark-brown">Loading products…</p>}>
          <ShopCatalog />
        </Suspense>
      </div>
    </div>
  );
}
