import type { NavigationGroup } from "@/features/navigation/navigation.type";
import { AlertCircle, Mail, User2 } from "lucide-react";

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
    title: "Devis",
    links: [
      {
        href: "/account/devis",
        Icon: User2,
        label: "Devis",
      },
      {
        href: "#",
        Icon: User2,
        label: "Ancien devis",
      },
    ],
  },
  {
    title: "Commandes",
    links: [
      {
        href: "#",
        Icon: User2,
        label: "Achats",
      },
    ],
  },
];
