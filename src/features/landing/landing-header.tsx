"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { Menu, ChevronDown } from "react-feather";
import { Typography } from "@/components/nowts/typography";
import { AuthButtonClient } from "../auth/auth-button-client";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";

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

export function LandingHeader() {
  const { data: session } = useSession();
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  const topRoutes = [
    { path: "/fenetres", label: "Fenêtre" },
    {
      path: "/portes",
      label: "Portes",
      dropdown: [
        { path: "/portes", label: "Porte d'entrée" },
        { path: "/portes", label: "Porte fenêtre" }
      ]
    },
    { path: "/baie", label: "Baie vitrée" },
    { path: "/pergolas", label: "Pergolas" },
    { path: "/verandas", label: "Vérandas" },
    { path: "/posts", label: "Actualités" },
  ];

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [70, 50]),
      }}
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md"
    >
      <div className="max-w-8xl mx-auto flex w-full items-center justify-between px-8">
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
            className="mt-[-1] flex origin-left items-center text-base font-bold text-green-500 "
          >
            <Link href="/" className="text-base font-bold text-green-500">
              {SiteConfig.title}
            </Link>
          </motion.p>
        </div>

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
          {topRoutes.map((route) => (
            route.dropdown ? (
              <DropdownMenu key={route.path}>
                <DropdownMenuTrigger className="relative flex items-center gap-1 transition-colors hover:text-green-500 focus:outline-none">
                  {route.label}
                  <ChevronDown className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {route.dropdown.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link href={item.path} className="w-full cursor-pointer">
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
                className="relative flex items-center hover:text-green-500 transition-colors"
              >
                {route.label}
              </Link>
            )
          ))}
        </motion.nav>

        {/* Éléments de navigation */}
        <nav className="flex items-center space-x-1">
          {/* Desktop auth button */}
          <div className="hidden lg:contents gap-2">
            {session ? (
              <>
              <Link href="/account/devis" className={buttonVariants({ size: "sm", className: "mr-4"})}>
                Mes Devis
              </Link>
              <AuthButtonClient/>
              </>
            ) : (
              <>
                <Link href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" className={buttonVariants({ size: "sm" , className: "mr-4"})}>
                  Demande de devis
                </Link>
                <AuthButtonClient/>
              </>
            )}
          </div>

          {/* Mobile menu */}
          <div className="z-20 flex items-center gap-2 px-4 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="size-8" />
              </SheetTrigger>
              <SheetContent className="flex flex-col gap-4 p-4">
                <div className="relative flex flex-col gap-4">
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
                  <div className="flex flex-row items-center justify-around">
                    {session ? (
                    <>
                      <Link href="/account/devis" className={buttonVariants({ size: "sm", className: "mr-4" })}>
                        Devis
                      </Link>
                      <AuthButtonClient />
                    </>
                    ) : (
                      <>
                        <Link href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" className={buttonVariants({ size: "sm", className: "mr-4" })}>
                          Devis
                        </Link>
                        <AuthButtonClient />
                      </>
                    )}
                    <Typography
                      variant="h3"
                      className="text-left text-lg !leading-tight"
                    >
                      Menu Principal
                    </Typography>
                  </div>
                  <hr />
                  {topRoutes.map((route) => (
                    route.dropdown ? (
                      <div key={route.path} className="flex flex-col gap-2">
                        <span className="text-left text-sm font-semibold text-green-500">
                          {route.label}
                        </span>
                        {route.dropdown.map((item) => (
                          <Link
                            href={item.path}
                            key={item.path}
                            className="relative ml-4 text-left text-sm font-medium transition-colors hover:text-[#04ab12]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={route.path}
                        key={route.path}
                        className="relative text-left text-sm font-medium hover:text-[#04ab12] transition-colors"
                      >
                        {route.label}
                      </Link>
                    )
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}