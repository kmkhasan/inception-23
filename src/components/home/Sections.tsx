'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, ShieldCheck, Target, Lightbulb, Rocket, Lock } from 'lucide-react';

export const Industries = () => {
    const { lang } = useAppStore();
    const industries = ['Financial Services', 'Public Sector', 'Manufacturing', 'Technology', 'Energy', 'Healthcare'];
    return (
        <section id="industries" className="py-24 bg-white dark:bg-night-900 overflow-hidden">
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-center text-gray-400 mb-16">{lang === 'en' ? 'Industry Focus' : 'শিল্প ফোকাস'}</h2>
                <div suppressHydrationWarning className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-100 dark:border-night-800">
                    {industries.map((ind, i) => (
                        <div suppressHydrationWarning key={i} className="p-10 border-b border-r border-gray-100 dark:border-night-800 hover:bg-brand-50 dark:hover:bg-night-800 transition-colors cursor-pointer text-center group flex items-center justify-center h-40">
                            <span className="font-serif font-bold text-lg text-gray-600 dark:text-gray-400 group-hover:text-brand-700 dark:group-hover:text-brand-100 transition-colors">{ind}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const Proof = () => {
    const { lang } = useAppStore();
    return (
        <section id="proof" className="py-16 md:py-24 bg-white dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, type: "spring", delay: 0.1 }} suppressHydrationWarning className="container mx-auto px-6 relative z-10">
                <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
                    {[
                        { val: "$50B+", label: { en: "Assets Advised", bn: "উপদেষ্টা সম্পদ" }, icon: TrendingUp },
                        { val: "30%", label: { en: "Avg. Efficiency Gain", bn: "গড় দক্ষতা বৃদ্ধি" }, icon: BarChart },
                        { val: "100%", label: { en: "Regulatory Compliance", bn: "নিয়ন্ত্রক সম্মতি" }, icon: ShieldCheck }
                    ].map((stat, i) => (
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ delay: i * 0.15, type: "spring", stiffness: 150, damping: 12 }} suppressHydrationWarning key={i} className="pt-8 md:pt-0 px-4 md:px-8">
                            <div suppressHydrationWarning className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4">
                                <stat.icon size={48} className="text-brand-500/30 dark:text-brand-500/50 hidden md:block" />
                                <div suppressHydrationWarning className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-700 to-brand-400 dark:from-white dark:to-brand-200">{stat.val}</div>
                            </div>
                            <div suppressHydrationWarning className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400"><stat.icon size={16} className="inline md:hidden mr-2 -mt-1" />{lang === 'en' ? stat.label.en : stat.label.bn}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const InquiryForm = () => {
    const { lang } = useAppStore();
    return (
        <section className="py-32 bg-white dark:bg-night-900 overflow-hidden">
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-950 dark:text-white">{lang === 'en' ? 'Confidential Inquiry' : 'গোপনীয় অনুসন্ধান'}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{lang === 'en' ? 'Reach our senior partners directly.' : 'সরাসরি যোগাযোগ করুন।'}</p>
                </div>
                <form className="bg-gray-50 dark:bg-night-800 p-8 md:p-16 border border-gray-100 dark:border-night-700 shadow-2xl dark:shadow-none space-y-8 rounded-xl" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input type="text" className="w-full p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-600 focus:border-brand-700 dark:focus:border-brand-500 outline-none transition-colors dark:text-white rounded-md" placeholder={lang === 'en' ? "Name" : "নাম"} required />
                        <input type="email" className="w-full p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-600 focus:border-brand-700 dark:focus:border-brand-500 outline-none transition-colors dark:text-white rounded-md" placeholder={lang === 'en' ? "Work Email" : "ইমেইল"} required />
                    </div>
                    <textarea className="w-full p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-600 focus:border-brand-700 dark:focus:border-brand-500 outline-none transition-colors dark:text-white h-40 resize-none rounded-md" placeholder={lang === 'en' ? "Confidential Message..." : "বার্তা..."} required></textarea>
                    <button type="submit" className="w-full bg-brand-700 hover:bg-brand-600 text-white font-bold py-5 rounded-md shadow-xl transition-all uppercase tracking-[0.2em] text-sm hover:-translate-y-1 flex items-center justify-center gap-3"><Lock size={16} />{lang === 'en' ? 'Submit Securely' : 'নিরাপদে জমা দিন'}</button>
                </form>
            </motion.div>
        </section>
    );
};

export const Methodology = () => {
    const { lang } = useAppStore();
    const steps = [
        { num: '01', icon: Target, title: { en: 'Strategic Assessment', bn: 'কৌশলগত মূল্যায়ন' }, desc: { en: 'Deep-dive analysis of market position, operational bottlenecks, and untapped digital vectors.', bn: 'বাজারের অবস্থান, অপারেশনাল বাধা এবং অব্যবহৃত ডিজিটাল ভেক্টরের গভীর বিশ্লেষণ।' } },
        { num: '02', icon: Lightbulb, title: { en: 'Architecting Solutions', bn: 'সমাধান নির্মাণ' }, desc: { en: 'Developing custom frameworks leveraging legal loopholes and cutting-edge tech deployment.', bn: 'আইনি ফাঁকফোকর এবং অত্যাধুনিক প্রযুক্তির সাহায্যে কাস্টম ফ্রেমওয়ার্ক তৈরি।' } },
        { num: '03', icon: Rocket, title: { en: 'Execution & Scale', bn: 'বাস্তবায়ন এবং স্কেল' }, desc: { en: 'Frictionless rollout with continuous optimization to secure maximum ROI and market share.', bn: 'সর্বোচ্চ আয় এবং বাজারের অংশীদারিত্ব নিশ্চিত করতে ধারাবাহিক অপ্টিমাইজেশন।' } }
    ];

    return (
        <section id="methodology" className="py-24 md:py-32 bg-gray-50 dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400 mb-6">{lang === 'en' ? 'Our Methodology' : 'আমাদের পদ্ধতি'}</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black leading-[1.1] text-brand-950 dark:text-white mb-8 tracking-tight">
                        {lang === 'en' ? 'Engineered for Scale. Designed for Dominance.' : 'স্কেলের জন্য ইঞ্জিনিয়ারিং। আধিপত্যের জন্য ডিজাইন করা।'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        {lang === 'en' ? 'We do not just offer advice; we build the infrastructure for your success. Our tri-pillar approach seamlessly integrates business acuity, legal fortification, and technological superiority.' : 'আমরা শুধু পরামর্শ দিই না; আমরা আপনার সাফল্যের অবকাঠামো তৈরি করি।'}
                    </p>
                </motion.div>

                {/* Animated Vertical Roadmap */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line Tracker */}
                    <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-brand-200 dark:via-brand-800/50 to-transparent md:-translate-x-1/2 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.1)]"></div>

                    <div className="space-y-16 md:space-y-24 relative pb-10">
                        {steps.map((step, i) => {
                            const isEven = i % 2 === 0; // Evens go left on desktop
                            return (
                                <div key={i} className={`flex flex-col md:flex-row items-center justify-between w-full group ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Spacing Offset for alternating desktop sides */}
                                    <div className="hidden md:block w-[45%]"></div>

                                    {/* Central Connecting Node */}
                                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-night-950 border-[5px] border-brand-500 z-10 shadow-[0_0_20px_rgba(20,184,166,0.5)] group-hover:scale-150 transition-transform duration-500 ease-out"></div>

                                    {/* Card Container */ }
                                    <motion.div 
                                        initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }} 
                                        whileInView={{ opacity: 1, x: 0, scale: 1 }} 
                                        viewport={{ once: false, margin: "-10%" }} 
                                        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-left relative`}
                                    >
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start w-full`}>
                                            
                                            {/* Advanced Step Badge matching user request */}
                                            <div className="flex items-center gap-3 mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                                                {!isEven && <step.icon size={18} className="text-brand-600 dark:text-brand-400 hidden md:inline ml-1" />}
                                                <span className="px-5 py-2 rounded-full border border-brand-200 dark:border-brand-500/30 bg-white dark:bg-night-900 text-brand-700 dark:text-brand-300 text-[11px] font-black uppercase tracking-[0.2em] shadow-sm flex items-center gap-2">
                                                    Step - {step.num}
                                                </span>
                                                {isEven && <step.icon size={18} className="text-brand-600 dark:text-brand-400 hidden md:inline mr-1" />}
                                                <step.icon size={18} className="text-brand-600 dark:text-brand-400 inline md:hidden ml-1" />
                                            </div>
                                            
                                            {/* Premium Data Box */}
                                            <div className={`p-8 md:p-10 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_20px_60px_rgba(20,184,166,0.1)] hover:border-brand-300 dark:hover:border-brand-500/40 hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden w-full ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'} rounded-tl-none md:rounded-tl-2xl`}>
                                                
                                                {/* Micro-connecting horizontal line (Desktop only) */}
                                                <div className={`absolute top-[40px] w-12 h-[2px] bg-brand-200 dark:bg-brand-500/30 hidden md:block ${isEven ? '-right-12' : '-left-12'}`}></div>
                                                
                                                {/* Flare background on hover */}
                                                <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-transparent dark:from-brand-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>
                                                
                                                <h4 className="relative z-10 text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-950 dark:text-white transition-colors group-hover:text-brand-700 dark:group-hover:text-brand-300">
                                                    {lang === 'en' ? step.title.en : step.title.bn}
                                                </h4>
                                                <p className="relative z-10 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                                    {lang === 'en' ? step.desc.en : step.desc.bn}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};