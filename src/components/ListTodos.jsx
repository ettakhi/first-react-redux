import React from "react";
import { connect } from "react-redux";
import Demo from "./Demo";
import NewTodo from "./NewTodo";
import Login from "./Login";

const ListTodos = ({ todos, dispatch }) => {
  //   useEffect(() => {
  //     console.log(todos);
  //   }, []);
  return (
    <div>
      <NewTodo />
      <br />
      <Login />
      <br />
      {todos.map(todo => (
        <Demo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default connect(state => ({ todos: state.todos }))(ListTodos);
