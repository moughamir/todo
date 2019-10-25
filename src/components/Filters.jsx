import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { FilterTodos } from '../store/actions'
import PropTypes from 'prop-types'

const Filter = props => {
  const { tags, count } = props
  const activeTab = useSelector(state => state.visible, shallowEqual)
  const dispatch = useDispatch()

  return (
    <>
      <div className='filter'>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <input
              type='radio'
              id={`tag-${index}`}
              className='filter-tag'
              name='filter-radio'
              hidden
              checked={activeTab === tag}
              onChange={() => dispatch(FilterTodos(tag))}
            />
            {console.log(activeTab === tag)}
          </React.Fragment>
        ))}
        <nav className='filter-nav'>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <label className='chip' htmlFor={`tag-${index}`}>
                {tag.toUpperCase()} ({count[tag]})
              </label>
            </React.Fragment>))}
        </nav>
      </div>
    </>
  )
}

Filter.propTypes = {
  tags: PropTypes.array,
  count: PropTypes.object,
  activeTab: PropTypes.string,
  handleClick: PropTypes.func
}

export default Filter
