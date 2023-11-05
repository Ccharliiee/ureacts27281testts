import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./components/HelloWorld";
import Todos from "./components/Todos";
import CreateTodo from "./components/CreateTodo";
import { Todo } from "./components/udtypes/todostypes";

export default function App() {
  const dummyTodo = [
    {
      id: new Date().toISOString() + "id1",
      todoText: "tstodotext1",
    },
    {
      id: new Date().toISOString() + "id2",
      todoText: "tstodotext2",
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(dummyTodo);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) =>
      prevTodos.concat({
        id:
          new Date().toISOString() + "id" + Math.floor(Math.random() * 100) + 3,
        todoText,
      })
    );
  };

  const deleteTodoByIdHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld />
      <CreateTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onDeleteTodo={deleteTodoByIdHandler} />
    </div>
  );
}
