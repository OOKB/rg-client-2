import React, { PropTypes } from 'react'
import Link from 'redux-history-component'
import { projectLink } from '../../redux/collection'
import Button from '../Button'

function ProjectLink(list) {
  const { edit, title } = list
  return (
    <li className="p1 bt1 fs0p8 ls0p15 relative">
      <Link className="block uppercase" href={projectLink(list)}>{title}</Link>
      {title !== 'Favorites' && <Button icon="pencil" className="edit top-1 right-0" title="Edit project name" onClick={edit} />}
    </li>
  )
}
ProjectLink.propTypes = {
  edit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
ProjectLink.defaultProps = {
}

export default ProjectLink
