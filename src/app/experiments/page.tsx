import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ExperimentsPage() {
  const dummyPosts = [
    {
      title: "UnlockPi",
      description: "Turning locked-up potential into products people can use.",
      publishedAt: "2024-01-15",
      _meta: { path: "unlockpi.mdx" },
    },
    {
      title: "RedefAI",
      description: "Poking at the edges of AI and everyday work.",
      publishedAt: "2024-01-10",
      _meta: { path: "redefai.mdx" },
    },
    {
      title: "PaisaLogr",
      description: "A calmer way to see where your money actually goes.",
      publishedAt: "2024-01-05",
      _meta: { path: "paisalogr.mdx" },
    },
    {
      title: "AppykitUI",
      description: "A starter kit for shipping apps without the boilerplate.",
      publishedAt: "2024-01-01",
      _meta: { path: "appykitui.mdx" },
    },
    {
      title: "UnicornSpaceUI",
      description: "The component library we wished already existed.",
      publishedAt: "2023-12-28",
      _meta: { path: "unicornspaceui.mdx" },
    },
    {
      title: "Devgrads",
      description: "Helping new grads break into real engineering work.",
      publishedAt: "2023-12-25",
      _meta: { path: "devgrads.mdx" },
    },
  ];
  const PAGE_SIZE = 5;
  const BLUR_FADE_DELAY = 0.04;
  return (
    <div className="container pt-32 max-w-2xl mx-auto  pb-10 overflow-x-hidden  font-satori bg-background text-foreground w-full ">

      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl  font-semibold tracking-tight mb-2">
          /experiments{" "}
          {/* <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {dummyPosts.length} posts
          </span> */}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Products and side-quests we&apos;ve built to see if they&apos;d work.
          Some grew up, some didn&apos;t — all of them taught us something.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-5 mt-8">
          {dummyPosts.map((post, id) => {
            const slug = post._meta.path.replace(/\.mdx$/, "");
            // const indexNumber = (id - 1) * PAGE_SIZE + id + 1;
            return (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                <Link
                  className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={`/blog/${slug}`}
                >
                  <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                    {String(id).padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="tracking-tight text-lg font-medium">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <ChevronRight
                          className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </BlurFade>
    </div>
  );
}
