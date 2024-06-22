import "@/styles/other.css";
import React from "react";
const StyledButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={`pushable flex items-center justify-center`}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className={`front ${className}`}>{children}</span>
    </button>
  );
};

export default StyledButton;
