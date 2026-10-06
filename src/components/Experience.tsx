    "use client";
    import { useState } from "react";

    // Data mapped directly from your resume
    const experiences = [
    {
        id: "education",
        company: "Education",
        role: "BSc. in Computer Science & Engineering",
        institution: "Northern University of Business & Technology",
        date: "2026 - 2029",
        bullets: [
        "Currently pursuing a Bachelor of Science degree in Computer Science and Engineering.",
        "Focusing core studies on software engineering principles, algorithms, data structures, and database management systems.",
        "Actively applying modern web technologies (MERN stack, Next.js, TypeScript) to build production-ready projects alongside academic studies.",
        ],
    },
    {
        id: "docappoint",
        company: "DocAppoint",
        role: "Full-Stack Developer",
        institution: "Healthcare Management System",
        date: "Featured Project",
        bullets: [
        "Built a responsive full-stack doctor appointment platform with dynamic search and sorting for top-rated specialists.",
        "Implemented multi-method authentication (Google OAuth2 & JWT-based manual login) with 6-character validation schemas.",
        "Developed a complete patient dashboard allowing real-time session tracking, profile modal updates, and full CRUD operations.",
        "Integrated server-side SEO metadata configurations using Next.js App Router for optimized indexing and dynamic rendering.",
        ],
    },
    {
        id: "foodiego",
        company: "Foodiego",
        role: "Full-Stack Developer (Team Lead)",
        institution: "AI-Powered Food Delivery Platform",
        date: "Featured Project",
        bullets: [
        "Developed the end-to-end customer interface for an AI-powered food delivery platform in a 6-member team environment.",
        "Integrated Socket.IO client handling to deliver real-time order status tracking and live driver GPS status updates.",
        "Implemented secure customer authentication and checkout workflows using Firebase Auth, JWT, and multi-gateway payment features.",
        ],
    },
    {
        id: "resellhub",
        company: "ReSell Hub",
        role: "Full-Stack Developer",
        institution: "Second-Hand Marketplace Platform",
        date: "Featured Project",
        bullets: [
        "Engineered a full-stack pre-owned marketplace with multi-role access (Buyer, Seller, Admin) enabling secure listing management.",
        "Integrated Stripe Payment Gateway for secure online checkouts, generating automated transaction tracking and order status updates.",
        "Implemented role-based JWT authentication, route protection, and backend API authorization using environment variables.",
        ],
    },
    ];

    export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    // Custom dashed underline style matching your hero pattern
    const dashedUnderlineStyle = `
        bg-[linear-gradient(to_right,#ff5500_50%,transparent_50%)] 
        bg-[position:0_100%] 
        bg-repeat-x 
        bg-[size:6px_1px] 
        pb-[1px]
    `;

    return (
        <section className="max-w-300 mx-auto px-10 py-30">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#4C4F69]">
            <span className="text-[#ff5500]"></span> Where I've Worked & Learned
            </h2>
            <div className="h-[1px] bg-[#cbd5e0] flex-1" />
        </div>

        {/* Interactive Layout Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[320px]">
            {/* Sidebar Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-[#cbd5e0] shrink-0">
            {experiences.map((item, index) => {
                const isActive = activeTab === index;
                return (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2.5 text-left text-[16px] transition-all whitespace-nowrap cursor-pointer relative ${
                    isActive
                        ? "text-[#ff5500] font-semibold bg-[#e2e8f0]/50 md:bg-transparent"
                        : "text-[#718096] hover:text-[#2d3748] hover:bg-[#e2e8f0]/30"
                    }`}
                >
                    {/* Active Indicator Bar */}
                    {isActive && (
                    <span className="absolute left-0 bottom-0 md:bottom-auto md:top-0 h-[2px] md:h-full w-full md:w-[2px] bg-[#ff5500]" />
                    )}
                    {item.company}
                </button>
                );
            })}
            </div>

            {/* Tab Content Panel */}
            <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-[#2d3748]">
                {experiences[activeTab].role}{" "}
                <span className={`text-[#ff5500] ${dashedUnderlineStyle}`}>
                @ {experiences[activeTab].institution}
                </span>
            </h3>

            <p className="text-[14px] text-[#718096] mt-1 mb-6">
                {experiences[activeTab].date}
            </p>

            <ul className="space-y-3">
                {experiences[activeTab].bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[16px] leading-relaxed">
                    <span className="text-[#ff5500] shrink-0 mt-0.5">▹</span>
                    <span>{bullet}</span>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    );
    }