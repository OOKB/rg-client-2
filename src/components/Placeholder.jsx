import React from 'react'

import Icon from './Icon'
import Logo from './Logo'

function Placeholder() {
  return (
    <div className="temporary filler">
      <div className="logoPlaceholder mlrauto halfwidth mt15p text-center">
        <Logo />
        <div className="loading">
          <Icon symbol="multiplication" className="fa-spin fa-3x fa-fw light-gray" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <p className="hidden">Welcome to Delany And Long LTD</p>
    </div>
  )
}

Placeholder.propTypes = {
}
Placeholder.defaultProps = {
}

export default Placeholder
