import CallOut from "@/components/callout";
import CardSpotlight1 from "@/components/card-spotlight1";
import CardSpotlight2 from "@/components/card-spotlight2";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Header } from "@/components/navbar";
import Projects from "@/components/projects";
import { CallToAction } from "@/components/call-to-action";
import CompaniesCarousal from "@/components/companies-carousal";
import Features from "@/components/features";

import { Testimonials } from "@/components/testimonials";

import React from "react";
import { SpinningText } from "@/components/ui/spinning-text";
import HowWeWork from "@/components/how-we-work";
import OurTechStack from "@/components/our-tech-stack";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import OurServices from "@/components/our-services";

const page = () => {
  return (
    <>
      <div className="container pb-10 overflow-x-hidden  font-satori bg-background text-gray-50 w-full "
      // style={{ backgroundImage: `url("./assets/noise.svg")` }}
      >
        <HeroSection />
        {/* <CompaniesCarousal /> */}


        <Projects viewAll />
        <section className="min-h-52 px-4 my-10 max-w-6xl mx-auto flex items-center justify-around">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              Looking to start a creative project?
              {/* Have an idea? */}
            </h2>
            <p className="text-sm max-w-80  md:max-w-96 mb-2 text-muted-foreground">{"We'd"} love to help you out. Get in touch with
              us and {"let's"} start something great together.
            </p>
            <Link href="https://cal.com/unicorn-space/15min" className="mt-2 block">
              <Button variant={"secondary"} className=''>Let us talk. {" ->"}</Button>
            </Link>
          </div>
          <SpinningText
            radius={5}
            fontSize={1.2}
            className='hidden md:block font-medium leading-none'
          >
            {`Get started • today • UnicornSpace   • `}
          </SpinningText>
        </section>
        <HowWeWork />
        <OurTechStack />
        {/* <section className="flex flex-col justify-center gap-1 md:flex-row mt-20">
          <CardSpotlight1 />
          <CardSpotlight2 />
        </section> */}
        <Testimonials />

        <CallToAction />
        <OurServices className=""/>
        {/* <Features /> */}
        {/* <PricingSection /> */}
        {/* <CallOut /> */}
      </div>
    </>
  );
};

export default page;
