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

const Footer = () => {
  const data = [
    {
      title: "EXPLORE",
      links: [
        { title: "Templates", link: "" },
        { title: "UI library", link: "https://unicornspace-ui.vercel.app/" },
        { title: "Learn", link: "docs/learn" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { title: "Works", link: "/work" },
        // { title: "Changelog", link: "docs/changelog" },
        // { title: "Roadmap", link: "docs/roadmap" },
        { title: "Support", link: "mailto: " },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { title: "About", link: "/about" },
        { title: "Careers", link: "/careers" },
        { title: "Contact", link: "/contact" },
      ],
    },

    {
      title: "Our Products",
      links: [
        { title: "UnicornSpaceUI", link: "https://ui.unicorn-space.com/" },
        { title: "FreelanceFlow", link: "#" },
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
              href="/pricing"
              className="px-4 py-2 text-sm font-semibold text-black bg-white rounded-lg"
            >
              Get started
            </Link>
          </div>
          <div className="text-xl flex gap-2 items-center">
            <Link href={"/"}>
              <FaLinkedin size={18} />
            </Link>
            <Link href={"/"}>
              <FaXTwitter size={18} />
            </Link>
            <Link href={"/"}>
              <FaGithub size={18} />
            </Link>
          </div>
        </div>
        <div className="flex gap-6 flex-wrap">
          {data.map((item, i) => (
            <ul key={i} className="flex flex-col gap-2 text-sm list-none">
              <p className="font-bold">{item.title}</p>
              {item.links.map((link) => (
                <li className="hover:translate-x-1 transition-all delay-100" key={i}>
                  <Link
                    href={link.link}
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
