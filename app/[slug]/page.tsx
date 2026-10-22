import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, Clock, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { QuoteSection } from "@/components/quote-section";
import { Reviews } from "@/components/reviews";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { DESTINATIONS, getDestination } from "@/lib/destinations";

type Props = { params: Promise<{ slug: string }> };

// Seules les pages listées dans lib/destinations.ts existent, le reste renvoie une 404
export const dynamicParams = false;

export function generateStaticParams() {
	return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const destination = getDestination((await params).slug);
	if (!destination) return {};

	const url = `/${destination.slug}`;
	return {
		title: destination.title,
		description: destination.description,
		alternates: { canonical: url },
		openGraph: {
			type: "website",
			locale: "fr_FR",
			siteName: "N-drive",
			url,
			title: `${destination.title} | N-drive`,
			description: destination.description,
			images: [
				{
					url: "/images/og-image.jpg",
					width: 1200,
					height: 630,
					alt: "Berline de chauffeur privé N-drive",
				},
			],
		},
	};
}

export default async function DestinationPage({ params }: Props) {
	const destination = getDestination((await params).slug);
	if (!destination) notFound();

	const url = `https://ndrive.fr/${destination.slug}`;
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ndrive.fr/" },
					{ "@type": "ListItem", position: 2, name: destination.h1, item: url },
				],
			},
			{
				"@type": "Service",
				name: destination.h1,
				serviceType: "Chauffeur privé VTC",
				description: destination.description,
				url,
				areaServed: { "@type": "City", name: destination.name },
				provider: {
					"@type": "LocalBusiness",
					"@id": "https://ndrive.fr/#business",
					name: "N-drive",
					telephone: "+33767603284",
					url: "https://ndrive.fr/",
				},
			},
		],
	};
	const others = DESTINATIONS.filter((d) => d.slug !== destination.slug);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<SiteHeader />
			<main>
				<section className="relative isolate overflow-hidden">
					<div className="absolute inset-0 -z-10">
						<Image
							src={destination.image}
							alt={destination.imageAlt}
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
						<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
					</div>

					<div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28">
						<nav aria-label="Fil d’Ariane" className="text-sm text-muted-foreground">
							<ol className="flex flex-wrap items-center gap-1.5">
								<li>
									<Link href="/" className="transition-colors hover:text-primary">
										Accueil
									</Link>
								</li>
								<li aria-hidden="true">
									<ChevronRight className="size-3.5" />
								</li>
								<li className="text-foreground">{destination.name}</li>
							</ol>
						</nav>

						<div className="max-w-2xl">
							<h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
								{destination.h1}
							</h1>
							<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
								{destination.intro}
							</p>

							<div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
								<a
									href="#devis"
									className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5"
								>
									Demander un devis gratuit
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
						</div>
					</div>
				</section>

				<section className="border-y border-border bg-card/40 py-20 lg:py-24">
					<div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-16 lg:px-8">
						<div className="grid content-start gap-10">
							{destination.sections.map((section) => (
								<div key={section.title}>
									<h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
										{section.title}
									</h2>
									<p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
										{section.text}
									</p>
								</div>
							))}
						</div>

						<aside className="h-fit rounded-2xl border border-border bg-background p-6 sm:p-8">
							<h2 className="font-display text-lg font-semibold">Lieux desservis</h2>
							<ul className="mt-5 grid gap-3">
								{destination.places.map((place) => (
									<li key={place} className="flex items-start gap-3 text-sm text-foreground/90">
										<MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
										{place}
									</li>
								))}
							</ul>
							{destination.travel && (
								<p className="mt-6 flex items-start gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
									<Clock className="mt-0.5 size-4 shrink-0 text-primary" />
									{destination.travel}
								</p>
							)}
							<p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
								Chaque trajet fait l’objet d’un devis gratuit : le prix vous est
								annoncé avant la course.
							</p>
						</aside>
					</div>
				</section>

				<QuoteSection />
				<Reviews />

				<section className="py-20 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
							Nos autres destinations
						</h2>
						<ul className="mt-10 flex flex-wrap justify-center gap-3">
							{others.map((d) => (
								<li key={d.slug}>
									<Link
										href={`/${d.slug}`}
										className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
									>
										<MapPin className="size-4 text-primary" />
										{d.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>

				<Contact />
			</main>
			<SiteFooter />
		</div>
	);
}
