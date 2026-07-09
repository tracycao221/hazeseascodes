import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with active codes, tier list rankings, Trello and Discord status, calculators, guides, and source-backed Roblox progression help.`,
  valueProposition: `Track active ${gameConfig.name} codes, compare the best picks, and use practical tools before you spend time grinding in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-09",
  freshnessLabel: "codes, source status, and query-to-route coverage checked on 2026-07-09",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} update`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    `${gameConfig.name} race tier list`,
    `${gameConfig.name} sword tier list`,
    `${gameConfig.name} fighting style tier list`,
    `${gameConfig.name} haki guide`,
    `${gameConfig.name} materials`,
    `${gameConfig.name} npc locations`,
    `${gameConfig.name} sea events`,
    `${gameConfig.name} sea 3 locations`,
    `${gameConfig.name} wandering merchant`,
    `${gameConfig.name} dragon skins`,
    `${gameConfig.name} okuchi`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Update Status", href: "/updates", description: "Latest public Roblox and creator-facing signals." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Updates",
      href: "/updates",
      items: [
        { label: "Latest Update", href: "/updates", description: "Roblox page status, update timing, and route impact." },
        { label: "Trello/Discord", href: "/trello", description: "Official-link status for live support surfaces." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Meta watch", href: "/tier-list-watch", description: "Race, sword, and fighting-style intent without invented rankings." },
        { label: "Calculator", href: "/calculator", description: "Decision helper for builds or progression." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/about",
      items: [
        { label: "About Us", href: "/about", description: "Author profile, editorial process, and source standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status, advertising boundaries, and source precedence." },
        { label: "Contact Us", href: "/contact", description: "Corrections, privacy questions, and editorial contact path." },
        { label: "Privacy Policy", href: "/privacy", description: "Privacy, analytics, ads, and third-party cookie disclosure." },
        { label: "Terms of Service", href: "/terms", description: "Use rules, unofficial status, and third-party service terms." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Tracked codes", value: "14", note: "13 official-board listings plus 1 disputed guide-only claim" },
  { label: "Core pages", value: "12", note: "Codes, updates, tier list, tier watch, Trello, tools, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
  { code: "HAZESEAS2026", reward: "The current public Trello Game Info codes card lists 10 Race Spins.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "RELEASE", reward: "The current public Trello Game Info codes card lists 1H x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "FREECASH", reward: "The current public Trello Game Info codes card lists 50k Cash.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "FREEGEMS", reward: "The current public Trello Game Info codes card lists 50 Gems.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "SUBSCRIBETOHAZEYT", reward: "The current public Trello Game Info codes card lists +50k Cash.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2Nikkolapz", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2BrosSiam", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2BadiTubes", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2BuilderboyTV", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "PATCH", reward: "The current public Trello Game Info codes card lists the code; guide sites still add reward details that need gameplay rechecks.", status: "Needs check", addedDate: "Board and guide checks updated 2026-07-09" },
  { code: "OKUCHI", reward: "The current public Trello Game Info codes card lists 5 Race Spins.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2XenoTy", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "Sub2CaptainMaui", reward: "The current public Trello Game Info codes card lists 20M x2 EXP.", status: "Needs check", addedDate: "Public board checked 2026-07-09" },
  { code: "GROUPONLY", reward: "Guide sites still list 10K Cash, but this code did not appear on the current Haze Seas Game Info codes card and only showed up on older legacy board content.", status: "Unverified", addedDate: "Guide and legacy-board conflict checked 2026-07-09" }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Leopard fruit",
    tier: "S",
    role: "Source-reported meta carry",
    reason: "Repeated current guide and creator coverage puts Leopard at or near the top of the Haze Seas fruit tier list, but this rank should still be treated as source-backed and not developer-confirmed.",
    confidence: "Early signal",
    bestFor: ["tier list", "late game"],
    sourceNote: "Repeated in current public tier-list, fruit showcase, and update coverage.",
    teamNote: "Compare Leopard against Dragon and Dough again after the next visible balance or event shift."
  },
  {
    name: "Dragon fruit",
    tier: "A",
    role: "Source-reported boss and endgame option",
    reason: "Dragon appears consistently in recent Haze Seas fruit showcases and high-end recommendations, but public sources still disagree on exact ordering.",
    confidence: "Early signal",
    bestFor: ["bossing", "endgame"],
    sourceNote: "Repeated in current public fruit showcase and ranking coverage.",
    teamNote: "Keep Dragon in the high-end cluster until more direct patch-note style evidence appears."
  },
  {
    name: "Dough fruit",
    tier: "A",
    role: "Source-reported PvE and combo option",
    reason: "Dough remains a repeated high-value fruit in public Haze Seas coverage, especially for combo-heavy and progression-focused discussions.",
    confidence: "Early signal",
    bestFor: ["farming", "combo play"],
    sourceNote: "Repeated in current public guide and showcase coverage.",
    teamNote: "Re-check Dough after the next visible update because combo-heavy rankings shift quickly."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Haze Seas beginner guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "First-session path, mistakes to avoid, and what to unlock first."
  },
  {
    title: "Haze Seas Haki guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "Source-backed notes for Haki, Conqueror Haki, and route dependencies."
  },
  {
    title: "Haze Seas sea events guide",
    href: "/guides",
    eyebrow: "Guide",
    description: "Current route for sea events, NPC locations, and event-sensitive progression notes."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Haze Seas materials",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Track materials, drops, and crafting-style search demand with source notes."
  },
  {
    title: "Haze Seas NPC locations",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Use for map routing, NPC lookup, bosses, and quest-sensitive pages."
  },
  {
    title: "Haze Seas Sea 3 locations",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Public Trello cards now make Sea 3 location checks and merchant routing part of the live wiki watch."
  },
  {
    title: "Haze Seas Okuchi and dragon skins",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Track newly visible entity names and cosmetics without pretending ranking or drop-rate details are final."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Haze Studios Roblox group",
    href: "https://www.roblox.com/communities/6602131",
    eyebrow: "Official",
    description: "Use the creator group as the identity checkpoint for official ownership and related surfaces."
  },
  {
    title: "Official Trello board",
    href: gameConfig.dataSources.trello ?? "/trello",
    eyebrow: "Verified board",
    description: "Public Trello JSON still shows the board as live, but this run also found legacy Haze Piece carryover cards on the same board."
  },
  {
    title: "Official Discord invite",
    href: gameConfig.dataSources.discord ?? "/trello",
    eyebrow: "Official",
    description: "The public Trello board still links to discord.gg/hazeseas, but the live redirect itself timed out from this environment and is being treated as board-backed rather than directly crawled."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, disputed, or still uncertain."
  },
  {
    title: "Update tracker",
    href: "/updates",
    eyebrow: "Freshness",
    description: "Use the update route for Roblox status, public update notes, and route impact."
  },
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Haze Seas fruit showcase search",
    href: "https://www.youtube.com/results?search_query=Haze+Seas+fruit+showcase",
    eyebrow: "Video",
    description: "Recent YouTube fruit showcase searches surface repeated meta terms such as Leopard, Dragon, Dough, and accessories."
  },
  {
    title: "Haze Seas NPC locations search",
    href: "https://www.youtube.com/results?search_query=Haze+Seas+NPC+locations",
    eyebrow: "Video",
    description: "NPC location videos are current demand signals for route planning and wiki expansion."
  },
  {
    title: "Haze Seas sea events search",
    href: "https://www.youtube.com/results?search_query=Haze+Seas+sea+events",
    eyebrow: "Video",
    description: "Sea event coverage is a fresh route family for guides, update notes, and wiki support pages."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, tier lists, calculators, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord status, calculator, beginner guide, wiki hub, and sources. Add entity pages after research confirms the game's real systems."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "Uncertain rewards stay clearly labeled so the page does not overstate verification."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Replace placeholder tiers with research-backed rankings, explain use cases, and split beginner, farming, and endgame recommendations when needed."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
