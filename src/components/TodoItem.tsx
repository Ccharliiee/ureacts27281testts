import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoText: string; onDeleteTodo: () => void }> = ({
  todoText,
  onDeleteTodo,
}) => {
  return (
    <li className={classes.item}>
      {todoText}
      <button onClick={onDeleteTodo}>x</button>
    </li>
  );
};

export default TodoItem;
