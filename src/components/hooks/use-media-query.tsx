"use client";

import * as React from "react";

// Tailwind-ish breakpoints (px). Kept in sync with the default theme.
const BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Resolve a shorthand token ("max-md", "min-lg", "md") or a raw media query
 * string ("(max-width: 900px)") into a usable media query.
 */
function resolveQuery(query: string): string {
  if (query.includes("(")) return query;

  const maxMatch = query.match(/^max-(.+)$/);
  if (maxMatch && BREAKPOINTS[maxMatch[1]] !== undefined) {
    return `(max-width: ${BREAKPOINTS[maxMatch[1]] - 1}px)`;
  }

  const minMatch = query.match(/^min-(.+)$/);
  if (minMatch && BREAKPOINTS[minMatch[1]] !== undefined) {
    return `(min-width: ${BREAKPOINTS[minMatch[1]]}px)`;
  }

  if (BREAKPOINTS[query] !== undefined) {
    return `(min-width: ${BREAKPOINTS[query]}px)`;
  }

  return query;
}

export function useMediaQuery(query: string): boolean {
  const mediaQuery = resolveQuery(query);
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(mediaQuery);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return matches;
}
