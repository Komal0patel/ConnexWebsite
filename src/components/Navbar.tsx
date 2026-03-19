import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import THEME from '../constants/theme';
import { NAV_LINKS } from '../constants/routes';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight * 0.3;
            setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = NAV_LINKS;

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isScrolled ? 0 : -100,
                opacity: isScrolled ? 1 : 0,
                backgroundColor: THEME.colors.navbar,
                backdropFilter: `blur(${THEME.glass.blur})`,
                borderBottom: THEME.glass.border,
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
                pointerEvents: isScrolled ? 'auto' : 'none'
            }}
            transition={THEME.animations.transitions.default}
            className="fixed top-0 left-0 w-full z-[500] transition-all duration-700"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Authority Branding */}
                <Link to="/" className="group flex items-center gap-2 md:gap-4">
                    <img
                        src="/cs4.png"
                        alt="Connex Logo"
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start leading-none">
                        <span
                            className="text-2xl md:text-4xl font-serif text-white font-medium tracking-tight uppercase italic"
                            style={{ fontFamily: THEME.typography.fonts.serif }}
                        >
                            Connex
                        </span>
                        <span
                            className="text-[10px] md:text-[12px] text-slate-900 font-sans tracking-[1.2em] font-black mt-1 ml-1 scale-x-110 origin-left"
                            style={{ letterSpacing: THEME.typography.tracking.mega }}
                        >
                            DESIGN STUDIO
                        </span>
                    </div>
                </Link>

                {/* Technical Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-[12px] font-sans font-black tracking-[0.3em] uppercase transition-all relative group ${location.pathname === link.href ? 'text-white' : 'text-slate-900 hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span
                                className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-500 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            />
                        </Link>
                    ))}

                    <Link
                        to="/#contact"
                        className="ml-4 px-8 py-3.5 border-2 border-slate-900 text-slate-900 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-slate-900 hover:text-white transition-all shadow-lg"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Trigger */}
                <button
                    className="lg:hidden p-2 text-white z-[1001] flex items-center gap-2 group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </span>
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Classy Mobile Interface */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={THEME.animations.variants.revealUp}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full right-6 mt-4 w-64 bg-[#1a3c6d] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden z-[1000]"
                        style={{ backgroundColor: THEME.colors.primary }}
                    >
                        <div className="flex flex-col p-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-5 py-4 text-[12px] font-sans font-bold text-white/70 hover:text-white hover:bg-white/5 tracking-[0.3em] uppercase transition-all flex items-center justify-between group border-b border-white/[0.03] last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-[8px] font-mono text-white/40">0{idx + 1}</span>
                                        {link.name}
                                    </div>
                                </Link>
                            ))}
                            <Link
                                to="/#contact"
                                className="mt-2 px-5 py-5 bg-white text-[#1a1a1a] text-[10px] font-black uppercase tracking-[0.4em] text-center hover:bg-slate-900 hover:text-white transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Establish Link
                            </Link>
                        </div>

                        {/* Footer Detail */}
                        <div className="bg-white/[0.02] border-t border-white/5 p-4 flex justify-between items-center">
                            <span className="text-[7px] font-mono text-white/20 tracking-widest uppercase">Rev_05.19</span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white/40" />
                                <div className="w-1 h-1 rounded-full bg-white/10" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

