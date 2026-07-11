import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
  alternates: { canonical: `${siteConfig.domain}/sources` },
  openGraph: {
    title: `${siteConfig.gameName} Sources`,
    description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
    url: `${siteConfig.domain}/sources`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Sources`,
    description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description="Use this page to see where code, tier-list, update, Trello, Discord, wiki, and guide claims are checked. Official Roblox pages should win when sources disagree."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="2026-07-11 recheck"
          title="Fresh public signals used in this run"
          copy="This run kept official links ahead of community pages, then used fresh public search and video results only as demand and terminology signals."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Official + structured</span>
            <h2 className="mt-3 text-xl font-bold text-white">Roblox page and Trello board</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The known Roblox game URL still surfaced publicly, and the public Trello JSON still showed the current code card plus Sea 3, merchant, race, sword, and entity coverage while newer non-code cards moved the board-wide activity timestamp forward.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">SERP competitors</span>
            <h2 className="mt-3 text-xl font-bold text-white">Codes and tier-list freshness</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Fresh July 2026 results still surfaced current Haze Seas codes pages and public tier-list pages from Sportskeeda, Destructoid, and other guide sites, which supported keeping the watch routes and conflict labels in place.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">YouTube demand</span>
            <h2 className="mt-3 text-xl font-bold text-white">Race, sword, and style intent</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Recent creator-video search results continued to surface race tier list, sword tier list, and related fruit/meta phrasing, but not enough official evidence to convert those exact-intent terms into hard rankings.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
