import { PRICE_URL } from "../constants/common";
import type { RawTokenPrice, TokenPrices } from "../types/token";

export const fetchTokenPrices = async (): Promise<TokenPrices> => {
  const res = await fetch(PRICE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch token prices");
  }

  const data: RawTokenPrice[] = await res.json();

  const map: Record<string, RawTokenPrice> = {};

  for (const item of data) {
    const existing = map[item.currency];
    if (!existing || new Date(item.date) > new Date(existing.date)) {
      map[item.currency] = item;
    }
  }

  // convert => { SYMBOL: price }
  const prices: TokenPrices = {};
  Object.values(map).forEach((item) => {
    prices[item.currency] = item.price;
  });

  return prices;
};
