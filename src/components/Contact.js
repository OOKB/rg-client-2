import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { contactSelector } from '../redux/select/contact'
// import Editor from '../containers/Editor'
// <Editor classId="Organization" />
import Page from './Page'
import Offices from './Offices'

function Contact({ contactText, offices }) {
  return (
    <Page id="container-contact">
      <main className="pt2 container clearfix">
        <section className="showroomsAndReps">
          <div className="top pt3 pb3 clearfix mlrauto">
            <div className="headquarters mb2">
              <Offices items={offices.main} />
            </div>
            <div className="blurb pt1">
              <p>{contactText}</p>
            </div>
          </div>
          <div className="us canada americas bt1 pt4 pb2">
            <Offices items={offices.us} />
          </div>
          <div className="europe pacific bt1 pt4 pb2">
            <Offices items={offices.world} />
          </div>
        </section>
      </main>
    </Page>
  )
}

Contact.propTypes = {
  contactText: PropTypes.string.isRequired,
  offices: PropTypes.object.isRequired,
}

export default connect(contactSelector)(Contact)
