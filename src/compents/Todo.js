import React from "react";
import { Card } from "reactstrap";

const Todo = props => {
  //console.log(props, "props");
  return (
    <Card
      className="todoItem"
      style={
        props.todoItem.completed ? { textDecoration: "line-through" } : null
      }
      onClick={e => {
        e.preventDefault();
        props.toggleCompleted(props.todoItem.id);
      }}
    >
      {props.todoItem.item}
    </Card>
  );
};

export default Todo;
