import type { ComponentPropsWithoutRef, ReactElement } from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import { cn } from "@/lib/utils";

type CodeElementProps = {
  className?: string;
  children?: string;
};

/**
 * Component map for rendering MDX content (e.g. research sub-pages).
 * Pass to your MDX renderer's `components` prop.
 */
export const mdxComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "mt-8 mb-3 text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className={cn(
        "mt-6 mb-2 text-xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn("my-4 leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  ),
  a: ({ href = "", className, ...props }: ComponentPropsWithoutRef<"a">) => (
    <Link
      href={href}
      className={cn(
        "font-medium text-foreground underline underline-offset-4 hover:opacity-80",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={cn("my-4 list-disc pl-6 text-muted-foreground", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className={cn("my-4 list-decimal pl-6 text-muted-foreground", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("my-1", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "my-4 border-l-2 border-border pl-4 italic text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
        className,
      )}
      {...props}
    />
  ),
  // MDX renders fenced blocks as <pre><code class="language-x">…</code></pre>.
  // Unwrap the inner <code> and hand it to the Shiki-powered CodeBlock.
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => {
    const codeEl = children as ReactElement<CodeElementProps> | undefined;
    const codeProps = codeEl?.props ?? {};
    const language = (codeProps.className ?? "").replace(/language-/, "");
    const code = typeof codeProps.children === "string" ? codeProps.children : "";
    return <CodeBlock language={language || undefined}>{code}</CodeBlock>;
  },
  img: ({ src = "", alt = "" }: ComponentPropsWithoutRef<"img">) => (
    <MediaContainer src={typeof src === "string" ? src : ""} alt={alt} className="my-6" />
  ),
  MediaContainer,
};

export default mdxComponents;
