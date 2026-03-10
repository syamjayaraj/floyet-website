"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initScrollReveal } from "../utils/scrollReveal";

export default function AnimationUtility() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-initialize scroll reveal on every route change
    const cleanup = initScrollReveal();
    return () => cleanup?.();
  }, [pathname]);

  return null;
}
