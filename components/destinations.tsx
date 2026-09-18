"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const CITIES = [
  { name: "Avignon", img: "/images/avignon.png" },
  { name: "Aéroport Marseille Provence", img: "/images/aeroport.png" },
  { name: "Marseille", img: "/images/marseille.png" },
  { name: "Aix-en-Provence", img: "/images/aix.png" },
  { name: "Montpellier", img: "/images/montpellier.png" },
  { name: "Nîmes", img: "/images/nimes.png" },
]

export function Destinations() {
  const [active, setActive] = useState(0)

  return (
    <section id="destinations" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Nos destinations
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Principales destinations desservies
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Survolez une destination pour la découvrir. Et bien d’autres encore sur simple
            demande.
          </p>
        </div>

        {/* Desktop expanding accordion */}
        <div className="mt-14 hidden gap-3 lg:flex lg:h-[26rem]">
          {CITIES.map((city, i) => (
            <button
              key={city.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={city.name}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border transition-all duration-500 ease-out",
                active === i ? "flex-[5]" : "flex-[1]",
              )}
            >
              <Image
                src={city.img || "/placeholder.svg"}
                alt={`Trajet VTC vers ${city.name}`}
                fill
                sizes="(max-width: 1024px) 0px, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 p-5 text-left font-display font-bold text-foreground transition-all duration-300",
                  active === i
                    ? "text-2xl [writing-mode:horizontal-tb]"
                    : "text-sm [writing-mode:vertical-rl] rotate-180",
                )}
              >
                {city.name}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {CITIES.map((city) => (
            <div key={city.name} className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <Image
                src={city.img || "/placeholder.svg"}
                alt={`Trajet VTC vers ${city.name}`}
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-foreground">
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
