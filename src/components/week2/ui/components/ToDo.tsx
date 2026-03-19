import { useState } from "react";
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

  function updateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewToDoText(e.target.value);
  }

  function addToDo() {
    if (newToDoText.trim() === "") return;
    setToDoList([...todoList, { id: nextId++, text: newToDoText }]);
  }

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
        {todoList.map((todo) => (
          <div key={todo.id} className="listItem">
            <li>
              {" "}
              <input type="checkbox" value="yes"></input>
              {toUpper(todo.text)}
            </li>

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
