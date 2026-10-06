'use client'
import React from 'react'

const projects = [
  {
    title: 'Foodiego',
    subtitle: 'AI Food Delivery',
    description:
      'Collaborated in a 6-member team to build an end-to-end food delivery web application. Integrated Socket.IO for real-time order tracking and dynamic driver updates.',
    tags: ['Next.js', 'Socket.IO', 'Firebase Auth', 'Express.js', 'MongoDB'],
    liveUrl: 'https://foodiego-mu.vercel.app/',
    githubUrl: 'https://github.com/misternaimur/foodiego',
    img: '/images/foodiego.png',
    repoName: 'Anamulhaque01 / foodiego',
  },
  {
    title: 'ReSell Hub',
    subtitle: 'Pre-Owned Marketplace',
    description:
      'A multi-role second-hand marketplace (Buyer, Seller, Admin) equipped with Stripe payment gateway integration, route protection, and analytical dashboard controls.',
    tags: ['React', 'Node.js', 'Stripe API', 'MongoDB', 'JWT', 'Tailwind'],
    liveUrl: 'https://re-sell-hub-client-chi.vercel.app/',
    githubUrl: 'https://github.com/Anamulhaque01/ReSell_Hub_Client',
    img: '/images/resellhub.png',
    repoName: 'Anamulhaque01 / ReSell_Hub',
  },
  {
    title: 'DocAppoint',
    subtitle: 'Healthcare Platform',
    description:
      'A full-stack doctor appointment scheduling platform featuring dynamic search, multi-method authentication (OAuth2 & JWT), dynamic booking slots, and a responsive patient dashboard.',
    tags: ['Next.js', 'React', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://doc-appoint-client-five.vercel.app/',
    githubUrl: 'https://github.com/Anamulhaque01/DocAppoint_Client',
    img: '/images/docappoint.png',
    repoName: 'Anamulhaque01 / DocAppoint',
  },
]

export default function Projects() {
  return (
    <div className='max-w-300 mx-auto px-5 mt-24 text-[#4C4F69]'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
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
          Featured Projects
        </h3>
        <a
          href='https://github.com/Anamulhaque01'
          target='_blank'
          rel='noreferrer'
          className='hidden md:inline-flex items-center dotted-link text-sm'
        >
          View all projects &rarr;
        </a>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='bg-[#b0bccd]/40 border border-[#cbd5e0] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ff5500]/60 hover:shadow-xl flex flex-col justify-between group'
          >
            {/* Top Container: Terminal Mockup Stage (Pic 2 Depth) */}
            <div className='p-7 bg-[#a3b1c6]/50 border-b border-[#cbd5e0] flex items-center justify-center'>
              <div className='w-full rounded-xl overflow-hidden border border-slate-700/80 bg-[#1e222b] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-[1.02]'>
                {/* Terminal Header Bar */}
                <div className='px-4 py-2.5 bg-[#181a20] border-b border-slate-700/60 flex items-center justify-between'>
                  <div className='flex items-center gap-1.5'>
                    <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f56]' />
                    <span className='w-2.5 h-2.5 rounded-full bg-[#ffbd2e]' />
                    <span className='w-2.5 h-2.5 rounded-full bg-[#27c93f]' />
                  </div>
                  <span className='text-[11px]  text-slate-400 truncate max-w-[200px]'>
                    {project.repoName}
                  </span>
                  <div className='w-10' />
                </div>

                {/* Website Preview inside Terminal Window */}
                <div className='h-52 sm:h-60 overflow-hidden relative bg-[#0f1115]'>
                  <img
                    src={project.img}
                    alt={`${project.title} Preview`}
                    className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100'
                  />
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className='p-6 flex flex-col justify-between flex-1 bg-[#f0f4f8]'>
              <div>
                <h4 className='text-xl font-bold text-[#2d3748] mb-1.5 flex items-baseline gap-2'>
                  {project.title}
                  <span className='text-xs font-normal text-slate-500 '>
                    — {project.subtitle}
                  </span>
                </h4>
                <p className='text-sm leading-relaxed text-[#4a5568] mb-5'>
                  {project.description}
                </p>

                {/* Pop-Out Tech Badges */}
                <div className='flex flex-wrap gap-2 mb-6 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-slate-400 mr-1 shrink-0'
                  >
                    <path d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' />
                    <line x1='7' y1='7' x2='7.01' y2='7' />
                  </svg>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2.5 py-1 text-xs  text-[#2d3748] bg-white border border-[#cbd5e0] rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:scale-105 hover:border-[#ff5500] hover:text-[#ff5500] hover:shadow-[0_4px_12px_rgba(255,85,0,0.12)]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-3 pt-3 border-t border-[#cbd5e0]/60'>
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 px-4 py-2 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                    <polyline points='15 3 21 3 21 9' />
                    <line x1='10' y1='14' x2='21' y2='3' />
                  </svg>
                  View Live
                </a>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 px-4 py-2 border border-[#cbd5e0] hover:border-[#ff5500] text-[#2d3748] hover:text-[#ff5500] text-xs font-semibold rounded-lg transition-colors bg-white/70 shadow-sm'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                    <path d='M9 18c-4.51 2-5-2-7-2' />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}