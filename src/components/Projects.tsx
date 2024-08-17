import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects: Project[] = [
  {
    name: "Indie Toolkit",
    image: "/testimonials/indietoolkit.png",
    year: 2024,
    tags: ["SAAS", "Landing page"],
  },
  {
    name: "DataiPulse",
    image: "/testimonials/dataipulse.jpg",
    year: 2023,
    tags: ["Landing page", "Agency"],
  },
  {
    name: "Animal Aid",
    image: "/testimonials/animal-aid-project.png",
    year: 2023,
    tags: ["Charity", "Funding page"],
  },
  // {
  //   name: "bento grid",
  //   image: "/testimonials/bentogrids-dashboard.png",
  //   year: 2023,
  // },
  // {
  //   name: "File Converter",
  //   image: "/testimonials/file_conversion.png",
  //   year: 2023,
  // },
  {
    name: "ZedTheBaker",
    image: "/testimonials/ztb_23.png",
    year: 2023,
    tags: ["Bakery", "E-commerce"],
  },
  // {
  //   name: "URL Shortner",
  //   image: "/testimonials/url_shortner.png",
  //   year: 2023,
  // },
  {
    name: "Devgrads",
    image: "/testimonials/url_shortner.png",
    year: 2023,
    tags: ["Education", "E-learning"],
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-medium  tracking-tight max-[716px]:text-6xl font-bebas max-[600px]:text-5xl max-[470px]:text-4xl  ">
        Work
      </h1> */}
      <h1 className="text-6xl font-bold font-bebas">Work</h1>

      <h5 className="max-w-[15rem] text-center opacity-80 max-[470px]:text-sm mb-10">
        Don&#39;t just take our word for it. Here&#39;s what real work is
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 justify-center">
        {projects.map((project) => (
          <EachProject data={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

const EachProject = ({ data }: { data: Project }) => {
  const { image, name, year, tags } = data;
  return (
    <div className="w-[400px] mx-auto h-[300px] md:w-[500px] md:h-[350px] col-span-5 py-2 overflow-hidden border border-gray-800 shadow-2xl rounded-xl p-3">
      <div className="relative h-[70%] overflow-hidden">
        <Image
          className="overflow-hidden  blur-3xl rounded-t-md"
          src={image}
          alt={name}
          width={500}
          quality={50}
          height={330}
        />
        <Image
          className="object-cover absolute top-3 left-6 z-10  overflow-x-hidden object-top rounded-md h-[90%] w-[90%]"
          src={image}
          alt={name}
          width={500}
          height={330}
        />
      </div>
      <div className="flex justify-between mt-5 bg-black z-10">
        <section className="bg-black">
          <div className="flex items-baseline gap-3">
            <h3 className="text-xl font-bebas ml-2">{name}</h3>
            {/* <p className="text-sm opacity-80">{year}</p> */}
          </div>
          {tags && (
            <div>
              {tags.map((tag) => (
                <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-3 scale-90 py-1 text-xs font-medium text-gray-300 backdrop-blur-3xl">
                  <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                    {tag}
                  </span>
                </span>
              ))}
            </div>
          )}
        </section>
        <Link href={"#"}>
          <div className="bg-white size-10 flex justify-center items-center rounded-full hover:rotate-12 hover:transition-transform">
            <ArrowTopRightIcon className="text-black size-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
