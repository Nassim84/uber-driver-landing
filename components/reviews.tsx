import { Star } from "lucide-react"

const REVIEWS = [
  {
    name: "Camille R.",
    trip: "Transfert Aéroport Marseille",
    text: "Chauffeur ponctuel et très professionnel. Véhicule impeccable et trajet ultra confortable. Je recommande vivement pour les transferts aéroport !",
  },
  {
    name: "Julien M.",
    trip: "Trajet professionnel · Aix",
    text: "Service au top pour mes déplacements pros. Toujours à l’heure, discret et de bon conseil. Un vrai gain de sérénité au quotidien.",
  },
  {
    name: "Sophie L.",
    trip: "Soirée · Avignon",
    text: "Réservation simple et rapide, chauffeur adorable. On s’est sentis en sécurité toute la soirée. Merci Ned Driver !",
  },
  {
    name: "Karim B.",
    trip: "Nîmes → Montpellier",
    text: "Excellent rapport qualité-prix, devis clair et aucune surprise. La ponctualité est vraiment au rendez-vous.",
  },
]

export function Reviews() {
  return (
    <section id="avis" className="scroll-mt-20 border-y border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Ils nous font confiance
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Les avis de nos clients
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4,9/5 · clients satisfaits</span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex gap-0.5" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.trip}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
