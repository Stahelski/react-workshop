import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function checkVal() {
    if (input.length < 4) {
      setError("Your username needs to be longer");
    } else if (input.length > 32) {
      setError("Your username needs to be shorter");
    } else {
      return;
    }
  }

  return (
    <div className="formWrapper">
      <h1>User name</h1>
      <p>
        Please enter your desired username thats between 4 and 32 characters
      </p>
      <input type="text" value={input} onChange={updateChange} />
      <small id="small" style={{ color: "red" }}>
        {error}
      </small>
      <button disabled={input === ""} onClick={checkVal}>
        Submit
      </button>
    </div>
  );
}
