import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for items, maps, systems, builds, rewards, and Roblox game entities.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` },
  openGraph: {
    title: `${siteConfig.gameName} Wiki`,
    description: `${siteConfig.gameName} materials, NPC locations, sea events, fruits, and systems wiki hub.`,
    url: `${siteConfig.domain}/wiki`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki`,
    description: `${siteConfig.gameName} materials, NPC locations, sea events, fruits, and systems wiki hub.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub for game systems, items, maps, rewards, builds, and other details that help players decide what to do next."
      />
      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the wiki topic you need"
          copy="Start with the topics that affect your next upgrade, clear, reward, build, or route decision."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas materials</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Materials is a valid long-tail route family from current public guide coverage. This hub now keeps the exact phrase visible while deeper materials pages wait for cleaner item-by-item evidence.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas NPC locations</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">NPC location searches are active in current YouTube and guide coverage. Use this hub to keep the term discoverable until exact per-island NPC pages are justified.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas sea events and bosses</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Sea events, bosses, and accessories appear together in current public coverage. The exact phrase cluster stays mapped here while route splitting remains under source review.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas Sea 3 locations and Wandering Merchant</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The public official Trello board checked in this run shows Sea 3 location lists and a Wandering Merchant card with a reported 1H30M to 2H30M spawn window plus a 7-minute stay. Keep those details labeled as public-board guidance until a stronger official route guide appears.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas fruit list</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The official Roblox description currently lists 35 fruits, including Okuchi, Wolf, Leopard, Dragon, Dough, Buddha, Mammoth, Venom, and Phoenix. Use the tier-list page for ranking signals and this hub for entity expansion planning.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas Okuchi and dragon skins</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Current public Trello cards make Okuchi, Okuchi Full Form, Dragon, Dragon Full Form, and Dragon skins visible entity-watch terms. This hub records the names and source surface without claiming final tier rankings, costs, or drop rates that were not verified here.</p>
        </article>
      </section>
    </main>
  );
}
