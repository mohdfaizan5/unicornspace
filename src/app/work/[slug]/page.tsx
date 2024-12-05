import StyledButton from "@/components/styled-button";
import { SvgAssests } from "@/components/svg-assets";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { Metadata, MetadataRoute } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = projects.find((project) => {
    return project.slug === slug;
  });

  return {
    title: work?.name,
    description: work?.description,
  };
}

const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const work = projects.find((project) => {
    return project.slug === slug;
  });

  if (!work) return notFound();
  return (
    <main className="flex flex-col items-center gap-4 mt-20 md:mt-28 p-4">
      <div className=" space-y-2">
        <h1 className="text-left md:text-center text-4xl font-bold ">
          {work.name}
        </h1>

        <div className="flex gap-1 flex-wrap items-center md:justify-center">
          {work.tags &&
            work.tags.length > 0 &&
            work.tags.map((tag, i) => (
              <Badge className=" text-white" key={i} variant={"outline"}>
                {tag}
              </Badge>
            ))}
        </div>
        {work.description && (
          <p className="text-muted-foreground text-left md:text-center max-w-[32rem]">
            {work.description}
          </p>
        )}
      </div>
      <Image
        src={work.thumbnail}
        alt={""}
        height={500}
        width={500}
        className="rounded-xl"
      />
      {work.content && work.content.length > 0 && (
        <div className="space-y-4 max-w-[31.5rem]">
          {work.content.map((c, i) => {
            // console.log(c)
            if (c.type == "h1")
              return (
                <h1
                  className="text-4xl font-bold "
                  key={`${c.content.slice(0, 10)}${i}`}
                >
                  {c.content}
                </h1>
              );
            else if (c.type === "image")
              return (
                <Image
                  key={`${c.src.slice(0, 10)}${i}`}
                  src={c.src}
                  alt={""}
                  height={500}
                  width={500}
                  className="rounded-xl"
                />
              );
            else
              return (
                <p className="" key={`${c.content.slice(0, 10)}${i}`}>
                  {c.content}
                </p>
              );

            return <div key={c.type}>{c.type}</div>;
          })}
        </div>
      )}
      <section className="flex items-center justify-center mt-12">
        <Link href={"https://cal.com/unicorn-space/15min"}>
          <StyledButton
            parentClassName="animate-background-shine px-0 scale-95"
            className="px-0"
          >
            Book a call
          </StyledButton>
        </Link>
        <div className="flex items-center gap-2">
          <div className="rotate-180">
            <SvgAssests.ArrowCurved className="animate-shake rotate ml-4 stroke-1" />
          </div>
          <p className="text-center font-serif text-lg text-balance">
            We get book <br />
            fast
            <span className="animate-pulse">🔥</span>
          </p>
        </div>
      </section>

      {/* 
      <p className=" text-balance max-w-[32rem]">{work.content.text}</p>
      {work.content.images.length > 0 &&
        work.content.images.map((image, i) => {
          // import img from {`${""}`}
          return (
            <Image
              className="rounded-xl"
              key={i}
              src={image}
              width={560}
              height={900}
              alt={work.name}
            />
          );
        })} */}
    </main>
  );
};

export default page;
