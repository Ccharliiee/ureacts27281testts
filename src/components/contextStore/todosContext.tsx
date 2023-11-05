import React, { useState } from "react";

import { Todo } from "../udtypes/todostypes";

type TodosContextType = {
  toDosList: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  toDosList: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodosContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: new Date().toISOString() + "id1",
      todoText: "tstodotext1",
    },
    {
      id: new Date().toISOString() + "id2",
      todoText: "tstodotext2",
    },
  ]);

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

  const contextValue: TodosContextType = {
    toDosList: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoByIdHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
