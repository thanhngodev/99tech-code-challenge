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
    swapDirection,
  } = useSwap();

  if (loading) return <div className="swap-card">Loading prices...</div>;
  if (error) return <div className="swap-card error">{error}</div>;

  return (
    <div className="swap-card">
      <h1 className="swap-title">Swap</h1>

      <div className="swap-panel">
        <TokenSelect
          value={fromToken}
          onChange={setFromToken}
          options={tokens}
        />

        <div className="swap-input-card">
          <input
            className="swap-input"
            type="number"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
          />
        </div>
      </div>

      <div className="swap-divider" title="Swap tokens" onClick={swapDirection}>
        <div className="swap-divider-icon">⇅</div>
      </div>

      <div className="swap-panel">
        <TokenSelect value={toToken} onChange={setToToken} options={tokens} />

        <div className="swap-input-card">
          <input
            className="swap-input"
            type="number"
            placeholder="0.0"
            value={toAmount}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default SwapForm;
