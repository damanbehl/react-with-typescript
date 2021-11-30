import { FC, useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

const Todos: FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onDeleteTodo={todoCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
