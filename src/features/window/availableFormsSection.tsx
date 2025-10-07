"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const AvailableFormsSection = () => {
	const [selectedForm, setSelectedForm] = useState('chassis-1-vantail-oscillo-battant');

	const forms = [
		{
			id: 'chassis-1-vantail-oscillo-battant',
			name: 'CHÂSSIS 1 VANTAIL OSCILLO-BATTANT',
			icon: (
				<svg viewBox="0 0 120 180" className="w-full h-full">
					<rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
					<path d="M 60 50 L 70 55 L 60 60" fill="#000000" />
				</svg>
			)
		},
		{
			id: 'chassis-soufflet',
			name: 'CHÂSSIS À SOUFFLET',
			icon: (
				<svg viewBox="0 0 120 180" className="w-full h-full">
					<rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="90" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 55 40 L 60 50 L 65 40" fill="#000000" />
				</svg>
			)
		},
		{
			id: 'chassis-fixe',
			name: 'CHÂSSIS FIXE',
			icon: (
				<svg viewBox="0 0 120 180" className="w-full h-full">
					<rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1" />
					<line x1="10" y1="90" x2="110" y2="90" stroke="#000000" strokeWidth="1" />
				</svg>
			)
		},
		{
			id: 'ensembles-composes',
			name: 'ENSEMBLES COMPOSÉS',
			icon: (
				<svg viewBox="0 0 180 180" className="w-full h-full">
					<rect x="10" y="10" width="75" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="47.5" y1="10" x2="47.5" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<rect x="95" y="10" width="75" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="132.5" y1="10" x2="132.5" y2="170" stroke="#000000" strokeWidth="1" />
					<line x1="95" y1="90" x2="170" y2="90" stroke="#000000" strokeWidth="1" />
				</svg>
			)
		},
		{
			id: 'fenetre-1-vantail',
			name: 'FENÊTRE 1 VANTAIL',
			icon: (
				<svg viewBox="0 0 120 180" className="w-full h-full">
					<rect x="10" y="10" width="100" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
					<circle cx="90" cy="85" r="3" fill="#000000" />
				</svg>
			)
		},
		{
			id: 'fenetre-2-vantaux-oscillo-battant',
			name: 'FENÊTRE 2 VANTAUX OSCILLO-BATTANT',
			icon: (
				<svg viewBox="0 0 180 180" className="w-full h-full">
					<rect x="10" y="10" width="160" height="160" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="90" y1="10" x2="90" y2="170" stroke="#000000" strokeWidth="2" />
					<line x1="50" y1="10" x2="50" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<line x1="130" y1="10" x2="130" y2="170" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 65 80 Q 75 85 65 90" fill="none" stroke="#000000" strokeWidth="2" />
					<path d="M 145 80 Q 155 85 145 90" fill="none" stroke="#000000" strokeWidth="2" />
				</svg>
			)
		},
		{
			id: 'fenetre-porte-fenetre-2-vantaux',
			name: 'FENÊTRE OU PORTE-FENÊTRE 2 VANTAUX AVEC SOUBASSEMENT',
			icon: (
				<svg viewBox="0 0 180 200" className="w-full h-full">
					<rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
					<line x1="10" y1="120" x2="170" y2="120" stroke="#000000" strokeWidth="2" />
					<line x1="50" y1="10" x2="50" y2="120" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<line x1="130" y1="10" x2="130" y2="120" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 65 55 Q 75 60 65 65" fill="none" stroke="#000000" strokeWidth="2" />
				</svg>
			)
		},
		{
			id: 'porte-fenetre-1-vantail',
			name: 'PORTE-FENÊTRE 1 VANTAIL',
			icon: (
				<svg viewBox="0 0 120 200" className="w-full h-full">
					<rect x="10" y="10" width="100" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<line x1="10" y1="100" x2="110" y2="100" stroke="#000000" strokeWidth="2" />
					<path d="M 85 80 Q 95 85 85 90" fill="none" stroke="#000000" strokeWidth="2" />
					<circle cx="90" cy="130" r="3" fill="#000000" />
				</svg>
			)
		},
		{
			id: 'porte-fenetre-1-vantail-soubassement',
			name: 'PORTE-FENÊTRE 1 VANTAIL AVEC SOUBASSEMENT',
			icon: (
				<svg viewBox="0 0 120 200" className="w-full h-full">
					<rect x="10" y="10" width="100" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="10" y1="130" x2="110" y2="130" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="130" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 85 60 Q 95 65 85 70" fill="none" stroke="#000000" strokeWidth="2" />
				</svg>
			)
		},
		{
			id: 'porte-fenetre-1-vantail-oscillo-battant',
			name: 'PORTE-FENÊTRE 1 VANTAIL OSCILLO-BATTANT',
			icon: (
				<svg viewBox="0 0 120 200" className="w-full h-full">
					<rect x="10" y="10" width="100" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="60" y1="10" x2="60" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 85 90 Q 95 95 85 100" fill="none" stroke="#000000" strokeWidth="2" />
					<path d="M 60 50 L 70 55 L 60 60" fill="#000000" />
				</svg>
			)
		},
		{
			id: 'porte-fenetre-2-vantaux',
			name: 'PORTE-FENÊTRE 2 VANTAUX',
			icon: (
				<svg viewBox="0 0 180 200" className="w-full h-full">
					<rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
					<line x1="50" y1="10" x2="50" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<line x1="130" y1="10" x2="130" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 65 90 Q 75 95 65 100" fill="none" stroke="#000000" strokeWidth="2" />
					<path d="M 115 90 L 105 95 L 115 100" fill="none" stroke="#000000" strokeWidth="2" />
				</svg>
			)
		},
		{
			id: 'porte-fenetre-2-vantaux-oscillo-battant',
			name: 'PORTE-FENÊTRE 2 VANTAUX OSCILLO-BATTANT',
			icon: (
				<svg viewBox="0 0 180 200" className="w-full h-full">
					<rect x="10" y="10" width="160" height="180" fill="none" stroke="#000000" strokeWidth="2" />
					<line x1="90" y1="10" x2="90" y2="190" stroke="#000000" strokeWidth="2" />
					<line x1="50" y1="10" x2="50" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<line x1="130" y1="10" x2="130" y2="190" stroke="#000000" strokeWidth="1.5" strokeDasharray="3,3" />
					<path d="M 50 50 L 60 55 L 50 60" fill="#000000" />
					<path d="M 130 50 L 140 55 L 130 60" fill="#000000" />
				</svg>
			)
		}
	];

	return (
		<div className="bg-gray-50 py-12 border-t">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-2xl font-bold text-gray-900 mb-8">
					Les formes disponibles pour ce modèle
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{forms.map((form) => (
						<button
							key={form.id}
							onClick={() => setSelectedForm(form.id)}
							className={`relative p-6 bg-white border-2 rounded-md transition-all hover:border-green-500 group ${selectedForm === form.id ? 'border-green-500 shadow-lg' : 'border-gray-200'
								}`}
						>
							{selectedForm === form.id && (
								<div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
									<Check size={16} />
								</div>
							)}

							<div className="h-40 flex items-center justify-center mb-4">
								{form.icon}
							</div>

							<p className="text-xs font-semibold text-gray-900 text-left md:text-center uppercase leading-tight">
								{form.name}
							</p>
						</button>
					))}
				</div>

				<div className="mt-8 p-6 bg-white border-2 border-green-200 rounded-md">
					<div className="flex items-start gap-3">
						<div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
						<div>
							<p className="text-sm font-semibold text-gray-900 mb-1">
								Configuration personnalisée
							</p>
							<p className="text-sm text-gray-600">
								Vous avez besoin d'une configuration spécifique ? Contactez-nous pour discuter de vos besoins.
								Toutes nos fenêtres peuvent être adaptées selon vos dimensions et exigences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvailableFormsSection;