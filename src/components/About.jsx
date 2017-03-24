import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { aboutSelector } from '../select/about'
import Page from './Page'

function About({ aboutText, distributedText }) {
  return (
    <Page id="container-about">
      <main className="clear mlrauto">
        <div className="about">
          {aboutText.map((pText, index) => <p key={index}>{pText}</p>)}
          <div className="small mt3 bt1 pt2">
            <p><a href="/contact">{distributedText}</a></p>
          </div>
        </div>
      </main>
    </Page>
  )
}

About.propTypes = {
  aboutText: PropTypes.arrayOf(PropTypes.string).isRequired,
  distributedText: PropTypes.string.isRequired,
}

export default connect(aboutSelector)(About)
