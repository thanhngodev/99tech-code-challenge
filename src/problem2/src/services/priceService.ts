import type { TokenPrices } from "../types/token";

const PRICE_URL = "https://interview.switcheo.com/prices.json";

export async function fetchTokenPrices(): Promise<TokenPrices> {
  const res = await fetch(PRICE_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch token prices");
  }

  return res.json();
}
