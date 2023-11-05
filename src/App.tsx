import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./components/HelloWorld";
import Todos from "./components/Todos";
import CreateTodo from "./components/CreateTodo";
import TodosContextProvider from "./components/contextStore/todosContext";

export default function App() {
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
      <TodosContextProvider>
        <CreateTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}
