import React, { PropTypes } from 'react'

import Link from 'redux-history-component'
import ItemFav from './Fav/ItemFav'
import Icon from './Icon'

function Item({ className, description, imgSize, item, onError }) {
  function handleImgError() { if (onError) onError(item) }
  const imgSrc = item.img.concat(imgSize)
  return (
    <li className={className}>
      <ItemFav item={item} />
      <Link href={item.link}>
        <img src={imgSrc} alt={item.id} title={item.id} onError={handleImgError} />
        <div className="description absolute block bg-white">
          <p className="id mono">
            <span className="categoryCode">{item.categoryCode}</span> {item.id}
          </p>
          <h2>{item.name}: {item.color}</h2>
        </div>
        {description &&
          <div className="absolute notes top-0 right-0 w-100 small z9">
            <Icon symbol="bookmark" className="white right-0p5 absolute fa-2x" />
            <p className="absolute bg-white box-shadow p1 top-5percent right-5percent w-90">
              {description}
            </p>
          </div>
        }
      </Link>
    </li>
  )
}
Item.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  imgSize: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}
export default Item
