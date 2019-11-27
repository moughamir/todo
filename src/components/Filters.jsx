import React from 'react'
import PropTypes from 'prop-types'

const Filter = (props) => {
  const { tags, count, activeTab } = props
  return (
    <>
      <div className='filter'>
        <nav className='filter-nav'>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <input
                type='radio' id={`tag-${index}`}
                className='filter-tag' name='filter-radio' hidden
                checked={activeTab === tag}
                onChange={() => props.handleClick(tag)}
              />
              <label className='chip' htmlFor={`tag-${index}`}>
                {tag.toUpperCase()} ({count[tag]})
              </label>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </>)
}

Filter.propTypes = {
  tags: PropTypes.array,
  count: PropTypes.object,
  activeTab: PropTypes.string,
  handleClick: PropTypes.func
}

export default Filter
