import type { NavigationGroup } from "@/features/navigation/navigation.type";
import { AlertCircle, Mail, User2, ShoppingCart, NotebookPen , NotebookText , Home, Calendar, FileText, BookOpenText    } from "lucide-react";

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
        href: "#",
        Icon: ShoppingCart,
        label: "Mes commandes",
      },
    ],
  },
  {
    title: "Rendez-vous",
    links: [
      {
        href: "/account/rendez-vous/métrage",
        Icon: FileText  ,
        label: "Métrage",
      },
      {
        href: "/account/rendez-vous/travaux",
        Icon: Calendar,
        label: "Programmer mes travaux",
      },
    ],
  },
];
