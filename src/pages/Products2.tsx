import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, Terminal, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    img: string;
    sub: string;
    category: string;
    price: string;
    spec: string;
}

const productsPool: Product[] = [
    { id: "PX-01", name: "PRISM CORE", img: "/products/prod5.png", sub: "Spectral Refraction System", category: "Optics", price: "₹1,250", spec: "12,500K / 98 CRI" },
    { id: "EX-A1", name: "ALUMINUM A1", img: "/products/extruded1.png", sub: "Structural Anodized Profile", category: "Structure", price: "₹450", spec: "T6 Alloy / Matte" },
    { id: "LM-V8", name: "VOLTAX V8", img: "/products/prod8.png", sub: "Lumen Matrix Array", category: "Power", price: "₹890", spec: "400V / High Eff" },
    { id: "OP-09", name: "OPTIC NERVE", img: "/products/prod10.png", sub: "Neural Engine", category: "Intelligence", price: "₹2,100", spec: "AI Driven / Sync" },
    { id: "PX-02", name: "NEXUS LITE", img: "/products/prod6.png", sub: "Diffuser Core Architecture", category: "Optics", price: "₹720", spec: "Nano-Etched / Soft" },
    { id: "PX-03", name: "QUANTUM LINK", img: "/products/prod11.png", sub: "Neural Synchronization Array", category: "Intelligence", price: "₹3,400", spec: "0.2ms Latency" },
    { id: "EX-A2", name: "STRETCH A2", img: "/products/extruded2.png", sub: "Modular Connector", category: "Structure", price: "₹180", spec: "Titanium Coated" },
    { id: "OP-10", name: "SYNAPSE L1", img: "/products/prod10.png", sub: "Direct Neural Interface", category: "Intelligence", price: "₹5,200", spec: "Fiber-Ready" },
    { id: "PX-04", name: "CONNEX LENS", img: "/products/prod6.png", sub: "Chromatic Balancer", category: "Optics", price: "₹990", spec: "Polarized / 4K" },
    { id: "LM-V9", name: "SUPER VOLT", img: "/products/prod8.png", sub: "High Current Block", category: "Power", price: "₹1,100", spec: "GaN Powered" },
    { id: "EX-A3", name: "VOID FRAME", img: "/products/extruded1.png", sub: "Recessed Mount", category: "Structure", price: "₹320", spec: "Zero-Bezel" },
    { id: "OP-11", name: "TOTAL LIGHT", img: "/products/prod5.png", sub: "Ambient Emitter", category: "Optics", price: "₹850", spec: "Full Spectrum" },
];

