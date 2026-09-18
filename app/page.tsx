import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { QuoteSection } from "@/components/quote-section"
import { Strengths } from "@/components/strengths"
import { Destinations } from "@/components/destinations"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ndrive.fr/#business',
  name: 'Ned Driver',
  description: 'Chauffeur privé VTC disponible 24h/24 et 7j/7 en Provence.',
  url: 'https://ndrive.fr/',
  telephone: '+33767603284',
  email: 'ned.driver84@gmail.com',
  image: 'https://ndrive.fr/images/hero-car.png',
  priceRange: '€€',
  areaServed: ['Avignon', 'Marseille', 'Aix-en-Provence', 'Montpellier', 'Nîmes'],
  openingHours: 'Mo-Su 00:00-23:59',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <SiteHeader />
      <main>
        <Hero />
        <QuoteSection />
        <Strengths />
        <Destinations />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
