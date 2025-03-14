import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SvgAssests } from "./svg-assets";
import { Mail } from "lucide-react";

const Footer = () => {
  const data = [
    {
      title: "EXPLORE",
      links: [
        { title: "Portfolio", link: "/work" },
        { title: "Testimonials", link: "/#testimonials" },
        { title: "Our coding standards", link: "/our-tech-stack#code-quality" },
        { title: "faizan@unicorn-space.com", link: "mailto:faizan@unicorn-space.com" },
      ],
    },
    // {
    //   title: "LEGAL",
    //   links: [
    //     { title: "Works", link: "/work" },
    //     // { title: "Changelog", link: "docs/changelog" },
    //     // { title: "Roadmap", link: "docs/roadmap" },
    //     { title: "Support", link: "mailto: " },
    //   ],
    // },
    {
      title: "COMPANY",
      links: [
        // { title: "About", link: "/about" },
        {
          title: "UI Library",
          link: "https://ui.unicorn-space.com/",
          target: "_blank",
        },
        // { title: "Careers", link: "/careers" },
        {
          title: "Contact",
          link: "https://www.linkedin.com/company/unicornspace/",
        },
      ],
    },

    {
      title: "Our Products",
      links: [
        {
          title: "UnicornSpaceUI",
          link: "https://ui.unicorn-space.com/",
          target: "_blank",
        },
        // { title: "FreelanceFlow", link: "#" },
        // { title: "Privacy", link: "#" },
      ],
    },
  ];
  return (
    <footer className="flex flex-col items-center">
      <section
        className="flex flex-wrap items-center justify-between w-full p-6 md:px-20 mt-10 footer gap-7 grow"
        style={{ borderTop: "1px solid #ffffff20" }}
      >
        <div className="flex flex-col gap-3 footer-section1">
          <div className="flex items-center">
            <SvgAssests.logo />
            <h3 className="text-[20px] font-semibold text-white">
              UnicornSpace
            </h3>
          </div>
          <p className="text-sm text-white opacity-75">
            Get started with our product and start building your project.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://cal.com/unicorn-space/15min"
              className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-lg"
            >
              Get started
            </Link>
          </div>
          <div className="text-xl flex gap-4 mt-2 items-center">
            <Link href={"https://www.linkedin.com/company/unicornspace/"}>
              <FaLinkedin size={24} />
            </Link>
            <Link href={"mailto:faizan@unicorn-space.com"}>
              <Mail size={24} />
            </Link>
            <Link href={"https://github.com/mohdfaizan5/unicornspace"}>
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {data.map((item, i) => (
            <ul
              key={i}
              className="flex flex-col gap-2 text-sm list-none"
            >
              <p className="font-bold">{item.title}</p>
              {item.links.map((link, index) => (
                <li
                  className="hover:translate-x-1 transition-all delay-100"
                  key={index}
                >
                  <Link
                    href={link.link}
                    target={link.target}
                    className="opacity-75 hover:opacity-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      <div className="mb-2">
        <p className="text-sm text-foreground font-light">
          © 2021 UnicornSpace. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
