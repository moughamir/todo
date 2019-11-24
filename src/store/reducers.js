import { FetchTodo } from "./actions";

const initialState = {
  tasks: []
};
export const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case FetchTodo:
      return {
        tasks: []
      };

    default:
      return state;
  }
};
