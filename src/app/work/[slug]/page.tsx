import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  // console.log(params.slug);
  const work = projects.find((project) => {
    // console.log(project.slug, params.slug);
    return project.slug === params.slug;
  });
  if (!work) return notFound();
  return (
    <main className="flex flex-col items-center gap-4 mt-20 md:mt-28 p-4">
      <div className=" space-y-2">

        <h1 className="text-left md:text-center text-4xl font-bold ">{work.name}</h1>

        <div className="flex gap-1 flex-wrap items-center md:justify-center">
          {work.tags && work.tags.length > 0 && work.tags.map((tag, i) => <Badge key={i} variant={"outline"}>{tag}</Badge>)}
        </div>
        {work.description && <p className="text-muted-foreground text-left md:text-center max-w-[32rem]">{work.description}</p>}
      </div>
      <Image
        src={work.thumbnail}
        alt={""}
        height={500}
        width={500}
        className="rounded-xl"
      />
      {work.content && work.content.length > 0 && <div className="space-y-4 max-w-[31.5rem]">
        {work.content.map(c => {
          // console.log(c)
          if (c.type == "h1") return <h1 className="text-4xl font-bold " key={c.content}>{c.content}</h1>
          else if (c.type === "image") return <Image
            key={c.src}
            src={c.src}
            alt={""}
            height={500}
            width={500}
            className="rounded-xl"
          />
          else return <p className="" key={c.content}>{c.content}</p>

          return <div key={c.type}>{c.type}</div>
        })}
      </div>}

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
