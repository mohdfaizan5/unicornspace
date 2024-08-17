import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center justify-between w-full p-6 md:px-20 mt-10 footer gap-7 grow"
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="flex flex-col gap-2 footer-section1">
        <h3 className="text-[20px] font-semibold text-white">UnicornSpace</h3>
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
      </div>
      <div className="flex gap-6">
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">EXPLORE</p>
            <li>
              <Link href="" className="opacity-75 hover:opacity-100">
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="https://unicornspace-ui.vercel.app/"
                className="opacity-75 hover:opacity-100"
              >
                UI library
              </Link>
            </li>
            {/* <li>
              <Link
                href=""
                className="opacity-75 hover:opacity-100"
              >
                Meet Team
              </Link>
            </li> */}
            <li>
              <Link href="docs/learn" className="opacity-75 hover:opacity-100">
                Learn
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section3">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">LEGAL</p>
            <li>
              <Link href="/work" className="opacity-75 hover:opacity-100">
                Works
              </Link>
            </li>
            {/* <li>
              <Link
                href="docs/changelog"
                className="opacity-75 hover:opacity-100"
              >
                Changelog
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="docs/roadmap"
                className="opacity-75 hover:opacity-100"
              >
                Roadmap
              </Link>
            </li> */}
            <li>
              <Link
                href="mailto:media.unicornspace@gmail.com"
                className="opacity-75 hover:opacity-100"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
