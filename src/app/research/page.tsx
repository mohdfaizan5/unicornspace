// import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Notes, teardowns, and lessons from building software out of Bangalore.",
  openGraph: {
    title: "Research",
    description:
      "Notes, teardowns, and lessons from building software out of Bangalore.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research",
    description:
      "Notes, teardowns, and lessons from building software out of Bangalore.",
  },
};

const PAGE_SIZE = 10;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  // Dummy data instead of fetching from content-collections
  // const posts = allPosts;
  const dummyPosts = [
    {
      title: "What we learned shipping UnlockPi",
      publishedAt: "2024-01-15",
      _meta: { path: "learned-shipping-unlockpi.mdx" },
    },
    {
      title: "Why we build in public",
      publishedAt: "2024-01-10",
      _meta: { path: "why-we-build-in-public.mdx" },
    },
    {
      title: "Designing a component library from scratch",
      publishedAt: "2024-01-05",
      _meta: { path: "designing-a-component-library.mdx" },
    },
    {
      title: "Notes on running Next.js in production",
      publishedAt: "2024-01-01",
      _meta: { path: "nextjs-in-production.mdx" },
    },
    {
      title: "The economics of a tiny software studio",
      publishedAt: "2023-12-28",
      _meta: { path: "economics-of-a-tiny-studio.mdx" },
    },
    {
      title: "Local-first, and why it matters to us",
      publishedAt: "2023-12-25",
      _meta: { path: "local-first-and-why-it-matters.mdx" },
    },
    {
      title: "How we prototype in a weekend",
      publishedAt: "2023-12-18",
      _meta: { path: "how-we-prototype-in-a-weekend.mdx" },
    },
    {
      title: "Building for Bharat: what changes",
      publishedAt: "2023-12-10",
      _meta: { path: "building-for-bharat.mdx" },
    },
    {
      title: "Choosing boring technology on purpose",
      publishedAt: "2023-12-02",
      _meta: { path: "choosing-boring-technology.mdx" },
    },
  ];

  const sortedPosts = [...dummyPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog" className="mx-auto max-w-2xl mt-32">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          /research{" "}
          {/* <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {sortedPosts.length} posts
          </span> */}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Notes, teardowns, and lessons from building software out of Bangalore.
        </p>
      </BlurFade>

      {/* {paginatedPosts.length > 0 ? (
        <> */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-5 mt-14">
          {paginatedPosts.map((post, id) => {
            const slug = post._meta.path.replace(/\.mdx$/, "");
            const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                <Link
                  className="flex items-start justify-between gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  border-b border-border pb-2"
                  href={`/research/sample-research-post`}
                  // href={`/research/${slug}`}
                >
                  <div className="flex gap-2 flex-1">
                    <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                      {String(indexNumber).padStart(2, "0")}.
                    </span>
                    <p className="tracking-tight text-lg font-medium">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <ChevronRight
                          className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {post.publishedAt}
                  </p>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </BlurFade>

      {/* Pagination Controls */}
      {pagination.totalPages > 1 && (
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex gap-3 flex-row items-center justify-between mt-8">
            <div className="text-sm text-muted-foreground">
              Page {pagination.page} of {pagination.totalPages}
            </div>
            <div className="flex gap-2 sm:justify-end">
              {pagination.hasPreviousPage ? (
                <Link
                  href={`/research?page=${pagination.page - 1}`}
                  className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Previous
                </Link>
              ) : (
                <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                  Previous
                </span>
              )}
              {pagination.hasNextPage ? (
                <Link
                  href={`/research?page=${pagination.page + 1}`}
                  className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Next
                </Link>
              ) : (
                <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                  Next
                </span>
              )}
            </div>
          </div>
        </BlurFade>
      )}
      {/* </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )} */}
    </section>
  );
}
