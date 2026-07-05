import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Haze Seas",
  slug: "haze-seas",
  domain: "https://hazeseascodes.com",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Coins",
    abbr: "COINS"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Codes every 6-12 hours, update and source checks daily",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/6918802270/Haze-Seas",
    discord: "https://discord.gg/hazeseas",
    trello: "https://trello.com/b/nn8bpTB0/haze-seas-official-trello"
  },
  ads: {
    publisher: "none",
    usesRuntimeConfig: false
  }
};
