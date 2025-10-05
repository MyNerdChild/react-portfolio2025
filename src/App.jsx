import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />
      <Hero />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
