import React, { Fragment } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import combineReducer from "./store/config-store";
import "./App.css";
import ListTodos from "./components/ListTodos";

const App = () => {
  // const [demos, setDemos] = useState([]);
  return (
    <Fragment>
      <Provider store={createStore(combineReducer)}>
        <ListTodos />
      </Provider>
    </Fragment>
  );
};

export default App;
