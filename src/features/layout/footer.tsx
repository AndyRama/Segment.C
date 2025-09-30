import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";
import { SiteConfig } from "@/site-config";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Mail, Home, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border border-border bg-card">
      <Layout className="py-8">
        <LayoutContent>
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            {/* Informations de contact - partie gauche */}
            <div className="space-y-3 lg:max-w-sm">
              <div className="flex items-center gap-2">
                <Image src={SiteConfig.appIcon} width={24} height={24} alt="app icon" className="inline-flex" />
                <Typography variant="h3" className="font-medium">
                  {SiteConfig.title}
                </Typography>
              </div>

              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Home className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    {SiteConfig.company.address}
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Email: contact@segment-c.com
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Téléphone: 05 57 81 28 51
                  </Typography>
                </div>
              </div>
            </div>

            {/* Navigation en colonnes - partie droite */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:gap-12">
              
              {/* Colonne fenêtre */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Nos fenêtres
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/fenetre"
                  >
                    Fenêtres 
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/baie"
                  >
                    Baie-vitrée
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/verandas"
                  >
                    Veranda
                  </Typography>
                </div>
              </div>           

              {/* Colonne portes */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Nos portes
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/portes"
                  >
                    Portes 
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/entrer"
                  >
                    Portes d'entrée
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/garage"
                  >
                    Portes de garage
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/service"
                  >
                    Portes de service
                  </Typography>
                </div>
              </div>    

              {/* Colonne autre */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Autres
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/portails"
                  >
                    Portails 
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/volet"
                  >
                    Volets
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/pergolas"
                  >
                    Pergolas
                  </Typography>
                </div>
              </div>     

              {/* Colonne Site */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Site
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/posts"
                  >
                    Blog
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/account"
                  >
                    Compte utilisateur
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  );
};