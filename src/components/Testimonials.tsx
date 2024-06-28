import React from "react";

const testimonials: Testimonial[] = [
  {
    name: "Zaid Sait",
    role: "CEO @ ZedTheBaker",
    description: `UnicornSpace created a stunning portfolio website for me, blending
        functionality with design beautifully. Quick, communicative, and
        skilled, I highly recommend them for impactful online presences.`,
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-semibold  tracking-tight max-[716px]:text-6xl max-[600px]:text-5xl max-[470px]:text-4xl  ">
        Testimonials
      </h1>
      <h5 className="max-w-[35rem]  opacity-80 max-[470px]:text-sm">
        Don't just take our word for it. Here's what real people are saying
        about HextaStudio.
      </h5>
      <div className="flex flex-wrap">
        <EachTestimonial
          name="Zaid Sait"
          role="CEO @ ZedTheBaker"
          description={`UnicornSpace created a stunning portfolio website for me, blending
        functionality with design beautifully. Quick, communicative, and
        skilled, I highly recommend them for impactful online presences.`}
        />
      </div>
    </section>
  );
};

const EachTestimonial = ({ name, role, description }: Testimonial) => {
  return (
    <div className="flex justify-start flex-wrap gap-5 flex-col p-6  border-white border-opacity-10 border relative w-[25rem] overflow-hidden">
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <span className="text-sm opacity-80">{role}</span>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Testimonials;
