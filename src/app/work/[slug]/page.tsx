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
      <h1 className="text-4xl font-bold">{work.name}</h1>
      {work.description && <p className="text-muted-foreground text-center">{work.description}</p>}
      <Image
        src={work.thumbnail}
        alt={work.name}
        height={500}
        width={500}
        className="rounded-xl"
      />
      <p className="text-muted-foreground text-balance">{work.content.text}</p>
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
        })}
    </main>
  );
};

export default page;
