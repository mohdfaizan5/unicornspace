import ProjectCards from "@/components/project-cards";

// projectsData.js
import image1 from "@/../public/testimonials/animal-aid-project.png";
import image2 from "@/../public/testimonials/bentogrids-dashboard.png";
import image3 from "@/../public/testimonials/dataipulse.jpg";
import image4 from "@/../public/testimonials/indietoolkit.png";
import image5 from "@/../public/testimonials/ztb_23.png";

const projects = [
  {
    name: "Cula",
    image: image1,
    alt: "Digital Infrastructure for Scaling Carbon Removal",
    description:
      "We immersed ourselves in a 3D world we created to explain how Cula’s platform collects data from carbon removal processes and converts them into carbon credit certificates.",
  },
  {
    name: "BentoGrids",
    image: image2,
    alt: "Dashboard Design for Productivity",
    description:
      "A sleek and user-friendly dashboard crafted for the BentoGrids platform, designed to streamline productivity and enhance data visualization.",
  },
  {
    name: "DataiPulse",
    image: image3,
    alt: "Analytics and Insights",
    description:
      "DataiPulse provides in-depth analytics and insights, helping organizations make data-driven decisions with a clear, user-friendly interface.",
  },
  {
    name: "IndieToolkit",
    image: image4,
    alt: "Tools for Indie Developers",
    description:
      "IndieToolkit is a curated set of tools tailored for independent developers, enabling them to build and manage projects more efficiently.",
  },
  {
    name: "ZTB 2023",
    image: image5,
    alt: "Virtual Event Management Platform",
    description:
      "ZTB 2023 is a virtual event platform offering seamless experiences for hosts and attendees, with interactive features and real-time engagement.",
  },
];

export default function StackingProjects() {
  return (
    <section>
      <div className="min-h-screen w-full md:container border border-e-white/20 rounded-xl ">
        <div className="relative ">
          <ProjectCards projects={projects} />
        </div>
      </div>
    </section>
  );
}
