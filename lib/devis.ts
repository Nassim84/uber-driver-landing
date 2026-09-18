export type DevisData = {
	Nom: string;
	Email: string;
	Telephone: string;
	Depart: string;
	Arrivee: string;
	DateHeure: string;
	Message: string;
};

export function validateDevis(data: DevisData): string | null {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(data.Email)) {
		return "⚠️ Email invalide";
	}

	const cleanedPhone = data.Telephone.replace(/[\s-]/g, "");
	const phoneRegex = /^(\+?\d{1,3})?\d{9,10}$/;
	if (!phoneRegex.test(cleanedPhone)) {
		return "⚠️ Téléphone invalide";
	}

	if (data.Depart.toLowerCase() === data.Arrivee.toLowerCase()) {
		return "⚠️ Le départ et l'arrivée ne peuvent pas être identiques";
	}

	const now = new Date();
	const dateInput = new Date(data.DateHeure);
	if (dateInput <= now) {
		return "⚠️ La date doit être dans le futur";
	}

	return null;
}

export async function submitDevis(data: DevisData): Promise<void> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_DEVIS_API_URL ??
			"https://uber-iiia.onrender.com/api/devis",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		},
	);

	if (!res.ok) {
		throw new Error("Erreur réseau");
	}

	await res.json();
}
