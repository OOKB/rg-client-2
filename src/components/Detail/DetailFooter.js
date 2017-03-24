import React, { PropTypes } from 'react'
import Link from 'redux-history-component'

function DetailFooter({ content, link: { href, title } }) {
  return (
    <footer className="detailFooter bg-white small mono z3 text-center">
      <p className="p05 m0">
        {content} <Link href={href} title={title}>{title}</Link>.
      </p>
    </footer>
  )
}

DetailFooter.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
}
DetailFooter.defaultProps = {
}
export default DetailFooter
