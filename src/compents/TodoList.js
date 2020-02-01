import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  //console.log(props, "todoList");
  return (
    <div className="todo-list">
      {props.todoState.map(item => {
        //console.log(item, "todoItem");
        return (
          <Todo
            toggleCompleted={props.toggleCompleted}
            key={item.id}
            todoItem={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
