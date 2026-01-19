import { Award, Droplet, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Chosen for the kitchen",
    description: "Salts packed for cooking, finishing, and the table.",
  },
  {
    icon: Leaf,
    title: "No added flavors",
    description: "The catalog lists salt without added flavorings.",
  },
  {
    icon: Droplet,
    title: "Mineral salt",
    description: "Pink and coarse salts kept in their natural form.",
  },
  {
    icon: Award,
    title: "Made by hand",
    description: "Lamps and blocks shaped for home use.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16" aria-labelledby="why-choose-heading">
      <div className="container mx-auto px-4">
        <h2
          id="why-choose-heading"
          className="mb-12 text-center text-3xl font-bold tracking-tight text-crescent-dark-brown sm:text-4xl"
        >
          Why choose Crescent Saline?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <feature.icon className="shrink-0 text-crescent-dark-brown" size={36} aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-crescent-dark-brown">
                  {feature.title}
                </h3>
                <p className="text-crescent-dark-brown/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
