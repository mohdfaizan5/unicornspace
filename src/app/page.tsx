import CallOut from "@/components/CallOut";
import CardSpotlight1 from "@/components/CardSpotlight1";
import CardSpotlight2 from "@/components/CardSpotlight2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Header } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { TypewriterEffectSmooth } from "@/components/typewriter";
import { CallToAction } from "@/sections/call-to-action";
import { CompaniesCarousal } from "@/sections/companies-carousal";
import Features from "@/sections/features";
import StackingProjects from "@/sections/stacking-projects";

import { Testimonials } from "@/sections/testimonials";
import Typewriter from "@/sections/typewriter";
import React from "react";
import PricingSection from "./pricing/page";

const page = () => {
  return (
    <>
      <div className=" pb-10 overflow-x-hidden font-satori bg-background text-gray-50 w-full ">
        <HeroSection />
        {/* <CompaniesCarousal /> */}
        <Projects viewAll />

        {/* <section className="flex flex-col justify-center gap-1 md:flex-row mt-20">
          <CardSpotlight1 />
          <CardSpotlight2 />
        </section> */}
        {/* <section className="my-20 flex items-center justify-center w-full">
          <div>
            <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-medium  tracking-tight max-[716px]:text-6xl font-bebas max-[600px]:text-5xl max-[470px]:text-4xl  text-center">
              Our Services
            </h1>
          </div>
          <div>
            <ol className="opacity-80 mx-auto  list-disc ml-20">
              <li>WebDevelopment</li>
              <li>Video Editing</li>
              <li>SEO</li>
              <li>Native WebApps</li>
            </ol>
          </div>
        </section> */}
        {/* <Testimonials/> */}
        <Testimonials />
        {/* <Typewriter />
        <StackingProjects /> */}
        <CallToAction />
        {/* <Features /> */}
        {/* <PricingSection /> */}
        {/* <CallOut /> */}
      </div>
    </>
  );
};

export default page;
