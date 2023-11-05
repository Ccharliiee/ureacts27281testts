import TodoItem from "./TodoItem";
import { Todo } from "./udtypes/todostypes";

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoText={todo.todoText} />
      ))}
    </ul>
  );
};

export default Todos;
