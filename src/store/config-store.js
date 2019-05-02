import { combineReducers } from "redux";
import todosReducer from "../reducers/todo-reducer";

export default combineReducers({
  todos: todosReducer
});
