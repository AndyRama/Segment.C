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
    title: "Services",
    links: [
      {
        href: "/account/devis/new",
        Icon: NotebookPen  ,
        label: "Demande de Devis",
      },
      {
        href: "/account/produits",
        Icon: BookOpenText  ,
        label: "Catalogue",
      },
    ],
  },
  {
    title: "informations",
    links: [
      {
        href: "/account/devis",
        Icon: Files  ,
        label: "Suivi de mes devis",
      },  
      {
        href: "#",
        Icon: FileText, 
        label: "Mes factures",
      },
    ],
  },
];
