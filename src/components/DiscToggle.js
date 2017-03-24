import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Icon from './Icon'

function DiscToggle({ discActive, hide, onClick, text }) {
  if (hide) return null
  const className = classnames('summerSale', { active: discActive })
  return (
    <button className={className} onClick={onClick}>
      <Icon symbol="tag" hidden />
      {text}
    </button>
  )
}

DiscToggle.propTypes = {
  discActive: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}
DiscToggle.defaultProps = {
  discActive: false,
  hide: true,
  text: 'Summer Sale',
}
export default DiscToggle
