import "@/styles/other.css";
import React from "react";
const StyledButton = ({
  children,
  className,
  parentClassName,
}: {
  children: React.ReactNode;
  className?: string;
  parentClassName?: string;
}) => {
  return (
    <button
      className={`pushable flex items-center justify-center ${parentClassName}`}
    >
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className={`front ${className}`}>{children}</span>
    </button>
  );
};

export default StyledButton;
