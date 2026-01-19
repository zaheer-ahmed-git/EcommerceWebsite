import { Star } from "lucide-react";

const testimonials = [
  {
    id: "sample-1",
    name: "Sample visitor",
    location: "Example",
    text: "The salt lamp gives a warm light on a side table. This sentence is an example, not a verified review.",
    rating: 5,
  },
  {
    id: "sample-2",
    name: "Sample cook",
    location: "Example",
    text: "The sampler is a useful way to taste more than one salt. This sentence is an example, not a verified review.",
    rating: 4,
  },
  {
    id: "sample-3",
    name: "Sample reader",
    location: "Example",
    text: "The catalog is clear about asking by email before a purchase. This sentence is an example, not a verified review.",
    rating: 4,
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialSection() {
  return (
    <section className="bg-crescent-light-beige px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="samples-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="samples-heading" className="mb-4 text-center text-4xl font-extrabold text-crescent-dark-brown">
          Sample notes
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-crescent-dark-brown">
          These notes show the tone of the catalog. They are not reviews from customers, and the stars are not a score from purchases.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-lg bg-white p-8">
              <div className="mb-6 flex items-center">
                <div
                  className="mr-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-crescent-dark-brown font-semibold text-crescent-dark-brown"
                  aria-hidden="true"
                >
                  {initials(testimonial.name)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-crescent-dark-brown">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-crescent-dark-brown/70">{testimonial.location}</p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-crescent-dark-brown">{testimonial.text}</p>
              <div className="flex gap-1" aria-label={`Example rating ${testimonial.rating} out of 5`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonial.rating
                        ? "fill-current text-crescent-dark-brown"
                        : "text-crescent-beige"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
