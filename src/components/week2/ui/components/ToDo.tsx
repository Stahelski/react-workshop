import { useState, useRef, useEffect } from "react";
import toUpper from "../../util/toUpper";
import { useLocalStorage } from "../../util/hooks/LocalStorage";

interface Todo {
  id: number | string;
  text: string;
}

let nextId = 0;

export default function ToDo() {
  const [todoList, setToDoList] = useLocalStorage<Todo[]>("todo", []);
  const [newToDoText, setNewToDoText] = useState<string>("");
  const prevInput = useRef("");

  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewToDoText(e.target.value);
  }

  function addToDo() {
    if (newToDoText.trim() === "") return;
    setToDoList([...todoList, { id: nextId++, text: newToDoText }]);
  }

  // Legg fungsjonen på en kanpp, noClick => ta alle elementer fra todoList, iterer over, sammenlign rekkefølgen av bokstavene, lag en kopi av listen med verdiene i alfabetisk rekkefølge.

  function sort() {}
  // - `useRef` for å følge med på et input felt
  // - https://www.w3schools.com/react/react_useref.asp
  // - `.filter` for å søke etter produkter
  // - https://www.w3schools.com/jsref/jsref_filter.asp

  return (
    <>
      <h1>To Do List!</h1>

      <input
        type="text"
        id="todo-in"
        placeholder="Add to do"
        value={newToDoText}
        onChange={updateChange}
      />

      {/* <mark>{i.isDone}</mark> */}
      <button
        onClick={() => {
          addToDo();
          setNewToDoText("");
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          sort();
          setNewToDoText("");
        }}
      >
        Sort
      </button>

      <ul>
        {todoList.map((todo) => (
          <div key={todo.id} className="listItem">
            <li>
              {" "}
              <input type="checkbox" value="yes"></input>
              {toUpper(todo.text)}
            </li>

            <button
              onClick={() => {
                setToDoList(todoList.filter((a) => a.id !== todo.id));
                setNewToDoText("");
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
