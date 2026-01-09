import AmountInput from "./AmountInput";
import TokenSelect from "./TokenSelect";
import { useSwap } from "../hooks/useSwap";

const SwapForm: React.FC = () => {
  const {
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
  } = useSwap();

  if (loading) return <div className="swap-card">Loading prices...</div>;
  if (error) return <div className="swap-card error">{error}</div>;

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
      <TokenSelect value={fromToken} onChange={setFromToken} options={tokens} />

      <div className="swap-divider">↓</div>

      <AmountInput label="Amount to receive" value={toAmount} disabled />
      <TokenSelect value={toToken} onChange={setToToken} options={tokens} />

      {fromToken === toToken && (
        <p className="error">Tokens must be different</p>
      )}

      <button disabled={isInvalid}>Confirm Swap</button>
    </div>
  );
};

export default SwapForm;
