import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects: Project[] = [
  {
    name: "Indie Toolkit",
    image: "/testimonials/indietoolkit.png",
    year: 2024,
  },
  {
    name: "DataiPulse",
    image: "/testimonials/dataipulse.jpg",
    year: 2023,
  },
  {
    name: "Animal Aid",
    image: "/testimonials/animal-aid-project.png",
    year: 2023,
  },
  {
    name: "bento grid",
    image: "/testimonials/bentogrids-dashboard.png",
    year: 2023,
  },
  {
    name: "File Converter",
    image: "/testimonials/file_conversion.png",
    year: 2023,
  },
  {
    name: "ZedTheBaker",
    image: "/testimonials/ztb_23.png",
    year: 2023,
  },
  {
    name: "URL Shortner",
    image: "/testimonials/url_shortner.png",
    year: 2023,
  },
  {
    name: "Devgrads",
    image: "/testimonials/url_shortner.png",
    year: 2023,
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-medium  tracking-tight max-[716px]:text-6xl font-bebas max-[600px]:text-5xl max-[470px]:text-4xl  ">
        Work
      </h1>
      <h5 className="max-w-[35rem]  opacity-80 max-[470px]:text-sm">
        Don't just take our word for it. Here's what real work is
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-7 justify-center">
        {projects.map((project) => (
          <EachProject data={project} />
        ))}
      </div>
    </section>
  );
};

const EachProject = ({ data }: { data: Project }) => {
  const { image, name, year } = data;
  return (
    <div className="w-[500px] h-[350px] col-span-5 overflow-hidden border border-gray-800 shadow-2xl rounded-xl p-3">
      <Image
        className="object-cover h-[80%] overflow-x-hidden object-top rounded-t-md"
        src={image}
        alt={name}
        width={500}
        height={330}
      />
      <div className="flex justify-between mt-5">
        <div>
          <h3 className="text-xl font-bebas">{name}</h3>
          <p className="text-sm opacity-80">{year}</p>
        </div>
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
