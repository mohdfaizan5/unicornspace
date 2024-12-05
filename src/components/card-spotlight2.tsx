"use client";
import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import StyledButton from "./styled-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const CardSpotlight2 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        `relative flex flex-col items-end justify-between h-96 w-[90vw] mx-auto md:mx-0 md:w-[40vw] md:h-72 px-8 py-10 overflow-hidden border border-gray-800 shadow-2xl rounded-xl bg-gradient-to-r from-black to-gray-950  `
      )}
    >
      <div
        className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h5 className="text-sm font-satori-300 group-hover:translate-x-1">
            Up next:
          </h5>
          {/* <MoveRight className="group-hover:-translate-x-1" size={12} /> */}
        </div>
        <h2 className="text-2xl font-satori-500 text-balance max-w-[70%] leading-8 group-hover:translate-x-1 ">
          Lets get to it, together and lets grow high
        </h2>
      </div>
      <div className="group-hover:translate-x-1">
        {/* <h6 className="text-xs font-satori-300">Start a deal </h6> */}
        <Link href={"/pricing"}>
          <StyledButton className="flex items-center gap-1">
            Discuss <ArrowRightIcon />
          </StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default CardSpotlight2;
