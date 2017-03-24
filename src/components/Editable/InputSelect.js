import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import Select from './Select'

const style = {
  label: {
    fontSize: '.7em',
    // lineHeight: '1.5rem',
    paddingRight: 5,
  },
}

function InputSelect({ form, formEvent, label, options, value }) {
  return (
    <div className="inputSelect">
      {label && <span style={style.label}>{label}</span>}
      <Select
        value={form.value || value}
        {...formEvent}
        options={options}
      />
    </div>
  )
}

InputSelect.propTypes = {
  form: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
}
InputSelect.defaultProps = {
  value: '', // Because react-select doesn't like the initial value of undefined.
}
export default connectField()(InputSelect)
