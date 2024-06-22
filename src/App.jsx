import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Boards from "./components/Boards";
import ProjectBoard from "./components/ProjectBoard";
import useMousePosition from "./components/MousePosition";

const App = () => {
  // document.getElementById("nocursor").style.cursor = "none";
  const mousePosition = useMousePosition();
  console.log(mousePosition);
  const styles = {
    transform: "translate(-50%, -50%)",
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  };

  return (
    <div className="pb-10 overflow-x-hidden cursor-none font-satori bg-primary text-gray-50">
      <Navbar />
      <div style={styles} className="ease-linear bg-red-600 rounded-full shadow-2xl shadow-red-600 delay-[10ms] size-4"></div>
      <Hero />
      <ProjectBoard />
      <ProjectBoard />
      <ProjectBoard />
      <ProjectBoard />
      <Boards />
    </div>
  );
};

export default App;
