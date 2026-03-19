import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowLeft, Info, Settings2, Package } from 'lucide-react';
import { useState } from 'react';
import CosmicBackground from '../components/CosmicBackground';
import THEME from '../constants/theme';
import { findProductById } from '../data/product-engine';

const ProductDetail = () => {
    const { id } = useParams();
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);
    const product = findProductById(id);

    if (!product) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center space-y-4"
                style={{ backgroundColor: THEME.colors.secondary }}
            >
                <h1 className="text-2xl font-serif" style={{ color: THEME.colors.text }}>Product Not Found</h1>
                <Link to="/products" className="hover:underline" style={{ color: THEME.colors.primary }}>Back to Archive</Link>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: THEME.colors.secondary }}>
            <CosmicBackground />

            <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 relative z-10">
                {/* Navigation Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/products"
                        className="group inline-flex items-center gap-6"
                    >
                        <div
                            className="relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-700"
                            style={{ borderColor: THEME.colors.primaryAlpha(0.1) }}
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" style={{ color: THEME.colors.text }} />
                        </div>
                        <div className="flex flex-col">
                            <span
                                className="text-[10px] uppercase mb-1"
                                style={{ color: THEME.colors.text, opacity: 0.4, fontFamily: THEME.typography.fonts.mono, letterSpacing: THEME.typography.tracking.widest }}
                            >
                                Navigation / 01
                            </span>
                            <span
                                className="text-xl italic lowercase transition-colors duration-500"
                                style={{ fontFamily: THEME.typography.fonts.serif, color: THEME.colors.text }}
                            >
                                back to archive.
                            </span>
                        </div>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
                    {/* Left Side: Image Display */}
                    <motion.div
                        variants={THEME.animations.variants.revealUp}
                        initial="hidden"
                        animate="visible"
                        className="relative aspect-square bg-white shadow-connex-light border rounded-sm flex items-center justify-center p-8 md:p-16 overflow-hidden group"
                        style={{ borderColor: THEME.colors.primaryAlpha(0.1) }}
                    >
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{ background: `radial-gradient(circle_at_center, transparent 0%, ${THEME.colors.primaryAlpha(0.02)} 100%)` }}
                        />
                        <motion.img
                            src={product.img}
                            alt={product.product_name}
                            className="w-full h-full object-contain filter drop-shadow-2xl z-10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/FDFDFA/3ac3d6?text=' + product.product_name;
                            }}
                        />
                        <div className="absolute bottom-8 right-8 flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME.colors.primary }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME.colors.primaryAlpha(0.2) }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: THEME.colors.primaryAlpha(0.2) }} />
                        </div>
                    </motion.div>

                    {/* Right Side: Info & Specs */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <span
                                    className="text-[11px] font-black uppercase block"
                                    style={{ color: THEME.colors.primary, letterSpacing: THEME.typography.tracking.widest }}
                                >
                                    {product.category}
                                </span>
                                <h1
                                    className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.8]"
                                    style={{ color: THEME.colors.text, fontFamily: THEME.typography.fonts.serif }}
                                >
                                    {product.product_name.split(' ')[0]} <br />
                                    <span className="italic font-light lowercase inline-block translate-x-4 opacity-60">{product.product_name.split(' ').slice(1).join(' ')}</span>
                                </h1>
                            </div>

                            <div
                                className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6 rounded-sm relative overflow-hidden border-y"
                                style={{ backgroundColor: THEME.colors.whiteAlpha(0.5), borderColor: THEME.colors.blackAlpha(0.05) }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] hidden lg:block" style={{ backgroundColor: THEME.colors.blackAlpha(0.03) }} />
                                <div className="absolute top-0 left-1/4 -translate-x-1/2 h-full w-[1px] hidden lg:block" style={{ backgroundColor: THEME.colors.blackAlpha(0.03) }} />
                                <div className="absolute top-0 left-3/4 -translate-x-1/2 h-full w-[1px] hidden lg:block" style={{ backgroundColor: THEME.colors.blackAlpha(0.03) }} />

                                <InfoItem label="Mounting" value={product.mounting || "N/A"} icon={<Package size={14} />} />
                                <InfoItem label="Distribution" value={product.light_distribution || "N/A"} icon={<Settings2 size={14} />} />
                                <InfoItem label="Source" value={product.light_source || "N/A"} icon={<Info size={14} />} />
                                <InfoItem label="CRI" value={product.cri ? `${product.cri}` : "N/A"} icon={<Info size={14} />} />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-[1px] w-8" style={{ backgroundColor: THEME.colors.primaryAlpha(0.3) }} />
                                    <h3
                                        className="text-[10px] font-black uppercase tracking-[0.5em]"
                                        style={{ color: THEME.colors.primary }}
                                    >
                                        Design_Philosophy
                                    </h3>
                                </div>
                                <div className="space-y-6">
                                    <p className="font-sans leading-[1.8] text-lg md:text-xl font-medium tracking-tight" style={{ color: THEME.colors.text, opacity: 0.8 }}>
                                        The <span className="font-black uppercase tracking-widest">{product.product_name}</span> represents a sophisticated intersection of {(product.light_distribution || "").toLowerCase().replace(/indirecr/g, "indirect")} photon distribution and minimalist {(product.mounting || "").toLowerCase()} geometry.
                                        Engineered for elite architectural environments where light is treated as a structural element rather than a mere utility.
                                    </p>
                                    <div className="pt-6 border-t" style={{ borderColor: THEME.colors.blackAlpha(0.03) }}>
                                        <p className="text-[11px] font-mono uppercase tracking-[0.3em] leading-relaxed opacity-40">
                                            {product.comments || `Specimen Category: ${product.category} // Source: ${product.light_source} Technical Compliance`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Product Specification Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border rounded-sm overflow-hidden bg-white shadow-xl relative z-20"
                    style={{ borderColor: THEME.colors.primaryAlpha(0.2) }}
                >
                    <button
                        onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                        className="w-full px-8 py-8 flex items-center justify-between transition-all text-left group"
                        style={{ color: THEME.colors.text }}
                    >
                        <div className="flex flex-col gap-1">
                            <span
                                className="text-[14px] font-black uppercase"
                                style={{ letterSpacing: THEME.typography.tracking.wide }}
                            >
                                Product Specification
                            </span>
                            <span className="text-xs font-mono opacity-30">Configuration parameters for all {product.variants?.length || 0} variations</span>
                        </div>
                        <div
                            className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundColor: THEME.colors.primary }}
                        >
                            {isSpecsOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {isSpecsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={THEME.animations.transitions.default}
                                className="border-t overflow-hidden"
                                style={{ borderColor: THEME.colors.blackAlpha(0.05) }}
                            >
                                <div className="p-1 overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Code</th>
                                                {(product.variants?.[0] as any)?.diameter && <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Dia</th>}
                                                {(product.variants?.[0] as any)?.length && <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">LxW</th>}
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Power</th>
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Lumens</th>
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">CCT</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/5" style={{ color: THEME.colors.text }}>
                                            {product.variants?.map((variant: any, idx: number) => (
                                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 text-xs font-mono font-bold whitespace-nowrap" style={{ color: THEME.colors.primary }}>{variant.code}</td>
                                                    {variant.diameter && <td className="px-6 py-4 text-xs font-mono font-bold">{variant.diameter}mm</td>}
                                                    {variant.length && <td className="px-6 py-4 text-xs font-mono font-bold">{variant.length}x{variant.width}mm</td>}
                                                    <td className="px-6 py-4 text-xs font-mono font-bold">{variant.power}W</td>
                                                    <td className="px-6 py-4 text-xs font-mono font-bold">{variant.lumens}lm</td>
                                                    <td className="px-6 py-4 text-xs font-mono font-bold">{variant.cct || "-"}K</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Scientific Footer Decoration */}
            <div
                className="fixed bottom-0 left-0 w-full h-[1px] z-50"
                style={{ background: `linear-gradient(90deg, transparent, ${THEME.colors.primaryAlpha(0.2)}, transparent)` }}
            />
        </main>
    );
};

const InfoItem = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => {
    // Technical cleanup for the display
    const cleanValue = value ? value.replace(/Indirecr/g, "Indirect") : "N/A";

    return (
        <div className="flex flex-col gap-3 group/info">
            <div className="flex items-center gap-2.5">
                <div
                    className="p-1.5 rounded-sm transition-all duration-500"
                    style={{ backgroundColor: THEME.colors.primaryAlpha(0.05), color: THEME.colors.primary }}
                >
                    {icon}
                </div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">{label}</span>
            </div>
            <p className="text-[13px] font-bold uppercase tracking-widest pl-0.5" style={{ color: THEME.colors.text }}>
                {cleanValue}
            </p>
        </div>
    );
};

export default ProductDetail;

