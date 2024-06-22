import Boards from "@/components/Boards";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectBoard from "@/components/ProjectBoard";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="pb-10 overflow-x-hidden cursor-none font-satori bg-primary text-gray-50">
      <Navbar />

      <HeroSection/>
      <ProjectBoard />
      <ProjectBoard />
      <ProjectBoard />
      <ProjectBoard />
      <Boards />
    </div>
  );
};

export default page;