const Products2 = () => {
    const [activeCategory, setActiveCategory] = useState('All Specimens');
    const [isDecypting, setIsDecrypting] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const allCategories = ['All Specimens', 'Optics', 'Structure', 'Power', 'Intelligence'];

    const handleCategoryChange = (cat: string) => {
        if (cat === activeCategory) return;
        setIsDecrypting(true);
        setActiveCategory(cat);
        setIsMenuOpen(false);
        setTimeout(() => setIsDecrypting(false), 1500);
    };

    // Obsidian Animation Variants: Spectral Reconstitution
    const obsidianReveal: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const pulseVariants: Variants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0, 0, 0.2, 1] }
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.5 }
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Products2', href: '/products2' },
        { name: 'Products3', href: '/products3' },
    ];

    return (
        <main className="relative bg-[#050505] min-h-screen overflow-hidden text-[#E4E4E4] font-sans selection:bg-[#C5A059] selection:text-black">
            {/* Background Texture - Dark Elite */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1A1A1A_0%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* 1. Floating Site Trigger (Top Right) */}
            <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[700] pointer-events-none">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 md:w-16 md:h-16 bg-[#C5A059] text-black flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(197,160,89,0.3)] pointer-events-auto hover:bg-white transition-all duration-500"
                >
                    {isMenuOpen ? <X size={20} /> : <Terminal size={20} />}
                </button>
            </div>

            {/* Main Content Area */}
            <div className="px-4 md:px-24 pt-12 md:pt-16 pb-40 md:pb-60 relative z-10 container mx-auto">
                {/* Header Section: Centered Architectural Statement */}
                <header className="mb-8 md:mb-12 flex flex-col items-center text-center">
                    <div className="space-y-4 max-w-4xl px-4">
                        <div className="flex items-center justify-center gap-4">
                            <motion.div initial={{ width: 0 }} animate={{ width: 20, transition: { delay: 0.5 } }} className="h-[1px] bg-[#C5A059]/40" />
                            <span className="text-[10px] md:text-sm font-mono text-[#C5A059] uppercase tracking-[0.5em] md:tracking-[0.8em]">Universal_Archive</span>
                            <motion.div initial={{ width: 0 }} animate={{ width: 20, transition: { delay: 0.5 } }} className="h-[1px] bg-[#C5A059]/40" />
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[6vw] font-serif leading-[0.8] tracking-tighter uppercase italic text-transparent bg-clip-text bg-[linear-gradient(135deg,#FFFFFF_0%,#C5A059_100%)]">
                            The <span className="not-italic font-light">Elite</span>
                        </h1>
                        <p className="text-[10px] md:text-sm font-mono text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em]">Securing Digital Specimens // Rev_04</p>
                    </div>
                </header>

                {/* 2. Sticky Category Navigator (Top Static) */}
                <div className="sticky top-4 md:top-12 z-[100] mb-12 md:mb-16 flex justify-center w-full overflow-x-auto no-scrollbar">
                    <div className="bg-[#0A0A0A]/60 backdrop-blur-3xl border border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap">
                        {allCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold transition-all duration-500 ${activeCategory === cat ? 'bg-[#C5A059] text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Archive Showcase Grid */}
                <div className="min-h-screen relative">
                    <AnimatePresence mode="wait">
                        {isDecypting ? (
                            <motion.div
                                key="loader"
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute inset-0 flex flex-col items-center justify-center gap-12 h-[60vh]"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="w-40 h-40 border-t-2 border-r-2 border-[#C5A059]/40 rounded-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Activity className="text-[#C5A059] animate-pulse" size={32} />
                                    </div>
                                </div>
                                <div className="space-y-2 text-center">
                                    <h3 className="text-sm font-mono uppercase tracking-[1em] text-[#C5A059]">Decrypting_Archive_Data</h3>
                                    <p className="text-xs font-mono opacity-20 uppercase tracking-[0.5em]">Establishing Secure Neural Link...</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeCategory}
                                variants={obsidianReveal}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {productsPool.map((product, idx) => {
                                    if (activeCategory !== 'All Specimens' && activeCategory !== product.category) return null;
                                    return <ObsidianCard key={product.id} product={product} index={idx} />;
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Site Navbar Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-20 right-4 md:right-8 w-64 bg-[#0A0A0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden z-[800]"
                    >
                        <div className="flex flex-col p-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    to={link.href}
                                    key={link.name}
                                    className="px-5 py-4 text-[10px] font-mono font-bold text-white/70 hover:text-[#C5A059] hover:bg-white/5 tracking-[0.3em] uppercase transition-all flex items-center gap-4 border-b border-white/[0.03] last:border-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-[8px] opacity-30">0{idx + 1}</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="bg-white/[0.02] border-t border-white/5 p-4 flex justify-between items-center">
                            <span className="text-[7px] font-mono text-white/20 tracking-widest uppercase italic">Secure_Archive</span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-[#C5A059]" />
                                <div className="w-1 h-1 rounded-full bg-white/10" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

const ObsidianCard = ({ product, index }: { product: Product, index: number }) => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    // Spectral Bloom Variants
    const cardEntry: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.7,
            y: 100,
            filter: 'blur(40px) brightness(2)',
            clipPath: 'circle(0% at 50% 50%)'
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: 'blur(0px) brightness(1)',
            clipPath: 'circle(100% at 50% 50%)',
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 18,
                mass: 1.2,
                delay: index * 0.05,
                filter: { duration: 1.2 },
                clipPath: { duration: 1, ease: "circOut" }
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.div
            variants={cardEntry}
            onMouseMove={handleMouseMove}
            className="group relative aspect-[3/4] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-[#C5A059]/40 transition-colors duration-700 cursor-none"
        >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 bg-[#050505] transition-colors duration-700 group-hover:bg-[#0A0A0A]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-80" />

                {/* Spectral Shimmer (Follows Mouse) */}
                <div
                    className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #C5A059 0%, transparent 50%)`
                    }}
                />

                <motion.img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-12 opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 filter contrast-125"
                />
            </div>

            {/* 1. Top Metadata - Slides Down on Hover */}
            <div className="absolute top-6 left-6 z-20 space-y-1 transition-all duration-700 ease-out group-hover:translate-y-8 group-hover:opacity-0">
                <span className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.8em] block">ID_{product.id}</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono uppercase text-[#C5A059] tracking-[0.3em]">Neural_Sync_Active</span>
                </div>
            </div>

            {/* 2. Technical Detail Spine - Slides Down on Hover */}
            <div className="absolute right-0 inset-y-0 w-8 border-l border-white/5 z-20 flex flex-col items-center py-6 gap-6 bg-black/40 transition-all duration-700 ease-out group-hover:translate-y-full group-hover:opacity-0">
                {['ARCH', 'SPEC', 'TX'].map((t) => (
                    <span key={t} className="rotate-90 text-[9px] font-mono uppercase text-white/10 tracking-[1em]">{t}</span>
                ))}
            </div>

            {/* 3. Bottom Content Section - Slides Down on Hover */}
            <div className="absolute bottom-0 inset-x-0 p-8 z-20 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:translate-y-full group-hover:opacity-0">
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <h4 className="text-2xl font-serif text-white uppercase tracking-tighter leading-none">
                                {product.name.split(' ')[0]} <br />
                                <span className="text-[#C5A059] italic font-light lowercase text-lg">{product.name.split(' ')[1]}</span>
                            </h4>
                            <p className="text-xs uppercase tracking-[0.4em] text-white/20">{product.spec}</p>
                        </div>
                        <div className="text-right">
                            <span className="block text-lg font-mono text-white/80 tracking-widest">{product.price}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Digital Scanning Overlay */}
            <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-1000 overflow-hidden bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay">
                <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1 bg-[#C5A059]/40 blur-[1px] shadow-[0_0_15px_#C5A059]"
                />
            </div>
        </motion.div>
    );
};

export default Products2;
