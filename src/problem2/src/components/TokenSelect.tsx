type Props = {
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

const TokenSelect: React.FC<Props> = ({ value, onChange, options }: Props) => {
  return (
    <select
      className="token-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((token) => (
        <option key={token} value={token}>
          {token}
        </option>
      ))}
    </select>
  );
};

export default TokenSelect;
