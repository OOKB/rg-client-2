import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'
import Icon from './Icon'

function TextSearch({ form, formEvent }) {
  const { value } = form
  const { onBlur, onChange, onFocus } = formEvent
  return (
    <div className="text-search text-center mb1">
      <div className="search-wrapper">
        <label><Icon symbol="search" /></label>
        <input
          autoFocus
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          value={value || ''}
        />
      </div>
    </div>
  )
}

TextSearch.propTypes = {
  form: PropTypes.object,
  formEvent: PropTypes.object.isRequired,
}
TextSearch.defaultProps = {
}
export default connectField({ initialValue: '' })(TextSearch)
