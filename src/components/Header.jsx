import React, { PropTypes } from 'react'
// import css from '../style'

import { Menu } from './connected'
import Logo from './Logo'

function HeaderEl() {
  return (
    <header id="siteHeader" className="bg-darkgray yellow" >
      <Logo />
      <nav className="mt1">
        <Menu />
      </nav>
    </header>
  )
}
HeaderEl.propTypes = {
  siteName: PropTypes.string,
}
HeaderEl.defaultProps = {
  siteName: 'CAPE Editor',
}
export default HeaderEl
