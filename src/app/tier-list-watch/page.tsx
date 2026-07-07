import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Race, Sword & Fighting Style Tier List Watch`,
  description: `Source-backed watch page for ${siteConfig.gameName} race tier list, sword tier list, and fighting style tier list demand.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list-watch` },
  openGraph: {
    title: `${siteConfig.gameName} Race, Sword & Fighting Style Tier List Watch`,
    description: `Source-backed watch page for ${siteConfig.gameName} race tier list, sword tier list, and fighting style tier list demand.`,
    url: `${siteConfig.domain}/tier-list-watch`,
    images: [`${siteConfig.domain}/tier-list-watch/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Race, Sword & Fighting Style Tier List Watch`,
    description: `Source-backed watch page for ${siteConfig.gameName} race tier list, sword tier list, and fighting style tier list demand.`,
    images: [`${siteConfig.domain}/tier-list-watch/opengraph-image`]
  }
};

const watchCards = [
  {
    title: "Haze Seas race tier list",
    source: "Fresh July 2026 Google and YouTube query surfaces rechecked on 2026-07-07",
    body: "Exact race-tier-list intent is still live in current public search and video results, but official Roblox and Trello surfaces do not publish a confirmed race order. Treat outside rankings as source-reported until repeated public coverage converges."
  },
  {
    title: "Haze Seas sword tier list",
    source: "Fresh July 2026 Google query surfaces plus public board weapon-system coverage rechecked on 2026-07-07",
    body: "Sword-tier-list wording remains active, and the public board confirms sword-related progression systems exist, but this site is not publishing a fixed sword ranking without cleaner cross-source support."
  },
  {
    title: "Haze Seas fighting style tier list",
    source: "Fresh July 2026 Google query surfaces rechecked on 2026-07-07",
    body: "Fighting-style tier-list demand is visible enough for a dedicated watch route, but current public evidence is still stronger for exact-intent monitoring than for a final ranked order."
  }
];

export default function TierListWatchPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List Watch", href: "/tier-list-watch" }]} />
      <Breadcrumbs items={[{ label: "Tier List Watch", href: "/tier-list-watch" }]} />
      <PageIntro
        eyebrow="Source watch"
        title={`${siteConfig.gameName} Race, Sword & Fighting Style Tier List Watch`}
        description="Use this page for exact race, sword, and fighting-style tier-list intent when public demand is ahead of route-ready verified rankings. It records what searchers are asking for without inventing a final meta."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">2026-07-07</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">This route stayed justified after exact query families remained visible in fresh July 2026 search and YouTube surfaces.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Official anchor</span>
          <h2 className="mt-3 text-xl font-bold text-white">Roblox metadata updated 2026-07-06</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">The official Roblox API still confirms the live game identity and current progression surface, but not a creator-approved race, sword, or style ranking.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Publication state</span>
          <h2 className="mt-3 text-xl font-bold text-white">Indexable source-watch page</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">This is a dedicated support route for hot exact-intent queries. It is not a promise that current public rank orders are settled.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Why this page exists"
          title="Exact meta queries outgrew the broad fruit hub"
          copy="The broad fruit tier-list page still covers the strongest ranking demand, but exact race, sword, and fighting-style query families now need a dedicated route with source boundaries instead of a vague hold note."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {watchCards.map((card) => (
            <article key={card.title} className="content-card">
              <span className="mini-label">{card.source}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/66">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Claim boundaries"
          title="What this route can safely say today"
          copy="Safe publication means keeping source-of-record facts separate from public ranking chatter."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <h2 className="text-2xl font-bold text-white">Officially checkable now</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">The official Roblox game page and Roblox API confirm the current game name, creator group, update identity, fruit count signal, and live game status. The public Trello board confirms that weapon, fruit, Sea 3, merchant, and entity systems are actively documented.</p>
          </article>
          <article className="content-card">
            <h2 className="text-2xl font-bold text-white">Still source-reported only</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">Exact race, sword, and fighting-style rank orders still come from public search, creator-video, and guide chatter. Until those signals converge more cleanly, this route records the intent and links back to source status instead of publishing a fake definitive ladder.</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Fruit hub</span>
          <h2 className="mt-3 text-xl font-bold text-white">Return to the main tier list</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the core tier-list route for the strongest current fruit-ranking coverage.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Source status</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check Trello and Discord status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use official-link status when public ranking pages disagree on what is current.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Review source notes</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">See which claims are official, source-reported, disputed, or still missing.</p>
        </Link>
      </section>
    </main>
  );
}
