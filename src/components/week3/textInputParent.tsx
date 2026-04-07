// https://react.dev/learn/thinking-in-react

import { useState } from "react";
import TextInput from "./textInput";

export default function Messenger() {
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <TextInput label="Skriv noe" value={input} onChange={setInput} />
      <p>{input}</p>
    </div>
  );
}
