import React, { PropTypes } from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

import { discMsgTxt } from '../redux/select/disc'

function SummerText({ active, texts }) {
  return active && (
    <div className="fs1 p1 pb0 orange">
      <h2 className="m0 fs1 mono uppercase">SummerSale:</h2>
      {map(texts, (txt, key) => <p key={key} className="m0">{txt}</p>)}
    </div>
  )
}
SummerText.propTypes = {
  active: PropTypes.bool.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string),
}

export default connect(discMsgTxt)(SummerText)
