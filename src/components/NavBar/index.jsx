import './index.css'
import MobileNav from '../MobileNav'
import { LuMenu } from "react-icons/lu";
import { MdOutlineHighlightOff } from "react-icons/md";
import { useState } from 'react'


function Navbar() {
    const [menuStatus, changeMenuStatus] = useState(false)

    const changeMenuStatusFun=()=>{
        changeMenuStatus((preve)=>(!preve))
    }

    return (
    <div className='nav-wrapper'>
       <div className='nav-container'>
           <h4 className='logo glow'>Portfolio</h4>
            <ul className='ul-con'>
                <li className='li'>
                    <a href='#hero-section' className='menu-item' >Home</a>
                </li>
                <li className='li'>
                    <a href='#skills-section' className='menu-item'>Skills</a>
                </li>
                <li className='li'>
                    <a href='#my-projects' className='menu-item'>Projects</a>
                </li>
                <li className='li'>
                    <a href='#contact-section' className='menu-item' >Contact Me</a>
                </li>
            </ul>
            
            <button className='glow-on-hover'>Hire Me</button>
             
            {menuStatus ?  <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
               <MdOutlineHighlightOff style={{fontSize:'20px'}}/>
            </button> :
            <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                <LuMenu style={{fontSize:'20px'}}/>
            </button>}

            <MobileNav menuStatus={menuStatus} />

       </div>
    </div>
  )
}

export default Navbar
