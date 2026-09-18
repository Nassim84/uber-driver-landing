import { ChevronRight } from "lucide-react"

const NAV = [
  { label: "Accueil", href: "#accueil" },
  { label: "Demande de devis", href: "#devis" },
  { label: "Notre priorité", href: "#priorite" },
  { label: "Destinations", href: "#destinations" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
]

const CONTACT = [
  { label: "Avignon, 84000", href: null },
  { label: "+33 7 67 60 32 84", href: "tel:+33767603284" },
  { label: "ned.driver84@gmail.com", href: "mailto:ned.driver84@gmail.com" },
  { label: "ndrive.fr", href: "https://ndrive.fr" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <a href="#accueil" className="flex items-center gap-1 font-display text-2xl font-bold">
            <span className="text-foreground">Ned</span>
            <span className="text-primary">Driver</span>
          </a>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Chauffeur privé disponible 24h/24 et 7j/7 pour tous vos déplacements :
            aéroports, trajets professionnels ou personnels. Un service fiable, ponctuel et
            sur mesure, pensé pour votre confort.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide">Navigation</h3>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary">
                  <ChevronRight className="size-3.5 text-primary" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <ul className="mt-5 grid gap-3 text-sm">
            {CONTACT.map((item) => (
              <li key={item.label} className="inline-flex items-center gap-1.5">
                <ChevronRight className="size-3.5 shrink-0 text-primary" />
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Ned Driver — Tous droits réservés.</p>
          <p>Chauffeur privé VTC · Provence-Alpes-Côte d’Azur</p>
        </div>
      </div>
    </footer>
  )
}
