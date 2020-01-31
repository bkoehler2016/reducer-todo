import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = event => {
    setNewTodo(event.target.value);
  };
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="todo" sm={2}>
            Add Todo
          </Label>
          <Col sm={10}>
            <Input
              value={newTodo}
              onChange={handleChanges}
              type="text"
              name="todo"
              placeholder="Add Todo..."
            />
          </Col>
        </FormGroup>

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
      </Form>
      <Button
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
