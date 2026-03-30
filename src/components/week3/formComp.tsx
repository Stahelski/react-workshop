import { useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
};

const initialValue: User = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
};

export default function Form() {
  const [input, setInput] = useState<User>(initialValue);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="formWrapper">
        <label htmlFor="firstNameInput">First name:</label>
        <input
          id="nameInput"
          type="text"
          value={input}
          onChange={handelChange}
          placeholder="first name"
        />

        <label htmlFor="lastNameInput">Last name:</label>
        <input
          id="lastNameInput"
          type="text"
          value={input}
          placeholder="last name"
        />

        <label htmlFor="userNameInput">User name:</label>
        <input
          id="userNameInput"
          type="text"
          value={input}
          placeholder="user name"
        />

        <label htmlFor="emailInput">Email:</label>
        <input id="emailInput" type="text" value={input} placeholder="Email" />

        <button>Press</button>
      </div>
    </>
  );
}
