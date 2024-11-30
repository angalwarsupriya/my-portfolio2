import './App.css'


import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact/index.jsx'

function App() {
  return (
      <>
      <div className='container'>
        <Navbar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      </>

  )
}

export default App