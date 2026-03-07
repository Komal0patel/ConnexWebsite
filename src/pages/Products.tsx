import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Contact from '../components/Contact';
import CosmicBackground from '../components/CosmicBackground';
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

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All Specimens');
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const allCategories = ['All Specimens', 'Optics', 'Structure', 'Power', 'Intelligence'];
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Products2', href: '/products2' },
        { name: 'Products3', href: '/products3' },
    ];

    // Cinematic Loading Orchestrator
    const handleCategoryChange = (cat: string) => {
        if (cat === activeCategory) return;
        setIsLoading(true);
        setActiveCategory(cat);
        setIsMenuOpen(false);
        // Artificial delay for cinematic 'Specimen Extraction' feel
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    };

    // Animation Variants
    const pageReveal: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 }
        }
    };

    const categoryTransition: Variants = {
        initial: { opacity: 0, filter: 'blur(10px)', scale: 0.98 },
        animate: {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
        },
        exit: {
            opacity: 0,
            filter: 'blur(10px)',
            scale: 1.02,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        },
    };

    const shutterVariants: Variants = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: [0, 1, 0],
            transition: { duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }
        }
    };

    return (
        <main className="relative bg-[#FDFDFA] min-h-screen overflow-hidden">
            <CosmicBackground />

            {/* 1. The Floating Site Menu (Top Right) */}
            <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[700] flex flex-col items-end pointer-events-none">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 md:w-16 md:h-16 bg-[#121212] text-[#FDFDFA] flex items-center justify-center rounded-sm shadow-2xl pointer-events-auto hover:bg-[#8B7E74] transition-colors duration-500"
                >
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-2 md:mt-4 w-64 bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden z-[1000] pointer-events-auto"
                        >
                            <div className="flex flex-col p-2">
                                {navLinks.map((link, idx) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="px-5 py-4 text-[10px] font-sans font-black text-[#121212]/60 hover:text-[#121212] hover:bg-black/[0.02] tracking-[0.3em] uppercase transition-all flex items-center gap-4 border-b border-black/[0.03] last:border-0"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="text-[8px] font-mono text-[#8B7E74] opacity-50">0{idx + 1}</span>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Footer Detail */}
                            <div className="bg-black/[0.01] border-t border-black/5 p-4 flex justify-between items-center">
                                <span className="text-[7px] font-mono text-black/20 tracking-widest uppercase italic">Archive_Sys_04</span>
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E74]" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/5" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Cinematic Transition Shutter */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory + "-shutter"}
                    initial="initial"
                    animate="animate"
                    variants={shutterVariants}
                    className="fixed inset-0 bg-[#121212]/5 z-[600] origin-top pointer-events-none"
                />
            </AnimatePresence>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={pageReveal}
                className="container mx-auto px-4 md:px-6 relative z-10 pt-12 pb-40 md:pb-80"
            >

                {/* 1. Page Header: Architectural Statement */}
                <motion.div variants={pageReveal} className="flex flex-col lg:flex-row justify-between items-start md:items-end gap-2 mb-8 md:mb-2">
                    <div className="space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="text-[#8B7E74] font-mono text-xs md:text-sm uppercase font-black tracking-[0.2em]">Archive_Inventory</span>
                            <div className="divider-fine w-8 md:w-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-[6.5vw] font-serif text-[#121212] tracking-tighter uppercase leading-none overflow-hidden">
                            The <span className="text-connex-gradient italic font-light lowercase">Hardware.</span>
                        </h1>
                    </div>
                </motion.div>

                {/* 2. Horizontal Category Strip (Restored & Fixed) */}
                <div className="flex border-b border-black/5 bg-[#FDFDFA] mb-8 overflow-x-auto no-scrollbar scroll-smooth relative z-20">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-4 md:px-8 py-4 text-[10px] md:text-xs uppercase font-black tracking-[0.1em] transition-all duration-500 whitespace-nowrap relative ${activeCategory === cat ? 'text-[#FDFDFA]' : 'text-[#8B7E74] hover:text-[#121212]'}`}
                        >
                            <span className="relative z-10">{cat}</span>
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="cat-bg-premium-restored"
                                    className="absolute inset-0 bg-[#121212] z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* 3. The Unified Specimen Archive with Cinematic Loading */}
                <div className="min-h-[60vh] md:min-h-[120vh] relative">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 flex flex-col items-center justify-center space-y-8 h-[60vh]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#121212] animate-ping" />
                                    <span className="text-[10px] md:text-sm font-mono text-[#121212] uppercase tracking-[0.3em] font-black text-center">Specimen_Extraction_In_Progress</span>
                                </div>
                                <div className="w-60 md:w-80 h-[1px] bg-black/5 relative overflow-hidden">
                                    <motion.div
                                        initial={{ left: '-100%' }}
                                        animate={{ left: '100%' }}
                                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 w-1/2 bg-[#8B7E74]"
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeCategory}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={categoryTransition}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12"
                            >
                                {productsPool.map((product, idx) => {
                                    // Filter logic
                                    if (activeCategory !== 'All Specimens' && activeCategory !== product.category) return null;

                                    return (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            index={idx}
                                        />
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 4. Bottom Scientific Detail */}
                <motion.div variants={pageReveal} className="mt-[20vh] flex flex-col items-center">
                    <div className="flex items-center gap-10 opacity-10 mb-10 w-full">
                        <div className="h-[1px] flex-1 bg-black" />
                        <span className="text-sm font-mono tracking-[0.5em]">SYSTEM_RECAP</span>
                        <div className="h-[1px] flex-1 bg-black" />
                    </div>
                    <span className="text-sm font-mono text-[#8B7E74] uppercase tracking-[0.5em] opacity-30">Archive Inventory rev_04_final</span>
                </motion.div>
            </motion.div>

            <Contact />
        </main>
    );
};

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    // Magnetic Convergence Variants
    const cardVariants: Variants = {
        initial: {
            opacity: 0,
            scale: 0.8,
            x: index % 2 === 0 ? -100 : 100,
            y: index % 3 === 0 ? 50 : -50,
            filter: 'blur(20px)'
        },
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1,
                delay: (index % 10) * 0.05
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            filter: 'blur(10px)',
            transition: { duration: 0.4 }
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col"
        >
            {/* The Luxury Compact Case */}
            <div className="relative aspect-[3/4] flex flex-col p-4 overflow-hidden transition-all duration-1000 bg-[#FDFDFA] shadow-connex-light border border-black/5 rounded-[1px] bg-noise">

                {/* 1. Shimmer Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none z-20"
                    style={{
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`
                    }}
                />

                <div className="absolute inset-1 border border-black/[0.03] pointer-events-none group-hover:border-[#8B7E74]/30 transition-colors duration-1000 z-10" />

                {/* 2. Header */}
                <div className="relative z-10 pl-1 flex justify-between items-start mb-2">
                    <div className="space-y-0.5">
                        <span className="text-xs font-mono text-[#8B7E74] tracking-[0.1em] uppercase opacity-40">Specimen_{product.id}</span>
                        <h4 className="text-xl font-serif text-[#121212] leading-none uppercase tracking-tighter">
                            {product.name.split(' ')[0]} <br />
                            <span className="italic font-light lowercase text-connex-gradient">{product.name.split(' ')[1]}</span>
                        </h4>
                    </div>
                </div>

                {/* 3. The Specimen & Hover Blur */}
                <div className="relative flex-1 flex items-center justify-center p-2">
                    <div className="absolute w-20 h-20 bg-[#8B7E74]/5 blur-[40px] rounded-full group-hover:bg-[#8B7E74]/15" />

                    <motion.img
                        src={product.img}
                        alt={product.name}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[65%] object-contain filter drop-shadow-xl transition-all duration-1000 group-hover:blur-md group-hover:scale-110"
                    />

                    {/* Compact Overlay */}
                    <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center bg-white/5 backdrop-blur-[1px]">
                        <button className="px-6 py-2 bg-[#121212] text-white text-xs uppercase tracking-[0.1em] hover:bg-[#8B7E74] transition-all">
                            View_Data
                        </button>
                    </div>
                </div>

                {/* 4. Footer */}
                <div className="relative z-10 px-1 mt-auto flex justify-between items-end border-t border-black/[0.03] pt-2">
                    <div className="space-y-0.5">
                        <span className="text-sm font-mono font-black text-[#121212] tracking-normal block">{product.price}</span>
                        <span className="text-xs font-mono text-[#8B7E74] uppercase block tracking-widest">{product.category}</span>
                    </div>
                    <span className="text-xs font-mono opacity-30">{product.spec}</span>
                </div>
            </div>
        </motion.div>
    );
};


export default Products;
