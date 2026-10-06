import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <TechStack></TechStack>
      <Experience></Experience>
      {/* <Certifications></Certifications> */}
      <Footer></Footer>
    </div>
  )
}

export default Home
