import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

import Contact from '../components/Contact';
import CosmicBackground from '../components/CosmicBackground';
import ProductCard from '../components/ProductCard';
import THEME from '../constants/theme';
import { NAV_LINKS } from '../constants/routes';
import { ALL_CATEGORIES, filterProductsByCategory } from '../data/product-engine';

const ALL_SPECIMENS = 'All Specimens';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState(ALL_SPECIMENS);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = NAV_LINKS;

    const handleCategoryChange = (cat: string) => {
        if (cat === activeCategory) return;
        setIsLoading(true);
        setActiveCategory(cat);
        setIsMenuOpen(false);
        // Cinematic Delay
        setTimeout(() => setIsLoading(false), 800);
    };

    const filteredProducts = filterProductsByCategory(activeCategory);

    return (
        <main
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: THEME.colors.secondary }}
        >
            <CosmicBackground />

            {/* Site Interface Wrapper */}
            <div className="fixed top-8 right-8 z-[700] flex flex-col items-end pointer-events-none">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 border text-white flex flex-col items-center justify-center rounded-sm shadow-2xl pointer-events-auto hover:bg-[#1a3c6d] transition-all duration-500"
                    style={{ borderColor: THEME.colors.primaryAlpha(0.1) }}
                >
                    <span className="text-[10px] font-black uppercase tracking-tighter mb-1 select-none">Menu</span>
                    {isMenuOpen ? <X size={20} /> : <div className="flex flex-col gap-1"><div className="w-6 h-0.5 bg-white" /><div className="w-4 h-0.5 bg-white opacity-50" /></div>}
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            variants={THEME.animations.variants.revealUp}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="mt-4 w-72 bg-white border shadow-2xl rounded-sm overflow-hidden z-[1000] pointer-events-auto"
                            style={{ borderColor: THEME.colors.primaryAlpha(0.05) }}
                        >
                            <div className="flex flex-col p-2">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="px-6 py-6 text-[12px] font-sans font-black text-slate-900/80 hover:text-slate-900 hover:bg-slate-50 tracking-[0.3em] uppercase transition-all flex items-center gap-6 border-b border-black/[0.03] last:border-0"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="text-[10px] font-mono opacity-30">0{idx + 1}</span>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="bg-slate-50 p-4 flex justify-between items-center border-t border-black/[0.05]">
                                <span className="text-[8px] font-mono text-slate-400 tracking-widest uppercase italic">REV_05.19_SYSTEMS</span>
                                <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-slate-900" /><div className="w-2 h-2 rounded-full bg-slate-200" /></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Transition Shutter */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory + "-shutter"}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 0.8, times: [0, 0.5, 1], ease: "easeInOut" }}
                    className="fixed inset-0 bg-slate-900/10 z-[600] origin-top pointer-events-none"
                    style={{ backgroundColor: THEME.colors.primaryAlpha(0.1) }}
                />
            </AnimatePresence>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={THEME.animations.variants.staggerContainer}
                className="container mx-auto px-6 relative z-10 pt-20 pb-40 md:pt-32 md:pb-80"
            >
                {/* Header Statement */}
                <motion.div variants={THEME.animations.variants.revealUp} className="mb-16">
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-slate-500 font-mono text-xs uppercase font-black tracking-[0.4em]">Inventory_v.01</span>
                        <div className="h-[1px] w-20 bg-slate-200" />
                    </div>
                    <h1
                        className="text-5xl md:text-7xl lg:text-[8vw] text-slate-900 tracking-tighter uppercase leading-[0.85] overflow-hidden"
                        style={{ fontFamily: THEME.typography.fonts.serif }}
                    >
                        Precision <br />
                        <span className="italic font-light lowercase text-connex-gradient px-4">Hardware.</span>
                    </h1>
                </motion.div>

                {/* Category Navigation Strip */}
                <div className="flex border-b mb-12 overflow-x-auto no-scrollbar scroll-smooth relative z-20"
                    style={{ borderBottomColor: THEME.colors.primaryAlpha(0.05) }}
                >
                    {ALL_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-8 py-6 text-[11px] md:text-xs uppercase font-black tracking-[0.3em] transition-all duration-700 whitespace-nowrap relative ${activeCategory === cat ? 'text-white' : 'text-slate-900/40 hover:text-slate-900'}`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="active-cat-pill"
                                    className="absolute inset-0 z-0 shadow-2xl"
                                    style={{ backgroundColor: THEME.colors.primary }}
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Archive Grid View */}
                <div className="min-h-[60vh] relative">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="loader"
                                variants={THEME.animations.variants.simpleFade}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="absolute inset-0 flex flex-col items-center justify-center space-y-12 h-[60vh]"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: THEME.colors.primary }} />
                                    <span className="text-xs font-mono text-slate-900 uppercase tracking-[0.5em] font-black opacity-40">System_Processing...</span>
                                </div>
                                <div className="w-80 h-[1px] bg-slate-100 relative overflow-hidden">
                                    <motion.div
                                        initial={{ left: '-100%' }}
                                        animate={{ left: '100%' }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 w-1/2 bg-slate-900"
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeCategory}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={THEME.animations.variants.staggerContainer}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
                            >
                                {filteredProducts.map((product, idx) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={idx}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* System Diagnostics */}
                <motion.div variants={THEME.animations.variants.revealUp} className="mt-40 flex flex-col items-center">
                    <div className="flex items-center gap-10 opacity-20 mb-10 w-full">
                        <div className="h-[1px] flex-1 bg-slate-900" />
                        <span className="text-[10px] font-mono tracking-[0.8em] font-black text-slate-900 uppercase">Curated_Specimens_Archive_Valid</span>
                        <div className="h-[1px] flex-1 bg-slate-900" />
                    </div>
                </motion.div>
            </motion.div>

            <Contact />
        </main>
    );
};

export default Products;
