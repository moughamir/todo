import { TodoQuery, FilterTags, TaskFilter } from '../constants'

const initialState = {
  loading: true,
  tasks: [],
  visibleItems: [],
  tags: Object.keys(FilterTags),
  visible: FilterTags.all,
  count: {}
}

export const TodoReducers = (state = initialState, action = {}) => {
  const { data, type } = action
  switch (type) {
    case TodoQuery.FETCH_TODO_LIST:
      return {
        ...state,
        loading: false,
        tasks: data,
        visibleItems: data,
        count: {
          all: data.length,
          active: data.reduce((active, item) => active + (item.completed === false), 0),
          done: data.reduce((done, item) => done + (item.completed === true), 0)
        }
      }
    case TaskFilter.SHOW_ACTIVE:
      return {
        ...state,
        visible: data,
        visibleItems: state.tasks.filter(t => !t.completed)
      }
    case TaskFilter.SHOW_DONE:
      return {
        ...state,
        visible: data,
        visibleItems: state.tasks.filter(t => t.completed)
      }
    case TaskFilter.SHOW_ALL:
      return {
        ...state,
        visible: data,
        visibleItems: state.tasks

      }
    case TodoQuery.SEARCH:
      return {
        ...state,
        visibleItems: state.tasks.filter(val => val.title.includes(data))
      }
    case TodoQuery.ADD_TODO_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            userId: 1,
            id: ++state.tasks.length,
            title: data,
            completed: false
          }
        ]
      }
    case TodoQuery.TOGGLE_TODO_STATE:
      return {
        ...state,
        task: state.tasks.map(task => (task.id === data) ? { ...task, completed: !task.completed } : task)
      }
    default:
      return state
  }
}
