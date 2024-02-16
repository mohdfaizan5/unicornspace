import { CornerDownRight } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex max-w-screen-xl justify-between items-center py-5 mx-auto px-4 border-b-2 border-zinc-700 fixed right-0 top-0 left-0 bg-primary ">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />
        <nav className="hidden  md:flex gap-5 items-center text-sm font-satori-300">
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">Home</a>
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">Work</a>
          <a href="#" className="border-r-2 pr-4 hover:scale-105 hover:underline-offset-auto hover:underline">Culture</a>
          <a className="hover:scale-105 hover:underline-offset-auto hover:underline" href="#">News</a>
        </nav>
        <button className="btn-primary flex items-center gap-1 group">
          getStarted
          <CornerDownRight size={14} className="group-hover:translate-x-px" />
        </button>
      </header>
      {/* <hr className="h-px my-2 max-w-screen-xl mx-auto bg-zinc-700 border-0 " /> */}
    </>
  );
};

export default Navbar;
