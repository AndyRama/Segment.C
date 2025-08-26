"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Menu } from "react-feather";
import { Typography } from "@/components/nowts/typography";
import { AuthButtonClient } from "../auth/auth-button-client";

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

export function LandingHeader() {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1],
  );

  const topRoutes = [
    { path: "/", label: "Segment.C" },
    { path: "/posts", label: "Actualitées" },
    { path: "/baie", label: "Baie vitrée" },
    { path: "/fenetres", label: "Fenêtre" },
    { path: "/portes", label: "Portes" },
    { path: "/verandas", label: "Vérandas" },
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
            alt="logo entrerpise Segment.C"
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
            {SiteConfig.title}
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
            <Link
              href={route.path}
              key={route.path}
              className="relative flex items-center"
            >
              {route.label}
            </Link>
          ))}
        </motion.nav>

        <div className="hidden lg:contents">
          <AuthButtonClient />
        </div>

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
                    alt="logo entrerpise Segment.C"
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
                  <AuthButtonClient />
                  <Typography
                    variant="h3"
                    className="text-left text-lg !leading-tight"
                  >
                    Menu Principal
                  </Typography>
                </div>
                <hr />
                {topRoutes.map((route) => (
                  <Link
                    href={route.path}
                    key={route.path}
                    className="relative text-left text-sm font-medium hover:text-[#04ab12]"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
