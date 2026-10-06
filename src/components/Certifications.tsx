'use client'
import React from 'react'

const certifications = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: '2023',
    url: 'https://coursera.org',
    status: 'VERIFIED',
  },
  {
    title: 'Node.js Application Developer',
    issuer: 'OpenJS Foundation',
    date: '2023',
    url: 'https://openjsf.org',
    status: 'VERIFIED',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB',
    date: '2024',
    url: 'https://university.mongodb.com',
    status: 'VERIFIED',
  },
]

export default function Certifications() {
  return (
    <div className='max-w-300 mx-auto px-5 mt-24 text-[#4C4F69]'>
      {/* Section Header */}
      <h3 className='text-2xl font-bold flex items-center gap-2  text-[#2d3748] mb-6'>
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
        Certifications
      </h3>

      {/* Terminal Output Window */}
      <div className='bg-[#e7ecf2]/60 border border-[#cbd5e0] rounded-xl p-5  text-sm'>
        {/* Terminal Command Line */}
        <div className='flex items-center gap-2 text-slate-500 mb-4 pb-3 border-b border-[#cbd5e0]/60'>
          <span className='text-[#ff5500] font-bold'>user@khan:~$</span>
          <span>cat certifications.json</span>
        </div>

        {/* Certifications Row Output */}
        <div className='space-y-3'>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-1.5 border-b border-dashed border-[#cbd5e0]/50 last:border-0'
            >
              <div className='flex items-center gap-2'>
                <span className='text-[#ff5500] font-bold'>[{cert.status}]</span>
                <a
                  href={cert.url}
                  target='_blank'
                  rel='noreferrer'
                  className='text-[#2d3748] hover:text-[#ff5500] font-semibold dotted-link'
                >
                  {cert.title}
                </a>
              </div>

              <div className='flex items-center gap-4 text-xs text-slate-500 pl-6 sm:pl-0'>
                <span>// {cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}