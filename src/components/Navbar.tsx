"use client";
// import { CornerDownRight } from "lucide-react";
import React from "react";
import StyledButton from "./other/StyledButton";
import {
  ArrowDownIcon,
  ArrowTopRightIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between max-w-screen-xl px-4 py-5 mx-auto border-b border-zinc-700 bg-background  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50 text-zinc-300">
        <Link
          href={"/"}
          className="text-[1rem] tracking-tight selection:bg-red-800 leading-none group hover:select-text text-zinc-300 group flex items-center"
        >
          <Image
            src={"/logo-white-256x256.png"}
            className="mb-1"
            alt="logo"
            width={30}
            height={30}
          />
          <span className="">U</span>nicorn
          <span className="outlineText">
            <span className="ease-in ">S</span>pace
          </span>
        </Link>
        <nav className="items-center hidden gap-5 text-sm md:flex font-satori-300 text-zinc-500">
          <Link
            className="hover:scale-105 hover:underline-offset-auto hover:underline"
            href="/"
          >
            <Button className="text-zinc-300" variant={"link"}>
              {pathname === "/" && (
                <span className="size-2  mr-1 rounded-full bg-red-700 shadow-[0_0_2px_#fff,inset_0_0_2px_#FF474C,0_0_5px_#ff0000,0_0_15px_#08f,0_0_30px_#08f]"></span>
              )}
              Home
            </Button>
          </Link>
          {/* <Separator orientation="vertical" className="bg-primary"></Separator> */}
          <Link
            className="hover:scale-105 hover:underline-offset-auto hover:underline"
            href="/pricing"
          >
            <Button className="-ml-5 text-zinc-300" variant={"link"}>
              {pathname === "/pricing" && (
                <span className="size-2  mr-1 rounded-full bg-red-700 shadow-[0_0_2px_#fff,inset_0_0_2px_#FF474C,0_0_5px_#ff0000,0_0_15px_#08f,0_0_30px_#08f]"></span>
              )}
              Pricing
            </Button>
          </Link>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <HamburgerMenuIcon className="text-xl" />
            </SheetTrigger>
            <SheetContent className="text-zinc-300" side={"left"}>
              <SheetHeader>
                {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
                <SheetDescription className="flex flex-col items-start justify-between h-[80vh] my-auto pt-14">
                  <div className="flex flex-col gap-5">
                    <Link
                      className="hover:scale-105 hover:underline-offset-auto hover:underline"
                      href="/"
                    >
                      <Button className="text-zinc-300" variant={"link"}>
                        Home
                        {pathname === "/" && (
                          <span className="size-2  ml-1 rounded-full bg-red-700 shadow-[0_0_2px_#fff,inset_0_0_2px_#FF474C,0_0_5px_#ff0000,0_0_15px_#08f,0_0_30px_#08f]"></span>
                        )}
                      </Button>
                    </Link>
                    {/* <Separator orientation="vertical" className="bg-primary"></Separator> */}
                    <Link
                      className="hover:scale-105 hover:underline-offset-auto hover:underline"
                      href="/pricing"
                    >
                      <Button className="text-zinc-300" variant={"link"}>
                        Pricing
                        {pathname === "/pricing" && (
                          <span className="size-2  ml-1 rounded-full bg-red-700 shadow-[0_0_2px_#fff,inset_0_0_2px_#FF474C,0_0_5px_#ff0000,0_0_15px_#08f,0_0_30px_#08f]"></span>
                        )}
                      </Button>
                    </Link>
                  </div>
                  <StyledButton
                    className="hidden md:flex items-center gap-1 btn-primary group "
                    parentClassName=" md:flex"
                  >
                    GetStarted
                    <ArrowTopRightIcon className="group-hover:translate-x-px " />
                  </StyledButton>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
        <StyledButton
          className="hidden md:flex items-center gap-1 btn-primary group "
          parentClassName="hidden md:flex"
        >
          GetStarted{" "}
          <ArrowTopRightIcon className="group-hover:translate-x-px " />
        </StyledButton>
      </header>
      {/* <hr className="h-px max-w-screen-xl mx-auto my-2 border-0 bg-zinc-700 " /> */}
    </>
  );
};

export default Navbar;
