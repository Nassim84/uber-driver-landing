import { ExternalLink, Star } from "lucide-react"

const GOOGLE_REVIEWS_URL = "https://share.google/GVobeOqawkdLyivQR"
const GOOGLE_RATING = "5,0"
const GOOGLE_REVIEW_COUNT = 33

// Avis réels copiés depuis la fiche Google Business Profile « N-drive »
const REVIEWS = [
  {
    name: "Juliette B.",
    date: "Mars 2026",
    text: "Chauffeur très professionnel, ponctuel et très agréable. Véhicule impeccable et conduite vraiment confortable. On se sent en confiance du début à la fin du trajet. Je recommande sans hésiter !",
  },
  {
    name: "Richard B.",
    date: "Mars 2026",
    text: "Deuxième expérience avec la compagnie ndrive et toujours top ! Chauffeur très professionnel souriant et ponctuel, de plus Zakaria a une conduite très souple je recommande",
  },
  {
    name: "Zizou A.",
    date: "Mars 2026",
    text: "Excellent service un grand merci à la compagnie Ndrive je recommande ce chauffeur sur Avignon souriant sympathique et qui connaît parfaitement les routes d’Avignon",
  },
  {
    name: "Mina M.",
    date: "Mai 2026",
    text: "Très bonne expérience, ponctuel avec très bonne conduite. Donne des informations utiles. Nous sommes très contents du service, nous recommandons.",
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
            <span className="text-sm text-muted-foreground">
              {GOOGLE_RATING}/5 · {GOOGLE_REVIEW_COUNT} avis Google
            </span>
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
                <p className="text-xs text-muted-foreground">Avis Google · {review.date}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Voir les {GOOGLE_REVIEW_COUNT} avis sur Google
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
