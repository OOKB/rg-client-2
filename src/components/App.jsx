import React from 'react'
import css from '../style'
import Page from './Page'

function AppEl() {
  return (
    <Page className="App">
      <p style={css('mt4 mb4 textCenter')}>RG2</p>
    </Page>
  )
}
AppEl.propTypes = {
}
export default AppEl
