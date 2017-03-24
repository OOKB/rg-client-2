import React, { PropTypes } from 'react'

import LinkOrNot from '../LinkOrNot'

function RelatedColor({ color, parent }) {
  const imgixExt = '?w=150&h=150&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=1.5'
  return (
    <li>
      <LinkOrNot color={color} parent={parent} bgImage={color.img.concat(imgixExt)}>
        <img
          className="hidden"
          src={color.img.concat(imgixExt)}
          alt={color.id}
        />
      </LinkOrNot>
    </li>
  )
}

RelatedColor.propTypes = {
  color: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
}

export default RelatedColor
