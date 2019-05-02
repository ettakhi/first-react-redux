import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todos";

const Demo = ({ name, id, isDone, dispatch }) => {
  const onClick = () => {
    dispatch(toggleTodo({ id: id }));
  };

  return (
    <div>
      <div>name: {name}</div>
      <div>is done: {isDone ? "Yeah" : "No"}</div>
      <button className="btn btn-secondary" onClick={onClick}>
        Toogle
      </button>
      <br />
    </div>
  );
};

export default connect(state => ({ todos: state.todos }))(Demo);
