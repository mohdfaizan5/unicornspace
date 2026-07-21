import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DATA = {
  url: "https://example.com",
  name: "Unicorn Space",
};

type Post = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  mdx: string;
  _meta: { path: string };
};

const allPosts: Post[] = [
  {
    title: "Sample Research Post",
    publishedAt: "2025-01-01",
    summary: "Placeholder research content for the only available post.",
    mdx: `# Sample Research Post

## What to test (a simple rule)
* Unit tests: small, fast checks for logic and pure functions.
* Integration tests: components + data + user flows (most value per test).
* E2E tests: a few happy-path checks across the whole app.

## High-signal testing habits
* Prefer user-facing assertions (what the user sees/does).
* Use accessible queries first (roles, labels).
* Mock at the boundary (network) instead of mocking implementation details.

## Things to avoid
* Testing internal component state when behavior is what matters.
* Sprinkling test IDs everywhere as a first choice.
* Overusing snapshots that fail for harmless UI changes.

## Wrap-up
Start small: one integration test for your most important flow, then add unit tests for tricky logic. Over time, your tests become living documentation that helps you move faster.

This is placeholder content for research.

- One item
- Another item`,
    _meta: { path: "sample-research-post.mdx" },
  },
];

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/research/${slug}`,
      ...(image && {
        images: [
          {
            url: `${DATA.url}${image}`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [`${DATA.url}${image}`],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const getSlug = (post: (typeof sortedPosts)[0]) =>
    post._meta.path.replace(/\.mdx$/, "");

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/research/${slug}/opengraph-image`,
    url: `${DATA.url}/research/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  const content = post.mdx.trim().split(/\n\n+/).map((block, index) => {
    if (block.startsWith("# ")) {
      return (
        <h2 key={index} className="text-2xl font-semibold text-foreground">
          {block.replace(/^#\s+/, "")}
        </h2>
      );
    }

    if (block.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6">
          {block.split("\n").map((item, itemIndex) => (
            <li key={itemIndex}>{item.replace(/^-\s+/, "")}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="text-muted-foreground">
        {block}
      </p>
    );
  });

  return (
    <section id="blog" className="mx-auto max-w-2xl mt-32">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <div className="flex justify-start gap-4 items-center">
        <Link href="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group" aria-label="Back to research">
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to research
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        {content}
      </article>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              href={`/research/${getSlug(previousPost)}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/research/${getSlug(nextPost)}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
