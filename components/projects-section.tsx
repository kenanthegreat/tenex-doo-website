"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/content"
import Image from "next/image"

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projekti" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={cn(
            "max-w-3xl mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/80 mb-3">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-foreground/90">Projekti</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 leading-[1.1]">
            {"Primjeri radova koje možemo pokazati"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {"Četiri završena projekta sa fotografijama iz stvarnog rada."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-card aspect-[4/3] sm:aspect-[16/9] cursor-pointer transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                hoveredIndex === index && "scale-[1.01]",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 92vw, 50vw"
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  hoveredIndex === index ? "scale-110 blur-[2px]" : "scale-100",
                )}
              />

              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  hoveredIndex === index
                    ? "bg-gradient-to-t from-background via-background/70 to-background/20"
                    : "bg-gradient-to-t from-background/95 via-background/35 to-transparent",
                )}
              />

              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-secondary/60 text-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-xl font-bold text-foreground mb-2 leading-tight">{project.title}</h3>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 max-h-32 opacity-100 md:max-h-0 md:opacity-0",
                    hoveredIndex === index && "md:max-h-32 md:opacity-100",
                  )}
                >
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <MapPin className="w-4 h-4 text-foreground/60" />
                    {project.location}
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary/70 text-foreground flex items-center justify-center transition-all duration-500",
                    hoveredIndex === index
                      ? "translate-x-0 translate-y-0 opacity-100 scale-100"
                      : "translate-x-4 -translate-y-4 opacity-0 scale-75",
                  )}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-0 rounded-2xl border-2 transition-all duration-500",
                  hoveredIndex === index ? "border-border/70" : "border-transparent",
                )}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a href="/projekti" className="inline-flex h-12 items-center gap-2 rounded-full border border-border/60 bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/60">
            Pogledajte sve reference
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
