import Projects from "@/components/projects";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Work",
  description: "Check out our projects and work",
};

const page = () => {
  return (
    <div>
      <div className="mt-28" />
      <Projects />
    </div>
  );
};

export default page;
