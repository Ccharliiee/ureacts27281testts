import { useRef } from "react";

const CreateTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todoInputSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoInputSubmitHandler}>
      <label htmlFor="text">Create Todo</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default CreateTodo;
