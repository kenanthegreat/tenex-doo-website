"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Phone, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

const navLinks = [
  { id: "pocetna", label: "Početna" },
  { id: "usluge", label: "Usluge" },
  { id: "projekti", label: "Projekti" },
  { id: "oprema", label: "Oprema" },
  { id: "o-nama", label: "O nama" },
  { id: "repromaterijal", label: "TENEX standard" },
  { id: "kontakt", label: "Kontakt" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(pathname === "/projekti" ? "projekti" : pathname.startsWith("/usluge/") ? "usluge" : "pocetna")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const sections = navLinks.map((link) => link.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = document.getElementById(id)
    if (element) {
      event.preventDefault()
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", `#${id}`)
      setActiveSection(id)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "py-2 md:py-3" : "py-3 md:py-5")}>
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 backdrop-blur-xl",
          isScrolled ? "bg-background/95 border-b border-border/50" : "bg-background/85",
        )}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <nav className="flex items-center justify-between gap-3 md:gap-6">
          <a href="/#pocetna" onClick={handleNavClick("pocetna")} className="group flex items-center gap-3 flex-shrink-0">
            <span className="flex h-16 w-24 items-center justify-center overflow-hidden md:h-20 md:w-28">
              <Image
                src="/2.5dlogo.png"
                alt="TENEX logo"
                width={512}
                height={512}
                priority
                sizes="112px"
                className="h-full w-full scale-125 object-contain transition-transform duration-300 group-hover:scale-[1.32]"
              />
            </span>
            <div className="hidden sm:block">
              <span className="block text-lg font-bold tracking-tight text-foreground">TENEX</span>
              <span className="block text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-mono">
                d.o.o. Sarajevo
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-1 p-1.5 rounded-full border border-border/40 bg-background/80 flex-nowrap">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap",
                    isActive
                      ? "text-primary-foreground bg-primary"
                      : "text-foreground/80 hover:text-foreground hover:bg-secondary/50",
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="hidden 2xl:flex items-center gap-3 flex-nowrap">
            <a
              href={siteConfig.contact.phone.href}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/40 whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="font-medium font-mono">{siteConfig.contact.phone.value}</span>
            </a>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-11 font-semibold whitespace-nowrap shrink-0"
              asChild
            >
              <a href="/#kontakt" onClick={handleNavClick("kontakt")} className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                {siteConfig.primaryCtaText}
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden text-foreground w-11 h-11 rounded-full border border-border/50 bg-secondary/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <span
                className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "top-2.5 rotate-45" : "top-1",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2.5 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen && "opacity-0 scale-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "top-2.5 -rotate-45" : "top-4",
                )}
              />
            </div>
          </Button>
        </nav>

        <div
          className={cn(
            "xl:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0",
          )}
        >
          <div className="p-3 rounded-3xl bg-background/95 border border-border/50 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={cn(
                    "px-4 py-3 text-foreground hover:bg-secondary/50 rounded-2xl transition-all duration-300 flex items-center justify-between group whitespace-nowrap",
                    isMobileMenuOpen && "animate-slide-up",
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
              <a
                href={siteConfig.contact.phone.href}
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-mono">{siteConfig.contact.phone.value}</span>
              </a>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-14 font-semibold text-base" asChild>
                <a href="/#kontakt" onClick={handleNavClick("kontakt")}>
                  <Zap className="w-5 h-5 mr-2" />
                  {siteConfig.primaryCtaText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
