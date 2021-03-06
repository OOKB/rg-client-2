import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../select/home'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'
import Placeholder from './Placeholder'

function Home({ imgSize, items, missingImage }) {
  return (
    <div id="home">
      <Header />
      {/* {showDrawer && <Drawer />} */}
      {(!items || !items.length) && <Placeholder /> }
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
