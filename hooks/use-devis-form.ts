import { useState } from "react";
import { validateDevis, submitDevis, type DevisData } from "@/lib/devis";

export function useDevisForm() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	async function handleSubmit(form: HTMLFormElement) {
		setError(null);

		const data: DevisData = {
			Nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
			Email: (form.elements.namedItem("email") as HTMLInputElement).value,
			Telephone: (
				form.elements.namedItem("tel") as HTMLInputElement
			).value.replace(/[\s-]/g, ""),
			Depart: (form.elements.namedItem("depart") as HTMLInputElement).value,
			Arrivee: (form.elements.namedItem("arrivee") as HTMLInputElement).value,
			DateHeure: new Date(
				(form.elements.namedItem("date") as HTMLInputElement).value,
			).toISOString(),
			Message: (form.elements.namedItem("message") as HTMLTextAreaElement)
				.value,
		};

		const validationError = validateDevis(data);
		if (validationError) {
			setError(validationError);
			return;
		}

		setLoading(true);
		try {
			await submitDevis(data);
			setSubmitted(true);
		} catch (err) {
			console.error("❌ Erreur envoi devis:", err);
			setError(
				"❌ Une erreur est survenue lors de l'envoi du devis. Réessayez ou appelez-nous directement.",
			);
		} finally {
			setLoading(false);
		}
	}

	function reset() {
		setSubmitted(false);
		setError(null);
	}

	return { loading, error, submitted, handleSubmit, reset };
}
