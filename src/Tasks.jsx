import React from "react";

const Tasks = () => (
  <React.Fragment>
    <h3 className="p-2">Todo list</h3>
    <hr />
    <ol>
      <li>
        Get todo list from:{" "}
        <code>https://jsonplaceholder.typicode.com/todos/</code> and put them
        (first 30) in redux store.
      </li>
      <li>Show todo list.</li>
      <li>
        Add filters for: All (<span className="text-success">count</span>) |
        Active (<span className="text-success">count</span>) | Done (
        <span className="text-success">count</span>) (Radio).
      </li>
      <li>Search for todos.</li>
      <li>Add a new todo.</li>
      <li>Create a route to show a specific Todo from the store.</li>
      <li>Edit a todo in the store.</li>
      <li>Remove a todo from the store.</li>
      <li>
        <strong>Toggle</strong> completed for one todo (Checkbox).
      </li>
      <li>
        <strong>Toggle</strong> completed for all todos (Button).
      </li>
    </ol>
  </React.Fragment>
);

export default Tasks;
