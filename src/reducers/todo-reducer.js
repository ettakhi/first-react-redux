const defaultReducer = [];
export default (state = defaultReducer, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== payload.id);
    case "EDIT_TODO":
      return state.map(todo => (todo.id === payload.id ? payload : todo));
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};
