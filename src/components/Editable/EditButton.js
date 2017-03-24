import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import ButtonEl from '../Button'

function EditButton({ formEvent, item }) {
  function onClick() {
    formEvent.onChange(item.id)
  }
  return (
    <ButtonEl
      className="edit"
      icon="pencil"
      onClick={onClick}
      title="Edit this item"
    />
  )
}

EditButton.propTypes = {
  formEvent: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default connectField({ prefix: 'edit.button' })(EditButton)
