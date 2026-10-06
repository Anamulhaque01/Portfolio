import React from 'react'
import SocialLinks from './SocialLinks'

function Hero() {
  return (
    <div className='max-w-300 mx-auto px-5 pt-30'>
      <h2 className='text-4xl font-bold text-[#4C4F69]'>Hey! I'm <span className='actb'>Anamul Haque</span></h2>
      <p className='text-lg leading-relaxed my-5 md:w-[75%]'>I'm a <span className='dotted-link'>Full-Stack Developer</span> passionate about building fast, scalable, user-focused web applications. I specialize in <span className='dotted-link'>React</span>, <span className='dotted-link'>Next.js</span>, <span className='dotted-link'>Node.js</span>, <span className='dotted-link'>Express.js</span> and <span className='dotted-link'>MongoDB</span>, with hands-on experience in REST APIs, authentication systems, dynamic search, and payment integrations. Currently pursuing my BSc in CSE while seeking a <span className='dotted-link'>Junior / Intern Developer role</span>  to contribute to real-world software solutions.</p>

      <SocialLinks></SocialLinks>
    </div>
  )
}

export default Hero

