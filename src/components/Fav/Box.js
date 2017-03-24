import React, { PropTypes } from 'react'

import Close from '../CloseButton'

function FavAlertBox({ children, message, onClose }) {
  return (
    <div className="favorite popup absolute p1 z10">
      <Close onClick={onClose} />
      {message && <p className="m0 mb1">{message}</p>}
      {children}
    </div>
  )
}
FavAlertBox.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default FavAlertBox
