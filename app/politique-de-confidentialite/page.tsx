import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment N-drive, chauffeur privé VTC à Avignon, collecte et protège les données transmises via le formulaire de devis.',
  alternates: { canonical: '/politique-de-confidentialite' },
}

const sections = [
  ['Responsable du traitement', <><strong>N-drive</strong>, chauffeur privé VTC, Avignon (84000), France.<br />Contact : <a href="mailto:ned.driver84@gmail.com">ned.driver84@gmail.com</a> · <a href="tel:+33767603284">+33 7 67 60 32 84</a></>],
  ['Données collectées', <>Lorsque vous demandez un devis, nous recevons : votre nom, votre adresse e-mail, votre numéro de téléphone, les lieux de départ et d’arrivée, la date et l’heure du trajet, ainsi que votre message éventuel. Aucune autre donnée n’est demandée.</>],
  ['Finalité et base légale', <>Ces données servent uniquement à répondre à votre demande de devis, à vous recontacter et à organiser votre trajet. Le traitement repose sur l’exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD). Elles ne sont ni vendues, ni louées, ni utilisées à des fins de prospection commerciale.</>],
  ['Destinataires', <>Les données sont destinées exclusivement à N-drive. Pour fonctionner, le site fait appel à des prestataires techniques qui n’y accèdent que pour assurer leur service : <strong>Netlify</strong> (hébergement du site), <strong>Render</strong> (hébergement du serveur qui traite le formulaire) et <strong>Brevo</strong> (acheminement de l’e-mail de demande de devis).</>],
  ['Transferts hors UE', <>Certains de ces prestataires sont établis aux États-Unis. Les transferts éventuels sont encadrés par les garanties prévues par le RGPD (Data Privacy Framework ou clauses contractuelles types de la Commission européenne).</>],
  ['Durée de conservation', <>Les demandes de devis sont conservées au maximum 3 ans à compter de notre dernier échange, puis supprimées. Les données liées à une course réalisée peuvent être conservées plus longtemps lorsque la loi l’impose (obligations comptables et fiscales).</>],
  ['Vos droits', <>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Pour les exercer, écrivez à <a href="mailto:ned.driver84@gmail.com">ned.driver84@gmail.com</a> ; nous répondons sous un mois. Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL</a>.</>],
  ['Cookies', <>Ce site ne dépose aucun cookie publicitaire ni de mesure d’audience. Aucun bandeau de consentement n’est donc nécessaire. Si cela devait changer, cette page serait mise à jour et votre consentement serait demandé au préalable.</>],
]

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="size-4" /> Retour à l’accueil</Link>
        <header className="mt-16 border-b border-border pb-10">
          <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary"><Lock className="size-6" /></div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Données personnelles</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">Politique de confidentialité</h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Ce que nous faisons des informations que vous nous transmettez, et comment garder la main dessus.</p>
        </header>
        <div className="divide-y divide-border">
          {sections.map(([title, content]) => <section key={title as string} className="grid gap-4 py-9 md:grid-cols-[220px_1fr] md:gap-10"><h2 className="font-display text-lg font-medium">{title as string}</h2><div className="leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground">{content}</div></section>)}
        </div>
        <p className="border-t border-border pt-6 text-sm text-muted-foreground">Dernière mise à jour : 22 octobre 2026</p>
      </div>
    </main>
  )
}
