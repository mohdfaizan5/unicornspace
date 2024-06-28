import React from "react";
import StyledButton from "./other/StyledButton";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const CallOut = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="px-8 py-10 overflow-hidden border border-gray-800 shadow-2xl rounded-xl bg-gradient-to-r from-black to-gray-950 flex flex-col gap-2 items-start md:w-[900px]">
        <h1 className="text-5xl font-bebas">Ready to work together?</h1>
        <p>
          Book a call and get started on your project today.
          <br /> No BS. Straight to point!.
        </p>
        <StyledButton className="flex gap-2 items-center">
          Book a call <ArrowTopRightIcon />
        </StyledButton>
      </div>
    </section>
  );
};

export default CallOut;
