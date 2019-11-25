import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import { FetchTodos } from '../store/actions'

// const TodoItems = [
//   {
//     id: 1,
//     title:
//       'Get todo list from https://jsonplaceholder.typicode.com/todos/ and put them (first 30) in redux store.',
//     completed: false
//   },
//   { id: 2, title: 'Show todo list.', completed: false },
//   {
//     id: 3,
//     title: 'Add filters for: All (count) |Active (count) | Done (count) (Radio).',
//     completed: false
//   },
//   { id: 4, title: 'Search for todos.', completed: false },
//   { id: 5, title: 'Add a new todo.', completed: false },
//   {
//     id: 6,
//     title: 'Create a route to show a specific Todo from the store.',
//     completed: false
//   },
//   { id: 7, title: 'Edit a todo in the store.', completed: false },
//   { id: 8, title: 'Remove a todo from the store.', completed: false },
//   {
//     id: 9,
//     title: 'Toggle completed for one todo (Checkbox).',
//     completed: false
//   },
//   { id: 10, title: 'Toggle completed for all todos (Button).', completed: false }
// ]

class Tasks extends React.Component {
  componentDidMount () {
    this.props.InitApp()
  }

  render () {
    const { loading, todos } = this.props

    return (
      <section className='card'>
        <header className='card-header'>
          <h3 className='p-2 text-center'>Todo list</h3>
        </header>
        <hr />
        <article className='card-body'>
          {
            loading
              ? <div className='loading loading-lg' />
              : <TaskList items={todos} />
          }
        </article>
      </section>
    )
  }
}

Tasks.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  InitApp: PropTypes.func
}
const mapStateToProps = (state) => ({
  todos: state.tasks,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  InitApp: () => dispatch(FetchTodos())
})

export default (connect(mapStateToProps, mapDispatchToProps)(Tasks))
