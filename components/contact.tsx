import { Clock, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-card p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-16 -top-16 -z-0 size-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold tracking-wide text-primary uppercase">
                Contact
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Disponible 24h/24 et 7j/7 pour répondre à vos appels
              </h2>
              <a
                href="tel:+33767603284"
                className="mt-6 inline-block font-display text-4xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80 sm:text-5xl"
              >
                +33 7 67 60 32 84
              </a>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+33767603284"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="size-5" />
                  Appeler maintenant
                </a>
                <a
                  href="#devis"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-background"
                >
                  Demander un devis
                </a>
              </div>
            </div>

            <ul className="grid gap-4">
              {[
                { icon: MapPin, label: "Zone", value: "Avignon, 84000 · Provence-Alpes-Côte d’Azur" },
                { icon: Phone, label: "Téléphone", value: "+33 7 67 60 32 84", href: "tel:+33767603284" },
                { icon: Mail, label: "Email", value: "ned.driver84@gmail.com", href: "mailto:ned.driver84@gmail.com" },
                { icon: Clock, label: "Disponibilité", value: "24h/24 · 7j/7" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
