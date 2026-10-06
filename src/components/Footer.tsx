'use client'
import React, { useState, useEffect } from 'react'

export default function Footer() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(timeString)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className='max-w-350 mx-auto px-5 my-12 text-[#4C4F69] '>
      <div className='bg-[#e7ecf2]/80 border border-[#cbd5e0] rounded-xl px-5 py-5 text-[16px] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs'>
        
        {/* Left Side: Copyright & Status Indicator */}
        <div className='flex items-center gap-3 flex-wrap justify-center md:justify-start'>
          <span className='text-slate-600 font-medium'>
            © 2026 Khan Anamul Haque
          </span>
          <span className='text-slate-300 hidden sm:inline'>-</span>
          <div className='flex items-center gap-2 text-slate-600'>
            <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
            <span>Open for Opportunities</span>
          </div>
        </div>

        {/* Right Side: Live Clock, Commit Hash, Socials */}
        <div className='flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-end text-slate-500'>
          
          {/* Real-time Clock (Khulna / BST) */}
          <div className='flex items-center gap-1.5 text-[#ff5500] font-bold'>
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
              <circle cx='12' cy='12' r='10' />
              <polyline points='12 6 12 12 16 14' />
            </svg>
            <span>{time || '00:00:00'}</span>
            <span className='text-[10px] text-slate-400 font-normal'>BST</span>
          </div>

          <span className='text-slate-300'>-</span>

          {/* Git Commit Hash Mock */}
          <div className='flex items-center gap-1 text-slate-600 hover:text-[#ff5500] transition-colors cursor-default'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='6' y1='3' x2='6' y2='15' />
              <circle cx='18' cy='6' r='3' />
              <circle cx='6' cy='18' r='3' />
              <path d='M18 9a9 9 0 0 1-9 9' />
            </svg>
            <span>v1.0.4</span>
          </div>

          <span className='text-slate-300'>-</span>

          {/* Social Links */}
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/Anamulhaque01'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub Profile'
              className='hover:text-[#ff5500] transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
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
            </a>

            <a
              href='https://linkedin.com/in/anamulhaque-dev'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn Profile'
              className='hover:text-[#ff5500] transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                <rect x='2' y='9' width='4' height='12' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>

            <a
              href='mailto:dev.anamulhaque@gmail.com'
              aria-label='Send Email'
              className='hover:text-[#ff5500] transition-colors'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect width='20' height='16' x='2' y='4' rx='2' />
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}