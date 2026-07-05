import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Update Status`,
  description: `Latest public Roblox update signals, creator-source status, and route impact for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Update Status`,
    description: `Latest public Roblox update signals, creator-source status, and route impact for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/updates`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Update Status`,
    description: `Latest public Roblox update signals, creator-source status, and route impact for ${siteConfig.gameName}.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

const statusCards = [
  {
    label: "Roblox updated timestamp",
    value: "2026-07-05 05:39:16 UTC",
    note: "Directly checked from Roblox public game metadata during this run."
  },
  {
    label: "Current player count snapshot",
    value: "17,333 playing",
    note: "Roblox public metadata snapshot captured during this run."
  },
  {
    label: "Visit count snapshot",
    value: "244,075,502 visits",
    note: "Roblox public metadata snapshot captured during this run."
  },
  {
    label: "Creator",
    value: "[HS] Haze Studios",
    note: "Roblox lists the game creator as the Haze Studios group."
  }
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />
      <PageIntro
        eyebrow="Update watch"
        title={`${siteConfig.gameName} Update Status`}
        description="Use this page for the latest public Roblox status, creator-surface checks, and update-sensitive route decisions. It records what changed without pretending unverified community claims are official patch notes."
      />

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statusCards.map((card) => (
          <article key={card.label} className="content-card">
            <span className="mini-label">{card.label}</span>
            <h2 className="mt-3 text-xl font-bold text-white">{card.value}</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">{card.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official Roblox signals"
          title="Current source-of-record notes"
          copy="These notes come from current public Roblox metadata and should outrank generic tracker copy when the two disagree."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="content-card">
            <h2 className="text-2xl font-bold text-white">What the Roblox description currently says</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">The official Roblox page currently says fruits spawn every 60 minutes, despawn after 20 minutes, fruits also spawn in VIP servers with a five-fruit limit, D. Clan gives Conq Haki, and players should join the community server for sneak peeks and codes.</p>
          </article>
          <article className="content-card">
            <h2 className="text-2xl font-bold text-white">Current fruit list signal</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">The same Roblox description currently lists 35 fruits, including Okuchi, Wolf, Mammoth, Leopard, Dragon, Dough, Buddha, Venom, Phoenix, and Soul. Those names feed the wiki and tier-list route watch but do not automatically prove exact rankings.</p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Fresh demand clusters"
          title="Guide and wiki routes that changed this run"
          copy="Recent public search and video coverage keeps pushing the same phrase families, so this route records them explicitly for coverage and internal linking."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link href="/guides" className="content-card">
            <span className="mini-label">Guide cluster</span>
            <h2 className="mt-3 text-xl font-bold text-white">Haze Seas Haki guide</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The guides hub now visibly covers Haki, Conqueror Haki, fruit spawn time, sea events, and NPC-location demand.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki cluster</span>
            <h2 className="mt-3 text-xl font-bold text-white">Sea 3 locations, Wandering Merchant, and dragon skins</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Current public Trello activity keeps surfacing Sea 3 locations, Wandering Merchant timing, dragon skins, and Okuchi-related entity checks as live wiki-watch terms.</p>
          </Link>
          <Link href="/codes" className="content-card">
            <span className="mini-label">Codes cluster</span>
            <h2 className="mt-3 text-xl font-bold text-white">Official-board codes plus disputed guide-only claims</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The codes page now separates public official-board listings such as HAZESEAS2026 and OKUCHI from disputed guide-only claims like GROUPONLY.</p>
          </Link>
          <Link href="/tier-list" className="content-card">
            <span className="mini-label">Tier watch</span>
            <h2 className="mt-3 text-xl font-bold text-white">Okuchi and Dragon full-form watch</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Fresh public board activity exposes Okuchi and Dragon full-form entity cards, but this run still keeps them on a source-watch basis instead of forcing new rankings.</p>
          </Link>
          <Link href="/trello" className="content-card">
            <span className="mini-label">Source status</span>
            <h2 className="mt-3 text-xl font-bold text-white">Verified Trello board and Discord invite</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The Trello route now shows both the public official board and the Discord invite that board links directly.</p>
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="content-card">
          <span className="mini-label">Official</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the Roblox game page</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the live Roblox page for current availability, creator identity, and public update text.</p>
        </a>
        <a href={gameConfig.dataSources.trello ?? "#"} target="_blank" rel="noreferrer" className="content-card">
          <span className="mini-label">Verified board</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the public Trello board</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">The Haze Seas Official Trello board is publicly reachable and should be rechecked before large guide or wiki expansions.</p>
        </a>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Review source notes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the sources page when a current tracker, video, or community claim conflicts with Roblox or creator-owned surfaces.</p>
        </Link>
      </section>
    </main>
  );
}
