import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { FetchTodos, FilterTodos } from '../store/actions'
import TaskList from './TaskList'
import Filter from './Filters'
import Search from './Search'

class Tasks extends React.Component {
  componentDidMount () {
    this.props.InitApp()
  }

  render () {
    const {
      loading, tags, count, visible, handleFilter,
      visibleItems
    } = this.props

    return (
      <section className='card'>
        {loading ? (
          <div className='loading loading-lg' />
        ) : (
          <>
            <form>
              <header className='card-header'>
                <h3 className='p-2 text-center'>Todo list</h3>
              </header>
              <Search dataArray={visibleItems} />
              <hr />
              <Filter
                tags={tags}
                count={count}
                activeTab={visible}
                handleClick={(e) => handleFilter(e)}
              />
              <article className='card-body'>
                <TaskList items={visibleItems} vibile={visible} />
              </article>
            </form>
          </>
        )}
      </section>
    )
  }
}

Tasks.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  visibleItems: PropTypes.array,
  tags: PropTypes.array,
  count: PropTypes.object,
  visible: PropTypes.string,
  handleFilter: PropTypes.func,
  InitApp: PropTypes.func
}
const mapStateToProps = state => ({
  loading: state.loading,
  todos: state.tasks,
  tags: state.tags,
  count: state.count,
  visible: state.visible,
  visibleItems: state.visibleItems
})

const mapDispatchToProps = dispatch => ({
  InitApp: () => dispatch(FetchTodos()),
  handleFilter: (targetTag) => dispatch(FilterTodos(targetTag))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
