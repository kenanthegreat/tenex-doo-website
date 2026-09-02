import type { Metadata } from "next"
import { ArrowRight, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { projects } from "@/lib/content"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Projekti niskogradnje i iskopa | TENEX Sarajevo",
  description: "Pogledajte izvedene TENEX projekte iskopa, miniranja, čišćenja i uređenja terena u Sarajevu, na Bjelašnici i u Trnovu.",
  alternates: { canonical: "/projekti" },
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-28 md:pt-36">
        <section className="container mx-auto px-4 pb-16 md:px-8 md:pb-24">
          <div className="max-w-4xl pb-10 md:pb-14">
            <div className="mb-4 text-sm font-semibold uppercase text-primary">Izvedeni radovi</div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">Projekti koji pokazuju kako radimo</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Stvarne lokacije i fotografije iz iskopa, miniranja, čišćenja i uređenja terena. Za vaš projekat prvo procjenjujemo lokaciju, obim i pristup.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-border/60 bg-card">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 92vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" /></div>
                <div className="p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs"><span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{project.category}</span><span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{project.location}</span></div>
                  <h2 className="text-xl font-bold leading-snug md:text-2xl">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
            <div><h2 className="text-2xl font-bold">Imate sličan projekat?</h2><p className="mt-1 text-muted-foreground">Pošaljite lokaciju i kratak opis za prvi razgovor.</p></div>
            <a href="/#kontakt" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground">Zatražite procjenu <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
