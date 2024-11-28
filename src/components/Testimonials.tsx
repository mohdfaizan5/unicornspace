import { SvgAssests } from "@/components/svg-assets";
import Image from "next/image";

const testimonials = [
  {
    text: "We didnt just get a landing page; we got a partner who truly cared about our brands success. Their insights made all the difference.",
    name: "Muzammil",
    title: "Senior Developer ",
    avatarImg: "https://avatars.githubusercontent.com/u/179683623?v=4",
  },
  {
    text: "“Working with this team felt effortless. They understood our goals and brought our vision to life. Our efficiency has grown steadily since then.”",
    name: "Zaid Sait",
    title: "CEO @ZedTheBaker",
    avatarImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73hVuUFS5u6LDMnT3SCUvgQpxIHRkQrRMmA&s",
  },
  {
    text: "What stood out the most was their commitment. They went beyond the brief to make sure everything worked seamlessly. We couldnt be happier.",
    name: "Tom Land",
    title: "Founder @ Refurb",
    avatarImg:
      "https://pbs.twimg.com/profile_images/1831143497748852736/pGaFNbfr_400x400.jpg",
  },
  {
    text: "They treated our business like their own. The results were seeing now prove that choosing them was the best decision we made with our Website + SEO + Ads",
    name: "Azmath Khan",
    title: "Founder @ WoodDecor",
    avatarImg:
      "https://github.com/user-attachments/assets/6162588b-8e33-45c2-aebf-4b8b2280b4a6",
  },
  {
    text: "Their ability to adapt to our needs and deliver on time was incredible. The app has been a hit with our users, and we owe it to their expertise.",
    name: "Ananth Mallya",
    title: "Founder @ QuanTechOrigin",
    avatarImg:
      "https://media.licdn.com/dms/image/v2/C5603AQEEXgxbKRiR6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662395631805?e=1738195200&v=beta&t=q5uPDUrFRCGRhbfNs5-Fj_YdXyPkfXIX5iWP3Lxjgwo",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 mt-10 md:mt-24">
      <div className="container px-0">
        <h2 className="text-5xl md:text-6xl font-medium text-center relative tracking-tighter mx-auto w-fit underline decoration-wavy decoration-primary/80 decoration-2 underline-offset-4">
          Beyond Expectations.{" "}
          <SvgAssests.Chat className="w-10 absolute right-5 top-0 md:-top-2 md:-right-14" />
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
                      className="size-11 rounded-full grayscale"
                      height={50}
                      width={50}
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
