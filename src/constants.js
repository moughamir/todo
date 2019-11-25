export const TodoQuery = {
  FETCH_TODO_LIST: 'FETCH_TODO_LIST',
  FETCH_TODO_LIST_FAILED: 'FETCH_TODO_LIST_FAILED',
  EDIT_TODO_TASK: 'EDIT_TODO_ITEM',
  DELETE_TODO_TASK: 'DELETE_TODO_ITEM',
  SEARCH: 'SEARCH'
}

export const TaskState = {
  MARK_TASK_DONE: 'MARK_TASK_DONE',
  MARK_TASK_ACTIVE: 'MARK_TASK_ACTIVE'
}

export const TaskFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DONE: 'SHOW_DONE',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const FilterTags = {
  all: 'all',
  active: 'active',
  done: 'done'
}
