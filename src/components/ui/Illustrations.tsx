import React from 'react';

// Custom multi-gradient Hand-crafted SVGs mimicking 3D Flat Illustrations

export const FinTechIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fin1" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6EE7B7" />
                <stop offset="1" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="fin2" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#047857" />
                <stop offset="1" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="fin3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
        </defs>
        
        {/* Background Sparkles */}
        <circle cx="85" cy="20" r="3" fill="#FCD34D" />
        <circle cx="15" cy="30" r="2" fill="#FCD34D" />
        
        {/* Main Base / Shadow */}
        <ellipse cx="50" cy="85" rx="35" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Chart Bars */}
        <rect x="25" y="60" width="12" height="20" rx="3" fill="url(#fin1)" />
        <rect x="44" y="45" width="12" height="35" rx="3" fill="#3B82F6" />
        <rect x="63" y="25" width="12" height="55" rx="3" fill="url(#fin3)" />
        
        {/* Floating Coin */}
        <circle cx="70" cy="20" r="10" fill="#FBBF24" />
        <circle cx="70" cy="20" r="7" fill="#F59E0B" />
        <path d="M68 15v10m4-10v10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const PublicSectorIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="pub1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9CA3AF" />
                <stop offset="1" stopColor="#4B5563" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="40" ry="8" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Steps */}
        <path d="M20 75h60v5H20zM25 70h50v5H25z" fill="url(#pub1)" />
        
        {/* Pillars */}
        <rect x="30" y="40" width="6" height="30" fill="#D1D5DB" />
        <rect x="47" y="40" width="6" height="30" fill="#D1D5DB" />
        <rect x="64" y="40" width="6" height="30" fill="#D1D5DB" />
        
        {/* Roof */}
        <path d="M25 40L50 20l25 20H25z" fill="#374151" />
        <path d="M50 20L25 40h50L50 20z" fill="url(#pub1)" />
        <circle cx="50" cy="32" r="4" fill="#6B7280" />
    </svg>
);

export const ManufacturingIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="man1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F87171" />
                <stop offset="1" stopColor="#DC2626" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="35" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Factory Building */}
        <path d="M20 80V40l15-10v20l15-10v20l15-10v30H20z" fill="url(#man1)" />
        <path d="M20 80V40l15-10v20l15-10v20l15-10v30H20z" fill="#000" fillOpacity="0.1" />
        
        {/* Smokestack */}
        <rect x="70" y="30" width="8" height="50" fill="#6B7280" />
        <path d="M70 30h8v5h-8z" fill="#4B5563" />
        
        {/* Smoke Clouds */}
        <circle cx="74" cy="20" r="6" fill="#D1D5DB" className="dark:fill-gray-600" opacity="0.8" />
        <circle cx="82" cy="15" r="8" fill="#E5E7EB" className="dark:fill-gray-500" opacity="0.6" />
        <circle cx="65" cy="12" r="5" fill="#E5E7EB" className="dark:fill-gray-600" opacity="0.7" />
    </svg>
);

export const TechIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="tech1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="35" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Laptop Base */}
        <path d="M20 75h60l5 5H15l5-5z" fill="#D1D5DB" />
        {/* Laptop Screen */}
        <rect x="25" y="40" width="50" height="35" rx="3" fill="#374151" />
        <rect x="28" y="43" width="44" height="29" rx="1" fill="url(#tech1)" />
        
        {/* Code Text */}
        <path d="M35 55l10 5-10 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M65 55l-10 5 10 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Floating elements */}
        <circle cx="80" cy="30" r="4" fill="#34D399" />
        <rect x="15" y="25" width="8" height="8" rx="2" fill="#FBBF24" transform="rotate(15 15 25)" />
    </svg>
);

export const EnergyIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="energy1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="energy2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#D97706" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="35" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Battery */}
        <rect x="35" y="30" width="30" height="50" rx="4" fill="url(#energy1)" />
        <rect x="45" y="25" width="10" height="5" rx="1" fill="#9CA3AF" />
        
        {/* Lightning Bolt inside battery */}
        <path d="M55 40l-10 15h8l-5 15 15-18h-8l8-12z" fill="#FFF" />
        
        {/* Solar Panel floating */}
        <path d="M75 50l15-5-5-15-15 5z" fill="#3B82F6" opacity="0.8" />
        <path d="M75 50l15-5-5-15-15 5z" fill="none" stroke="#FFF" strokeWidth="1" />
        
        {/* Leaf floating */}
        <path d="M15 60C15 60 10 40 25 35C40 30 35 55 35 55C35 55 30 70 15 60Z" fill="url(#energy1)" opacity="0.8" />
    </svg>
);

export const HealthIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="health1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" />
                <stop offset="1" stopColor="#BE185D" />
            </linearGradient>
            <linearGradient id="health2" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#E5E7EB" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="35" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Shield */}
        <path d="M50 20L25 30v25c0 15 25 25 25 25s25-10 25-25V30L50 20z" fill="url(#health2)" stroke="#D1D5DB" strokeWidth="2" />
        
        {/* Heart */}
        <path d="M50 60c-20-15-15-30-5-30 8 0 10 10 10 10s2-10 10-10c10 0 15 15-5 30z" fill="url(#health1)" />
        
        {/* Pulse */}
        <path d="M35 50h5l3-5 5 15 4-10h8" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Cross floating */}
        <path d="M80 30h-5v-5h-4v5h-5v4h5v5h4v-5h5v-4z" fill="#10B981" />
    </svg>
);

export const BuildingIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="bldg2" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C4B5FD" />
                <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
        </defs>
        
        <ellipse cx="50" cy="85" rx="40" ry="10" fill="#E5E7EB" className="dark:fill-white/10" />
        
        {/* Building 3 (Back Right) */}
        <path d="M60 40h20v40H60z" fill="url(#bldg1)" opacity="0.8" />
        <rect x="65" y="45" width="4" height="4" fill="#FFF" opacity="0.5" />
        <rect x="71" y="45" width="4" height="4" fill="#FFF" opacity="0.5" />
        <rect x="65" y="55" width="4" height="4" fill="#FFF" opacity="0.5" />
        <rect x="71" y="55" width="4" height="4" fill="#FFF" opacity="0.5" />
        
        {/* Building 1 (Main Front) */}
        <path d="M30 20h25v60H30z" fill="url(#bldg2)" />
        <path d="M55 20l10-5v60l-10 5z" fill="url(#bldg1)" />
        
        <rect x="35" y="30" width="15" height="3" fill="#FFF" opacity="0.8" />
        <rect x="35" y="40" width="15" height="3" fill="#FFF" opacity="0.8" />
        <rect x="35" y="50" width="15" height="3" fill="#FFF" opacity="0.8" />
        <rect x="35" y="60" width="15" height="3" fill="#FFF" opacity="0.8" />
        
        {/* Building 2 (Left Front) */}
        <path d="M15 50h15v30H15z" fill="#60A5FA" />
        <rect x="18" y="55" width="4" height="4" fill="#FFF" opacity="0.8" />
        <rect x="23" y="55" width="4" height="4" fill="#FFF" opacity="0.8" />
        <rect x="18" y="65" width="4" height="4" fill="#FFF" opacity="0.8" />
        
        {/* Shrubs */}
        <circle cx="20" cy="78" r="4" fill="#34D399" />
        <circle cx="25" cy="80" r="3" fill="#10B981" />
        <circle cx="80" cy="78" r="4" fill="#34D399" />
    </svg>
);
