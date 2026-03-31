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
  const [err, setErr] = useState<string>("");

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const isFilled = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      !input.firstName ||
      !input.lastName ||
      !input.userName ||
      !input.email
    ) {
      setErr("all fields must be filed in!");
    }

    if (!regex.test(input.email)) {
      setErr(
        "Ugyldig e-post! E-posten må:\n" +
          "- Ha minst ett tegn før @ (bokstaver, tall, punktum, underscore, +, -)\n" +
          "- Inneholde ett @-symbol\n" +
          "- Ha et domenenavn etter @ (bokstaver, tall, punktum eller bindestrek)\n" +
          "- Ha et toppdomene med minst 2 bokstaver (f.eks. .no, .com, .org)",
      );
    }
  };

  return (
    <>
      <div className="formWrapper">
        <label htmlFor="firstNameInput">First name:</label>
        <input
          id="nameInput"
          name="firstName"
          type="text"
          value={input.firstName}
          onChange={handelChange}
          placeholder="first name"
        />

        <label htmlFor="lastNameInput">Last name:</label>
        <input
          id="lastNameInput"
          name="lastName"
          type="text"
          value={input.lastName}
          onChange={handelChange}
          placeholder="last name"
        />

        <label htmlFor="userNameInput">User name:</label>
        <input
          id="userNameInput"
          name="userName"
          type="text"
          value={input.userName}
          onChange={handelChange}
          placeholder="user name"
        />

        <label htmlFor="emailInput">Email:</label>
        <input
          id="emailInput"
          name="email"
          type="text"
          value={input.email}
          onChange={handelChange}
          placeholder="Email"
        />
        <small style={{ color: "red", maxWidth: "400px" }}>{err}</small>
        <button onClick={isFilled}>Press</button>
      </div>
    </>
  );
}

// https://www.youtube.com/watch?v=PLoxdzlfkuw
