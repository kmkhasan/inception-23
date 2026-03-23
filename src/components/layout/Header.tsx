'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const nav = {
  en: ['Services', 'Industries', 'Insights', 'Team', 'Global'],
  bn: ['সেবাসমূহ', 'শিল্পখাত', 'অন্তর্দৃষ্টি', 'টিম', 'অফিস']
};

export const Header = () => {
  const { lang, theme, toggleLang, toggleTheme } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
        
        // Simple scroll spy logic
        const sections = nav.en.map(s => s.toLowerCase());
        let current = "";
        for (const section of sections) {
            const el = document.getElementById(section);
            if (el && window.scrollY >= el.offsetTop - 150) {
                current = section;
            }
        }
        setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Sync on Mount
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <motion.div 
        initial={{ y: -100, x: "-50%" }}
        animate={{ 
          y: 0, 
          x: "-50%",
          height: scrolled ? 70 : 100, 
          marginTop: scrolled ? 24 : 0,
          borderRadius: scrolled ? 999 : 0,
          width: scrolled ? 'calc(100% - 48px)' : '100%',
          maxWidth: scrolled ? 1100 : '100vw'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-1/2 z-50 flex items-center transition-colors duration-500 ${
            scrolled ? 'bg-night-950/85 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10' 
                     : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent border-none'
        }`}
      >
        <div suppressHydrationWarning className={`container mx-auto flex items-center justify-between w-full h-full ${scrolled ? 'px-6 lg:px-8' : 'px-6'}`}>
          {/* LOGO */}
          <div suppressHydrationWarning className="flex items-center gap-3">
            <div suppressHydrationWarning className="w-10 h-10 bg-gradient-to-br from-brand-600 to-brand-800 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-brand-700/50 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
              I
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white drop-shadow-md">
              INCEPTION<span className="text-brand-500"> 23</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div suppressHydrationWarning className="hidden lg:flex items-center gap-1 bg-black/20 dark:bg-white/5 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md" onMouseLeave={() => setHoveredSection(null)}>
            {nav[lang].map((item, i) => {
              const sectionId = nav.en[i].toLowerCase();
              const isActive = activeSection === sectionId;
              const isHovered = hoveredSection === sectionId;
              return (
                  <a 
                    key={i} 
                    href={`#${sectionId}`}
                    onMouseEnter={() => setHoveredSection(sectionId)}
                    className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 z-10 rounded-full ${isActive || isHovered ? 'text-white' : 'text-white/70'}`}
                  >
                    <span className="relative z-10">{item}</span>
                    {/* Magnetic Bubble */}
                    {isHovered && (
                        <motion.div 
                          layoutId="navHover" 
                          className="absolute inset-0 bg-white/20 rounded-full" 
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                        />
                    )}
                    {isActive && !isHovered && (
                        <motion.div 
                          layoutId="navActive" 
                          className="absolute inset-0 bg-brand-600/50 rounded-full" 
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                        />
                    )}
                  </a>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleLang} className="text-xs font-bold w-10 h-10 rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-all text-white flex items-center justify-center">
              {lang === 'en' ? 'BN' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-all text-white flex items-center justify-center hover:text-brand-400 hover:rotate-12">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button className="relative group bg-white text-brand-950 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-brand-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 block">{lang === 'en' ? 'Inquire' : 'অনুসন্ধান'}</span>
            </button>
          </div>

          {/* MOBILE TOGGLE & ACTIONS - Made visible outside the pill container */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-white">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="text-white p-2 rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-colors z-[60]" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU (Full Overlay) */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-night-950/95 backdrop-blur-3xl pt-32 px-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-6 h-full pb-12 overflow-y-auto">
              {nav[lang].map((item, i) => {
                 const sectionId = nav.en[i].toLowerCase();
                 return (
                 <motion.a 
                    key={i} 
                    href={`#${sectionId}`} 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05), type: "spring" }}
                    onClick={() => setMobileMenu(false)}
                    className="text-4xl font-serif font-bold text-white border-b border-white/10 pb-6 hover:pl-4 hover:text-brand-400 transition-all"
                  >
                    {item}
                  </motion.a>
                 );
              })}
              <div className="mt-auto space-y-4">
                <button onClick={() => { toggleLang(); setMobileMenu(false); }} className="w-full py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-[0.2em]">{lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}</button>
                <button className="w-full bg-brand-600 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-500 transition-colors shadow-2xl shadow-brand-500/30" onClick={() => setMobileMenu(false)}>
                  {lang === 'en' ? 'Start Inquiry' : 'অনুসন্ধান'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};