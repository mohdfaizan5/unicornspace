import LogoIcon from "@/../public/logo-white-256x256.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import StyledButton from "./other/StyledButton";
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

export const Header = () => {
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
              <Button className="" variant={"secondary"}>
                Book a Call
              </Button>
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
      <Link href={"/pricing"} className="hover:text-white">
        Pricing
      </Link>
      <Link href={"/socials"} className="hover:text-white">
        Socials
      </Link>
    </nav>
  );
};
