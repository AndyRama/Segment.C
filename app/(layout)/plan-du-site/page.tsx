import Link from "next/link";

type LinkItem = {
  label: string;
  desc?: string;
  href: string;
}

type VilleGroup = {
  zone: string;
  villes: LinkItem[];
}


const PAGES_PRINCIPALES: LinkItem[] = [
  { label: "Accueil",      desc: "Page principale du site",           href: "/home" },
  { label: "Fenêtres",     desc: "Fenêtres PVC & aluminium sur mesure", href: "/fenetres" },
  { label: "Baie vitrée",  desc: "Baies coulissantes & à galandage",  href: "/baie" },
  { label: "Portes",       desc: "Portes d'entrée sécurisées",        href: "/portes" },
  { label: "Volets",       desc: "Volets roulants & battants",        href: "/volet" },
  { label: "Portails",     desc: "Portails & clôtures",               href: "/portails" },
  { label: "Pergolas",     desc: "Pergolas & espaces extérieurs",     href: "/pergolas" },
  { label: "Actualités",   desc: "Guides & conseils menuiserie",      href: "/posts" },
];

const SERVICES: LinkItem[] = [
  { label: "Demande de devis",      desc: "Devis gratuit en ligne sous 48h",   href: "/#contact" },
  { label: "Nos réalisations",      desc: "Galerie de projets réalisés",       href: "/#réalisations" },
  { label: "Pose professionnelle",  desc: "Installation par Rui et son équipe",href: "/#etapes" },
  { label: "Partenaires",           desc: "Nos fournisseurs de confiance",     href: "/#partenaires" },
];

const ARTICLES: LinkItem[] = [
  { label: "Baie vitrée coulissante vs à galandage en Gironde", href: "/posts/baie-vitree-coulissante-vs-a-galandage-laquelle-installer-chez-vous-en-gironde" },
  { label: "Fenêtres résistantes aux embruns – Bassin d'Arcachon", href: "/posts/fenetres-resistantes-aux-embruns-votre-guide-pour-votre-maison-sur-le-bassin-d-arcachon" },
  { label: "Quel matériau choisir pour vos fenêtres à Bordeaux ?", href: "/posts/quel-materiau-choisir-pour-vos-fenêtres-à-bordeaux" },
  { label: "Tout comprendre sur l'isolation thermique – Uw et Sw", href: "/posts/tout-comprendre-sur-l-isolation-thermique-de-vos-menuiseries-sw-et-uw" },
];

const LEGALES: LinkItem[] = [
  { label: "Mentions légales",            href: "/legal/mentions-legales" },
  { label: "Politique de confidentialité", href: "/legal/privacy" },
];

const PARTENAIRES: LinkItem[] = [
  { label: "Sybaie",  href: "/partenaire/sybaie" },
  { label: "Swao",    href: "/partenaire/swao" },
  { label: "Proferm", href: "/partenaire/proferm" },
  { label: "C2R",     href: "/partenaire/c2r" },
  { label: "Orial",   href: "/partenaire/orial" },
];

