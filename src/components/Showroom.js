import React, { PropTypes } from 'react'

import Page from './Page'

function Showroom({ email, name, telephone, title }) {
  const header = name || title
  return (
    <Page>
      <main className="mlrauto text-center mt4 mb2 p2">
        <p>Your Delany & Long sales representative:</p>
        <div className="sales rep">
          {header && <h3>{header}</h3>}
          {email && <div>{email}</div>}
          {telephone && <phone>{telephone}</phone>}
        </div>
      </main>
    </Page>
  )
}

Showroom.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  telephone: PropTypes.string,
  title: PropTypes.string,
}
Showroom.defaultProps = {
}

export default Showroom
