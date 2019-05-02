import uuid from "uuid";

export const addTodo = ({ name }) => ({
  type: "ADD_TODO",
  payload: {
    id: uuid(),
    name,
    isDone: false
  }
});
export const removeTodo = ({ id }) => ({
  type: "REMOVE_TODO",
  payload: {
    id
  }
});

export const editTodo = ({ id, name, isDone }) => ({
  type: "EDIT_TODO",
  payload: {
    id,
    name,
    isDone
  }
});
export const toggleTodo = ({ id }) => ({
  type: "TOGGLE_TODO",
  payload: {
    id
  }
});
