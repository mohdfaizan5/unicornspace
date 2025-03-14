import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SvgAssests } from "./svg-assets";
import { projects } from "@/lib/data";
import { Button } from "./ui/button";
import StyledButton from "./styled-button";

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

      {viewAll && (

        <Link href={"/work"} className="mt-10 md:mt-16">
          <StyledButton className="mx-auto">
            View All
          </StyledButton>
        </Link>
      )}

    </section>
  );
};

const EachProject = ({ data }: { data: Project }) => {
  const { thumbnail, name, year, tags } = data;
  return (
    <div className="max-w-[390px] sm:w-[400px] mx-auto h-[300px] md:w-[500px] md:max-h-[350px] col-span-5 pb  -2 overflow-hidden border-[0.3px] border-slate-700 shadow-2xl rounded-xl">
      <div className="relative flex flex-col items-center justify-between max-h-[70%] w-full overflow-hidden rounded-t-md">
        <Link href={`/work/${data.slug}`} className="mx-auto">
          <Image
            className="object-cover overflow-x-hidden object-top rounded-t-md "
            src={thumbnail}
            alt={name}
            width={550}
            height={380}
          />
        </Link>
      </div>
      <div className="flex justify-between mt-5 p-2 bg-black z-10">
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
          <div className="bg-white size-10 flex justify-center items-center rounded-full hover:rotate-45 ease-in duration-300 hover:transition-transform">
            <ArrowTopRightIcon className="text-black size-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
