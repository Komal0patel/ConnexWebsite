import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowLeft, Info, Settings2, Package } from 'lucide-react';
import { useState } from 'react';
import productsData from '../../CONNEX_PRODUCTS.json';
import CosmicBackground from '../components/CosmicBackground';

const ProductDetail = () => {
    const { id } = useParams();
    const [isSpecsOpen, setIsSpecsOpen] = useState(false);

    // Find product by name (handling different encoding styles)
    const decodedId = decodeURIComponent(id || "");
    const product = productsData.find(p =>
        p.product_name === decodedId ||
        encodeURIComponent(p.product_name) === id ||
        p.product_name.replace(/\s+/g, '-').toLowerCase() === decodedId.replace(/\s+/g, '-').toLowerCase()
    );

    if (!product) {
        return (
            <div className="min-h-screen bg-[#FDFDFA] flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-serif text-slate-900">Product Not Found</h1>
                <Link to="/products" className="text-[#1a3c6d] hover:underline">Back to Archive</Link>
            </div>
        );
    }

    return (
        <main className="relative bg-[#FDFDFA] min-h-screen overflow-hidden">
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
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-900/10 group-hover:border-[#1a3c6d]/60 transition-all duration-700">
                            <ArrowLeft size={18} className="text-slate-900 group-hover:-translate-x-1 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em] mb-1">Navigation / 01</span>
                            <span className="text-xl font-serif italic text-slate-900 lowercase group-hover:text-[#1a3c6d] transition-colors duration-500">back to archive.</span>
                        </div>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
                    {/* Left Side: Image Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-square bg-white shadow-connex-light border border-[#1a3c6d]/10 rounded-sm flex items-center justify-center p-8 md:p-16 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(139,126,116,0.02)_100%)] pointer-events-none" />
                        <motion.img
                            src={`/products/${product.image}`}
                            alt={product.product_name}
                            className="w-full h-full object-contain filter drop-shadow-2xl z-10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/FDFDFA/3ac3d6?text=' + product.product_name;
                            }}
                        />
                        <div className="absolute bottom-8 right-8 flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a3c6d]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a3c6d]/20" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a3c6d]/20" />
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
                                <span className="text-[11px] font-mono text-[#1a3c6d] font-black uppercase tracking-[0.4em] block">
                                    {product.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 uppercase tracking-tighter leading-[0.8]">
                                    {product.product_name.split(' ')[0]} <br />
                                    <span className="italic font-light lowercase text-connex-gradient translate-x-4 inline-block">{product.product_name.split(' ').slice(1).join(' ')}</span>
                                </h1>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6 bg-slate-50/50 border-y border-black/5 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-black/[0.03] hidden lg:block" />
                                <div className="absolute top-0 left-1/4 -translate-x-1/2 h-full w-[1px] bg-black/[0.03] hidden lg:block" />
                                <div className="absolute top-0 left-3/4 -translate-x-1/2 h-full w-[1px] bg-black/[0.03] hidden lg:block" />

                                <InfoItem label="Mounting" value={product.mounting} icon={<Package size={14} />} />
                                <InfoItem label="Distribution" value={product.light_distribution} icon={<Settings2 size={14} />} />
                                <InfoItem label="Source" value={product.light_source} icon={<Info size={14} />} />
                                <InfoItem label="CRI" value={product.cri ? `${product.cri}` : "N/A"} icon={<Info size={14} />} />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-[1px] w-8 bg-[#1a3c6d]/30" />
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a3c6d]">Design_Philosophy</h3>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-slate-600 font-sans leading-[1.8] text-lg md:text-xl font-medium tracking-tight">
                                        The <span className="font-black text-slate-900 uppercase tracking-widest">{product.product_name}</span> represents a sophisticated intersection of {product.light_distribution.toLowerCase().replace(/indirecr/g, "indirect")} photon distribution and minimalist {product.mounting.toLowerCase()} geometry.
                                        Engineered for elite architectural environments where light is treated as a structural element rather than a mere utility.
                                    </p>
                                    <div className="pt-6 border-t border-black/[0.03]">
                                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-[0.3em] leading-relaxed">
                                            {product.comments || `Specimen Category: ${product.category} // Source: ${product.light_source} Technical Compliance`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Product Specification Toggle (Next Section) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border border-[#1a3c6d]/20 rounded-sm overflow-hidden bg-white shadow-xl relative z-20"
                >
                    <button
                        onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                        className="w-full px-8 py-8 flex items-center justify-between text-slate-900 hover:bg-[#1a3c6d]/5 transition-all text-left"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-black uppercase tracking-[0.3em]">Product Specification</span>
                            <span className="text-xs font-mono text-slate-900/30">Configuration parameters for all {product.variants.length} variations</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                            {isSpecsOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                    </button>

                    <AnimatePresence>
                        {isSpecsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="border-t border-black/5 overflow-hidden"
                            >
                                <div className="p-1 overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Code</th>
                                                {(product.variants[0] as any).diameter && <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Dia</th>}
                                                {(product.variants[0] as any).length && <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">LxW</th>}
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Power</th>
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">Lumens</th>
                                                <th className="px-6 py-4 text-[10px] uppercase font-black tracking-widest text-slate-400">CCT</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/5 text-slate-900">
                                            {product.variants.map((variant: any, idx: number) => (
                                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 text-xs font-mono font-bold text-[#1a3c6d] whitespace-nowrap">{variant.code}</td>
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
            <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1a3c6d]/20 to-transparent z-50" />
        </main>
    );
};

const InfoItem = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => {
    // Technical cleanup for the display
    const cleanValue = value ? value.replace(/Indirecr/g, "Indirect") : "N/A";

    return (
        <div className="flex flex-col gap-3 group/info">
            <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-sm bg-[#1a3c6d]/5 text-[#1a3c6d] group-hover/info:bg-[#1a3c6d] group-hover/info:text-white transition-all duration-500">
                    {icon}
                </div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em]">{label}</span>
            </div>
            <p className="text-[13px] font-sans font-bold text-slate-900 uppercase tracking-widest pl-0.5">
                {cleanValue}
            </p>
        </div>
    );
};

export default ProductDetail;
