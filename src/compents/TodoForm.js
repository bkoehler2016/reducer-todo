import React, { useState } from "react";
import { Button, Input } from "reactstrap";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = event => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <form>
        <Input
          value={newTodo}
          onChange={handleChanges}
          type="text"
          name="todo"
          placeholder="Todo..."
        />

        <div>
          <Button
            color="primary"
            onClick={event => {
              event.preventDefault();
              props.addTodo(newTodo);
              setNewTodo("");
            }}
          >
            Add
          </Button>
        </div>
      </form>
      <Button
        color="danger"
        onClick={event => {
          event.preventDefault();
          props.clearCompleted();
        }}
      >
        Clear Completed
      </Button>
    </>
  );
};

export default TodoForm;
