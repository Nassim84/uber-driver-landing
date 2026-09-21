import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
	metadataBase: new URL("https://ndrive.fr"),
	title: {
		default: "Chauffeur privé VTC Avignon | Aéroport & gare – Ned Driver",
		template: "%s | Ned Driver",
	},
	description:
		"Chauffeur privé VTC à Avignon 24h/24 : transferts aéroport Marseille, gares TGV, Aix, Nîmes, Montpellier. Devis gratuit en quelques minutes.",
	applicationName: "Ned Driver",
	keywords: [
		"VTC Avignon",
		"chauffeur privé Avignon",
		"transfert aéroport Marseille",
		"VTC Aix-en-Provence",
		"chauffeur Provence",
		"Ned Driver",
	],
	authors: [{ name: "Ned Driver" }],
	creator: "Ned Driver",
	publisher: "Ned Driver",
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		siteName: "Ned Driver",
		title: "Ned Driver | Chauffeur privé VTC en Provence",
		description:
			"Chauffeur privé disponible 24h/24 et 7j/7 pour vos trajets en Provence.",
		images: [
			{
				url: "/images/hero-car.png",
				width: 1536,
				height: 1024,
				alt: "Berline de chauffeur privé Ned Driver",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ned Driver | Chauffeur privé VTC en Provence",
		description: "Chauffeur privé disponible 24h/24 et 7j/7 en Provence.",
		images: ["/images/hero-car.png"],
	},
	icons: {
		icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
		apple: "/apple-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: "#111417",
	colorScheme: "dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${inter.variable} ${sora.variable} bg-background light`}
		>
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
