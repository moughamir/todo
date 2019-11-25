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
          error
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

function ToggleTaskState (taskId) {
  return function (dispatch) {
    dispatch({ type: TodoQuery.TOGGLE_TODO_STATE, taskId })
  }
}

function AddTask (e, content) {
  e.preventDefault()
  return function (dispatch) {
    dispatch({ type: TodoQuery.ADD_TODO_TASK, data: content })
  }
}

function EditTask (e, content) {
  const postData = {
    method: 'PUT',
    body: JSON.stringify({
      ...content
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  e.preventDefault()
  return function (dispatch) {
    return fetch(dataSource, postData)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: TodoQuery.EDIT_TODO_TASK, data: json })
      )
      .catch(error => dispatch({
        type: TodoQuery.EDIT_TODO_TASK_FAILED,
        error
      }))
  }
}

function DeleteTask (e, content) {
  const deleteData = {
    method: 'DELETE'
  }
  const target = `${dataSource}/${content.id}`
  e.preventDefault()
  return function (dispatch) {
    return fetch(target, deleteData)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: TodoQuery.DELETE_TODO_TASK, data: json })
      )
      .catch(error => dispatch({
        type: TodoQuery.DELETE_TODO_TASK_FAILED,
        error
      }))
  }
}

export {
  AddTask,
  EditTask,
  DeleteTask,
  FetchTodos,
  FilterTodos,
  SearchTerms,
  ToggleTaskState
}
