import React from "react";
import StyledButton from "./StyledButton";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const CallOut = () => {
  return (
    <div >
      <h1>Ready to work together?</h1>
      <p>Book a call and get started on your project today.<br/> No BS. Straight to point!.</p>
      <StyledButton className="flex gap-2 items-center">Book a call <ArrowTopRightIcon/></StyledButton>
    </div>
  );
};

export default CallOut;
