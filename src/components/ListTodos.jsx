import React, { useEffect } from "react";
import { connect } from "react-redux";
import Demo from "./Demo";
import NewTodo from "./NewTodo";

const ListTodos = ({ todos, dispatch }) => {
  useEffect(() => {
    console.log(todos);
  }, []);
  return (
    <div>
      <NewTodo />
      {todos.map(todo => (
        <Demo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default connect(state => ({ todos: state.todos }))(ListTodos);
