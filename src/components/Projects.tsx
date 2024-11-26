import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SvgAssests } from "./svg-assets";
import { projects } from "@/lib/data";

const Projects = ({ viewAll }: { viewAll?: boolean }) => {
  // if (viewAll)

  return (
    <section className="flex flex-col items-center justify-center mt-10 md:mt-24">
      <h1
        className="font-semibold text-[3rem] md:text-[55px] relative underline decoration-wavy decoration-primary/80 decoration-2 underline-offset-4"
        id="portfolio"
      >
        Portfolio
        <SvgAssests.BriefcaseBusiness className="absolute top-0 size-8 -right-8" />
      </h1>

      <h5 className="text-white/70 text-lg md:text-xl tracking-tight text-center mb-5 max-w-80 md:max-w-2xl ">
        Don&#39;t just take our word for it. Here&#39;s what{" "}
        <span className=""> real work</span> is
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 justify-center">
        {viewAll
          ? projects
              .slice(0, 4)
              .map((project) => (
                <EachProject data={project} key={project.name} />
              ))
          : projects.map((project) => (
              <EachProject data={project} key={project.name} />
            ))}
      </div>
      {/* {viewAll && (
        <Button>
          <Link className="mx-auto " href={"/work"}>
            View All
          </Link>
        </Button>
      )} */}
    </section>
  );
};

const EachProject = ({ data }: { data: Project }) => {
  const { thumbnail, name, year, tags } = data;
  return (
    <div className="w-[400px] mx-auto h-[300px] md:w-[500px] md:h-[350px] col-span-5 py-2 overflow-hidden border border-gray-800 shadow-2xl rounded-xl p-3">
      <div className="relative h-[70%] overflow-hidden">
        <Image
          className="overflow-hidden aspect-video blur-3xl rounded-t-md"
          src={thumbnail}
          alt={name}
          width={500}
          quality={50}
          height={330}
        />
        <Image
          className="object-cover absolute top-3 left-6 z-10  overflow-x-hidden object-top rounded-md h-[90%] w-[90%]"
          src={thumbnail}
          alt={name}
          width={500}
          height={330}
        />
      </div>
      <div className="flex justify-between mt-5 bg-black z-10">
        <section className="bg-black">
          <div className="flex items-baseline gap-3">
            <h3 className="text-xl  ml-2">{name}</h3>
            {/* <p className="text-sm opacity-80">{year}</p> */}
          </div>
          {tags && (
            <div>
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 scale-90 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl"
                >
                  <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          )}
        </section>
        <Link href={`/work/${data.slug}`}>
          <div className="bg-white size-10 flex justify-center items-center rounded-full hover:rotate-12 hover:transition-transform">
            <ArrowTopRightIcon className="text-black size-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
