import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { servicePages } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import Image from "next/image"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) return {}
  return { title: `${service.shortTitle} | TENEX Sarajevo`, description: service.description, alternates: { canonical: `/usluge/${service.slug}` }, openGraph: { title: `${service.shortTitle} | TENEX Sarajevo`, description: service.description, images: [service.image] } }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicePages.find((item) => item.slug === slug)
  if (!service) notFound()
  return (
    <>
      <Navigation />
      <main className="bg-background pt-24 md:pt-28">
        <section className="relative min-h-[72svh] overflow-hidden">
          <Image src={service.image} alt={service.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
          <div className="relative container mx-auto flex min-h-[72svh] items-center px-4 py-16 md:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 text-sm font-semibold uppercase text-primary">TENEX usluge</div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">{service.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">{service.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/#kontakt" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground">Zatražite procjenu <ArrowRight className="h-4 w-4" /></a>
                <a href={siteConfig.contact.phone.href} className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 font-semibold backdrop-blur"><Phone className="h-4 w-4 text-primary" /> {siteConfig.contact.phone.value}</a>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><div className="text-sm font-semibold uppercase text-primary">Obuhvat usluge</div><h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Jasan dogovor prije početka radova</h2><p className="mt-4 leading-relaxed text-muted-foreground">Lokacija i stvarni obim određuju potrebnu mehanizaciju, dinamiku i cijenu. Zato ponudu formiramo nakon osnovnih podataka i, kada je potrebno, obilaska terena.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">{service.benefits.map((benefit) => <div key={benefit} className="flex min-h-24 items-start gap-3 rounded-2xl border border-border/60 bg-card p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="font-medium leading-relaxed">{benefit}</span></div>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
