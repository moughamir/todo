import { TodoQuery } from "../constants";

const dataSource = "https://jsonplaceholder.typicode.com/todos";
const FetchTodo = (url, data) => {
  fetch(url)
    .then(response => response.json())
    .then(json => ({
      type: TodoQuery.FetchTodo,
      data
    }));
};

export { FetchTodo };
