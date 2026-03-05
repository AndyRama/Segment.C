import type { NavigationGroup } from "@/features/navigation/navigation.type";
import type { AuthRole } from "@/lib/auth/auth-permissions";
import { isInRoles } from "@/lib/organizations/is-in-roles";
import {
  FolderInput,
  Home,
  // User2,
  Settings,
  TriangleAlert,
  User,
  // CreditCard,
  BookOpen,
  NotebookPen,
  DoorOpen,
} from "lucide-react";

const replaceSlug = (href: string, slug: string): string =>
  href.replace(":organizationSlug", slug);

export const getOrganizationNavigation = (
  slug: string,
  userRoles: AuthRole[] | undefined,
): NavigationGroup[] => {
  return ORGANIZATION_LINKS.reduce<NavigationGroup[]>((acc, group) => {
    const filteredLinks = group.links
      .filter((link) => !link.roles || isInRoles(userRoles, link.roles))
      .map((link) => ({
        ...link,
        href: replaceSlug(link.href, slug),
      }));

    if (filteredLinks.length === 0) return acc;

    acc.push({
      ...group,
      defaultOpenStartPath: group.defaultOpenStartPath
        ? replaceSlug(group.defaultOpenStartPath, slug)
        : undefined,
      links: filteredLinks,
    });

    return acc;
  }, []);
};

const ORGANIZATION_PATH = `/orgs/:organizationSlug`;

export const ORGANIZATION_LINKS: NavigationGroup[] = [
  {
    title: "Organization",
    defaultOpenStartPath: `${ORGANIZATION_PATH}/settings`,
    links: [
      {
        href: `${ORGANIZATION_PATH}/settings`,
        Icon: Settings,
        label: "Settings",
        roles: ["admin"],
      },
      // {
      //   href: `${ORGANIZATION_PATH}/settings/members`,
      //   Icon: User2,
      //   label: "Members",
      //   roles: ["admin"],
      // },
      // {
      //   href: `${ORGANIZATION_PATH}/settings/billing`,
      //   Icon: CreditCard,
      //   label: "Billing",
      //   roles: ["admin"],
      // },
      {
        href: `${ORGANIZATION_PATH}/settings/danger`,
        Icon: TriangleAlert,
        label: "Danger Zone",
        roles: ["owner"],
      },
    ],
  },
  {
    title: "Menu",
    links: [
      {
        href: ORGANIZATION_PATH,
        Icon: Home,
        label: "Dashboard",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/users`,
        Icon: User,
        label: "Users",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/devis`,
        Icon: NotebookPen,
        label: "Listes devis",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/produits`,
        Icon: DoorOpen,
        label: "Listes Produits",
        roles: ["admin"],
      },
    ],
  },
  {
    title: "Marketing",
    links: [
      {
        href: `${ORGANIZATION_PATH}/publications`,
        Icon: BookOpen ,
        label: "Publications",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/produits/new`,
        Icon: NotebookPen ,
        label: "Création produit",
        roles: ["admin"],
      },
    ],
  },
  {
    title: "Agents I.A",
    links: [
      {
        href: `${ORGANIZATION_PATH}/#`,
        Icon: FolderInput ,
        label: "Devis Relance",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/#`,
        Icon: FolderInput ,
        label: "Reviews",
        roles: ["admin"],
      },
      {
        href: `${ORGANIZATION_PATH}/#`,
        Icon: FolderInput ,
        label: "Email",
        roles: ["admin"],
      },
    ],
  },
] satisfies NavigationGroup[];
