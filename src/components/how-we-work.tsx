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
    title: "Project Kickoff",
    description: "We start by understanding your business goals and target audience.",
    icon: RiNumber1,
  },
  {
    id: 2,
    title: "Design Phase",
    description:
      "Then we create a design that will make your brand stand out from the competition.",
    icon: RiNumber2,
  },
  {
    id: 3,
    title: "Development Sprint",
    description:
      "Our team of developers will bring your website to life with clean code.",
    icon: RiNumber3,
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description: "We make sure your website is bug-free and ready for launch.",
    icon: RiNumber4,
  },
];

const HowWeWork = ({ className }: { className?: string }) => {

  return (
    <section className={cn("w-full max-w-7xl mx-auto px-4 py-12 flex flex-col md:items-center justify-center gap-4", className)}>
      <h2 className="text-2xl md:text-4xl text-left md:text-center font-bold mb-6">How we work?</h2>
      <Timeline defaultValue={3}>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5 mt-7" />
              <TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
              <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                <item.icon size={14} />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className='mb-6'>
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