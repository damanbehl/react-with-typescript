import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: Todo["text"];
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDeleteTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
