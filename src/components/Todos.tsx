import TodoItem from "./TodoItem";
import { Todo } from "./udtypes/todostypes";

import classes from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoText={todo.todoText} />
      ))}
    </ul>
  );
};

export default Todos;
