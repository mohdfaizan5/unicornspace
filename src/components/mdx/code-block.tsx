"use client";

import * as React from "react";
import { codeToHtml } from "shiki/bundle/web";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  className?: string;
  /** Language hint, e.g. "tsx". Falls back to plaintext. */
  language?: string;
}

/**
 * Renders a syntax-highlighted code block using Shiki. Highlighting runs on the
 * client and swaps in once ready, so the raw code is shown immediately as a
 * graceful fallback (and if highlighting fails).
 */
export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const code = typeof children === "string" ? children.trimEnd() : "";
  const [html, setHtml] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    codeToHtml(code, {
      lang: language || "text",
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    })
      .then((html) => {
        if (!cancelled) setHtml(html);
      })
      .catch((error) => {
        console.error("Failed to highlight code block:", error);
        if (!cancelled) setHtml(null);
      });

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  if (html) {
    return (
      <div
        className={cn(
          "my-4 overflow-x-auto rounded-lg border border-border bg-code p-4 text-sm [&_pre]:bg-transparent [&_pre]:p-0",
          className,
        )}
        // Shiki returns sanitized, self-generated markup.
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <pre
      className={cn(
        "my-4 overflow-x-auto rounded-lg border border-border bg-code p-4 text-sm",
        className,
      )}
    >
      <code>{code}</code>
    </pre>
  );
}

export default CodeBlock;
