import type { NavigationGroup } from "@/features/navigation/navigation.type";
import { AlertCircle, Mail, User2, ShoppingCart, NotebookPen , NotebookText , Home, Calendar, FileText, BookOpenText , Files , File  } from "lucide-react";

export const getAccountNavigation = (): NavigationGroup[] => {
  return ACCOUNT_LINKS;
};

const ACCOUNT_LINKS: NavigationGroup[] = [
   {
    title: "Ton profil",
    links: [
      {
        href: "/account",
        Icon: User2,
        label: "Profile",
      },
      {
        href: "/account/email",
        Icon: Mail,
        label: "Email",
      },
      {
        href: "/account/danger",
        Icon: AlertCircle,
        label: "Danger",
      },
    ],
  },
  {
    title: "Menu",
    links: [
      {
        href: "/home",
        Icon: Home,
        label: "Home ",
      },
      {
        href: "/account/devis",
        Icon: NotebookPen  ,
        label: "Créer un Devis",
      },
      {
        href: "/account/produits",
        Icon: BookOpenText  ,
        label: "Catalogue",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        href: "/account/devis/mes-devis",
        Icon: NotebookText  ,
        label: "Mes devis",
      },
      {
        href: "/account/services/metrage",
        Icon: FileText  ,
        label: "Mesure technique",
      },
      {
        href: "/account/services/travaux",
        Icon: Calendar,
        label: "Réalisation",
      }, 
    ],
  },
  {
    title: "information",
    links: [
      {
        href: "/account/information/commandes",
        Icon: File ,
        label: "Mes commandes",
      },
      {
        href: "/account/information/factures",
        Icon: Files ,
        label: "Mes factures",
      },
    ],
  },
];
