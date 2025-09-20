import type { NavigationGroup } from "@/features/navigation/navigation.type";
import { AlertCircle, Mail, User2, ShoppingCart, NotebookPen , DoorOpen , Home  } from "lucide-react";

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
        label: "Devis",
      },
      {
        href: "#",
        Icon: DoorOpen ,
        label: "Produits",
      },
      {
        href: "#",
        Icon: ShoppingCart,
        label: "Mes achats",
      },
    ],
  },
];
