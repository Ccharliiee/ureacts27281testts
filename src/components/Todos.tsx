import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "./contextStore/todosContext";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.toDosList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoText={todo.todoText}
          onDeleteTodo={() => {
            todosCtx.deleteTodo(todo.id);
          }}
        />
      ))}
    </ul>
  );
};

export default Todos;
