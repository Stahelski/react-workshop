import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

// https://www.w3schools.com/react/react_usestate.asp

export default function ToDo(i: Todo) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function newTodo() {
    return {};
  }

  return (
    <>
      <h1>To Do List!</h1>

      <input
        type="text"
        id="todo-in"
        placeholder="Add to do"
        value={inputValue}
        onChange={updateChange}
      />
      <mark>{i.isDone}</mark>
      <button
        onClick={() => {
          setInputValue("");
          onSetToDo(todos);
        }}
      >
        Add
      </button>
    </>
  );
}
