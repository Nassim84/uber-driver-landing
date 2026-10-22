import type { MetadataRoute } from "next";
import { DESTINATIONS } from "@/lib/destinations";

const BASE_URL = "https://ndrive.fr";

// Généré au build : chaque page ajoutée dans lib/destinations.ts y apparaît automatiquement
export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return [
		{ url: `${BASE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
		...DESTINATIONS.map((d) => ({
			url: `${BASE_URL}/${d.slug}`,
			lastModified,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
		{ url: `${BASE_URL}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.3 },
		{
			url: `${BASE_URL}/politique-de-confidentialite`,
			lastModified,
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
}
