import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Box from './Box'
import CollectionEl from './CollectionEl'
import Field from '../Editable/FieldWrapper'
import Icon from '../Icon'

const collectionField = {
  // className: 'collection-title',
  emptyText: 'Add Project',
  icon: { className: 'light-gray', symbol: 'pencil' },
  id: 'new-collection',
  placeholder: 'Title',
  prefix: [ 'collection', 'title' ],
  // validate
}

function Overview({ createCollection, message, onClose, userCollections }) {
  return (
    <Box message={message} onClose={onClose}>
      <h3 className="m0 fs1 uppercase mono bb1 fw400 mb05">User Collections</h3>
      <ul className="list-reset collections fa-ul">
        {map(userCollections, CollectionEl)}
        <li>
          <Icon symbol="plus" className="fa-li light-gray pointer fs1" />
          <Field {...collectionField} onSubmit={createCollection} />
        </li>
      </ul>
    </Box>
  )
}
Overview.propTypes = {
  createCollection: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  userCollections: PropTypes.array.isRequired,
}

export default Overview
