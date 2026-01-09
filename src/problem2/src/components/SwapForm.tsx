import { useState } from "react";
import AmountInput from "./AmountInput";
import TokenSelect from "./TokenSelect";

const TOKENS = ["ETH", "BTC", "SWTH"];

const SwapForm: React.FC = () => {
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("SWTH");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount] = useState("");
  const [isSubmitting] = useState(false);

  const isInvalid =
    !fromAmount || Number(fromAmount) <= 0 || fromToken === toToken;

  return (
    <div className="swap-card">
      <h2>Swap</h2>

      <AmountInput
        label="Amount to send"
        value={fromAmount}
        onChange={setFromAmount}
      />
      <TokenSelect value={fromToken} onChange={setFromToken} options={TOKENS} />

      <div className="swap-divider">↓</div>

      <AmountInput label="Amount to receive" value={toAmount} disabled />
      <TokenSelect value={toToken} onChange={setToToken} options={TOKENS} />

      {fromToken === toToken && (
        <p className="error">Tokens must be different</p>
      )}

      <button disabled={isInvalid || isSubmitting}>
        {isSubmitting ? "Processing..." : "Confirm Swap"}
      </button>
    </div>
  );
};

export default SwapForm;
