import { Clock, CreditCard, Car, HeartHandshake, MapPinned, ShieldCheck } from "lucide-react"

const STRENGTHS = [
  {
    icon: Clock,
    title: "Ponctualité garantie",
    text: "Toujours à l’heure, avec un suivi de vos horaires de vol et de train pour ne jamais vous faire attendre.",
  },
  {
    icon: Car,
    title: "Véhicule premium",
    text: "Une berline propre, confortable et entretenue, pour voyager dans les meilleures conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & sérénité",
    text: "Conduite souple et sécurisée par un chauffeur professionnel qui connaît parfaitement la région.",
  },
  {
    icon: HeartHandshake,
    title: "Service sur mesure",
    text: "Chaque trajet est pensé pour vous : accueil personnalisé, discrétion et attention aux détails.",
  },
  {
    icon: MapPinned,
    title: "Toute la région",
    text: "Aéroports, gares, événements ou longues distances en Provence-Alpes-Côte d’Azur et au-delà.",
  },
  {
    icon: CreditCard,
    title: "Tarifs transparents",
    text: "Un devis clair et sans surprise, communiqué à l’avance pour chacun de vos déplacements.",
  },
]

export function Strengths() {
  return (
    <section id="priorite" className="scroll-mt-20 border-y border-border bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Votre confort, notre priorité
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Bien plus qu’un simple trajet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ce qui fait la différence : un service premium construit autour de votre
            tranquillité, du premier appel jusqu’à l’arrivée.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition-colors hover:border-primary/40"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-105">
                <item.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
