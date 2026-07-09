"use client";

import { usePathname } from "next/navigation";
import {
  AdDisclosure,
  AdsterraBanner,
  AdsterraBannerBySize,
  AdsterraLeaderboard,
  AdsterraNative1,
  AdsterraSmartLinkAnchor,
  AdsterraStickyRail
} from "@/components/ads";

const CLEAN_ROUTE_PREFIXES = ["/contact", "/disclosure", "/privacy", "/sources"];

function isCleanRoute(pathname: string) {
  return CLEAN_ROUTE_PREFIXES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function RouteAwareAdSlots() {
  const pathname = usePathname();

  if (!pathname || isCleanRoute(pathname)) return null;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <AdsterraLeaderboard />
      </div>

      <div className="pointer-events-none fixed right-4 top-24 z-30 hidden min-[1360px]:block">
        <div className="pointer-events-auto">
          <AdsterraStickyRail />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto]">
          <AdsterraNative1 />
          <div className="flex justify-center xl:justify-end">
            <AdsterraBanner />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <AdsterraBannerBySize className="w-full md:w-auto" label="Sponsored" size="468x60" />
          <AdsterraSmartLinkAnchor className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75 hover:border-white/20 hover:text-white">
            Sponsored offers
          </AdsterraSmartLinkAnchor>
        </div>

        <div className="mt-4">
          <AdDisclosure />
        </div>
      </div>
    </>
  );
}
