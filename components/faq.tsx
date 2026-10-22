import { ChevronDown } from "lucide-react"

const FAQ = [
  {
    question: "Comment réserver un VTC avec N-drive ?",
    answer:
      "Remplissez le formulaire de demande de devis ou appelez directement le +33 7 67 60 32 84. Zakaria vous recontacte rapidement pour confirmer le trajet et le prix.",
  },
  {
    question: "Combien coûte une course ?",
    answer:
      "Chaque trajet fait l’objet d’un devis gratuit et personnalisé, selon la distance, l’horaire et vos besoins. Le prix est toujours annoncé avant la course : aucune surprise à l’arrivée.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Tous les moyens de paiement courants sont acceptés : carte bancaire, espèces ou virement.",
  },
  {
    question: "Puis-je réserver une course à la dernière minute ?",
    answer:
      "Oui, selon la disponibilité du chauffeur et sa distance du point de départ. Le plus simple est d’appeler directement. Pour un trajet important (aéroport, gare), mieux vaut réserver à l’avance.",
  },
  {
    question: "Quelles villes desservez-vous ?",
    answer:
      "N-drive est basé à Avignon et intervient dans toute la région : Aix-en-Provence, Nîmes, Arles, Marseille, Montpellier, ainsi que les aéroports et gares TGV.",
  },
  {
    question: "Que se passe-t-il si mon vol ou mon train a du retard ?",
    answer:
      "Pas d’inquiétude : votre chauffeur suit votre arrivée et vous attend, sans frais supplémentaires.",
  },
  {
    question: "Puis-je annuler ma réservation ?",
    answer: "Oui, l’annulation est gratuite si vous prévenez au plus tard la veille du trajet.",
  },
  {
    question: "Voyagez-vous avec des enfants ou des animaux ?",
    answer:
      "Oui. Un siège enfant est disponible et les animaux sont les bienvenus : précisez-le simplement lors de votre demande de devis.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Questions fréquentes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tout savoir sur votre trajet VTC
          </h2>
        </div>

        <div className="mt-12 grid gap-3">
          {FAQ.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card/40 transition-colors open:border-primary/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
