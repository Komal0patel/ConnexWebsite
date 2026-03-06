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
            setIsScrolled(window.scrollY > window.innerHeight * 0.5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Index', href: '/' },
        { name: 'Archives', href: '/products' },
        { name: 'Elite Series', href: '/products2' },
        { name: 'Atelier', href: '/products3' },
        { name: 'Our Ethos', href: '/#about' },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{
                y: isScrolled ? 0 : -20,
                opacity: isScrolled ? 1 : 0,
                pointerEvents: isScrolled ? 'auto' : 'none'
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-[500] transition-all duration-700 ${isScrolled
                ? 'bg-[#121212]/95 backdrop-blur-md border-b border-white/[0.03] py-5'
                : 'bg-transparent py-10'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Authority Branding */}
                <Link to="/" className="group flex items-center gap-4">
                    <img
                        src="/cs4.png"
                        alt="Connex Logo"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-4xl font-serif text-white font-medium tracking-tight uppercase italic">
                            Connex
                        </span>
                        <span className="text-[10px] text-[#8B7E74] font-sans tracking-[1.2em] font-bold mt-1 ml-1 scale-x-110 origin-left opacity-80">DESIGN STUDIO</span>
                    </div>
                </Link>

                {/* Technical Navigation */}
                <div className="hidden lg:flex items-center gap-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-white/70 hover:text-[#8B7E74] text-[10px] font-sans font-semibold tracking-[0.6em] uppercase transition-all relative"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/#contact"
                        className="px-8 py-3 bg-white text-[#11284a] text-xs font-black uppercase tracking-[0.5em] hover:bg-[#8B7E74] hover:text-white transition-all"
                    >
                        Initiate Protocol
                    </Link>
                </div>

                {/* Mobile Trigger */}
                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Classy Mobile Interface */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[1000] bg-[#121212] flex flex-col items-center justify-center p-12"
                    >
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-12 right-12 p-4 text-white">
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center gap-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-5xl font-serif italic text-white tracking-widest uppercase hover:text-[#8B7E74] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
