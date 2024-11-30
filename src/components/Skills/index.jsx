import './index.css'

import SkillCard from '../SkillCard'
import { skillsData } from '../../utilities/skillsData'

import { useState } from 'react'

function Skills() {

    const [activeSkillObject, changeActiveSkillObject] = useState(skillsData[0])
    const changeActiveSkillFun = (skillDe)=> {
        changeActiveSkillObject(skillDe)
    }

  return (
    <section id='skills-section' className='skills-section-con'>
       <h2 className='tech-pro-hea'>Technical Proficiency</h2>
       <div className='skills-showcase-con'>
         <div className='skills-details-box-con'>
            <ul className='boxes-container'>
                {skillsData.map((skillDetail)=>(
                    <SkillCard key={skillDetail.title} skillDetail={skillDetail} changeActiveSkillFun={changeActiveSkillFun}/>
                ))}
            </ul> 
         </div>
         <div className='skills-details-percent-con'>
            <h3 className='activeSkillHea'>{activeSkillObject.title}</h3>
            <hr/>
            <div className='progress-cells-con-container'>
               {activeSkillObject.skillsOb.map((eachSkill)=>(
                    <div className='progress-cell' key={eachSkill.skill}>
                        <div className='progress-title-percent-row'>
                          <p className='skill-name'>{eachSkill.skill}</p>
                          <p className='skill-percentage'>{eachSkill.percentage}</p>
                        </div>

                        <div className='progress-bar-bg'>
                           <div className='progress-bar' style={{width:eachSkill.percentage}}></div>
                        </div>
                    </div>
))}
            </div>
         </div>
        </div>
      
    </section>
  )
}

export default Skills