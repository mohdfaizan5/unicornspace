import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mx-auto">
          Beyond Expectations.
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-2xl mx-auto">
          Our revolutionary AI SEO tools have transformed our clients.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 rounded-xl flex-none bg-[linear-gradient(to_bottom_left,rgb(240,0,60,.3),black)] max-w-xs"
              >
                <div className="text-lg tracking-tight ">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5 ">
                  <div className="relative after:content-[''] after:absolute after:inset-0  after:mix-blend-soft-light after:rounded-xl">
                    <Image
                      src={testimonial.avatarImg}
                      alt="test"
                      className="size-11 rounded-full grayscale "
                      height={11}
                      width={11}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
