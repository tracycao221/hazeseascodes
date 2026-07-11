import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Trello, Discord & Wiki Status` },
  description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
  alternates: { canonical: `${siteConfig.domain}/trello` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
    url: `${siteConfig.domain}/trello`,
    images: [`${siteConfig.domain}/trello/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
    images: [`${siteConfig.domain}/trello/opengraph-image`]
  }
};

const statusRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Primary source",
    note: "The official Roblox page and live Roblox games API were rechecked on 2026-07-11, with the page still showing the current DRAG HYBRID COUNTDOWN title cluster."
  },
  {
    label: "Haze Studios Roblox group",
    href: "https://www.roblox.com/communities/6602131",
    status: "Verified official identity",
    note: "Use the creator group as the ownership checkpoint when other surfaces disagree."
  },
  {
    label: "Discord",
    href: gameConfig.dataSources.discord ?? "#",
    status: gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? "Board-linked invite resolves" : "Needs verification",
    note: "The public Haze Seas Official Trello board still linked to discord.gg/hazeseas when rechecked on 2026-07-11, and a direct redirect check from this environment still resolved to discord.com/invite/hazeseas."
  },
  {
    label: "Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? "Verified public board" : "No official board verified",
    note: "Public Trello JSON confirmed again on 2026-07-11 that the Haze Seas Official Trello board is live and public, with 13 current code listings plus Sea 3, materials, dragon-skin, race, sword, and entity cards. The codes card still dates to 2026-07-04, but board-wide activity moved to 2026-07-11 because cards such as Dragon, Fighting Styles V2, and Mace V2 were updated."
  },
  {
    label: "Wiki",
    href: "/wiki",
    status: "Community and site hub only",
    note: "No separate creator-confirmed official wiki was verified in this run. Treat fandom or other wiki copies as community sources unless a creator-owned confirmation appears."
  }
];

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to check which ${siteConfig.gameName} community sources are official, which still need verification, and where to confirm codes, updates, and tier-list changes.`}
      />
      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Source status"
          copy="This page was refreshed on 2026-07-11. Verified links are separated from community or guide-only claims so players can see what is official, what is public but indirect, and what is still unverified."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {statusRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, YouTube, update notes, and wiki data as signals, then label ranking confidence clearly.</p>
        </Link>
        <Link href="/tier-list-watch" className="content-card">
          <span className="mini-label">Exact intent</span>
          <h2 className="mt-3 text-xl font-bold text-white">Race, sword, and style watch</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the dedicated watch route for exact race, sword, and fighting-style tier-list demand without inventing final orders.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Source checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep official, community, video, Reddit, and guide-site evidence separated so updates stay auditable.</p>
        </Link>
      </section>
    </main>
  );
}
