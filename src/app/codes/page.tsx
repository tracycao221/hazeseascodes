import type { Metadata } from "next";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes`,
  description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
    url: `${siteConfig.domain}/codes`,
    images: [`${siteConfig.domain}/codes/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes`,
    description: `Active ${siteConfig.gameName} codes, rewards, redemption steps, and source confidence notes.`,
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
        title={`${siteConfig.gameName} Codes`}
        description="Use this page as the canonical Haze Seas codes surface. Consensus codes are listed as verified for this run, while disputed July 2026 code claims stay clearly marked as unverified."
      />
      <section className="mt-10">
        <SectionHeader
          eyebrow="Active list"
          title="Current best-known codes"
          copy="This list was refreshed on 2026-07-04 from current public code guides, Roblox-facing source pages, and freshness checks. Conflicting July 2026 claims stay marked Unverified."
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
            copy="Current public guides still describe a standard Roblox reward-panel flow, but the in-game button location should be rechecked after each visible Haze Seas update."
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
            copy="Codes should show the date checked, source type, and conflict notes when trackers disagree. For example, GROUPONLY and HAZESEAS2026 were still circulating on 2026-07-04, but they are not treated as safely active until a stronger source or live claim confirms them."
          />
        </article>
      </section>
    </main>
  );
}
