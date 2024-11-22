import LogoIcon from "@/../public/logo-white-256x256.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Link from "next/link";
import StyledButton from "./other/StyledButton";
import Image from "next/image";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
export const Header = () => {
  return (
    <header className=" py-4 border-b  border-white/15 md:border-none sticky top-0 z-40 ">
      <div className="absolute inset-0 backdrop-blur-xl  -z-10 md:hidden "></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 "></div>
          <div>
            <div className="border h-10 w-10 rounded-lg  justify-center items-center border-white/15 grid place-content-center">
              {" "}
              <Image src={LogoIcon.src} width={40} alt="" height={40} />
            </div>
          </div>
          <div className="md:flex hidden  justify-center items-center">
            <nav className="flex gap-8 items-center justify-center text-white/70 text-sm">
              <Link href={"/"} className="hover:text-white">
                Features
              </Link>
              <Link href={"/"} className="hover:text-white">
                Developers
              </Link>
              <Link href={"/"} className="hover:text-white">
                Pricing
              </Link>
              <Link href={"/"} className="hover:text-white">
                Changelog
              </Link>
            </nav>
          </div>
          <div className=" flex gap-4 justify-center items-center ">
            <StyledButton>Join Waitlist</StyledButton>
            <DropdownMenuIcon className="size-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
