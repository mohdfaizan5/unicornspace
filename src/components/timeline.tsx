import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight vertical timeline used by list-style sections (e.g. hackathons).
 * `TimelineConnectItem` draws the vertical connector line behind its child
 * marker so consecutive items visually link together.
 */

export function Timeline({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul className={cn("flex flex-col gap-y-8", className)} {...props}>
      {children}
    </ul>
  );
}

export function TimelineItem({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li className={cn("relative", className)} {...props}>
      {children}
    </li>
  );
}

export function TimelineConnectItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        aria-hidden
        className="absolute left-1/2 top-10 -z-0 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-border"
      />
      {children}
    </div>
  );
}
