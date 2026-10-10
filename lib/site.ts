/** Canonical site URL. Override with NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://govern-three.vercel.app";

export const siteName = "Govern";

export const siteDescription =
  "Spend, send, and manage money globally — with clarity, security, and zero friction.";

export const ogImage = {
  url: "/landing_page.png",
  width: 1351,
  height: 646,
  alt: "Govern — your money, one card, total control",
};
