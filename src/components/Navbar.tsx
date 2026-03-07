import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Reveal navbar only after scrolling past a portion of the hero
            // Increased threshold to 30% of viewport height
            const scrolled = window.scrollY > window.innerHeight * 0.3;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Products2', href: '/products2' },
        { name: 'Products3', href: '/products3' },
        { name: 'Our Ethos', href: '/#about' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: isScrolled ? 0 : -100,
                opacity: isScrolled ? 1 : 0,
                backgroundColor: 'rgba(18, 18, 18, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '1.25rem',
                paddingBottom: '1.25rem',
                pointerEvents: isScrolled ? 'auto' : 'none'
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                        <span className="text-2xl md:text-4xl font-serif text-white font-medium tracking-tight uppercase italic">
                            Connex
                        </span>
                        <span className="text-[8px] md:text-[10px] text-[#8B7E74] font-sans tracking-[1em] md:tracking-[1.2em] font-bold mt-0.5 md:mt-1 ml-0.5 md:ml-1 scale-x-110 origin-left opacity-80">DESIGN STUDIO</span>
                    </div>
                </Link>

                {/* Technical Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-white/70 hover:text-white text-[10px] font-sans font-bold tracking-[0.4em] uppercase transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B7E74] transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}

                    <Link
                        to="/#contact"
                        className="ml-4 px-6 py-2.5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
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
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full right-6 mt-4 w-64 bg-[#0A0A0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden z-[1000]"
                    >
                        <div className="flex flex-col p-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-5 py-4 text-xs font-sans font-bold text-white/70 hover:text-white hover:bg-white/5 tracking-[0.3em] uppercase transition-all flex items-center justify-between group border-b border-white/[0.03] last:border-0"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-[8px] font-mono text-[#8B7E74] opacity-50">0{idx + 1}</span>
                                        {link.name}
                                    </div>
                                </Link>
                            ))}

                            <Link
                                to="/#contact"
                                className="mt-2 px-5 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] text-center hover:bg-[#8B7E74] hover:text-white transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Establish Link
                            </Link>
                        </div>

                        {/* Footer Detail */}
                        <div className="bg-white/[0.02] border-t border-white/5 p-4 flex justify-between items-center">
                            <span className="text-[7px] font-mono text-white/20 tracking-widest uppercase">Rev_04.26</span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-[#8B7E74]" />
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
