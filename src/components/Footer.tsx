import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center justify-between w-full p-6 mt-10 footer gap-7 grow"
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="flex flex-col gap-2 footer-section1">
        <h3 className="text-[20px] font-semibold text-white">UnicornSpace</h3>
        <p className="text-sm text-white opacity-75">
          Get started with our product and start building your project.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
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
              <Link
                href="docs/templates/startup-saas"
                className="opacity-75 hover:opacity-100"
              >
                Templates
              </Link>
            </li>
            <li>
              <Link
                href="docs/components"
                className="opacity-75 hover:opacity-100"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="docs/layouts"
                className="opacity-75 hover:opacity-100"
              >
                Layouts
              </Link>
            </li>
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
              <Link
                href="docs/examples"
                className="opacity-75 hover:opacity-100"
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                href="docs/changelog"
                className="opacity-75 hover:opacity-100"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="docs/roadmap"
                className="opacity-75 hover:opacity-100"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="docs/support"
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
