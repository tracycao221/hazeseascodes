import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, progression, and advanced strategy guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides` },
  openGraph: {
    title: `${siteConfig.gameName} Guides`,
    description: `Beginner, progression, Haki, sea events, and route-planning guides for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/guides`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guides`,
    description: `Beginner, progression, Haki, sea events, and route-planning guides for ${siteConfig.gameName}.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for beginner help, farming routes, boss prep, event notes, and advanced strategy."
      />
      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="Pick the guide that matches your current problem, then check codes, rankings, calculator notes, or wiki details before spending rare resources."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas beginner guide</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Beginner-guide demand is still strong. Start on the official Roblox page, claim consensus codes first, then use the wiki and tier-list pages before committing rare fruit or upgrade resources.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas fruit spawn time and VIP server fruit spawns</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">The official Roblox game description currently says fruits spawn every 60 minutes, despawn after 20 minutes, and also spawn in VIP servers with a five-fruit limit. Treat that Roblox description as the source of record unless a newer official update replaces it.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas Haki guide and Conqueror Haki watch</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Public Haki demand is real, but exact unlock steps still need careful route-by-route verification. The official Roblox description currently says D Clan gives Conq Haki, so keep broader Haki advice separate from confirmed clan-linked benefits.</p>
        </article>
        <article className="content-card">
          <h2 className="text-2xl font-bold text-white">Haze Seas sea events and NPC locations</h2>
          <p className="mt-3 text-sm leading-6 text-white/68">Recent YouTube and guide coverage repeatedly surfaces sea events and NPC locations as active intent clusters. This run keeps those phrases visible here and on the wiki hub while deeper page splits remain under evidence review.</p>
        </article>
      </section>
    </main>
  );
}
