import React, { PropTypes } from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

import selector from '../select/samples'
import Header from './Header'
import Footer from './Footer'
import ItemGrid from './ItemGrid'
import Placeholder from './Placeholder'

function Sample({ imgSize, items }) {
  return (
    <div id="home">
      <Header />
      {/* {showDrawer && <Drawer />} */}
      {(!items || !items.length) && <Placeholder /> }
      {items &&
        map(items, (patternColors, key) =>
          <ItemGrid key={key} items={patternColors} imgSize={imgSize} />
        )
      }
      <Footer />
    </div>
  )
}

Sample.propTypes = {
  imgSize: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
}
Sample.defaultProps = {
  imgSize: '?w=240&h=168&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
  items: null,
}

export default connect(selector)(Sample)
