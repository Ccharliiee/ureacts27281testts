import TodoItem from "./TodoItem";
import { Todo } from "./udtypes/todostypes";

import classes from "./Todos.module.css";

const Todos: React.FC<{
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}> = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={classes.todos}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoText={todo.todoText}
          onDeleteTodo={() => {
            onDeleteTodo(todo.id);
          }}
        />
      ))}
    </ul>
  );
};

export default Todos;
