import starsBg from "@/../public/assets/stars.png";
import gridLines from "@/../public/assets/grid-lines.png";
import StyledButton from "@/components/other/StyledButton";
import Link from "next/link";
export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container px-0">
        <div
          className=" py-24 rounded-xl relative "
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(240,0,60,0.0)] rounded-xl bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              backgroundBlendMode: "exclusion",
            }}
          ></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mx-auto shadow-md">
              Ready to work together?
            </h2>
            <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 max-w-2xl mx-auto">
              Book a call and get started on your project today. No BS. Straight
              to point!.
            </p>
            <div className="flex items-center justify-center mt-12">
              <Link href={"https://cal.com/unicorn-space/15min"}>
              <StyledButton>Book a call.</StyledButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
