import Boards from "@/components/Boards";
import CallOut from "@/components/CallOut";
import CardSpotlight1 from "@/components/CardSpotlight1";
import CardSpotlight2 from "@/components/CardSpotlight2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectBoard from "@/components/other/ProjectBoard";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pb-10 overflow-x-hidden font-satori bg-background text-gray-50">
      <Navbar />
      <HeroSection />
      {/* <div className="py-10">
        <ProjectBoard />
        <ProjectBoard />
        <ProjectBoard />
        <ProjectBoard />
      </div> */}
      <Projects />
      {/* <Boards /> */}
      <section className="flex flex-col justify-center gap-1 md:flex-row mt-20">
        <CardSpotlight1 />
        <CardSpotlight2 />
      </section>
      <section className="my-20">
        <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-medium  tracking-tight max-[716px]:text-6xl font-bebas max-[600px]:text-5xl max-[470px]:text-4xl  text-center">
          Our Services
        </h1>
        <ol className="opacity-80 list-disc ml-20">
          <li>WebDevelopment</li>
          <li>Video Editing</li>
          <li>SEO</li>
          <li>Native WebApps</li>
        </ol>
      </section>
      {/* <Testimonials/> */}
      <CallOut />
      <Footer />
    </div>
  );
};

export default page;
