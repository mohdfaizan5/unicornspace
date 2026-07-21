import React from 'react'

import { Card, CardContent } from "@/components/ui/card";
import { Globe, MessageSquare, XCircle } from "lucide-react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6 } from "react-icons/ri";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { GitCompare, GitFork, GitMerge, GitPullRequest } from "lucide-react";
import { cn } from '@/lib/utils';

const items = [
  {
    id: 1,
    title: "Start with a hunch",
    description:
      "Most things begin as a rough idea we can't stop thinking about.",
    icon: RiNumber1,
  },
  {
    id: 2,
    title: "Build the smallest version",
    description:
      "We ship something real, fast — then see if it actually holds up.",
    icon: RiNumber2,
  },
  {
    id: 3,
    title: "Use it ourselves",
    description:
      "If we wouldn't reach for it every day, it isn't finished yet.",
    icon: RiNumber3,
  },
  {
    id: 4,
    title: "Share what we learn",
    description:
      "The good, the broken, and everything in between goes into our notes.",
    icon: RiNumber4,
  },
];

const HowWeWork = ({ className }: { className?: string }) => {

  return (
    <section className={cn("w-full max-w-3xl mx-auto px-4 py-12 flex flex-col md:items-center justify-center gap-4", className)}>
      <h2 className="text-2xl md:text-4xl text-left md:text-center font-bold mb-6">How we build</h2>
      <Timeline defaultValue={3}>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 mt-7" />
              <TimelineTitle className="mt-0.5 text-base">{item.title}</TimelineTitle>
              <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                <item.icon size={14} />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className='mb-6 text-base'>
              {item.description}
              {/* <TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate> */}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>


  )
}

export default HowWeWork