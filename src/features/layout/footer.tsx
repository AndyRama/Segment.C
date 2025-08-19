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
                    href="/posts"
                  >
                    Nos fenêtres Aluminium
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="#"
                  >
                    Nos fenêtres PVC
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/account"
                  >
                    Nos fenêtres en bois
                  </Typography>
                </div>
              </div>

              {/* Colonne Portes */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Nos portes d'entrée
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/posts"
                  >
                    Nos portes Aluminium
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="#"
                  >
                    Nos portes PVC
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/account"
                  >
                    Nos portes Acier
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/account"
                  >
                    Nos portes Mixte Alu.
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
                    href="/home"
                  >
                    Home
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Informations
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Compte user
                  </Typography>
                </div>
              </div>

              {/* Colonne Services */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Services
                </Typography>
                <div className="flex flex-col gap-2">
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/#"
                  >
                    Service Client
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/urgence"
                  >
                    Garantie Segment.C
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/urgence"
                  >
                    Conseil
                  </Typography>
                </div>
              </div>

              {/* Colonne Resources */}
              <div className="flex flex-col gap-3">
                <Typography variant="large" className="font-medium">
                  Resources
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
                    href="#"
                  >
                    Dashboard
                  </Typography>
                  <Typography
                    as={Link}
                    variant="muted"
                    className="hover:underline"
                    href="/account"
                  >
                    Account
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