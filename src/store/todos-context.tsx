import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export default TodosContext;

export const TodoProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: deleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
