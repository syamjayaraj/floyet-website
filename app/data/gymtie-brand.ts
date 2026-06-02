/** Brand colors from https://gymtie.com */
export const GYMTIE_MANAGER = {
  id: "manager",
  name: "GymTie Manager",
  tagline: "For gym owners",
  accent: "#f2c94c",
  accentMuted: "rgba(242, 201, 76, 0.18)",
  accentGlow: "rgba(242, 201, 76, 0.35)",
  image: "/assets/gymtie/manager.png",
} as const;

export const GYMTIE_FIT = {
  id: "fit",
  name: "GymTie Fit",
  tagline: "For members",
  accent: "#4fc3f7",
  accentMuted: "rgba(79, 195, 247, 0.18)",
  accentGlow: "rgba(79, 195, 247, 0.35)",
  image: "/assets/gymtie/fit.png",
} as const;

export const GYMTIE_SLIDES = [GYMTIE_MANAGER, GYMTIE_FIT] as const;

export type GymTieSlideId = (typeof GYMTIE_SLIDES)[number]["id"];
