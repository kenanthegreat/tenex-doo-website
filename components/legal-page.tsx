import type { ReactNode } from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <><Navigation /><main className="min-h-screen bg-background pt-32 md:pt-40"><article className="container mx-auto max-w-4xl px-4 pb-20 md:px-8"><div className="mb-4 text-sm font-semibold uppercase text-primary">TENEX d.o.o.</div><h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p><div className="mt-10 space-y-8 border-t border-border/60 pt-8 text-foreground/80 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">{children}</div></article></main><Footer /></>
}
