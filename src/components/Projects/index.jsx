import './index.css'
import ProjectCard from '../ProjectCard'

import {projectsData} from '../../utilities/projectsData'


function Projects() {
  return (
     <section id='my-projects' className='projects-section-con'>
        <h2 className='projects-hea'>Projects</h2>
        <div className='displaying-projects-con'>
            {projectsData.map((proDetail)=>(
               <ProjectCard proDetail={proDetail} key={proDetail.projectTitle}/>
            ))}
        </div>         
     </section>
  )
}

export default Projects


