import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for using the Crescent Saline website. Orders are agreed by email, not by this website.",
};

export default function TermsPage() {
  return (
    <ContentPage title="Terms and conditions">
      <p>
        {company.name} publishes this website to show a salt catalog. Browsing
        the pages does not create an order.
      </p>
      <p>
        A product request is an email you send. A sale exists only after we
        reply and you accept the price, the delivery cost, and the address in
        that email thread.
      </p>
      <p>
        Prices on the site are in USD and can change before we confirm an
        email. The confirmed email is the price that applies to that request.
      </p>
      <p>
        Salt lamps, bath salts, soaps, and inhalers are home and kitchen goods.
        Nothing on this site is medical advice or a promise to treat an illness.
      </p>
      <p>
        The illustrations are drawings made for the catalog. They are not
        photographs of a specific batch.
      </p>
      <p>
        Questions about these terms go to{" "}
        <a className="underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
    </ContentPage>
  );
}
