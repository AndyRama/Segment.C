import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/nowts/typography";
import { SiteConfig } from "@/site-config";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Mail, Home, Phone, Earth, Clock  } from "lucide-react";

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
                  <Earth  className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Une portes ouvertes sur vos fênetres
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Home className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    {SiteConfig.company.address}
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Email: info.segment.c@gmail.com 
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Téléphone: 06 71 78 72 53
                  </Typography>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-gray-500" />
                  <Typography variant="muted">
                    Lun-Ven: 8h-20h | Sam: 8h-12h30
                  </Typography>
                </div>
              </div>
            </div>

            {/* Navigation en colonnes - partie droite */}
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-5 md:gap-8 lg:gap-12">
              
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
                    href="/fenetres"
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
                    href="/#"
                  >
                    Volets 
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
                    Portes d'entrée
                  </Typography>
                      <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/portes"
                  >
                    Portes vitrée
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/portes"
                  >
                    Portes de service
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/garage"
                  >
                    Portes de garage
                  </Typography>
                </div>
              </div>    

              {/* Colonne autre */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Extèrieur
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
                    href="#"
                  >
                    Pergolas 
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="#"
                  >
                    Véranda
                  </Typography>
                </div>
              </div>     

              {/* Colonne Site */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Partenaires
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Sybaie
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/partenaire"
                  >
                    swao
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Proferm
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    C2r
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Orial
                  </Typography>
                </div>

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
                    Actualités
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/partenaire"
                  >
                    Contact
                  </Typography>
                      <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/villes"
                  >
                    Villes
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