import CardGrid from "@/features/landing/card-grid";
import { getRequiredUser } from "@/lib/auth/auth-user";
import { combineWithParentMetadata } from "@/lib/metadata";

export const generateMetadata = combineWithParentMetadata({
	title: "Produits",
	description: "Commander un produit - Créer et suiver vos demandes",
});

export default async function DevisPage() {
	const user = await getRequiredUser();

	return (
		<>
			<div className="flex flex-col gap-6 max-w-4xl mx-auto">
				<CardGrid />
			</div>
		</>
	);
}