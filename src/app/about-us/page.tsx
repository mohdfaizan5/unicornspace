import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next";
import OurTechStack from "@/components/our-tech-stack";
import HowWeWork from "@/components/how-we-work";
import { ArrowTopRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";


export const metadata: Metadata = {
  title: "Social Links",
  description: "Follow us on social media platforms",
};

export default function SocialLinks() {
  type FeatureItem = {
    title: React.ReactNode;
    icon: React.ReactNode;
  };

  const featuresData: FeatureItem[] = [
    {
      title: "We’re comfortable in working with your timezones.",
      icon: <LiaBusinessTimeSolid className="inline" />,
    },
    {
      title: "You got a team, no problem—we’ll fit in to your working style.",
      icon: <AiOutlineTeam className="inline" />,
    },
    {
      title: "Have half-baked designs? Not an issue, we’ll work on it.",
      icon: <MdDesignServices className="inline" />,
    },
    {
      title: "Continue on your existing technologies, we got you covered.",
      icon: <FaNetworkWired className="inline" />,
    },
  ];
  return (
    <main className=" flex flex-col items-center py-10 my-24 max-w-2xl mx-auto px-8">

      <div className="w-24 h-24 relative mb-6">
        <Image
          src="/logo-white-256x256.png"
          alt="Unicorn space logo"
          fill
          className="rounded-full bg-black"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-medium text-center relative tracking-tighter mx-auto w-fit underline decoration-wavy decoration-primary/80 decoration-2 underline-offset-4">Unicorn Space</h1>

      <h2 className="text-left text-2xl font-bold mt-10 mb-6">Who we are?</h2>
      <p className="text-muted-foreground mb-8">
        Unicorn Space is a design and development studio that creates digital
        products for the web and mobile. We are a team of designers, developers,
        and product managers who are passionate about building products that
        people love to use.
      </p>

      <p className="text-muted-foreground mb-8">
        At Unicornspace, we’re not just another studio – we’re a strangely human force driving innovation in digital services.

      </p>
      <OurTechStack className="md:my-4" />
      <p className="text-muted-foreground mb-8">

        Our team consists of experienced developers, designers, program managers, and other commercial tech professionals, and our passion lies not just in creating solutions but also in collaboratively addressing client challenges. UnicornSpace takes pride in supporting federal clients throughout the entire process – from design to deployment. We specialize in crafting scalable solutions that are purpose-built for the citizens they serve and the workforces they empower.
      </p>
      <p className="text-muted-foreground mb-8">We{`'`}re constantly building internal tools and making business out of it.</p>
      <div className=" pb-5  dark:bg-black dark:text-white">
        {featuresData.map((feature, i) => (
          <div
            className={`flex md:col-span-2 mt-1 gap-5 items-center ${(i + 1) % 2 == 0 ? "col-start-2" : "col-start-4"
              }`}
            key={i}
          >
            <span
              className={`text-2xl bg-muted-foreground/20  rounded-full size-12 flex items-center justify-center font-light top-0 
            `}
            >
              {feature.icon}
            </span>
            <p className=" text-balance max-w-2xl my-0">{feature.title}</p>
          </div>
        ))}
      </div>
      {/* TODO: Can improve wrt UI a lot better -> basically making it visually better than text, the visuals should say the point then if someone is interested in knowing further then read the text below */}
      {/* <ul className="list-disc list-inside">
        <li>We{`'`}re comfortable in working with your timezones <LiaBusinessTimeSolid className="inline" /></li>
        <li>You got a team, no problem we{`'`}ll fit in to your working style <AiOutlineTeam className="inline" /></li>
        <li>Have half baked designs? not an issue, we{`'`}ll work on it <MdDesignServices className="inline" /></li>
        <li>Continue on your existing technologies, ya we got you covered <FaNetworkWired className="inline" /></li>
      </ul> */}
      <HowWeWork />
      {/* Links */}
      <div className="w-full max-w-md space-y-4 px-4">
        {/* <Link href="https://x.com/_unicornspace_" className="block">
          <Button
            variant="secondary"
            className="w-full py-6 text-lg bg-[#2D3339] hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Follow us on X
          </Button>
        </Link> */}

        <Link href="mailto:faizan@unicorn-space.com" className="block">
          <Button
            variant="secondary"
            className="w-full py-6  bg-slate-600 hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            faizan@unicorn-space.com <Mail />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/company/unicornspace/" className="block">
          <Button
            variant="secondary"
            className="w-full py-6  bg-slate-600 hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Follow us on LinkedIn <LinkedInLogoIcon />
          </Button>
        </Link>

        <Link href="https://ui.unicorn-space.com/" target="_blank" className="group block">
          <Button
            variant="secondary"
            className="w-full py-6  bg-[#2D3339] hover:bg-[#3D444A] text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Visit our UI Library - UnicornSpaceUI <ArrowTopRightIcon className="group-hover:rotate-45  transition-all ease-in duration-300" />
          </Button>
        </Link>


      </div>
    </main>
  )
}

