import Boards from "@/components/Boards";
import CardSpotlight1 from "@/components/CardSpotlight1";
import CardSpotlight2 from "@/components/CardSpotlight2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectBoard from "@/components/ProjectBoard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pb-10 overflow-x-hidden font-satori bg-background text-gray-50">
      <Navbar />
      <HeroSection />
      <div className="py-10">
        <ProjectBoard />
        <ProjectBoard />
        <ProjectBoard />
        <ProjectBoard />
      </div>
      {/* <Boards /> */}
      <section className="flex flex-col justify-center gap-1 md:flex-row">
        <CardSpotlight1 />
        <CardSpotlight2 />
      </section>
      <Footer />
    </div>
  );
};

export default page;
