import React, { Fragment } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/combineReducer";
import "./App.css";
import ListTodos from "./components/ListTodos";

const App = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware()));
  return (
    <Fragment>
      <Provider store={store}>
        <ListTodos />
      </Provider>
    </Fragment>
  );
};

export default App;
