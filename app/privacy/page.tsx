import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Crescent Saline handles a message you send by email. This website does not create a customer account.",
};

export default function PrivacyPage() {
  return (
    <ContentPage title="Privacy policy">
      <p>
        This website does not ask you to create an account. It does not run a
        payment form. The contact form and the newsletter box do not save your
        text on a server. They open your email app.
      </p>
      <p>
        If you send an email, we receive whatever you put in that email: your
        address, your name, and your message. We use it to answer you and, if
        you asked for news, to write back about products.
      </p>
      <p>
        We do not sell that email. We keep it in the mailbox that received it.
        You can ask us to delete a past message by writing to{" "}
        <a className="underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        .
      </p>
      <p>
        The pages load from the host that serves this site. That host may keep
        standard connection logs, such as an IP address and the page requested.
        We do not add an analytics script in this project.
      </p>
      <p>
        The phone number and street address in the footer are published so you
        can reach the business. Please use them for product questions.
      </p>
    </ContentPage>
  );
}
