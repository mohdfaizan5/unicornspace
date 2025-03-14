import Projects from "@/components/projects";
import React from "react";

import { Metadata } from "next";
import { Magnetic } from "@/components/ui/magnetic";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Work",
  description: "Check out our projects and work",
};

const page = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div>
      <div className="mt-28" />
      <Projects />
      <div className="text-center mt-12">
          <Link href={"https://cal.com/unicorn-space/15min"}>
            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea='global'
              range={200}
            >
              <button
                type='button'
                className='inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600'
              >
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea='global'
                  range={200}
                >
                  <span>{`Let's`} Build Something Amazing 🚀</span>
                </Magnetic>
              </button>
            </Magnetic>
          </Link>

        </div>
    </div>
  );
};

export default page;
