import React, { PropTypes } from 'react'

import Search from '../TextSearch'
import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch(props) {
  const {
    category, colors, displayStyle, pageSizeOptions, pagerInfo, pgSize, prefix, showSummer,
  } = props
  return (
    <div id="pricelist-header">
      <Search prefix={prefix.text} />
      <CategoryFilter
        activeCategory={category.active}
        options={category.options}
        prefix={prefix.category}
      />
      <Pager
        {...pagerInfo}
        colors={colors}
        displayStyle={displayStyle}
        pageSizeOptions={pageSizeOptions}
        prefix={prefix.pgIndex}
        pgSizePrefix={prefix.pgSize}
        pgSize={pgSize}
        showSummer={showSummer}
        activeCategory={category.active}
      />
    </div>
  )
}
PricelistSearch.propTypes = {
  category: PropTypes.object.isRequired,
  colors: PropTypes.array,
  displayStyle: PropTypes.object.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
  pagerInfo: PropTypes.object.isRequired,
  prefix: PropTypes.object.isRequired,
  pgSize: PropTypes.number.isRequired,
  showSummer: PropTypes.bool.isRequired,
}
PricelistSearch.defaultProps = {
  showSummer: false,
}

export default PricelistSearch
