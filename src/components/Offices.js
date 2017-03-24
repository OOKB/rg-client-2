import React, { PropTypes } from 'react'
import map from 'lodash/map'

import EditButton from './Editable/EditButton'

function Office({ address, email, id, name, telephone, fax, title }) {
  const onClick = (event) => {
    event.preventDefault()
    window.location.href = `mailto:${email}`
  }
  return (
    <li className="office">
      <EditButton item={{ id }} />
      <h3>{title}</h3>
      {name && <h4>{name}</h4>}
      {address &&
        <address>
          {map(address, (line, index) => <span key={index}>{line}<br /></span>)}
        </address>
      }
      <ul className="list-reset connect">
        <li>{email && <button onClick={onClick}>{email}</button>}</li>
        <li>{telephone && <phone>{telephone}</phone>}</li>
        <li>{fax && <phone>fax: {fax}</phone>}</li>
      </ul>
    </li>
  )
}
Office.propTypes = {
  address: PropTypes.array,
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  telephone: PropTypes.string,
  fax: PropTypes.string,
  title: PropTypes.string.isRequired,
}

function Offices({ items }) {
  return (
    <ul className="list-reset group">
      {map(items, item => <Office key={item.id} {...item} />)}
    </ul>
  )
}

Offices.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Offices
