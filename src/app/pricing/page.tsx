import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing",
  description: "Check out our pricing plans",
};


import StyledButton from "@/components/styled-button";
import Link from "next/link";
const PricingSection = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const currentData = new Date();
  const nextMonthData = new Date(
    currentData.setMonth(currentData.getMonth() + 1)
  ).toLocaleString("default", { month: "short" });
  const nextMonthYear = new Date(
    currentData.setMonth(currentData.getMonth() + 1)
  ).getFullYear();

  // console.log(searchParams);
  return (
    <div className="">
      <section className="relative flex flex-col items-center py-10 mt-24">
        <h1 className="text-6xl font-bold font-bebas">Pricing</h1>
        <p className="mt-3 font-light text-md opacity-70 ">
          {/* {searchParams && searchParams.country == "in"? "₹7999":"$100"} 
          off for the first 3 customers  (7 left) */}
          We are closing slots for {nextMonthData},{nextMonthYear} (only 3 left)
          for the current offer. <span className="font-bold">Grab it now!</span>
        </p>
        <div className="flex flex-col justify-center  gap-10 my-10 md:flex-row">
          <div
            className={`flex  flex-col justify-between gap-5 bg-background px-10 py-10 border border-zinc-700 rounded-2xl  bg-gradient-to-r from-black to-gray-950 md:w-80`}
          >
            <div className="py-6">
              <h4 className="text-xl font-semibold">Basic Plan</h4>
              <h2 className="mt-2 ">
                <span className="mr-2 line-through opacity-80">
                  {searchParams && searchParams.country == "in"
                    ? "₹69,999"
                    : "$699"}
                </span>
                <span className="mr-1 text-5xl font-bold font-bebas">
                  {searchParams && searchParams.country == "in"
                    ? "₹59,977"
                    : "$599"}
                </span>
                <span className="text-sm font-light ">only</span>
              </h2>
            </div>
            <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
              <CustomList hightLightText={""}>Single page</CustomList>
              <CustomList>Responsive design</CustomList>
              <CustomList>3 months of Free support</CustomList>
              <CustomList hightLightText={""} check={false}>
                Authentication
              </CustomList>
              <CustomList hightLightText={""} check={false}>
                Payment integration
              </CustomList>
            </ul>
            <div className="flex flex-col mx-auto">
              <Link href={"https://rzp.io/l/XDtMnw7Oj"}>
                <StyledButton>Purchase</StyledButton>
              </Link>
              {/* <p className="mt-2 text-sm text-center opacity-70">
                Pay once. Build unlimited projects!
              </p> */}
            </div>
          </div>
          <div
            className={`w-96 flex flex-col justify-between px-6 gap-5  py-10 border-[1px] border-zinc-700 rounded-2xl  mx-auto border-ring relative  bg-background  bg-gradient-to-r from-black to-gray-950`}
          >
            {/* <Badge className="absolute -top-3 right-[40%] rounded shadow-2xl shadow-primary z-10">
              Popular
            </Badge> */}
            <span className="inline-flex h-8 animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300 absolute -top-3 right-[40%]">
              Popular
            </span>
            <CardHeader>
              <CardDescription className="text-xl font-semibold">
                Premium Plan
              </CardDescription>
              <CardTitle className="mt-2">
                <span className="mr-2 line-through opacity-80">
                  {searchParams && searchParams.country == "in"
                    ? "₹95,999"
                    : "$1199"}
                </span>
                <span className="mr-1 text-5xl font-bold font-bebas">
                  {searchParams && searchParams.country == "in"
                    ? "₹88,999"
                    : "$1049"}
                </span>
                {/* <span className="mr-2 line-through opacity-80"></span>
                <span className="mr-1 font-bebas text-5xl font-bold">
                  
                </span> */}
                <span className="text-sm font-light">only</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
                <CustomList hightLightText={""}>Up to 20 pages</CustomList>
                <CustomList>Responsive design</CustomList>
                <CustomList>6 months of Free support</CustomList>
                <CustomList hightLightText={""}>Authentication</CustomList>
                <CustomList hightLightText={""}>Payment integration</CustomList>
              </ul>
            </CardContent>
            <div className="flex flex-col mx-auto">
              <Link href={"https://rzp.io/l/EmhRpdi2uB"}>
                <StyledButton className="w-full">
                  ⚡ Grab this offer now!
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`flex  flex-col justify-between gap-5 bg-background px-10 py-10 border border-zinc-700 rounded-2xl  bg-gradient-to-r from-black to-gray-950  w-96 md:w-[740px]`}
        >
          <div className="py-6">
            <h4 className="text-4xl leading-3  font-bold font-bebas">
              Custom requirement
            </h4>
            <h2 className="mt-2 opacity-80">
              We can build exactly what you want! how you want! When you want!
            </h2>
          </div>
          <ul className="flex md:gap-5 gap-2 flex-wrap">
            <CustomList>Custom design</CustomList>
            <CustomList>Specific Layouts</CustomList>
            <CustomList>Startup idea!</CustomList>
          </ul>
          <div className="flex flex-col">
            <Link href={"https://rzp.io/l/EmhRpdi2uB"}>
              <StyledButton className="w-full">
                ⚡ Book a call now!{" "}
              </StyledButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const CustomList = ({
  children,
  hightLightText,
  check = true,
}: {
  children: React.ReactNode;
  hightLightText?: string;
  check?: boolean;
}) => {
  if (check) {
    return (
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-primary dark:text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>

        <span>
          {children}{" "}
          {hightLightText && (
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          )}
        </span>
      </li>
    );
  } else {
    return (
      <li className="flex items-center space-x-3 rtl:space-x-reverse -translate-x-[2px] opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <span className="-translate-x-1 ">
          {children}{" "}
          {hightLightText && (
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          )}
        </span>
      </li>
    );
  }
};

export default PricingSection;
