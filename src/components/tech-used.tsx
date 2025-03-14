import React from 'react';
import { FaReact, FaApple, FaFigma } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { GrAndroid } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
import { MdOutlineWebAsset } from 'react-icons/md';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { TbBrandReactNative } from "react-icons/tb";

// write a type for this
type TechIconsType = {

    React: React.ElementType;
    NextJS: React.ElementType;
    TypeScript: React.ElementType;
    TailwindCSS: React.ElementType;
    Android: React.ElementType;
    Apple: React.ElementType;
    Web: React.ElementType;
    PostgreSQL: React.ElementType;
    Vercel: React.ElementType;
    Figma: React.ElementType;
    ReactNative: React.ElementType;
};

const techIcons: TechIconsType = {
    React: FaReact,
    NextJS: RiNextjsFill,
    TypeScript: SiTypescript,
    TailwindCSS: RiTailwindCssFill,
    Android: GrAndroid,
    Apple: FaApple,
    Web: MdOutlineWebAsset,
    PostgreSQL: BiLogoPostgresql,
    Vercel: IoLogoVercel,
    Figma: FaFigma,
    ReactNative: TbBrandReactNative,
};
interface TechStackProps {
    technologies: string[];
    className?: string;
}
const TechUsed: React.FC<TechStackProps> = ({ technologies, className }) => {
    //     className?: string, technologies:
    //         | "React"
    //         | "NextJS"
    //         | "TypeScript"
    //         | "TailwindCSS"
    //         | "Android"
    //         | "Apple"
    //         | "Web"
    //         | "PostgreSQL"
    //         | "Vercel"
    //         | "Figma"
    //         | "ReactNative"[]
    // }) => {
    return (
        <TooltipProvider>
            <div className={cn('flex flex-col  md:flex-row md:gap-2 gap-4 mx-auto items-center justify-center max-w-xl md:max-w-2xl mt-10 md:mt-24 min-h-52', className)}>
                <div className='w-full'>
                    <h1 className='text-2xl md:text-3xl font-bold md:text-center'>Technologies used</h1>
                    <p className='md:text-center text-sm text-muted-foreground'>We use the latest technologies to build your product</p>
                </div>
                <div className='flex gap-4 flex-wrap items-center justify-center p-4'>
                    {technologies.map((tech, i) => {
                        // @ts-ignore
                        const Icon = techIcons[tech];
                        return (
                            <Tooltip key={i}>
                                <TooltipTrigger>
                                    <div className='hover:border rounded-md hover:opacity-85 hover:scale-105 border-[rgb(46,46,46)] p-2 text-3xl'>
                                        <Icon />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <span>{tech}</span>
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </TooltipProvider>
    );
};

export default TechUsed;
