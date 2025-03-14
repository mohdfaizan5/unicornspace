import OurTechStack from "@/components/our-tech-stack";
import StyledButton from "@/components/styled-button";
import { SvgAssests } from "@/components/svg-assets";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { fetchBySlug, fetchPageBlocks } from "@/lib/notion";
import { Metadata, MetadataRoute } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";


type Params = Promise<{ slug: string }>;
import { MdOutlineWebAsset } from "react-icons/md";

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

// export const generateStaticParams = async () => {
//   console.log("------------>", projects);
//   const slugs = projects.map((project) => {
//     return {
//       params: {
//         slug: project.slug,
//       },
//     };
//   });

//   console.log("------------>", slugs);
// }


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

  // console.log("------------>", projects);
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
  const slugs = projects.map((project) => ({ slug: project.slug }));
  // console.log("------------>", slugs);


  return slugs
}

const page = async ({ params }: { params: Params }) => {
  const { slug } = await params;


  // const post = await fetchBySlug(slug);
  // console.log(post)

  // if (!post) {
  //   return notFound()
  // }

  // const content = await fetchPageBlocks(post.id);

  const work = projects.find((project) => {
    return project.slug === slug;
  });

  if (!work) return notFound();

  return (
    <main className="flex flex-col items-center  mt-6 md:mt-28  p-4">
      <div className="flex flex-col  gap-4  max-w-3xl">
        <div className=" space-y-2">
          <h1 className="text-left text-4xl font-bold ">
            {work.name}
          </h1>
          <div className="flex gap-1 flex-wrap items-center ">
            {work.tags &&
              work.tags.length > 0 &&
              work.tags.map((tag, i) => (
                <Badge className=" text-white" key={i} variant={"outline"}>
                  {tag}
                </Badge>
              ))}
          </div>
          {work.description && (
            <p className="text-muted-foreground text-left max-w-[32rem]">
              {work.description}
            </p>
          )}
        </div>

        <Image
          src={work.thumbnail}
          alt={""}
          className="rounded-xl h-"
          height={500}
          width={650}

        />
        {/* <AspectRatio   ratio={16 / 9} className="bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio> */}
        {work.content && work.content.length > 0 && (
          <div className="space-y-4 w-full">
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
              else if (c.type == "h2")
                return (
                  <h2
                    className="text-3xl mt-2 font-bold "
                    key={`${c.content.slice(0, 10)}${i}`}
                  >
                    {c.content}
                  </h2>
                );
              else if (c.type == "h3")
                return (
                  <h3
                    className="text-3xl mt-2 font-bold "
                    key={`${c.content.slice(0, 10)}${i}`}
                  >
                    {c.content}
                  </h3>
                );
              else if (c.type === "image")
                return (
                  <Image
                    key={`${c.src.slice(0, 10)}${i}`}
                    src={c.src}
                    alt={c.src}
                    height={500}
                    width={650}
                    className="rounded-xl"
                  />
                );
              else if (c.type === "element")
                return (
                  <c.content key={c.content} />
                );


            })}
          </div>
        )}
        {/* <OurTechStack /> */}
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

      </div>
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
