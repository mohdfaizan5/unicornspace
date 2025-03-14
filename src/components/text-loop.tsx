"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type TransitionType = "fade" | "slide" | "scale" | "none"

interface SmoothTextLoopProps {
  items: string[]
  interval?: number
  transition?: TransitionType
  transitionDuration?: number
  className?: string
  onIndexChange?: (index: number) => void
}

export function SmoothTextLoop({
  items,
  interval = 2,
  transition = "fade",
  transitionDuration = 0.5,
  className,
  onIndexChange,
}: SmoothTextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Ensure we have items to display
  const hasItems = items.length > 0

  useEffect(() => {
    if (!hasItems) return

    const timer = setInterval(() => {
      setIsTransitioning(true)

      // Wait for the exit animation to complete
      setTimeout(
        () => {
          setCurrentIndex((current) => {
            const next = (current + 1) % items.length
            onIndexChange?.(next)
            return next
          })

          // Reset the transition state after a small delay
          setTimeout(() => {
            setIsTransitioning(false)
          }, 50)
        },
        transitionDuration * 1000 * 0.5,
      )
    }, interval * 1000)

    return () => clearInterval(timer)
  }, [interval, items.length, onIndexChange, transitionDuration, hasItems])

  // Determine transition classes based on the selected transition type
  const getTransitionClasses = () => {
    const duration = `duration-${Math.round(transitionDuration * 1000)}`

    const baseClasses = cn("transition-all", duration, "ease-in-out")

    const enterClasses = {
      fade: cn(baseClasses, isTransitioning ? "opacity-0" : "opacity-100"),
      slide: cn(baseClasses, isTransitioning ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"),
      scale: cn(baseClasses, isTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"),
      none: "",
    }

    return enterClasses[transition]
  }

  return hasItems ? (
    <span ref={containerRef} className={cn("inline-block relative overflow-hidden", className)}>
      <span className={cn("inline-block", getTransitionClasses())}>{items[currentIndex]}</span>
    </span>
  ) : null
}

