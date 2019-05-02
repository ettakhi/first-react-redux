import { combineReducers } from "redux";
import todosReducer from "./todo-reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  todos: todosReducer,
  form: formReducer
});
