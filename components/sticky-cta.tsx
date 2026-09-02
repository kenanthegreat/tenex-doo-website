"use client"

import { useEffect, useState } from "react"
import { Phone, ChevronRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function StickyCTA() {
  const [isContactVisible, setIsContactVisible] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const contact = document.getElementById("kontakt")
    const hero = document.getElementById("pocetna")
    if (!contact || !hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting)
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0.12 },
    )

    observer.observe(contact)
    const heroObserver = new IntersectionObserver(([entry]) => setIsHeroVisible(entry.isIntersecting), { threshold: 0.15 })
    heroObserver.observe(hero)
    return () => {
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50 md:hidden pointer-events-none transition-all duration-300",
        isContactVisible || isHeroVisible ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
      )}
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-screen-sm px-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-[1.35rem] border border-border/60 bg-background/90 p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
          <a
            href={siteConfig.contact.phone.href}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/60 bg-secondary/80 text-primary"
            aria-label="Pozovi"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="#kontakt"
            className="flex min-h-12 flex-1 items-center justify-between rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(255,133,18,0.25)]"
          >
            {siteConfig.primaryCtaText}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
