import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrAndroid } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { MdOutlineWebAsset } from 'react-icons/md';
import { Magnetic } from '@/components/ui/magnetic';
import Link from 'next/link';


const page = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className='flex flex-col md:gap-2 gap-4 mx-auto items-center justify-center max-w-xl md:max-w-2xl mt-10 md:mt-24'>
      <div className='w-full mt-12  px-4 text-left md:text-center'>
        <h1 className='text-3xl md:text-4xl font-bold md:text-center'>Our Tech Stack</h1>
        <p className="text-muted-foreground ">
          At <span className="font-semibold">UnicornSpace</span>, we leverage cutting-edge technologies to build scalable, high-performance digital products.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center  p-4">
        <FaReact className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <RiNextjsFill className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <SiTypescript className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <RiTailwindCssFill className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <GrAndroid className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <FaApple className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <MdOutlineWebAsset className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <BiLogoPostgresql className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <IoLogoVercel className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
        <FaFigma className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-5xl' />
      </div>
      <div className="max-w-6xl mx-auto mt-12">


        <div className="grid md:grid-cols-2  gap-8">
          {/* <!-- Frontend Excellence --> */}
          <div className="p-6 rounded-xl shadow-md flex  items-center space-x-4">
            <i className="text-4xl text-blue-500"><FaReact /></i>
            <div>
              <h3 className="text-xl font-semibold">React.js</h3>
              <p className="text-gray-600">Dynamic, interactive, and component-driven web experiences.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-white"><RiNextjsFill /></i>
            <div>
              <h3 className="text-xl font-semibold">Next.js</h3>
              <p className="text-gray-600">SEO-friendly, server-rendered web applications with fast performance.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-blue-700"><SiTypescript /></i>
            <div>
              <h3 className="text-xl font-semibold">TypeScript</h3>
              <p className="text-gray-600">Reliable, scalable, and maintainable code with static typing.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-teal-500"><RiTailwindCssFill /></i>
            <div>
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="text-gray-600">Utility-first styling for sleek and responsive UI designs.</p>
            </div>
          </div>

          {/* <!-- Mobile Development --> */}
          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-green-600"><GrAndroid /></i>
            <div>
              <h3 className="text-xl font-semibold">Android Development</h3>
              <p className="text-gray-600">Seamless and high-performance native Android apps.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-gray-400"><FaApple /></i>
            <div>
              <h3 className="text-xl font-semibold">iOS Development</h3>
              <p className="text-gray-600">Smooth and intuitive Apple ecosystem experiences.</p>
            </div>
          </div>

          {/* <!-- Backend & DevOps --> */}
          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-blue-600"><BiLogoPostgresql /></i>
            <div>
              <h3 className="text-xl font-semibold">PostgreSQL</h3>
              <p className="text-gray-600">Robust, high-performance, and scalable databases.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-white"><IoLogoVercel /></i>
            <div>
              <h3 className="text-xl font-semibold">Vercel</h3>
              <p className="text-gray-600">Lightning-fast, serverless deployment with global reach.</p>
            </div>
          </div>

          {/* <!-- UI/UX & Design --> */}
          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-purple-500"><FaFigma /></i>
            <div>
              <h3 className="text-xl font-semibold">Figma</h3>
              <p className="text-gray-600">Transforming ideas into visually stunning UI/UX designs.</p>
            </div>
          </div>

          <div className="p-6  rounded-xl shadow-md flex items-center space-x-4">
            <i className="text-4xl text-gray-500"><MdOutlineWebAsset /></i>
            <div>
              <h3 className="text-xl font-semibold">Custom Web Solutions</h3>
              <p className="text-gray-600">Enterprise-grade applications and SaaS platforms.</p>
            </div>
          </div>
        </div>
        <section id='code-quality' className='mt-12'>
          <h2 className='text-2xl font-bold mt-6 mb-2'>Guiding principles for our code quality</h2>

          <ol className='list-decimal list-inside flex flex-col gap-2'>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>Code reviews</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>We follow DRY principle</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>Writing self descriptive code</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>We comment the code</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>We follow coding standards.</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>Use version control</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>Follow best practices</li>
            <li className='mt-2  pt-1 opacity-80 border-t border-zinc-700'>Code is tested with all usecases before deploying.</li>

          </ol>
        </section>
        <div className="text-center mt-12">
          <Link href={"/get-started"}>
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
    </div>
  )
}

export default page