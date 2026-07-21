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
import { BlurFade } from "@/components/ui/blur-fade";
import WorkSection from "@/components/work-section";
const BLUR_FADE_DELAY = 0.04;

const page = () => {
  return (
    <>
      {/* bg-[#EFEDEB]  */}
      <div className="container   pb-10 overflow-x-hidden  font-satori bg-background text-foreground w-full "
      // style={{ backgroundImage: `url("./assets/noise.svg")` }}
      >
        <HeroSection />
        {/* <CompaniesCarousal /> */}


        {/* <Projects viewAll /> */}
        <section className="min-h-52 px-4 my-10 max-w-3xl mx-auto flex items-center justify-around">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              We&apos;re a studio, not an agency.
            </h2>
            <p className="text-sm max-w-80  md:max-w-96 mb-2 text-muted-foreground">
              We spend most of our time building our own products. Some grow up,
              some quietly teach us something. Either way, we build in the
              open — from Bangalore, on our own terms.
            </p>
            <Link href="/research" className="mt-2 block">
              <Button variant={"secondary"} className=''>Read our notes {" ->"}</Button>
            </Link>
          </div>
          <SpinningText
            radius={5}
            fontSize={1.2}
            className='hidden md:block font-medium leading-none'
          >
            {`Bangalore • est. 2021 • UnicornSpace • `}
          </SpinningText>
        </section>
        {/* <section id="work" className="max-w-3xl mx-auto">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <WorkSection />
            </BlurFade>
          </div>
        </section> */}
        <HowWeWork />
        {/* <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection />
          </BlurFade>
        </section> */}
        {/* <OurTechStack /> */}
        {/* <section className="flex flex-col justify-center gap-1 md:flex-row mt-20">
          <CardSpotlight1 />
          <CardSpotlight2 />
        </section> */}
        {/* <Testimonials /> */}

        <CallToAction />
        {/* <OurServices className=""/> */}
        {/* <Features /> */}
        {/* <PricingSection /> */}
        {/* <CallOut /> */}
      </div>
    </>
  );
};

export default page;
