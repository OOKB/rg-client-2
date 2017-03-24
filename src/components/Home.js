import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'
import Icon from './Icon'
import ItemGrid from './ItemGrid'
import Logo from './Logo'
// import Drawer from './Drawer'

function Home({ imgSize, items, missingImage, showDrawer }) {
  return (
    <div id="home">
      <Header />
      {/* {showDrawer && <Drawer />} */}
      {(!items || !items.length) &&
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
      }
      <ItemGrid items={items} missingImage={missingImage} imgSize={imgSize} />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  imgSize: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
  showDrawer: PropTypes.bool.isRequired,
}
Home.defaultProps = {
  imgSize: '?w=240&h=168&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}

export default connect(homeSelector)(Home)
