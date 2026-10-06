export default function LinksRow() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[16px]">
      {/* GitHub */}
      <a
        href="https://github.com/Anamulhaque01"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5  hover:text-[#ff5500] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
        <span>GitHub</span>
      </a>

      <span className="text-[#cbd5e0]">|</span>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/anamulhaque-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5  hover:text-[#ff5500] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 1 0 -4 0" />
          <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
        </svg>
        <span>LinkedIn</span>
      </a>

      <span className="text-[#cbd5e0]">|</span>

      {/* Gmail */}
      <a
        href="mailto:dev.anamulhaque@gmail.com"
        className="flex items-center gap-1.5  hover:text-[#ff5500] transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-4 h-4"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        </svg>
        <span>Gmail</span>
      </a>

      <span className="text-[#cbd5e0]">|</span>

      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/1vcBedQh_Ma76y8jTmP_mYFPFQ73pe_CI/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5  hover:text-[#ff5500] transition-colors"
      >
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Resume</span>
      </a>

      <span className="text-[#cbd5e0]">|</span>

      {/* More about me */}
      <a
        href="#about"
        className="flex items-center gap-1 text-[#ff5500] hover:underline transition-all"
      >
        <span>More about me</span>
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}