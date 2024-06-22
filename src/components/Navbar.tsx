// import { CornerDownRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between max-w-screen-xl px-4 py-5 mx-auto border-b-2 border-zinc-700 bg-primary ">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <nav className="items-center hidden gap-5 text-sm md:flex font-satori-300">
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">Home</a>
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">Work</a>
          <a href="#" className="pr-4 border-r-2 hover:scale-105 hover:underline-offset-auto hover:underline">Culture</a>
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">News</a>
        </nav>
        <button className="flex items-center gap-1 btn-primary group">
          getStarted
          {/* <CornerDownRight size={14} className="group-hover:translate-x-px" /> */}
        </button>
      </header>
      {/* <hr className="h-px max-w-screen-xl mx-auto my-2 border-0 bg-zinc-700 " /> */}
    </>
  );
};

export default Navbar;
