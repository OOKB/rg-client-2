import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Input from '../Editable/input/Input'
import Help from '../Editable/Help'
import Icon from '../Icon'

function getKey(id, prefix) {
  if (id) return id
  return prefix.join('-')
}
function InputField(props) {
  const {
    className, errorMessage, hardError, icon, id, message, prefix, suggestion, validating, ...rest
  } = props
  const key = getKey(id, prefix)

  return (
    <div className={classnames('input-group', className)}>
      <label htmlFor={key}><Icon {...icon} hidden /></label>
      <Input {...rest} id={key} />
      {validating && <p><i className="fa fa-refresh-fa fa-spin" /> validating</p>}
      {(errorMessage || message || suggestion) &&
        <Help
          help={message || errorMessage}
          hasErrors={hardError}
          id={id}
          suggestion={suggestion}
        />
      }
    </div>
  )
}


InputField.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hardError: PropTypes.bool,
  icon: PropTypes.object,
  id: PropTypes.string,
  message: PropTypes.string,
  prefix: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  suggestion: PropTypes.string,
  validating: PropTypes.bool,
}
InputField.defaultProps = {}
export default InputField
