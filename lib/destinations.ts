export type Destination = {
	slug: string;
	/** Nom court pour les liens et les cartes */
	name: string;
	/** Balise <title>, complétée par « | N-drive » via le layout */
	title: string;
	description: string;
	h1: string;
	intro: string;
	image: string;
	imageAlt: string;
	sections: { title: string; text: string }[];
	places: string[];
	/** Temps de trajet indicatif, sans prix (tout passe par le devis) */
	travel?: string;
};

export const DESTINATIONS: Destination[] = [
	{
		slug: "vtc-avignon",
		name: "Avignon",
		title: "VTC Avignon : chauffeur privé 24h/24",
		description:
			"Chauffeur privé VTC à Avignon 24h/24 et 7j/7 : centre-ville, gare TGV, aéroport, Le Pontet, Villeneuve-lès-Avignon. Devis gratuit et rappel rapide.",
		h1: "Chauffeur privé VTC à Avignon",
		intro:
			"Basé à Avignon, N-drive vous conduit partout dans la ville et ses environs, de jour comme de nuit. Un chauffeur qui connaît chaque rue de la cité des Papes, un véhicule propre et confortable, et un prix annoncé avant le départ.",
		image: "/images/avignon.webp",
		imageAlt: "Pont d’Avignon et palais des Papes au coucher du soleil",
		sections: [
			{
				title: "Un chauffeur local, disponible 24h/24",
				text: "Rendez-vous professionnel, soirée en ville, retour de restaurant ou départ très matinal : Zakaria vous prend en charge à l’adresse de votre choix, intra-muros comme en périphérie. Les rues étroites du centre historique n’ont pas de secret pour lui.",
			},
			{
				title: "Gares, aéroports et villes de la région",
				text: "Depuis Avignon, N-drive assure vos transferts vers la gare TGV, la gare centre, l’aéroport Avignon-Provence et l’aéroport Marseille Provence, ainsi que vers Aix-en-Provence, Nîmes, Arles ou Montpellier.",
			},
			{
				title: "Pendant le Festival d’Avignon",
				text: "En juillet, circuler et se garer en ville devient compliqué. Réservez votre chauffeur pour vos représentations et vos soirées : vous êtes déposé au plus près et récupéré à l’heure convenue.",
			},
		],
		places: [
			"Centre historique (intra-muros)",
			"Gare d’Avignon Centre",
			"Gare d’Avignon TGV",
			"Aéroport Avignon-Provence",
			"Le Pontet",
			"Villeneuve-lès-Avignon",
			"Montfavet",
			"Les Angles",
		],
	},
	{
		slug: "vtc-gare-tgv-avignon",
		name: "Gare TGV d’Avignon",
		title: "VTC gare TGV Avignon : chauffeur à l’arrivée de votre train",
		description:
			"Chauffeur privé VTC à la gare d’Avignon TGV : prise en charge à l’arrivée du train, attente gratuite en cas de retard, transferts vers Avignon et toute la région.",
		h1: "VTC à la gare TGV d’Avignon",
		intro:
			"La gare d’Avignon TGV se trouve à quelques kilomètres au sud du centre-ville, à Courtine. À la descente du train, votre chauffeur N-drive vous attend et vous conduit directement à destination, avec vos bagages.",
		image: "/images/hero-car.webp",
		imageAlt: "Berline de chauffeur privé N-drive",
		sections: [
			{
				title: "Votre train a du retard ? Aucun frais",
				text: "Votre chauffeur suit l’heure d’arrivée de votre train et vous attend sans supplément en cas de retard. Plus besoin de chercher un taxi ou de faire la queue à la sortie de la gare.",
			},
			{
				title: "Vers le centre-ville et toute la région",
				text: "Depuis la gare TGV, N-drive vous emmène dans le centre d’Avignon, au Pontet, à Villeneuve-lès-Avignon, mais aussi vers Arles, Nîmes, Aix-en-Provence ou les villages du Vaucluse.",
			},
			{
				title: "Pour vos départs aussi",
				text: "Vous prenez un train tôt le matin ? Réservez la veille : votre chauffeur vient vous chercher à domicile ou à l’hôtel et vous dépose devant la gare, à l’heure.",
			},
		],
		places: [
			"Gare d’Avignon TGV (Courtine)",
			"Gare d’Avignon Centre",
			"Centre-ville d’Avignon",
			"Hôtels du Grand Avignon",
			"Le Pontet",
			"Villeneuve-lès-Avignon",
		],
		travel: "Gare TGV → centre d’Avignon : environ 10 à 15 minutes, selon la circulation.",
	},
	{
		slug: "transfert-aeroport-marseille",
		name: "Aéroport Marseille Provence",
		title: "Transfert aéroport Marseille depuis Avignon en VTC",
		description:
			"Transfert VTC entre Avignon et l’aéroport Marseille Provence (Marignane) : chauffeur ponctuel, suivi de votre vol, attente gratuite en cas de retard. Devis gratuit.",
		h1: "Transfert VTC Avignon – Aéroport Marseille Provence",
		intro:
			"Pour prendre l’avion à Marseille Provence sans stress, N-drive vous conduit d’Avignon jusqu’au terminal, et vient vous chercher à votre retour. Fini le parking longue durée et les navettes avec correspondance.",
		image: "/images/aeroport.webp",
		imageAlt: "Terminal d’aéroport avec un avion au décollage",
		sections: [
			{
				title: "Un départ à l’heure, sans stress",
				text: "Votre chauffeur fixe l’heure de prise en charge en fonction de votre vol et de la circulation, pour vous déposer en avance au terminal 1 ou au terminal 2. Vols très matinaux compris : le service fonctionne 24h/24.",
			},
			{
				title: "Au retour, votre chauffeur vous attend",
				text: "Il suit l’arrivée de votre vol. En cas de retard, il patiente sans frais supplémentaires et vous accueille à la sortie, prêt à charger vos bagages.",
			},
			{
				title: "Familles et animaux bienvenus",
				text: "Un siège enfant est disponible et les animaux sont acceptés : précisez-le simplement lors de votre demande de devis.",
			},
		],
		places: [
			"Aéroport Marseille Provence – Terminal 1",
			"Aéroport Marseille Provence – Terminal 2",
			"Avignon et ses environs",
			"Gare d’Avignon TGV",
			"Aix-en-Provence",
		],
		travel: "Avignon → aéroport Marseille Provence : environ 1 heure, selon la circulation.",
	},
	{
		slug: "vtc-aix-en-provence",
		name: "Aix-en-Provence",
		title: "VTC Aix-en-Provence : chauffeur privé depuis Avignon",
		description:
			"Chauffeur privé VTC entre Avignon et Aix-en-Provence : gare Aix TGV, centre-ville, trajets professionnels et soirées. Disponible 24h/24, devis gratuit.",
		h1: "Chauffeur privé VTC Avignon – Aix-en-Provence",
		intro:
			"Rendez-vous d’affaires, train à la gare d’Aix TGV ou soirée sur le cours Mirabeau : N-drive relie Avignon et Aix-en-Provence en toute sérénité, avec un chauffeur ponctuel et discret.",
		image: "/images/aix.webp",
		imageAlt: "Cours Mirabeau et fontaine de la Rotonde à Aix-en-Provence",
		sections: [
			{
				title: "Trajets professionnels",
				text: "Travaillez ou passez vos appels pendant le trajet. Votre chauffeur vous dépose devant votre rendez-vous, au pôle d’activités ou en centre-ville, et vous ramène à l’heure convenue.",
			},
			{
				title: "Gare d’Aix-en-Provence TGV",
				text: "La gare TGV d’Aix, sur le plateau de l’Arbois, est à une quinzaine de kilomètres du centre. Votre chauffeur vous y dépose ou vous y récupère, quelle que soit l’heure.",
			},
		],
		places: [
			"Centre-ville et cours Mirabeau",
			"Gare d’Aix-en-Provence TGV",
			"Pôle d’activités d’Aix-les-Milles",
			"Aéroport Marseille Provence",
		],
		travel: "Avignon → Aix-en-Provence : environ 1 heure, selon la circulation.",
	},
	{
		slug: "vtc-marseille",
		name: "Marseille",
		title: "VTC Avignon Marseille : chauffeur privé",
		description:
			"Trajet en VTC entre Avignon et Marseille : gare Saint-Charles, Vieux-Port, terminal de croisière, aéroport. Chauffeur privé 24h/24, prix annoncé à l’avance.",
		h1: "Chauffeur privé VTC Avignon – Marseille",
		intro:
			"Gare Saint-Charles, Vieux-Port, rendez-vous professionnel ou embarquement au terminal de croisière : N-drive vous conduit d’Avignon à Marseille, porte à porte, sans changement ni stationnement à chercher.",
		image: "/images/marseille.webp",
		imageAlt: "Vieux-Port de Marseille et Notre-Dame-de-la-Garde",
		sections: [
			{
				title: "Croisières au départ de Marseille",
				text: "Vous embarquez au port de Marseille ? Votre chauffeur vous dépose au terminal de croisière avec vos valises, et peut venir vous chercher à votre retour.",
			},
			{
				title: "Gare Saint-Charles et centre-ville",
				text: "Correspondance en train, match au Vélodrome ou dîner sur le Vieux-Port : un trajet direct et confortable, de jour comme de nuit.",
			},
		],
		places: [
			"Gare Marseille Saint-Charles",
			"Vieux-Port",
			"Terminal de croisière du port de Marseille",
			"Orange Vélodrome",
			"Aéroport Marseille Provence",
		],
		travel: "Avignon → Marseille centre : environ 1 h 15, selon la circulation.",
	},
	{
		slug: "vtc-nimes",
		name: "Nîmes",
		title: "VTC Nîmes : chauffeur privé depuis Avignon",
		description:
			"Chauffeur privé VTC entre Avignon et Nîmes : gare de Nîmes Centre, gare Nîmes Pont-du-Gard, aéroport Nîmes-Garons, Arènes. Disponible 24h/24, devis gratuit.",
		h1: "Chauffeur privé VTC Avignon – Nîmes",
		intro:
			"À moins d’une heure d’Avignon, Nîmes est une destination que nos clients demandent souvent. N-drive vous y conduit pour vos rendez-vous, vos trains et vos sorties, en aller simple ou aller-retour.",
		image: "/images/nimes.webp",
		imageAlt: "Arènes de Nîmes",
		sections: [
			{
				title: "Gares et aéroport de Nîmes",
				text: "Gare de Nîmes Centre, gare de Nîmes Pont-du-Gard ou aéroport de Nîmes-Garons : votre chauffeur vous dépose à l’heure et vous attend en cas de retard, sans frais.",
			},
			{
				title: "Sorties et événements",
				text: "Spectacle aux Arènes, féria ou dîner en ville : profitez de votre soirée, votre chauffeur s’occupe du retour.",
			},
		],
		places: [
			"Gare de Nîmes Centre",
			"Gare de Nîmes Pont-du-Gard",
			"Aéroport de Nîmes-Garons",
			"Arènes de Nîmes",
			"Pont du Gard",
		],
		travel: "Avignon → Nîmes : environ 45 minutes, selon la circulation.",
	},
	{
		slug: "vtc-arles",
		name: "Arles",
		title: "VTC Arles : chauffeur privé depuis Avignon",
		description:
			"Chauffeur privé VTC entre Avignon et Arles : gare d’Arles, centre historique, Camargue, Rencontres de la photographie. Disponible 24h/24, devis gratuit.",
		h1: "Chauffeur privé VTC Avignon – Arles",
		intro:
			"Arènes, théâtre antique, Rencontres de la photographie ou porte d’entrée de la Camargue : N-drive vous emmène d’Avignon à Arles, et vous ramène à l’heure qui vous convient.",
		image: "/images/hero-car.webp",
		imageAlt: "Berline de chauffeur privé N-drive",
		sections: [
			{
				title: "Visites et escapades",
				text: "Découvrez Arles et la Camargue sans vous soucier de la route ni du stationnement. Votre chauffeur vous dépose au cœur de la ville et revient vous chercher à l’heure convenue.",
			},
			{
				title: "Gare d’Arles et correspondances",
				text: "Pour rejoindre la gare d’Arles, ou la gare d’Avignon TGV depuis Arles, réservez un trajet direct, sans attente.",
			},
		],
		places: [
			"Centre historique d’Arles",
			"Gare d’Arles",
			"Arènes et théâtre antique",
			"Fondation LUMA",
			"Camargue",
		],
		travel: "Avignon → Arles : environ 40 minutes, selon la circulation.",
	},
	{
		slug: "vtc-montpellier",
		name: "Montpellier",
		title: "VTC Montpellier : chauffeur privé depuis Avignon",
		description:
			"Trajet en VTC entre Avignon et Montpellier : gare Saint-Roch, gare Montpellier Sud de France, aéroport Montpellier Méditerranée. Chauffeur privé 24h/24, devis gratuit.",
		h1: "Chauffeur privé VTC Avignon – Montpellier",
		intro:
			"Vol au départ de Montpellier, train à Sud de France ou rendez-vous professionnel : N-drive relie Avignon et Montpellier en un trajet direct et confortable.",
		image: "/images/montpellier.webp",
		imageAlt: "Place de la Comédie à Montpellier",
		sections: [
			{
				title: "Aéroport Montpellier Méditerranée",
				text: "Votre chauffeur vous dépose au terminal à l’heure, et vous attend au retour même si votre vol est retardé, sans frais supplémentaires.",
			},
			{
				title: "Gares de Montpellier",
				text: "Gare Saint-Roch en centre-ville ou gare Montpellier Sud de France : un transfert direct, sans changement, avec vos bagages.",
			},
		],
		places: [
			"Gare Montpellier Saint-Roch",
			"Gare Montpellier Sud de France",
			"Aéroport Montpellier Méditerranée",
			"Place de la Comédie",
			"Odysseum",
		],
		travel: "Avignon → Montpellier : environ 1 h 10, selon la circulation.",
	},
];

export function getDestination(slug: string) {
	return DESTINATIONS.find((d) => d.slug === slug);
}
