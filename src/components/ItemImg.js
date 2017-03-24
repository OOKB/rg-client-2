import React, { PropTypes } from 'react'

function ItemImg({ img, id, imgixExt }) {
  return <img
            src={img.concat(imgixExt)}
            alt={id} title={id}
            />
}

ItemImg.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgixExt: PropTypes.string.isRequired,
}

export default ItemImg
