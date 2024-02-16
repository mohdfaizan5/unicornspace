import { CornerDownRight } from "lucide-react";
import React from "react";

const Button = ({text}) => {
  return (
    <button className="btn-primary flex items-center gap-1">
      {text}
      <CornerDownRight size={14} className="p" />
    </button>
  );
};

export default Button;
