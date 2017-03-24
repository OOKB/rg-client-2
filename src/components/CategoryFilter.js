import React, { PropTypes } from 'react'
import map from 'lodash/map'
import merge from 'lodash/merge'
import { connectField } from 'redux-field'

const styles = {
  button: {
    background: 'none',
    backgroundColor: 'rgb(242,239,229)',
    cursor: 'pointer',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    color: 'rgb(121,120,115)',
    border: '1px solid rgb(121,120,115)',
  },
  buttonActive: {
    fontWeight: 'bold',
    color: 'rgb(066,067,047)',
    backgroundColor: 'rgb(205,206,191)',
  },
}

function getButtonStyle(activeCategory, value) {
  if (activeCategory === value) return merge({}, styles.button, styles.buttonActive)
  return styles.button
}

function CategoryFilter({ activeCategory, formEvent, options }) {
  if (!options.length) return <div>NO OPTIONS</div>
  function onClick({ target }) {
    if (target.value === activeCategory) return formEvent.onChange(null)
    return formEvent.onChange(target.value)
  }
  return (
    <div className="collection-menu group mb0">
      <div className="select-type mlrauto">
        <div className="button-group flex-center text-center">
          {map(options, ({ value, label }) => {
            const style = getButtonStyle(activeCategory, value)
            return (
              <button
                className="flex-item"
                style={style}
                onClick={onClick}
                value={value}
                key={value}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string,
  options: PropTypes.array.isRequired,
  formEvent: PropTypes.object.isRequired,
}
CategoryFilter.defaultProps = {
}
export default connectField()(CategoryFilter)
