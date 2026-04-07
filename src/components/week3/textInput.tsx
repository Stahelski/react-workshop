type Prop = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextInput({
  label,
  value,
  onChange,
}: Prop): React.ReactNode {
  return (
    <>
      <label htmlFor="tin">{label}</label>
      <input
        id="tin"
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
