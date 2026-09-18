import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et informations réglementaires de Ned Driver, chauffeur privé VTC en Provence.',
  alternates: { canonical: '/mentions-legales' },
}

const sections = [
  ['Éditeur du site', <>Le présent site est édité par <strong>Ned Driver</strong>, activité de chauffeur privé VTC.<br />Adresse : Avignon, 84000, France<br />Téléphone : <a href="tel:+33767603284">+33 7 67 60 32 84</a><br />E-mail : <a href="mailto:ned.driver84@gmail.com">ned.driver84@gmail.com</a></>],
  ['Hébergement', <>Le site est hébergé par Vercel Inc.<br />340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br /><a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a></>],
  ['Propriété intellectuelle', <>L’ensemble des contenus présents sur ce site — textes, photographies, identité visuelle et éléments graphiques — est protégé par les dispositions françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.</>],
  ['Données personnelles', <>Les informations transmises via le formulaire de demande de devis sont utilisées uniquement pour répondre à votre demande et organiser votre trajet. Elles ne sont pas vendues ni cédées à des tiers. Vous pouvez exercer vos droits d’accès, de rectification ou d’effacement en écrivant à <a href="mailto:ned.driver84@gmail.com">ned.driver84@gmail.com</a>.</>],
  ['Cookies', <>Ce site utilise uniquement les cookies strictement nécessaires à son fonctionnement, le cas échéant. Les outils de mesure d’audience ou services tiers seront indiqués et soumis à votre consentement lorsqu’il est requis.</>],
  ['Responsabilité', <>Ned Driver s’efforce d’assurer l’exactitude et la disponibilité des informations publiées. Les horaires, zones desservies et modalités de réservation peuvent évoluer. Les informations contractuelles applicables à une course sont confirmées lors de la réservation.</>],
]

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="size-4" /> Retour à l’accueil</Link>
        <header className="mt-16 border-b border-border pb-10">
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary"><ShieldCheck className="size-6" /></div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Informations réglementaires</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">Mentions légales</h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Les informations essentielles concernant l’éditeur, l’hébergement et l’utilisation de vos données.</p>
        </header>
        <div className="divide-y divide-border">
          {sections.map(([title, content]) => <section key={title as string} className="grid gap-4 py-9 md:grid-cols-[220px_1fr] md:gap-10"><h2 className="font-display text-lg font-medium">{title as string}</h2><div className="leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground">{content}</div></section>)}
        </div>
        <p className="border-t border-border pt-6 text-sm text-muted-foreground">Dernière mise à jour : 31 août 2026</p>
      </div>
    </main>
  )
}
