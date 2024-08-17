import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-28'/>
      <Projects/>
    </div>
  )
}

export default page