import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, List, LayoutGrid, ArrowUpRight, Maximize2, Columns } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    img: string;
    sub: string;
    category: string;
    price: string;
    spec: string;
    description: string;
}

const productsPool: Product[] = [
    { id: "PX-01", name: "PRISM CORE", img: "/products/prod5.png", sub: "Spectral Refraction System", category: "Optics", price: "₹1,250", spec: "12,500K / 98 CRI", description: "A multi-layered refraction core designed for atmospheric light manipulation." },
    { id: "EX-A1", name: "ALUMINUM A1", img: "/products/extruded1.png", sub: "Structural Anodized Profile", category: "Structure", price: "₹450", spec: "T6 Alloy / Matte", description: "Precision-extruded aluminum chassis with a matte obsidian finish." },
    { id: "LM-V8", name: "VOLTAX V8", img: "/products/prod8.png", sub: "Lumen Matrix Array", category: "Power", price: "₹890", spec: "400V / High Eff", description: "High-density power distribution module for neural lighting networks." },
    { id: "OP-09", name: "OPTIC NERVE", img: "/products/prod10.png", sub: "Neural Engine", category: "Intelligence", price: "₹2,100", spec: "AI Driven / Sync", description: "Proprietary AI core that synchronizes lighting with human circadian rhythms." },
    { id: "PX-02", name: "NEXUS LITE", img: "/products/prod6.png", sub: "Diffuser Core Architecture", category: "Optics", price: "₹720", spec: "Nano-Etched / Soft", description: "Etched glass diffuser providing 180-degree seamless light arrival." },
    { id: "PX-03", name: "QUANTUM LINK", img: "/products/prod11.png", sub: "Neural Synchronization Array", category: "Intelligence", price: "₹3,400", spec: "0.2ms Latency", description: "The central hub for real-time hardware-to-brain neural connectivity." },
    { id: "EX-A2", name: "STRETCH A2", img: "/products/extruded2.png", sub: "Modular Connector", category: "Structure", price: "₹180", spec: "Titanium Coated", description: "A universal modular connector for expandable lighting architecture." },
    { id: "OP-10", name: "SYNAPSE L1", img: "/products/prod10.png", sub: "Direct Neural Interface", category: "Intelligence", price: "₹5,200", spec: "Fiber-Ready", description: "High-bandwidth fiber interface for direct synaptic light control." },
    { id: "PX-04", name: "CONNEX LENS", img: "/products/prod6.png", sub: "Chromatic Balancer", category: "Optics", price: "₹990", spec: "Polarized / 4K", description: "A high-fidelity polarizing lens that eliminates glare in industrial environments." },
    { id: "LM-V9", name: "SUPER VOLT", img: "/products/prod8.png", sub: "High Current Block", category: "Power", price: "₹1,100", spec: "GaN Powered", description: "Next-gen Gallium Nitride power block for silent, heat-less operation." },
    { id: "EX-A3", name: "VOID FRAME", img: "/products/extruded1.png", sub: "Recessed Mount", category: "Structure", price: "₹320", spec: "Zero-Bezel", description: "A zero-visibility mounting frame for architectural light burial." },
    { id: "OP-11", name: "TOTAL LIGHT", img: "/products/prod5.png", sub: "Ambient Emitter", category: "Optics", price: "₹850", spec: "Full Spectrum", description: "Full-spectrum luminaire capable of mimicking any sunlight coordinate." },
];

const categories = ['All', 'Optics', 'Structure', 'Power', 'Intelligence'];

