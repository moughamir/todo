/* global fetch */
import { TodoQuery, FilterTags, TaskFilter } from '../constants'

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

export function FilterTodos (todoState) {
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

const onChange = (e, terms) => {
  const fieldValues = e.currentTarget.value
  const newTerms = []
  newTerms.push(
    terms.find(x => x.title === terms.map(t => t.title)
      .filter(t => t.toLowerCase()
        .indexOf(fieldValues.toLocaleLowerCase()) > -1)
      .toString()
    ))
  console.log(fieldValues, newTerms)
  return newTerms
}

export function SearchTerms (event, array) {
  return function (dispatch) {
    console.info(onChange(event, array))
    dispatch({ type: 'HELLO', data: onChange(event, array) })
  }
}
