export const calculateSwapAmount = (
  amount: number,
  fromPrice: number,
  toPrice: number
): number => {
  if (toPrice === 0) return 0;
  return (amount * fromPrice) / toPrice;
};
