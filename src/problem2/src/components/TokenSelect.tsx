import { ICON_BASE_URL } from "../constants/common";

type Props = {
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

const TokenSelect: React.FC<Props> = ({ value, onChange, options }: Props) => {
  return (
    <div className="token-select-modern">
      <img
        src={`${ICON_BASE_URL}/${value}.svg`}
        alt={value}
        className="token-icon-modern"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="token-dropdown-modern"
      >
        {options.map((token) => (
          <option key={token} value={token}>
            {token}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TokenSelect;
