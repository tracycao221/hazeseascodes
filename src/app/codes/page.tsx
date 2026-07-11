import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.gameName} Codes: 13 Trello Codes Checked` },
  description: `Check 13 Trello-listed ${siteConfig.gameName} codes, rewards, redemption help, one disputed code claim, and source status verified July 11, 2026.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes: 13 Trello Codes Checked`,
    description: `Check 13 Trello-listed ${siteConfig.gameName} codes, rewards, redemption help, one disputed code claim, and source status verified July 11, 2026.`,
    url: `${siteConfig.domain}/codes`,
    images: [`${siteConfig.domain}/codes/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes: 13 Trello Codes Checked`,
    description: `Check 13 Trello-listed ${siteConfig.gameName} codes, rewards, redemption help, one disputed code claim, and source status verified July 11, 2026.`,
    images: [`${siteConfig.domain}/codes/opengraph-image`]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes: 13 Trello Codes Checked`}
        description="The public Haze Seas Trello currently lists 13 code strings. They remain marked for in-game checking, while GROUPONLY stays separate as a disputed guide-only and legacy-board claim."
      />
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Trello-listed</span>
          <h2 className="mt-3 text-2xl font-bold text-white">13 codes</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Present on the current public Haze Seas Game Info codes card.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Rejected from active list</span>
          <h2 className="mt-3 text-2xl font-bold text-white">1 disputed claim</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">GROUPONLY is not on the current codes card and remains unverified.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Last checked</span>
          <h2 className="mt-3 text-2xl font-bold text-white">July 11, 2026</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">The codes card still reflects the same July 4, 2026 code set even though the board itself had newer non-code activity on July 10-11.</p>
        </article>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Current best-known codes"
          copy="This list was rechecked on 2026-07-11 from the public Haze Seas Official Trello board. Only the current Haze Seas Game Info codes card counts as board evidence when older carryover cards conflict."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem codes"
            copy="The official Roblox description tells players to join the Discord for codes, and the public official Trello board keeps a codes card live. The in-game redeem button location still needs a fresh gameplay recheck after Update 1."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Code freshness policy"
            copy="Codes should show the date checked, source type, and conflict notes when sources disagree. On 2026-07-11, the current Haze Seas Game Info codes card still supported HAZESEAS2026, PATCH, OKUCHI, and multiple creator codes, while GROUPONLY remained a guide-only and legacy-board conflict."
          />
        </article>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Related answers"
          title="Continue with the page that matches your query"
          copy="Codes stay on this route; fruit timing and Haki questions belong in guides, entity lookups belong in the wiki, and official-link checks belong on the Trello and Discord status page."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">Haze Seas hub</Link>
          <Link href="/guides" className="button-secondary">Guides and fruit timing</Link>
          <Link href="/wiki" className="button-secondary">Wiki and locations</Link>
          <Link href="/trello" className="button-secondary">Trello and Discord status</Link>
        </div>
      </section>
    </main>
  );
}
