export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "authentic",
    question: "Are your Himalayan salt products authentic?",
    answer:
      "We describe our pink salt as Himalayan salt sourced for this catalog. A product request by email is the way to ask where a specific batch comes from. This site does not verify a batch number in the browser.",
  },
  {
    id: "shipping",
    question: "Do you offer international shipping?",
    answer:
      "There is no online checkout yet, so there is no automatic shipping quote. If you request a product by email, we can discuss delivery, including addresses outside Pakistan.",
  },
  {
    id: "returns",
    question: "What is your return policy?",
    answer:
      "Returns are not processed by this website. If you bought after an email request, write to us within 30 days. We agree each return by email. The product should be unused and in its original pack when that is possible.",
  },
  {
    id: "tracking",
    question: "How do I track an order?",
    answer:
      "This site has no order account and no tracking page. When a requested order is handed to a carrier, we send the tracking details by email if the carrier provides them.",
  },
  {
    id: "wholesale",
    question: "Do you sell wholesale?",
    answer:
      "Write to us from the contact page and tell us the products and quantities you want. We reply by email with what we can supply.",
  },
];
