import { createStore } from "redux";
import { TodoReducers } from "./reducers";

const store = createStore(TodoReducers);

export default store;
