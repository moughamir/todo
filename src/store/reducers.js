import { TodoQuery } from '../constants'

const initialState = {
  loading: true,
  tasks: []
}

export const TodoReducers = (state = initialState, action = {}) => {
  const { data, type } = action
  switch (type) {
    case TodoQuery.FETCH_TODO_LIST:
      return {
        ...state,
        loading: false,
        tasks: data
      }

    default:
      return state
  }
}
