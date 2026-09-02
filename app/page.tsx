import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { EquipmentSection } from "@/components/equipment-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MarqueeSection } from "@/components/marquee-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProjectsSection } from "@/components/projects-section"
import { StickyCTA } from "@/components/sticky-cta"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollProgress } from "@/components/scroll-progress"
import { CTASection } from "@/components/cta-section"
import { VideoHighlightsSection } from "@/components/video-highlights-section"
import { RepromaterijalSection } from "@/components/repromaterijal-section"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll>
        <main className="relative overflow-hidden section-compact pb-40 md:pb-0">
          <Navigation />
          <HeroSection />
          <MarqueeSection />
          <ServicesSection />
          <ProjectsSection />
          <VideoHighlightsSection />
          <EquipmentSection />
          <AboutSection />
          <RepromaterijalSection />
          <TestimonialsSection />
          <CTASection />
          <ContactSection />
          <Footer />
        </main>
      </SmoothScroll>
      <StickyCTA />
    </>
  )
}
