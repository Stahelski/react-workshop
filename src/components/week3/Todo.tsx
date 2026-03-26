import { useState } from "react";

export default function ToDo() {
  // <string[]>([]) Fordi useState forventer da stringArray - tomt Array
  const [list, updateList] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function addTask() {
    if (input.trim() === "") return;
    if (list.includes(input)) {
      alert("Can't add value that already exists in to do");
      return;
    }

    updateList((prev) => [...prev, input]);
    setInput("");
  }

  function delite(t: string) {
    const ts = t.toString();
    const toDoWithOutSettTask = list.filter((toDoArr) => toDoArr !== ts);
    updateList(toDoWithOutSettTask);
  }

  return (
    <div className="toDoWrapper">
      <input
        type="text"
        value={input}
        placeholder="To Do..."
        onChange={updateChange}
      />
      <button onClick={addTask}>Add</button>

      <div>
        {list.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => delite(todo)}>Delite</button>
            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
}

// const updateTask = setList(prev => prev.filter((item, index) => index !== targetIndex))