const VILLES: VilleGroup[] = [
  {
    zone: "Bordeaux Métropole",
    villes: [
      { label: "Bordeaux",   href: "/bordeaux" },
      { label: "Mérignac",   href: "/merignac" },
      { label: "Le Bouscat", href: "/le-bouscat" },
      { label: "Talence",    href: "/talence" },
      { label: "Pessac",     href: "/pessac" },
      { label: "Gradignan",  href: "/gradignan" },
      { label: "Cestas",     href: "/cestas" },
    ],
  },
  {
    zone: "Rive Droite & Médoc",
    villes: [
      { label: "St Jean d'Illac",      href: "/saint-jean-d-illac" },
      { label: "St Médard-en-Jalles",  href: "/saint-medard-en-jalles" },
      { label: "Martignas-sur-Jalle",  href: "/martignas-sur-jalle" },
    ],
  },
  {
    zone: "Bassin d'Arcachon",
    villes: [
      { label: "Arcachon",          href: "/arcachon" },
      { label: "Andernos-les-Bains",href: "/andernos-les-bains" },
      { label: "Cap Ferret",        href: "/cap-ferret" },
      { label: "Biganos",           href: "/biganos" },
    ],
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function CardLink({ item, showDesc }: { item: LinkItem; showDesc?: boolean }) {
  return (
    <li>
      <Link
        href={item.href}
        className="flex items-start gap-2 px-2 py-2 rounded-lg text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors group"
      >
        <span className="text-green-500 font-semibold mt-0.5 text-sm">›</span>
        <span>
          <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">
            {item.label}
          </span>
          {showDesc && item.desc && (
            <span className="block text-xs text-gray-400 mt-0.5">{item.desc}</span>
          )}
        </span>
      </Link>
    </li>
  );
}

function Card({
  icon,
  title,
  count,
  links,
  showDesc = false,
}: {
  icon: string;
  title: string;
  count?: number;
  links: LinkItem[];
  showDesc?: boolean;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-gray-100">
        <div className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-base shrink-0">
          {icon}
        </div>
        <span className="text-sm font-bold text-gray-900">{title}</span>
        {count !== undefined && (
          <span className="ml-auto text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </div>
      <ul className="space-y-0.5">
        {links.map((l) => (
          <CardLink key={l.label} item={l} showDesc={showDesc} />
        ))}
      </ul>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PlanDuSitePage() {
  const totalVilles = VILLES.reduce((acc, g) => acc + g.villes.length, 0);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="bg-white border-b border-gray-200 py-14 px-4 text-center">
        <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-green-200 mb-4">
          🗺️ Navigation
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Plan du site</h1>
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
          Retrouvez l'ensemble des pages du site Segment.C — menuisier sur mesure
          — pour naviguer facilement.
        </p>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-xs text-gray-400">
        <Link href="/home" className="hover:text-green-600 transition-colors">Accueil</Link>
        <span>›</span>
        <span className="text-green-600 font-medium">Plan du site</span>
      </div>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-4 pb-20 space-y-4">

        {/* GRILLE 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Colonne gauche */}
          <Card
            icon="📄"
            title="Pages principales"
            count={PAGES_PRINCIPALES.length}
            links={PAGES_PRINCIPALES}
            showDesc
          />

          {/* Colonne droite */}
          <div className="flex flex-col gap-4">
            <Card
              icon="🔧"
              title="Services & Réalisations"
              links={SERVICES}
              showDesc
            />
            <Card
              icon="📖"
              title="Articles & Guides"
              count={ARTICLES.length}
              links={ARTICLES}
            />
            <div className="grid grid-cols-2 gap-4">
              <Card icon="⚖️" title="Légal"        links={LEGALES}     />
              <Card icon="🤝" title="Partenaires"  links={PARTENAIRES} />
            </div>
          </div>

        </div>

        {/* VILLES */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 pb-3 mb-4 border-b border-gray-100">
            <div className="w-8 h-8 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center text-base shrink-0">
              📍
            </div>
            <span className="text-sm font-bold text-gray-900">
              Zone d'intervention — Gironde
            </span>
            <span className="ml-auto text-xs text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">
              {totalVilles} villes
            </span>
          </div>

          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-4">
            Nouvelle-Aquitaine · {totalVilles} communes couvertes
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {VILLES.map((g) => (
              <div key={g.zone}>
                <p className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
                  {g.zone}
                  <span className="text-gray-400 font-normal bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded-full text-[10px]">
                    {g.villes.length}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {g.villes.map((v) => (
                    <li key={v.label}>
                      <Link
                        href={v.href}
                        className="text-xs text-gray-500 hover:text-green-600 transition-colors flex items-center gap-1 py-0.5"
                      >
                        <span className="text-green-400 font-bold">›</span>
                        {v.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-10 text-center">
          <p className="text-green-200 text-xs font-semibold uppercase tracking-widest mb-3">
            Prêt à démarrer votre projet ?
          </p>
          <h2 className="text-white text-2xl font-bold mb-2">
            Demandez votre devis gratuit
          </h2>
          <p className="text-green-100 text-sm mb-6 max-w-sm mx-auto">
            Rui se déplace chez vous gratuitement pour étudier votre projet.
            Réponse garantie sous 48h.
          </p>
          <Link
            href="/auth/signin?callbackUrl=/account/devis"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-sm px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            Demande de devis →
          </Link>
        </div>

      </main>
    </div>
  );
}