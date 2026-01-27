'use client';

import Image from "next/image";
import Link from "next/link";
// import type { PropsWithChildren } from "react";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Menu, ChevronDown } from "react-feather";
import { Typography } from "@/components/nowts/typography";
import { Layout } from "../page/layout";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AuthButtonClient } from "@/features/auth/auth-button-client"; 

function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, threshold],
    [0, 1],
  );

  useEffect(() => {
    const onChange = (current: number) => {
      const previous = scrollY.getPrevious() ?? 0;
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    };

    const deleteEvent = scrollY.on("change", onChange);

    const listener = () => {
      const currentScroll = window.scrollY;
      onChange(currentScroll);
    };

    window.addEventListener("scroll", listener);

    return () => {
      deleteEvent();
      window.removeEventListener("scroll", listener);
    };
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

const topRoutes = [
  { path: "/home", label: "Accueil" },
  { 
    path: "#",
    label: "Catalogue",
    dropdown: [ 
      { path: "/fenetres", label: "Fenêtres" },
      { path: "/baie", label: "Baie vitrée" },
      { path: "/portes", label: "Portes" },
      { path: "/pergolas", label: "Pergolas" },
      { path: "/portails", label: "Portails" },
      { path: "/volet", label: "Volets" },
      // { path: "/garage", label: "Porte de garage" },
      // { path: "/veranda", label: "veranda" },
    ]
  },
  {
    path: "#",
    label: "Partenaires",
    dropdown: [
      { path: "/partenaire/sybaie", label: "Sybaie" },
      { path: "/partenaire/swao", label: "Swao" },
      { path: "/partenaire/proferm", label: "Proferm" },
      { path: "/partenaire/c2r", label: "C2r " },
      { path: "/partenaire/orial", label: "Orial" },

    ]
  },
  { path: "/posts", label: "Actualités" },
  // { path: "/contact", label: "Contact" },
];

export function HeaderBase() {
  const { data: session } = useSession();
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [70, 50]),
      }}
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md"
    >
      <Layout className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src={SiteConfig.appIcon}
            alt="logo enterprise Segment.C"
            width={32}
            height={32}
          />
          <motion.p
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9],
              ),
            }}
            className="mt-[-1] flex origin-left items-center text-base font-bold text-green-500"
          >
            <Link href="/home" className="text-base font-bold text-green-500">
              {SiteConfig.title}
            </Link>
          </motion.p>
        </div>

        {/* Navigation Principale (Desktop) */}
        <motion.nav
          style={{
            opacity: useTransform(
              scrollYBoundedProgressDelayed,
              [0, 1],
              [1, 0],
            ),
          }}
          className="hidden items-center gap-4 text-sm font-medium sm:gap-4 lg:flex"
        >
          {topRoutes.map((route) =>
            route.dropdown ? (
              <DropdownMenu key={route.path}>
                <DropdownMenuTrigger className="relative flex items-center gap-1 transition-colors hover:text-green-500 focus:outline-none">
                  {route.label}
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {route.dropdown.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link
                        href={item.path}
                        className="w-full cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href={route.path}
                key={route.path}
                className="relative flex items-center transition-colors hover:text-green-500"
              >
                {route.label}
              </Link>
            ),
          )}
        </motion.nav>

        {/* Boutons d'Action (Desktop & Mobile) */}
        <nav className="flex items-center space-x-1">
          {/* Version Desktop */}
          <div className="hidden items-center gap-2 lg:flex">
            {session ? (
              <>
                <Link 
                    href="tel:0671787253" 
                    className={buttonVariants({ size: "sm", className: "flex-1" })}
                >
                    06 71 78 72 53
                </Link>
                <Link 
                    href="/account/devis/mes-devis" 
                    className={buttonVariants({ size: "sm", variant: "secondary" })}
                >
                  Mes Devis
                </Link>
                <AuthButtonClient />
              </>
            ) : (
              <>
                <Link 
                    href="tel:0671787253" 
                    className={buttonVariants({ size: "sm" })}
                >
                    06 71 78 72 53
                </Link>
                <AuthButtonClient />
              </>
            )}
          </div>
          
          {/* Version Mobile (Sheet) */}
          <div className="z-20 flex items-center gap-2 px-4 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="size-8" />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-4">
                <div className="relative flex flex-col gap-4">
                  {/* Header de la Sheet */}
                  <div className="flex flex-row gap-1">
                    <Image
                      src={SiteConfig.appIcon}
                      alt="logo enterprise Segment.C"
                      width={32}
                      height={32}
                    />
                    <motion.p
                      style={{
                        scale: useTransform(
                          scrollYBoundedProgressDelayed,
                          [0, 1],
                          [1, 0.9],
                        ),
                      }}
                      className="flex origin-left items-center text-2xl font-bold text-green-500"
                    >
                      {SiteConfig.title}
                    </motion.p>
                  </div>
                  <hr />

                  <div className="flex flex-row items-center justify-between gap-2">
                        {session ? (
                            <>
                                <Link 
                                    href="/account/devis/mes-devis" 
                                    className={buttonVariants({ size: "sm", className: "flex-1" })}
                                >
                                    Mes Devis
                                </Link>
                                <AuthButtonClient/>
                            </>
                        ) : (
                            <>
                                <Link 
                                    href="tel:0671787253" 
                                    className={buttonVariants({ size: "sm", className: "flex-1" })}
                                >
                                    06 71 78 72 53
                                </Link>
                                <AuthButtonClient/>
                            </>
                        )}
                  </div>

                  <Typography
                      variant="h3"
                      className="text-left text-lg !leading-tight hidden"
                    >
                      Menu
                    </Typography>
                  
                    <hr />

                  {/* Liens de Navigation Mobile */}
                  {topRoutes.map((route) =>
                    route.dropdown ? (
                      <div key={route.path} className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-green-500">
                          {route.label}
                        </span>
                        <div className="pl-4 flex flex-col gap-2">
                          {route.dropdown.map((item) => (
                            <Link
                              href={item.path}
                              key={item.path}
                              className="text-sm font-medium hover:text-green-500 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={route.path}
                        key={route.path}
                        className="relative text-left text-sm font-medium hover:text-green-500 transition-colors"
                      >
                        {route.label}
                      </Link>
                    ),
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
          </div>
        </nav>
      </Layout>
    </motion.header>
  );
}