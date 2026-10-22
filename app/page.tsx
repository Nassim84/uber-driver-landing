import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { QuoteSection } from "@/components/quote-section";
import { Strengths } from "@/components/strengths";
import { Destinations } from "@/components/destinations";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
	openGraph: { url: "/" },
};

const SERVED_CITIES = [
	"Avignon",
	"Aix-en-Provence",
	"Marseille",
	"Nîmes",
	"Arles",
	"Montpellier",
];

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			// Aide Google à afficher « N-drive » comme nom du site dans les résultats
			"@type": "WebSite",
			"@id": "https://ndrive.fr/#website",
			url: "https://ndrive.fr/",
			name: "N-drive",
			alternateName: ["Ndrive", "N drive"],
			inLanguage: "fr-FR",
			publisher: { "@id": "https://ndrive.fr/#business" },
		},
		{
			"@type": "LocalBusiness",
			"@id": "https://ndrive.fr/#business",
			name: "N-drive",
			description:
				"Chauffeur privé VTC basé à Avignon, disponible 24h/24 et 7j/7 : transferts aéroports et gares TGV, trajets professionnels et personnels en Provence.",
			url: "https://ndrive.fr/",
			telephone: "+33767603284",
			email: "ned.driver84@gmail.com",
			logo: "https://ndrive.fr/apple-icon.png",
			image: "https://ndrive.fr/images/og-image.jpg",
			priceRange: "€€",
			paymentAccepted: "Carte bancaire, Espèces, Virement",
			currenciesAccepted: "EUR",
			// Zone d'intervention sans adresse précise, comme sur la fiche Google
			address: {
				"@type": "PostalAddress",
				addressLocality: "Avignon",
				postalCode: "84000",
				addressRegion: "Provence-Alpes-Côte d'Azur",
				addressCountry: "FR",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: 43.9493,
				longitude: 4.8055,
			},
			areaServed: SERVED_CITIES.map((name) => ({ "@type": "City", name })),
			openingHoursSpecification: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday",
				],
				opens: "00:00",
				closes: "23:59",
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Services de chauffeur privé VTC",
				itemListElement: [
					"Transfert aéroport",
					"Transfert gare TGV",
					"Trajet professionnel",
					"Trajet personnel et soirée",
				].map((name) => ({
					"@type": "Offer",
					itemOffered: { "@type": "Service", name },
				})),
			},
			sameAs: ["https://share.google/GVobeOqawkdLyivQR"],
		},
	],
};

export default function Page() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd),
				}}
			/>
			<SiteHeader />
			<main>
				<Hero />
				<QuoteSection />
				<Strengths />
				<Destinations />
				<Reviews />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	);
}
