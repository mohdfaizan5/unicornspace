import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Hero'
import Boards from './components/Boards'
import ProjectBoard from './components/ProjectBoard'

const App = () => {
  return (
    <div className='font-satori bg-primary text-gray-50 pb-10'>
      <Navbar/>
      <Hero/>
      <ProjectBoard/>
      <ProjectBoard/>
      <ProjectBoard/>
      <ProjectBoard/>
      <Boards/>
    </div>
  )
}

export default App