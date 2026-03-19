import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import THEME from '../constants/theme';
import type { Product } from '../types/product';

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    // Magnetic Convergence Variants
    const cardVariants = {
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
            transition: THEME.animations.transitions.fast
        },
    } as const;

    // Computed UI names
    const firstName = product.product_name.split(' ')[0];
    const restName = product.product_name.split(' ').slice(1).join(' ');

    return (
        <motion.div
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col"
        >
            {/* The Luxury Compact Case */}
            <div
                className="relative aspect-[3/4] flex flex-col p-4 overflow-hidden transition-all duration-1000 shadow-connex-light rounded-[1px] bg-noise border"
                style={{
                    backgroundColor: THEME.colors.secondary,
                    borderColor: THEME.colors.primaryAlpha(0.05)
                }}
            >
                {/* 1. Shimmer Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none z-20"
                    style={{
                        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`
                    }}
                />

                <div
                    className="absolute inset-1 border pointer-events-none transition-colors duration-1000 z-10"
                    style={{ borderColor: THEME.colors.primaryAlpha(0.03) }}
                />

                {/* 2. Header */}
                <div className="relative z-10 pl-1 flex justify-between items-start mb-2">
                    <div className="space-y-1">
                        <span
                            className="text-[12px] font-mono font-black uppercase tracking-[0.2em] opacity-60"
                            style={{ color: THEME.colors.text }}
                        >
                            Specimen_{product.id.split('-').slice(-1)}
                        </span>
                        <h4
                            className="text-2xl text-slate-900 leading-[0.9] uppercase tracking-tighter"
                            style={{ fontFamily: THEME.typography.fonts.serif }}
                        >
                            {firstName} <br />
                            <span
                                className="italic font-light lowercase text-xl translate-x-2 inline-block text-connex-gradient"
                            >
                                {restName}
                            </span>
                        </h4>
                    </div>
                </div>

                {/* 3. The Specimen & Hover Blur */}
                <div className="relative flex-1 flex items-center justify-center p-2">
                    <div
                        className="absolute w-20 h-20 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-1000"
                        style={{ backgroundColor: THEME.colors.primaryAlpha(0.05) }}
                    />

                    <motion.img
                        src={product.img}
                        alt={product.product_name}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[65%] object-contain filter drop-shadow-xl transition-all duration-1000 group-hover:blur-md group-hover:scale-110"
                    />

                    {/* Compact Overlay */}
                    <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center bg-white/5 backdrop-blur-[1px]">
                        <Link
                            to={`/product/${encodeURIComponent(product.product_name)}`}
                            className="px-10 py-4 text-white text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl"
                            style={{ backgroundColor: THEME.colors.primary }}
                        >
                            Extractor_View
                        </Link>
                    </div>
                </div>

                {/* 4. Footer */}
                <div
                    className="relative z-10 px-1 mt-auto flex justify-between items-end border-t pt-2"
                    style={{ borderTopColor: THEME.colors.primaryAlpha(0.03) }}
                >
                    <div className="space-y-1">
                        <span className="text-xs font-mono font-black uppercase block tracking-widest text-slate-900">{product.category}</span>
                    </div>
                    <span className="text-xs font-mono font-black opacity-30 text-slate-900">{product.spec}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
