import React, { PropTypes } from 'react'
import { map, partial } from 'lodash'
import Page from '../Page'
import ProjectLink from './ProjectLink'
import ProjectEdit from './ProjectEdit'

function ProjectsEl({ edit, editing, lists, save }) {
  function getProjectEl(list) {
    const onSubmit = partial(save, list)
    if (editing === list.id) return <ProjectEdit {...list} key={list.id} onSubmit={onSubmit} />
    return <ProjectLink {...list} key={list.id} edit={partial(edit, list.id)} />
  }
  return (
    <Page id="projects">
      <main className="clear m1 mt4 clearfix">
        <h1 className="text-center m0 mb1 uppercase fs1 ls0p15">Projects</h1>
        <ul className="list-reset clearfix text-center mt1 bb1 five mlrauto">
          {map(lists, list => getProjectEl(list))}
        </ul>
      </main>
    </Page>
  )
}
ProjectsEl.propTypes = {
  edit: PropTypes.func.isRequired,
  editing: PropTypes.string,
  lists: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
}
ProjectsEl.defaultProps = {
}

export default ProjectsEl
