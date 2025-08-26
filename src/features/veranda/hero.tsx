"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/nowts/typography";

type VerandasHeroProps = {
	className?: string;
}

export default function VerandasHero({ className }: VerandasHeroProps) {
	return (
		<section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-16", className)}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				{/* Contenu texte */}
				<div className="space-y-6">
					<Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
						Nos vérandas
					</Typography>

					<Typography variant="p" className="text-muted-foreground leading-relaxed">
						Créez votre pièce à vivre supplémentaire avec nos vérandas sur mesure.
						Espace détente, salle à manger d'été ou jardin d'hiver, nos réalisations
						s'adaptent parfaitement à vos besoins et au style de votre habitation.
						Segment-C conçoit et installe des vérandas alliant design contemporain
						et performance thermique, pour que vous puissiez profiter de cet espace
						unique en toutes saisons. Aluminium, PVC ou bois, toiture vitrée ou
						isolée, personnalisez votre extension selon vos envies et votre budget.
					</Typography>
				</div>

				{/* Image */}
				<div className="relative">
					<div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
						<Image
							src="/images/hero-verandas.jpg"
							alt="Véranda moderne lumineuse avec mobilier de jardin"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}