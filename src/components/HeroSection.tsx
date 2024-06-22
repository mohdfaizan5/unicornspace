import React from "react";

const HeroSection = () => {
  return (
    <main className="h-[80vh] flex flex-col justify-center items-center pb-10">
      <h1 className="text-[4rem] md:text-[7rem] pt-10 tracking-tight selection:bg-red-800 leading-none group hover:select-text ">
        <span className="">U</span>nicorn
        <span className="outlineText">
          <span className="ease-in ">S</span>pace
        </span>
      </h1>
      <p className="text-zinc-500 font-extralight">We start from where you stop and we excel </p>
      {/* <h1 style={{fontSize: "clamp(3rem, -1.5rem + 8vw, 10rem)"}} className=' font-satori-700'>UnicornSpace</h1> */}
    </main>
  );
};

export default HeroSection;
