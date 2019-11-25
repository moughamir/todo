/* global fetch */
import { TodoQuery } from '../constants'

const dataSource = 'https://jsonplaceholder.typicode.com/todos'

export function FetchTodos () {
  return function (dispatch) {
    return fetch(dataSource)
      .then(response => response.json())
      .then(json => dispatch({
        type: TodoQuery.FETCH_TODO_LIST,
        data: json.slice(0, 30)
      }))
      .catch((error) => dispatch({
			  type: TodoQuery.FETCH_TODO_LIST_FAILED,
			  error: error
		  }))
  }
}
