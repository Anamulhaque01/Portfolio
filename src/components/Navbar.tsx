'use client'
import React, { useState } from 'react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'TechStack', href: '#tech' },
//   { name: 'Certificates', href: '#certifications' },
//   { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('About')

  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur-md  transition-all'>
      <div className='max-w-350 mx-auto px-6 py-5 flex items-center justify-between '>
        
        {/* Terminal Path Logo matching Picture 1 */}
        <a
          href='#'
          className='flex items-center text-[16px] font-semibold text-[#2d3748] hover:opacity-80 transition-opacity'
        >
          <span className='text-[#ff5500]'>~</span>
          <span className='text-slate-600'>/</span>
          {/* Solid Terminal Block Cursor */}
          <span className='inline-block w-2 h-4 bg-[#ff5500] animate-pulse ml-0.5' />
        </a>

        {/* Right Nav Links */}
        <nav className='flex items-center gap-6 text-xs sm:text-[16px] text-slate-600'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`transition-colors duration-200 hover:text-[#ff5500] ${
                activeTab === link.name
                  ? 'text-slate-600'
                  : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}