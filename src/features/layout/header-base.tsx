"use client";

import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Menu } from "react-feather";
import { Typography } from "@/components/nowts/typography";
import { Layout } from "../page/layout";
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

export function HeaderBase({ children }: PropsWithChildren) {
  const { data: session } = useSession();
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

 const topRoutes = [
    { path: "/fenetres", label: "Fenêtre" },
    { path: "/portes", label: "Porte" },
    { path: "/baie", label: "Baie vitrée" },
    // { path: "/volet", label: "Volet" },
    { path: "/garage", label: "Garage" },
    // { path: "/portails", label: "Portails" },
    // { path: "/pergolas", label: "Pergolas" },
    // { path: "/verandas", label: "Vérandas" },
    { path: "/posts", label: "Actualités" },
  ];

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [70, 50]),
      }}
      className="bg-muted/40 sticky top-0 z-50 flex h-14 items-center gap-4 border-b shadow backdrop-blur-md lg:h-[60px]"
    >
      <Layout className="my-2">
        <div className="flex items-center gap-2">
          <Image
            src={SiteConfig.appIcon}
            alt="logo enterprise Segment.C"
            width={32}
            height={32}
          />
          <motion.div
            style={{
              scale: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0.9],
              ),
            }}
            className="flex origin-left items-center"
          >
            <Link href="/" className="text-base font-bold text-green-500">
              {SiteConfig.title}
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 items-center justify-center space-x-4">
          <motion.nav
            style={{
              opacity: useTransform(
                scrollYBoundedProgressDelayed,
                [0, 1],
                [1, 0],
              ),
            }}
            className="hidden origin-right items-center gap-4 text-sm font-medium sm:gap-4 lg:flex"
          >
            {topRoutes.map((route) => (
              <Link
                href={route.path}
                key={route.path}
                className="relative flex items-center hover:text-green-500 transition-colors"
              >
                {route.label}
              </Link>
            ))}
          </motion.nav>
        </div>

        <nav className="flex items-center space-x-1">
          <div className="hidden lg:flex lg:items-center lg:space-x-1">      
            {session ? (
              <>
                <Link href="/account/devis/mes-devis" className={buttonVariants({ size: "sm", className: "mr-4"})}>
                  Mes Devis
                </Link>
                {children}
              </>
            ) : (
              <>
                <Link href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" className={buttonVariants({ size: "sm" , className: "mr-4"})}>
                  Demande de devis
                </Link>
                {children}
              </>
            )}
          </div>
          
          <div className="z-20 flex items-center gap-2 lg:hidden">
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
                        <Link href="/account/devis/mes-devis" className={buttonVariants({ size: "sm", className: "mr-4" })}>
                          Mes devis
                        </Link>
                        {children}
                      </>
                    ) : (
                      <>
                        <Link href="/auth/signin?callbackUrl=%2Faccount%2Fdevis" className={buttonVariants({ size: "sm", className: "mr-4" })}>
                          Demande de devis
                        </Link>
                        {children}
                      </>
                    )}
                    
                    <Typography
                      variant="h3"
                      className="text-left text-lg !leading-tight"
                    >
                      Menu 
                    </Typography>
                  </div>
                  <hr />
                  {topRoutes.map((route) => (
                    <Link
                      href={route.path}
                      key={route.path}
                      className="relative text-left text-sm font-medium hover:text-green-500 transition-colors"
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Layout>
    </motion.header>
  );
}