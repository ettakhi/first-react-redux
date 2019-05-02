import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

const NewTodo = ({ dispatch, todos }) => {
  const [todo, setTodo] = useState("");

  const onChange = e => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    dispatch(addTodo({ name: todo }));
    setTodo("");
  };
  return (
    <div>
      <input type="text" value={todo} onChange={onChange} />
      <button className="btn btn-primary" onClick={onClick} disabled={!todo}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(state => ({ todos: state.todos }))(NewTodo);
