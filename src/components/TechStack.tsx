import React from 'react'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Front-end',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Back-end & Database',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose'],
  },
  {
    category: 'Tools & Auth',
    skills: ['Git & GitHub', 'Vercel', 'JWT', 'Google OAuth', 'Firebase Auth', 'Stripe API', 'Socket.IO'],
  },
]

function TechStack() {
  return (
    <div className='max-w-300 mx-auto px-5 mt-24 text-[#4C4F69]'>
      <h3 className='text-2xl font-bold flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='actb shrink-0'
          >
            <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245' />
          </svg>
          TechStack
        </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[85%] mt-5'>
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h4 className='text-base font-semibold mb-3 text-[#4C4F69]'>
              <span className='actb mr-2'>//</span>
              {group.category}
            </h4>
            <div className='flex flex-wrap gap-x-3 gap-y-2 text-lg'>
              {group.skills.map((skill) => (
                <span key={skill} className='dotted-link cursor-default'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack