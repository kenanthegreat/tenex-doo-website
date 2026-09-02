import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const siteUrl = "https://tenex-doo.vercel.app"

export const metadata: Metadata = {
  title: "TENEX | Niskogradnja i iskopi Sarajevo",
  description:
    "Niskogradnja, iskopi, prevoz materijala i rušenja u Sarajevu i široj BiH. Pošaljite upit i očekujte odgovor u roku od 24h.",
  keywords: ["niskogradnja Sarajevo", "iskopi Sarajevo", "rušenje objekata", "prevoz materijala", "uređenje terena", "TENEX"],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/2.5dlogo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/2.5dlogo.png",
  },
  openGraph: {
    title: "TENEX | Niskogradnja i iskopi Sarajevo",
    description: "Niskogradnja, iskopi, prevoz i rušenja u Sarajevu i široj BiH.",
    url: siteUrl,
    type: "website",
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/hero-demolition.jpg",
        width: 1200,
        height: 630,
        alt: "TENEX niskogradnja i iskopi u Sarajevu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TENEX | Niskogradnja i iskopi Sarajevo",
    description: "Niskogradnja, iskopi, prevoz i rušenja u Sarajevu i široj BiH.",
    images: ["/hero-demolition.jpg"],
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "GeneralContractor"],
              name: siteConfig.companyName,
              url: siteUrl,
              telephone: siteConfig.contact.phone.value,
              email: siteConfig.contact.email.value,
              areaServed: siteConfig.serviceArea,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.addressLine1,
                addressLocality: siteConfig.city,
                addressRegion: "BiH",
              },
              logo: `${siteUrl}/2.5dlogo.png`,
              foundingDate: String(siteConfig.foundedYear),
              openingHours: "Mo-Fr 08:00-16:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usluge niskogradnje",
                itemListElement: ["Iskopi i priprema terena", "Rušenje objekata", "Prevoz materijala", "Niskogradnja"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
