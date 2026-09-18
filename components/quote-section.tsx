"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, MapPin, PlaneTakeoff, Sparkles } from "lucide-react"

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="devis" className="relative scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
            <Sparkles className="size-4" />
            Obtenez un devis
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Service VTC fiable et ponctuel
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Zakaria, votre chauffeur VTC expérimenté, vous accompagne dans tous vos
            déplacements en Provence-Alpes-Côte d’Azur et ses alentours. Réservez
            simplement, profitez d’un service premium, d’un véhicule propre et confortable,
            et d’une ponctualité sans faille.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: PlaneTakeoff, text: "Transferts aéroports & gares" },
              { icon: MapPin, text: "Trajets pros & personnels" },
              { icon: CheckCircle2, text: "Véhicule propre & confortable" },
              { icon: CheckCircle2, text: "Sur mesure et bienveillant" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <item.icon className="size-5" />
                </span>
                <span className="text-sm text-foreground/90">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            <h3 className="font-display text-xl font-bold">
              Demander un devis pour votre <span className="text-primary">trajet</span>
            </h3>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-primary/25 bg-primary/8 py-10 text-center">
                <CheckCircle2 className="size-12 text-primary" />
                <p className="font-display text-lg font-semibold">Demande envoyée !</p>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Merci, nous revenons vers vous très rapidement pour confirmer votre trajet.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-primary hover:underline"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nom" name="nom" placeholder="Votre nom" required />
                  <Field label="Email" name="email" type="email" placeholder="vous@email.com" required />
                </div>
                <Field label="Téléphone" name="tel" type="tel" placeholder="06 12 34 56 78" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Lieu de départ" name="depart" placeholder="Avignon…" required />
                  <Field label="Lieu d’arrivée" name="arrivee" placeholder="Aéroport Marseille…" required />
                </div>
                <Field label="Date et heure" name="date" type="datetime-local" required />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/90">
                    Message <span className="text-muted-foreground">(facultatif)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Nombre de passagers, bagages, précisions…"
                    className="w-full resize-none rounded-lg border border-input bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                >
                  Demander un devis
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground/90">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background/50 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30 [color-scheme:dark]"
      />
    </div>
  )
}
