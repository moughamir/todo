/* global fetch */
import { TodoQuery, FilterTags, TaskFilter } from '../constants'

const dataSource = 'https://jsonplaceholder.typicode.com/todos'

function FetchTodos () {
  return function (dispatch) {
    return fetch(dataSource)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: TodoQuery.FETCH_TODO_LIST,
          data: json.slice(0, 30)
        })
      )
      .catch(error =>
        dispatch({
          type: TodoQuery.FETCH_TODO_LIST_FAILED,
          error: error
        })
      )
  }
}

function FilterTodos (todoState) {
  return function (dispatch) {
    switch (todoState) {
      case FilterTags.active:
        dispatch({
          type: TaskFilter.SHOW_ACTIVE,
          data: FilterTags.active
        })
        break
      case FilterTags.done:
        dispatch({
          type: TaskFilter.SHOW_DONE,
          data: FilterTags.done
        })
        break
      default:
        dispatch({
          type: TaskFilter.SHOW_ALL,
          data: FilterTags.all
        })
    }
  }
}

function SearchTerms (e, term) {
  e.preventDefault()
  return function (dispatch) {
    dispatch({ type: TodoQuery.SEARCH, data: term })
  }
}

function ToggleTaskState (event, taskId) {
  return function (dispatch) {
    dispatch({ type: 'TOGGLE_TASK_STATE' })
  }
}

function DeleteTask (event, taskId) {
  event.preventDefault()
  return function (dispatch) {
    dispatch({ type: 'DELETE' })
  }
}

export {
  DeleteTask,
  FetchTodos,
  FilterTodos,
  SearchTerms,
  ToggleTaskState
}
