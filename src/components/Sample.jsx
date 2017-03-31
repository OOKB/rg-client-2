import React, { PropTypes } from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

import selector from '../select/samples'
import Fields from './Editable/Fields'
import Footer from './Footer'
import Header from './Header'
import ItemGrid from './ItemGrid'
import Placeholder from './Placeholder'

function Sample({ entityType, fields, imgSize, items }) {
  const entity = { id: 'newOrder' }
  return (
    <div id="sample">
      <Header />
      {/* {showDrawer && <Drawer />} */}
      {(!items || !items.length) && <Placeholder /> }
      {items &&
        map(items, (patternColors, key) =>
          <ItemGrid key={key} items={patternColors} imgSize={imgSize} />
        )
      }
      {entityType && <Fields entity={entity} fields={fields} prefix={[entityType, entity.id]} />}
      <Footer />
    </div>
  )
}

Sample.propTypes = {
  entityType: PropTypes.string,
  fields: PropTypes.objectOf(PropTypes.object),
  imgSize: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
}
Sample.defaultProps = {
  entityType: null,
  imgSize: '?w=240&h=168&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
  items: null,
}

export default connect(selector)(Sample)
