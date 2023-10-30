import TodoItem from "./TodoItem";
import { Todo } from "./udtypes/todostypes";

const Todos: React.FC<{ todos: Todo[] }> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todoText={todo.todoText} />
      ))}
    </ul>
  );
};

export default Todos;
