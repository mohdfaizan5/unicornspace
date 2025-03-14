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
import { cn } from '@/lib/utils';

const OurTechStack = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex flex-col px-4 md:flex-row md:gap-2 gap-4 mx-auto items-center justify-center max-w-xl md:max-w-2xl mt-10 md:mt-24', className)}>
            <div className='w-full'>
                <h1 className='text-2xl md:text-4xl font-bold md:text-center'>Our Tech Stack</h1>
                <p className='md:text-center text-sm text-muted-foreground'>We use the latest technologies to build your product</p>
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


        </div>
    )
}

export default OurTechStack