const Products3 = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list' | 'focus'>('grid');
    const [density, setDensity] = useState<'comfortable' | 'compact'>('compact');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedSpecimen, setSelectedSpecimen] = useState<Product | null>(null);
    const [isReconfiguring, setIsReconfiguring] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleLayoutChange = (mode: typeof viewMode) => {
        setIsReconfiguring(true);
        setViewMode(mode);
        setTimeout(() => setIsReconfiguring(false), 500);
    };

    const filteredProducts = useMemo(() => {
        let results = [...productsPool];
        if (activeCategory !== 'All') results = results.filter(p => p.category === activeCategory);
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            results = results.filter(p => p.name.toLowerCase().includes(query) || p.id.toLowerCase().includes(query));
        }
        return results;
    }, [activeCategory, searchQuery]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Products2', href: '/products2' },
        { name: 'Products3', href: '/products3' },
    ];

    return (
        <main ref={containerRef} className="bg-[#101214] min-h-screen text-[#D1D5DB] selection:bg-[#8E9AAF] selection:text-white font-sans relative overflow-x-hidden">
            {/* 1. Muted Soft Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(142,154,175,0.03)_0%,transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light" />
                {/* Minimal Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#8E9AAF 1px, transparent 1px), linear-gradient(90deg, #8E9AAF 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* 2. Precision Layout Controller (Header) */}
            <header className="fixed top-0 left-0 w-full z-[1000] px-4 md:px-8 py-4 md:py-6 flex items-center justify-between pointer-events-auto bg-[#101214]/80 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-4 md:gap-8">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="group flex items-center gap-2 md:gap-3 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                        <div className="flex flex-col gap-1 items-center">
                            <div className="w-3 md:w-4 h-[1px] bg-white/40 group-hover:bg-white" />
                            <div className="w-1.5 md:w-2 h-[1px] bg-white/40 group-hover:bg-white" />
                        </div>
                        <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Menu</span>
                    </button>
                    <div className="h-6 w-[1px] bg-white/10 hidden md:block" />
                    <div className="hidden lg:flex items-center gap-1 bg-black/20 p-1 rounded-lg border border-white/5">
                        <button onClick={() => handleLayoutChange('grid')} className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-lg' : 'text-white/20 hover:text-white/40'}`}>
                            <LayoutGrid size={14} />
                        </button>
                        <button onClick={() => handleLayoutChange('list')} className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-black shadow-lg' : 'text-white/20 hover:text-white/40'}`}>
                            <List size={14} />
                        </button>
                        <button onClick={() => handleLayoutChange('focus')} className={`p-2 rounded-md transition-all ${viewMode === 'focus' ? 'bg-white text-black shadow-lg' : 'text-white/20 hover:text-white/40'}`}>
                            <Columns size={14} />
                        </button>
                    </div>
                </div>

                <Link to="/" className="text-base md:text-lg font-serif italic text-white/40 hover:text-white transition-colors tracking-tighter absolute left-1/2 -translate-x-1/2">Atelier.</Link>

                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden xl:flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5 text-xs font-mono tracking-widest uppercase">
                        <span className="text-white/10">Density:</span>
                        <button onClick={() => setDensity('comfortable')} className={`${density === 'comfortable' ? 'text-white' : 'text-white/20'} hover:text-white transition-colors`}>Comfort</button>
                        <span className="text-white/5">/</span>
                        <button onClick={() => setDensity('compact')} className={`${density === 'compact' ? 'text-white' : 'text-white/20'} hover:text-white transition-colors`}>Compact</button>
                    </div>
                    <AnimatePresence>
                        {isSearchOpen && (
                            <motion.div
                                initial={{ width: 0, opacity: 0 }} animate={{ width: 120, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
                                className="overflow-hidden border-b border-white/20 px-2 flex items-center gap-2"
                            >
                                <Search size={10} className="text-white/20" />
                                <input
                                    autoFocus placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-transparent text-[10px] md:text-sm uppercase tracking-widest outline-none placeholder:text-white/10 w-full h-8"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-white/20 hover:text-white transition-all">
                        {isSearchOpen ? <X size={16} /> : <Search size={18} />}
                    </button>
                </div>
            </header>

            {/* 3. Soft Category Navigation (Secondary Dock) */}
            <div className="pt-24 md:pt-28 pb-4 relative z-10 px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/5 pb-6 gap-4">
                    <div className="flex items-baseline gap-4">
                        <h2 className="text-xl md:text-2xl font-serif italic text-white/80 uppercase tracking-tighter leading-none whitespace-nowrap">The_Array.</h2>
                        <span className="text-[10px] md:text-xs font-mono text-white/10 uppercase tracking-[0.4em] mb-0.5">Filter_Modes</span>
                    </div>

                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 md:px-5 py-2 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${activeCategory === cat ? 'bg-white/5 text-white' : 'text-white/20 hover:text-white/40'}`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div layoutId="dot" className="w-1 h-1 rounded-full bg-white mx-auto mt-1" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Versatile Content Display */}
            <div className={`container mx-auto px-8 pb-32 z-10 relative mt-8`}>
                <AnimatePresence mode="wait">
                    {isReconfiguring ? (
                        <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-[40vh] flex flex-col items-center justify-center gap-6">
                            <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
                            <span className="text-xs font-mono tracking-[1em] text-white/10 animate-pulse uppercase">Modifying_Layout</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={`${activeCategory}-${viewMode}-${density}-${searchQuery}`}
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className={`${viewMode === 'grid'
                                ? density === 'compact' ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6' : 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'
                                : viewMode === 'focus' ? 'grid grid-cols-1 md:grid-cols-2 gap-12' : 'flex flex-col gap-2'
                                }`}
                        >
                            {filteredProducts.map((p, i) => (
                                <UniversalCard
                                    key={p.id} product={p} index={i}
                                    mode={viewMode} density={density}
                                    onQuickView={() => setSelectedSpecimen(p)}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Soft Modal Interface */}
            <AnimatePresence>
                {selectedSpecimen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-[#101214]/98 backdrop-blur-2xl flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}
                            className="bg-[#16181b] border border-white/5 w-full max-w-5xl rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                        >
                            <button onClick={() => setSelectedSpecimen(null)} className="absolute top-6 right-6 z-50 text-white/20 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                            <div className="lg:w-1/2 p-20 flex items-center justify-center bg-black/40 border-r border-white/5 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-50" />
                                <img src={selectedSpecimen.img} className="max-w-full max-h-[400px] object-contain relative z-10 transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <span className="text-sm font-mono text-[#8E9AAF] tracking-[0.5em] uppercase">UID_{selectedSpecimen.id}</span>
                                        <h2 className="text-5xl lg:text-7xl font-serif italic text-white leading-none uppercase tracking-tighter">{selectedSpecimen.name}</h2>
                                        <p className="text-white/40 text-base font-light italic leading-relaxed">{selectedSpecimen.description}</p>
                                    </div>
                                    <div className="flex justify-between items-end border-y border-white/5 py-8">
                                        <div className="space-y-4">
                                            <span className="text-sm text-white/10 uppercase tracking-widest block font-bold">Grade_Parameters</span>
                                            <span className="text-xl font-mono text-[#8E9AAF] tracking-tighter uppercase">{selectedSpecimen.spec}</span>
                                        </div>
                                        <div className="text-right space-y-4">
                                            <span className="text-sm text-white/10 uppercase tracking-widest block font-bold">Mkt_Valuation</span>
                                            <span className="text-5xl font-serif italic text-white leading-none tracking-tighter">{selectedSpecimen.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-12 w-full bg-white text-black py-7 text-xs uppercase font-bold tracking-[0.8em] hover:bg-[#8E9AAF] hover:text-white transition-all transform hover:-translate-y-1">Initialize_Inquiry</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Technical Navbar Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-16 md:top-24 left-4 md:left-8 w-64 bg-[#101214] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden z-[1100]"
                    >
                        <div className="flex flex-col p-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-5 py-4 text-[10px] font-mono font-bold text-white/50 hover:text-white hover:bg-white/5 tracking-[0.3em] uppercase transition-all flex items-center gap-4 border-b border-white/[0.03] last:border-0"
                                >
                                    <span className="text-[8px] opacity-20">EX_0{idx + 1}</span>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="bg-white/[0.01] border-t border-white/5 p-4 flex justify-between items-center">
                            <span className="text-[7px] font-mono text-white/10 tracking-[0.5em] uppercase italic">Module_Active</span>
                            <div className="flex gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-white/40" />
                                <div className="w-1 h-1 rounded-full bg-white/5" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

const UniversalCard = ({ product, index, mode, density, onQuickView }: { product: Product, index: number, mode: 'grid' | 'list' | 'focus', density: 'comfortable' | 'compact', onQuickView: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic sizing based on density & mode
    const isFocus = mode === 'focus';
    const isList = mode === 'list';

    if (isList) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.02 }}
                onClick={onQuickView}
                className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 cursor-pointer transition-all duration-500 rounded-sm"
            >
                <div className="flex items-center gap-10">
                    <div className="w-12 h-12 bg-black/40 p-2 border border-white/5 rounded-sm">
                        <img src={product.img} className="w-full h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all" />
                    </div>
                    <div className="flex items-baseline gap-4">
                        <h4 className="text-sm font-serif italic uppercase text-white/60 group-hover:text-white transition-colors">{product.name}</h4>
                        <span className="text-xs font-mono text-white/10 uppercase tracking-widest">{product.category}</span>
                    </div>
                </div>
                <div className="flex items-center gap-12">
                    <span className="text-sm font-serif italic text-white/30 group-hover:text-white transition-colors">{product.price}</span>
                    <ArrowUpRight size={12} className="text-white/5 group-hover:text-white group-hover:rotate-45 transition-all" />
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: (index % 6) * 0.05 }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={onQuickView}
            className={`group relative cursor-pointer ${isFocus ? 'flex items-center gap-12 bg-white/[0.02] p-8 rounded-lg border border-white/5 hover:border-white/20 h-auto md:h-[350px]' : ''}`}
        >
            <div className={`relative overflow-hidden bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-all duration-700 rounded-sm ${isFocus ? 'w-2/5 aspect-square' : 'aspect-[4/5] mb-4'}`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.img
                        src={product.img}
                        animate={{ scale: isHovered ? 1.05 : 1, y: isHovered ? -10 : 0 }}
                        transition={{ duration: 0.8 }}
                        className={`w-full h-full object-contain filter ${isHovered ? 'brightness-110 grayscale-0' : 'brightness-75 grayscale-[0.2]'} transition-all`}
                    />
                </div>
                {/* Micro-Details Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} className="text-white/40" />
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono text-white/10 tracking-[0.5em] uppercase">{product.id}</span>
                </div>
            </div>

            <div className={`space-y-2 ${isFocus ? 'flex-1' : ''}`}>
                <div className="flex justify-between items-start">
                    <h3 className={`${isFocus ? 'text-4xl' : density === 'compact' ? 'text-xs' : 'text-lg'} font-serif italic uppercase text-white/70 group-hover:text-white transition-colors tracking-tighter leading-none`}>
                        {product.name}
                    </h3>
                    {!isFocus && <ArrowUpRight size={10} className="text-white/10 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all translate-x-1" />}
                </div>

                {isFocus && (
                    <p className="text-xs text-white/30 font-light italic leading-relaxed line-clamp-3 my-4">
                        {product.description}
                    </p>
                )}

                <div className={`flex items-baseline justify-between ${isFocus ? 'pt-6 border-t border-white/5 mt-6' : ''}`}>
                    <div className="flex flex-col">
                        <span className="text-xs font-mono text-white/10 uppercase tracking-widest">{product.category}</span>
                        {isFocus && <span className="text-sm font-mono text-[#8E9AAF] mt-1">{product.spec}</span>}
                    </div>
                    <span className={`${isFocus ? 'text-3xl' : 'text-xs'} font-serif italic text-white/40 group-hover:text-white transition-colors`}>
                        {product.price}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default Products3;
