import LogoIcon from "@/../public/logo-white-256x256.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import StyledButton from "./styled-button";
import Image from "next/image";
import { Button } from "./ui/button";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./ui/magnetic";

export const Header = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <header className=" py-4 border-b px-  md:px-10 border-white/15 md:border-none fixed w-full top-0 z-40 ">
      <div className="absolute inset-0 backdrop-blur-xl  -z-10 md:hidden "></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 "></div>
          <div>
            <Link
              href={"/"}
              className=" h-10 w-10 rounded-lg  justify-center items-center border-white/15 grid place-content-center"
            >
              {" "}
              <Image src={LogoIcon.src} width={40} alt="" height={40} />
            </Link>
          </div>
          <div className="md:flex hidden justify-center items-center"></div>
          <AllLinks className={"hidden md:flex"} />
          <div className=" flex justify-between items-center ">
            <Link href={"https://cal.com/unicorn-space/15min"}>
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea='global'
                range={200}
              >
                <button
                  type='button'
                  className='inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600'
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea='global'
                    range={200}
                  >
                    <span>Get Started</span>
                  </Magnetic>
                </button>
              </Magnetic>
            </Link>
            <Drawer>
              <DrawerTrigger className="px-4 py-2 md:hidden block">
                <RiMenu3Fill size={20} />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle> */}
                  <AllLinks className={"flex-col"} />
                </DrawerHeader>
                {/* <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter> */}
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

const AllLinks = ({ className }: { className?: ReactNode }) => {
  return (
    <nav
      className={cn(
        "flex gap-8 items-center justify-center text-white/70 text-sm",
        className
      )}
    >
      <Link href={"/#portfolio"} className="hover:text-white">
        Portfolio
      </Link>
      <Link href={"/#testimonials"} className="hover:text-white">
        Testimonials
      </Link>
      <Link href={"/our-tech-stack"} className="hover:text-white">
        Tech Stack
      </Link>
      <Link href={"/about-us"} className="hover:text-white">
        About Us
      </Link>
    </nav>
  );
};
