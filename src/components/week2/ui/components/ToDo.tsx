import { useEffect, useState } from "react";
import { setItem, getItem } from "../../util/LocalStorage";

interface Todo {
  id: number;
  text: string;
}

let nextId = 0;

export default function ToDo() {
  const [todoList, setToDoList] = useState<Todo[]>(() => {
    return getItem<Todo[]>("todos") || [];
  });
  const [newToDoText, setNewToDoText] = useState<string>("");

  // Oppdaterer input felt med current verdi hver render.
  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewToDoText(e.target.value);
  }

  // tar id og text fra inputValue og legger til i nytt array
  // prevList = forige verdi av state todos.
  function addToDo() {
    // nytt todo objekt = { id: nextId, text: newToDoText }
    // alle gamle todo = ...prev
    setToDoList((prev) => [...prev, { id: nextId++, text: newToDoText }]);
  }

  useEffect(() => {
    setItem("todoList", todoList);
  }, [todoList]);

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

      <ul>
        {/* mapper over "array todos", for hvert element i array lag li med key-id, innhold-text*/}
        {todoList.map((todo) => (
          <div className="listItem">
            <input type="checkbox" value="yes"></input>
            <li key={todo.id}>{todo.text}</li>

            <button
              onClick={() => {
                // Lag en ny liste med todo, lag listen med alle elementer som er annerledes fra a.id. (En liste med alle todo annen så "denne")
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
