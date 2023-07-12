import React from 'react'
import { projectsData } from '../Data/ProjectsData';

export default function Projects() {
  console.log(projectsData.map(elem => elem.languages))
  return (
    <div>
      <img src={projectsData.map(elem => elem.image)} alt="" />
    </div>
  )
}
