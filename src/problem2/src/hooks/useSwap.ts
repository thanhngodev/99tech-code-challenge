/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from "react";
import { fetchTokenPrices } from "../services/priceService";
import type { TokenPrices } from "../types/token";
import { calculateSwapAmount } from "../utils/calculateSwap";

export const useSwap = () => {
  const [prices, setPrices] = useState<TokenPrices>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  // Fetch prices on mount
  useEffect(() => {
    fetchTokenPrices()
      .then((data) => {
        setPrices(data);
        const tokens = Object.keys(data);
        setFromToken(tokens[0]);
        setToToken(tokens[1] || tokens[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Auto calculate output
  useEffect(() => {
    if (!fromToken || !toToken) return;

    const amount = Number(fromAmount);
    if (!amount || amount <= 0) {
      setToAmount("");
      return;
    }

    const result = calculateSwapAmount(
      amount,
      prices[fromToken],
      prices[toToken]
    );

    setToAmount(result.toFixed(6));
  }, [fromAmount, fromToken, toToken, prices]);

  const tokens = useMemo(
    () => Object.keys(prices).filter((k) => prices[k] > 0),
    [prices]
  );

  const swapDirection = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount("");
    setToAmount("");
  };

  return {
    tokens,
    loading,
    error,

    fromToken,
    toToken,
    fromAmount,
    toAmount,

    setFromToken,
    setToToken,
    setFromAmount,
    swapDirection,
  };
};
