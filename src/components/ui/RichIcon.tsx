import React from 'react';
import { LucideIcon } from 'lucide-react';

export const RichIcon = ({ icon: Icon, theme }: { icon: LucideIcon, theme: string }) => {
    const themes = {
        rose: { bg: 'bg-rose-100 dark:bg-rose-900/30', circle: 'bg-gradient-to-br from-rose-400 to-rose-600', dot1: 'bg-orange-300', dot2: 'bg-pink-400' },
        blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', circle: 'bg-gradient-to-br from-blue-400 to-blue-600', dot1: 'bg-cyan-300', dot2: 'bg-indigo-400' },
        emerald: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', circle: 'bg-gradient-to-br from-emerald-400 to-emerald-600', dot1: 'bg-lime-300', dot2: 'bg-teal-400' },
        purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', circle: 'bg-gradient-to-br from-purple-400 to-purple-600', dot1: 'bg-fuchsia-300', dot2: 'bg-violet-400' },
        amber: { bg: 'bg-amber-100 dark:bg-amber-900/30', circle: 'bg-gradient-to-br from-amber-400 to-amber-600', dot1: 'bg-yellow-300', dot2: 'bg-orange-400' },
        cyan: { bg: 'bg-cyan-100 dark:bg-cyan-900/30', circle: 'bg-gradient-to-br from-cyan-400 to-cyan-600', dot1: 'bg-sky-300', dot2: 'bg-teal-400' },
    };
    const t = themes[theme as keyof typeof themes] || themes.blue;

    return (
        <div className="relative w-16 h-16 xl:w-20 xl:h-20 mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0">
            {/* Background geometric shape */}
            <div className={`absolute inset-1 rounded-xl ${t.bg} rotate-12 group-hover:rotate-6 transition-transform duration-500`} />
            <div className={`absolute inset-1 rounded-xl ${t.bg} -rotate-6 group-hover:rotate-0 transition-transform duration-500 opacity-60`} />
            
            {/* Main Circle */}
            <div className={`absolute inset-0 rounded-full ${t.circle} shadow-lg flex items-center justify-center`}>
                <Icon className="text-white relative z-10 w-6 h-6 xl:w-8 xl:h-8" strokeWidth={2.5} />
            </div>

            {/* Floating 3D "Atoms" */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 xl:w-4 xl:h-4 rounded-full ${t.dot1} shadow-sm group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform`} />
            <div className={`absolute -bottom-1 -left-1 w-4 h-4 xl:w-5 xl:h-5 rounded-full ${t.dot2} shadow-sm group-hover:translate-y-1 group-hover:-translate-x-1 transition-transform`} />
            <div className={`absolute top-1/2 -right-2 w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-white shadow-sm opacity-80`} />
        </div>
    );
};
