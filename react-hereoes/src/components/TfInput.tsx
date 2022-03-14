interface Props {
  label: string;
  value: string;
  disabled?: boolean;
  input?: (value: string) => void;
}

export default function ({ label, value, disabled = false, input }: Props) {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onInput={(e) => input?.((e.target as any).value)}
      />
    </div>
  );
}
