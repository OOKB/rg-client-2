import React, { PropTypes } from 'react'
import noop from 'lodash/noop'
import classnames from 'classnames'

import DetailFooter from './DetailFooter'
import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from '../../containers/Related'
import Close from '../CloseButton'
import Images from '../Editable/ImageUpload/Images'

function Detail({ detailClose, disclaimer, item, route: { id } }) {
  const editing = id === 'itemEdit'
  if (!item) return <p>No image data</p>
  return (
    <div id="detailWrapper" className={classnames('absolute', item.category, { editing })}>
      <DetailHeader />
      <Info item={item} />
      <div className="imageWrapper absolute z1">
        <img src={`${item.img}?w=1500&fm=pjpg`} alt={item.id} />
        {editing &&
          <Images subject={item} style={{ marginTop: 100 }} />
        }
      </div>
      <Related parent={item} />
      <Close onClick={detailClose} />
      <div className="loading center fixed z0">
        <i className="fa fa-multiplication fa-spin fa-3x fa-fw light-gray" />
        <span className="sr-only">Loading...</span>
      </div>
      <DetailFooter {...disclaimer} />
    </div>
  )
}

Detail.propTypes = {
  item: PropTypes.object,
  detailClose: PropTypes.func.isRequired,
  disclaimer: PropTypes.object,
  route: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
}
Detail.defaultProps = {
  detailClose: noop,
}
export default Detail
