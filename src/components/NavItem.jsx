import React, { PropTypes } from 'react'
import classnames from 'classnames'
import css from '../style'
import LinkEl from './Link'

const styles = {
  links: css('bb block fs1 textReset'),
}

function NavItem({ isActive, id, ...props }) {
  return (
    <li className={classnames(id, { active: isActive })}>
      <LinkEl className="brown bg-darkgray-hover white-hover" internal {...props} style={styles.links} />
    </li>
  )
}
NavItem.propTypes = {
  action: PropTypes.func,
  href: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
}
NavItem.defaultProps = {
  isActive: false,
}
export default NavItem
