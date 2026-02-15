import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping and returns",
  description:
    "Crescent Saline does not calculate shipping on this website. Delivery and returns are agreed by email.",
};

export default function ShippingPage() {
  return (
    <ContentPage title="Shipping and returns">
      <p>
        This website does not take payment, so it cannot show a live shipping
        price or print a label.
      </p>
      <p>
        Catalog prices are in USD. They do not include delivery, duty, or tax.
        When you request a product, we reply with the product total and the
        delivery cost for the address you send.
      </p>
      <p>
        We can discuss addresses in Pakistan and in other countries. We confirm
        the country before we agree to send anything.
      </p>
      <p>
        There is no tracking page. If a carrier gives us a tracking code, we
        forward it by email.
      </p>
      <p>
        Returns are agreed by email within 30 days of the day you receive the
        goods. The item should be unused and in its original pack when that is
        possible. Write to{" "}
        <a className="underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
    </ContentPage>
  );
}
