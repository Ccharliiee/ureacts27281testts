import { useContext, useRef } from "react";

import { TodosContext } from "./contextStore/todosContext";

import classes from "./CreateTodo.module.css";

const CreateTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todoInputSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={todoInputSubmitHandler} className={classes.form}>
      <label htmlFor="text">Create Todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default CreateTodo;
