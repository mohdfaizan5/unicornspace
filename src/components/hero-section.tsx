import React from "react";
import StyledButton from "./styled-button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { CompaniesCarousal } from "@/components/companies-carousal";
import { SvgAssests } from "./svg-assets";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <main className="h-[90vh] flex flex-col gap-4 justify-center items-start px-5 md:items-center pb-10 mt-20 sm:mt-10 md:mt-24 relative">
      <div className="absolute mt-[75px]  bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <h1 className="text-[2.8rem]  align-middle pt-28  selection:bg-primary/40 leading-none group hover:select-text z-10 md:text-center md:text-[55px] font-medium capitalize tracking-tighter max-w-[52rem] ">
        Turn your{" "}
        <span className="relative inline-block font-serif md:mr-2 overflow-visible">
          ideas
          <SvgAssests.ThreeLines className="absolute -top-4  -right-4 stroke-white  text-white fill-red-400" />
        </span>{" "}
        into <span className="underline">successful</span> online businesses
        {/* We craft webapps <br className="hidden" /> & brands */}
      </h1>
      <p className=" text-left opacity-70 text-lg mb-10 max-w-2xl md:text-center">
        UnicornSpace is a leading agency based in Bangalore. We help startups &
        Business owners to grow their business online.
      </p>
      <Link href={"/pricing"}>
        <StyledButton
          className="flex justify-start items-center bg-blue-700 gap-1 btn-primary group  "
          parentClassName="mt-0"
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

      <CompaniesCarousal />
    </main>
  );
};

export default HeroSection;
