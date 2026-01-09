import React from "react";

type Props = {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  disabled?: boolean;
};

const AmountInput: React.FC<Props> = ({
  label,
  value,
  onChange,
  disabled,
}: Props) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="0.0"
      />
    </div>
  );
};

export default AmountInput;
