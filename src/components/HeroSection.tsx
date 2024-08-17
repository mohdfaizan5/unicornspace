import React from "react";
import StyledButton from "./other/StyledButton";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="h-[90vh] flex flex-col gap-3 justify-center items-start px-5 md:items-center pb-10 relative">
      <div className="absolute mt-[75px]  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <h1 className="text-[4rem] md:text-[5rem] align-middle pt-28 tracking-tight selection:bg-red-800 leading-none group hover:select-text z-10 md:text-center font-bebas  ">
        We craft webapps <br className="hidden" /> & brands
      </h1>
      <p className="font-medium md:mt-2 md:text-center md:max-w-[550px] text-zinc-500 ">
        UnicornSpace is a leading agency based in Bangalore. We help startups &
        Business owners to grow their business online.
      </p>
      <Link href={"/pricing"}>
        <StyledButton
          className="flex justify-start items-center  gap-1 btn-primary group  "
          parentClassName="mt-5"
        >
          GetStarted{" "}
          <ArrowTopRightIcon className="group-hover:translate-x-px " />
        </StyledButton>
      </Link>
      <Image
        src={"/binary_pngs_white/Binary_black_003.png"}
        alt=""
        width={300}
        height={300}
        className="hidden md:block absolute right-10 animate-background-shine"
      />
      <Image
        src={"/binary_pngs_white/Binary_black_012.png"}
        alt=""
        width={300}
        height={300}
        className="animate-pulse md:animate-none absolute md:left-20 -right-20 md:bottom-16 -bottom-10 opacity-60"
      />
      {/* <h1 className="text-[4rem] md:text-[7rem] pt-10 tracking-tight selection:bg-red-800 leading-none group hover:select-text z-10">
        <span className="">U</span>nicorn
        <span className="outlineText">
          <span className="ease-in ">S</span>pace
        </span>
      </h1> */}
      {/* <p className="font-medium md:mt-2 text-zinc-500">
        We start from where you stop and we excel{" "}
      </p> */}
      {/* <h1 style={{fontSize: "clamp(3rem, -1.5rem + 8vw, 10rem)"}} className=' font-satori-700'>UnicornSpace</h1> */}
    </main>
  );
};

export default HeroSection;
