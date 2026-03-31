import { useState } from "react";

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const initial: Props = {
  label: "",
  value: "",
  onChange: () => {},
};

export default function Messenger() {
  const [input, setInput] = useState<Props>(initial);
  return (
    <div>
      <label htmlFor="tin">{input.label}</label>
      <input
        id="tin"
        type="text"
        placeholder="some text"
        value={input.value}
        onChange={input.onChange}
      />
    </div>
  );
}
