import Image from "next/image";
import feature1 from "@/../public/assets/Collab-Dark.png";
import feature2 from "@/../public/assets/Conversion-Darks.png";
import feature3 from "@/../public/assets/OOTB - Dark.png";

export default function Features() {
  const features = [
    {
      title: "Beautiful out of the box",
      image: feature1,
      description:
        "Start with beautifully designed components right out of the box.",
    },
    {
      title: "Built for collaboration",
      image: feature2,
      description: "Work together seamlessly with your team in real-time.",
    },
    {
      title: "Designed for conversion",
      image: feature3,
      description: "Optimize your workflow and improve your conversion rates.",
    },
  ];

  return (
    <section className="py-24  text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Built for modern teams
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Crafted with customizability and collaboration in mind.
            <br />
            Designed to impress.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-[#1a1a1b] hover:bg-[#27272A] p-3 backdrop-blur"
            >
              <div className="aspect-square relative mb-6 rounded-lg bg-[#1a1a1b] overflow-hidden hover:bg-[#27272A] transition-transform duration-500 ease-out transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#27272A] opacity-70 pointer-events-none rounded-lg"></div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-out transform hover:scale-110 rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bebas text-center font-medium mb-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
