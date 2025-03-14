import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { CiMobile3 } from "react-icons/ci";
import ProjectBoard from './project-board';
import { MdOutlineWebAsset } from "react-icons/md";
import { cn } from '@/lib/utils';

const OurServices = ({ className }: { className?: string }) => {

  const services = [
    {
      title: "WebDevelopment",
      icon: CiMobile3,
      description: "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition."
    },
    {
      title: "Web Design",
      icon: MdOutlineWebAsset,
      description: "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action."
    },
    {
      title: "Mobile Design",
      icon: CiMobile3,
      description: "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless."
    },
    {
      title: "Development",
      icon: CiMobile3,
      description: "Solve any design challenge in Webflow. If you can dream it, we can build it"
    },
  ]

  /*
  "SEO",
  "Native WebApps",
  "Video Editing",
  
  Brand identity
We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition.
Web Design
We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action.
Mobile Design
Illustration
We create visual stories that help explain your mission and vision.
승
Iconography
Icons that support the brand and help simplify your message.

  */
  return (
    <div className={cn(className)}>
      <section className="my-10 flex flex-col items-center justify-center w-full">
        {/* <div>
          <h1 className="text-[4rem] leading-[5.5rem] max-w-[45rem] font-medium  tracking-tight max-[716px]:text-6xl font-bebas max-[600px]:text-5xl max-[470px]:text-4xl  text-center">

          </h1>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
            Our Services
          </h2>
        </div>
        <section
          id="secondary-features"
          aria-label="Features for building a portfolio"
          className="flex mt-10 md:mt-0 items-center justify-center"
        >
          <section className=" max-w-7xl px-4 sm:px-6 lg:px-8  ">

            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 lg:grid-cols-2 md:gap-y-10 lg:max-w-none "
            >
              {services.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 p-8"
                >
                  <feature.icon className="h-8 w-8" />
                  <h3 className="mt-6 font-semibold ">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </section> */}
      </section >
      <div className="text-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold textHey, Cortana. Hey, Cortana. Hey, Cortana. Hey, Cortana. -blue-700">Ship faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
            Everything you need to get started
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-black border-[0.4px] border-zinc-800 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight 
                  
                  max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We ensure that every website we build is fully responsive, providing a seamless experience across all devices—whether {`it's`} a phone, tablet, or desktop                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-black border-[0.4px] border-zinc-800 max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight 
                  
                  max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Speed matters. Our optimized code, efficient asset loading, and cutting-edge technologies ensure lightning-fast load times and smooth user experiences.                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg border-[0.4px] border-zinc-800  bg-black"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight 
                  
                  max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    We prioritize security at every step, implementing best practices to protect your website from vulnerabilities, data breaches, and cyber threats.

                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg border-[0.4px] border-zinc-800  bg-black max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight 
                  
                  max-lg:text-center">
                    Built for Speed
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    From efficient backend logic to front-end optimizations, we focus on speed to enhance user engagement and improve SEO rankings.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-black/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OurServices


