import { SvgAssests } from "@/components/svg-assets";
import Image from "next/image";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: "https://media.licdn.com/dms/image/v2/D5603AQG3EAetjOVddQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702555833620?e=1738195200&v=beta&t=0fnedAMSQy5NlkdSk_QRTtm4Ff_FzKZ2aI8xZ_pzVUU",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Thomas Land",
    title: "Director @ Quantum",
    avatarImg: "https://media.licdn.com/dms/image/v2/D5603AQHz30r9LyJ9gw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694761423535?e=1738195200&v=beta&t=y6FS6uyOYo0UBBl8BLTswpk9GFTAAipDg1_YhN6eib4",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Muzammil",
    title: "Senior Developer ",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Ananth Mallya",
    title: "Founder @ QuanTechOrigin",
    avatarImg: "https://media.licdn.com/dms/image/v2/C5603AQEEXgxbKRiR6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662395631805?e=1738195200&v=beta&t=q5uPDUrFRCGRhbfNs5-Fj_YdXyPkfXIX5iWP3Lxjgwo",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 mt-10 md:mt-24">
      <div className="container px-0">
        <h2 className="text-5xl md:text-6xl font-medium text-center relative tracking-tighter mx-auto w-fit underline decoration-wavy decoration-primary/80 decoration-2 underline-offset-4">
          Beyond Expectations. <SvgAssests.Chat className="absolute right-5 top-0 md:-top-2 md:-right-14"/>
        </h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-2xl mx-auto">
          Our revolutionary products and services have transformed our clients.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 rounded-xl flex-none bg-[linear-gradient(to_bottom_left,hsl(209,99%,48%,10%),black)] max-w-xs animate-scroll"
              >
                <div className="text-lg tracking-tight ">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5 ">
                  <div className="relative after:content-[''] after:absolute after:rounded-xl">
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
