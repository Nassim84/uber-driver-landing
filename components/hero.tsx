import Image from "next/image"
import { ArrowRight, Clock, Phone, ShieldCheck, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-car.png"
          alt="Berline noire de luxe Ned Driver la nuit en ville"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Disponible 24h/24 · 7j/7
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Votre chauffeur privé <span className="text-primary">en Provence</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Transferts aéroports, trajets professionnels ou personnels. Un service VTC
            fiable, ponctuel et sur mesure, pensé pour votre confort.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Demander un devis
              <ArrowRight className="size-5" />
            </a>
            <a
              href="tel:+33767603284"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Phone className="size-5" />
              +33 7 67 60 32 84
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              { icon: Clock, label: "Ponctualité", value: "100%" },
              { icon: ShieldCheck, label: "Trajets sécurisés", value: "Pro" },
              { icon: Star, label: "Note clients", value: "4,9/5" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <stat.icon className="size-5 text-primary" />
                <dd className="font-display text-2xl font-bold">{stat.value}</dd>
                <dt className="text-xs text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
