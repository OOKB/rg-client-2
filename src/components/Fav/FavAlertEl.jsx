import React, { PropTypes } from 'react'
import Link from 'redux-history-component'

import Box from './Box'
import Field from '../Editable/FieldWrapper'
import { projectLink } from '../../redux/collection'

function FavAlert({ listItem, message, onClose, schema, viewText }) {
  const collectionUrl = projectLink(listItem.list)
  return (
    <Box onClose={onClose} message={message}>
      <ul className="list-reset mb1">
        {/* <li><Field {...schema.position} /></li> */}
        <li><Field {...schema.description} /></li>
      </ul>
      {collectionUrl &&
        <Link className="small uppercase" href={collectionUrl} onClick={onClose}>
          {viewText}
        </Link>
      }
    </Box>
  )
}

FavAlert.propTypes = {
  listItem: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  schema: PropTypes.object,
  viewText: PropTypes.string.isRequired,
}
FavAlert.defaultProps = {
  viewText: 'View and share',
}
export default FavAlert
