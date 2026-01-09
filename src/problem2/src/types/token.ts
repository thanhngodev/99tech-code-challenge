export type RawTokenPrice = {
  currency: string;
  date: string;
  price: number;
};

export type TokenPrices = Record<string, number>;
