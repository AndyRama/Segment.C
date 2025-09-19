import type { NavigationGroup } from "@/features/navigation/navigation.type";
import { AlertCircle, Mail, User2, Home, ShoppingCart, NotebookPen , DoorOpen   } from "lucide-react";

export const getAccountNavigation = (): NavigationGroup[] => {
  return ACCOUNT_LINKS;
};

const ACCOUNT_LINKS: NavigationGroup[] = [
    {
    title: "Menu",
    links: [
      {
        href: "/home",
        Icon: Home,
        label: "Home ",
      },
      {
        href: "#",
        Icon: DoorOpen ,
        label: "Produits",
      },
    ],
  },
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
    title: "Devis",
    links: [
      {
        href: "/account/devis",
        Icon: NotebookPen  ,
        label: "Devis",
      },
    ],
  },
  {
    title: "Commandes",
    links: [
      {
        href: "#",
        Icon: ShoppingCart,
        label: "Achats",
      },
    ],
  },
];
