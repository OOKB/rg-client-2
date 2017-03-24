import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import classnames from 'classnames'

import SelectEl from './Editable/InputSelect'
import Icon from './Icon'
import DiscToggle from '../containers/DiscToggle'

function pgBtnClass(name, disabled) {
  return classnames('control', name, { disabled })
}
function Pager(props) {
  const { colors, displayStyle, formEvent, hasLess, hasMore, maxPage,
    pageIndex, pageSizeOptions, pgSize, pgSizePrefix,
  } = props
  const { onChange } = formEvent
  const pageCount = `${pageIndex} / ${maxPage}`
  function prev() {
    if (hasLess) onChange(pageIndex - 1)
  }
  function next() {
    if (hasMore) onChange(pageIndex + 1)
  }
  return (
    <div id="pager" className="flex-center bt2 bb1">
      <button onClick={prev} className={pgBtnClass('prev', !hasLess)} disabled={!hasLess}>
        <Icon symbol="angle-left" hidden />
      </button>
      <SelectEl
        label="Display Style"
        options={displayStyle.options}
        prefix={displayStyle.prefix}
        value={displayStyle.active}
        className={[ 'displayStyle', 'small-stack' ]}
      />
      {colors &&
        <SelectEl
          label="Color"
          options={colors}
          prefix={[ 'pricelist', 'color' ]}
          className={[ 'color', 'small-stack' ]}
        />
      }
      {displayStyle.active !== 'film' &&
        <SelectEl
          label="View Qty"
          options={pageSizeOptions}
          prefix={pgSizePrefix}
          value={pgSize.toString()}
          className={[ 'Qty', 'small-stack' ]}
        />
      }
      <DiscToggle />
      <div className="pagecount">{pageCount}</div>
      <button onClick={next} className={pgBtnClass('next', !hasMore)} disabled={!hasMore}>
        <Icon symbol="angle-right" hidden />
      </button>
    </div>
  )
}

Pager.propTypes = {
  colors: PropTypes.array,
  displayStyle: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  hasLess: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  maxPage: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
  pgSize: PropTypes.number.isRequired,
  pgSizePrefix: PropTypes.array.isRequired,
}
Pager.defaultProps = {
  hasLess: false,
  hasMore: false,
}
export default connectField()(Pager)
