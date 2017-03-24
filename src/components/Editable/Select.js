import React, { PropTypes } from 'react'
import classnames from 'classnames'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import map from 'lodash/map'

function SelectOption({ value, label, active }) {
  return (
    <option className={classnames({ active })} value={value}>
      {label}
    </option>
  )
}
SelectOption.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

function opts(arg) {
  if (isString(arg)) return { value: arg, label: arg }
  if (isNumber(arg)) return { value: arg.toString(), label: arg.toString() }
  return arg
}

function Select({ options, value, ...props }) {
  if (!options.length) return <div>NO OPTIONS</div>
  return (
    <select
      {...props}
      value={value}
    >
      {map(options, (opt) => {
        const optionDetails = opts(opt)
        return (<SelectOption
          {...optionDetails}
          active={value === optionDetails.value}
          key={optionDetails.value}
        />)
      })}
    </select>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}
Select.defaultProps = {
  value: '-',
}
export default Select
