"use client";

import acmeLogo from "@/../public/assets/logo-acme.png";
import apexLogo from "@/../public/assets/logo-apex.png";
import celestialLogo from "@/../public/assets/logo-celestial.png";
import echoLogo from "@/../public/assets/logo-echo.png";
import quantechLogo from "@/../public/assets/logo-quantech-origin.png";
import zedthebaker from "@/../public/assets/logo-zed-the-baker.png";
import wooddecor from "@/../public/assets/logo-wood-decor.png";
import Image from "next/image";

export const CompaniesCarousal = () => {
  const logos = [
    { src: quantechLogo, alt: "quantechLogo Logo" },
    { src: apexLogo, alt: "Apex Logo" },
    { src: echoLogo, alt: "Echo Logo" },
    { src: celestialLogo, alt: "Celestial Logo" },
    { src: zedthebaker, alt: "zedthebaker Logo" },
    { src: wooddecor, alt: "wooddecor Logo" },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex-1 md:flex-none hidden">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]">
            <div className="flex animate-scroll gap-18 md:gap-36 lg:px-18">
              {logos.concat(logos).map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
