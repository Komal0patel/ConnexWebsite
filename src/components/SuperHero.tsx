import { motion } from 'framer-motion';
import THEME from '../constants/theme';

const SuperHero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-40">

            {/* Cinematic Background Video - Maximum Visibility */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-[0.9]"
                >
                    <source src="/bg3.mp4" type="video/mp4" />
                </video>
                {/* Minimalist Overlay for depth without obscuring */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </div>

            {/* Subtle Background Geometry */}
            <div className="absolute inset-0 z-5 pointer-events-none opacity-[0.1]">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white/20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Centered Editorial Typography */}
                <div className="max-w-4xl space-y-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-4 text-white/40 font-mono text-[10px] uppercase font-bold"
                            style={{ letterSpacing: THEME.typography.tracking.mega }}
                        >
                            <span className="text-white text-[10px] uppercase font-medium mix-blend-difference mb-8">
                                Connex Selection / 001
                            </span>
                        </motion.div>

                        <h1
                            className="flex flex-col text-[12vw] lg:text-[9vw] leading-[0.8] tracking-tighter uppercase text-white"
                            style={{ fontFamily: THEME.typography.fonts.serif }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                LIGHTING
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="text-white/60 font-light italic lowercase mt-4 text-4xl md:text-5xl lg:text-6xl tracking-normal leading-tight ml-4"
                            >
                                Crafting your curiosity.
                            </motion.span>
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="space-y-12 flex flex-col items-center"
                    >
                        <p className="text-white/40 font-light leading-relaxed text-xl lg:text-2xl max-w-2xl italic">
                            "A masterclass in luminous architecture. Every curve engineered to manipulate photons with absolute precision."
                        </p>

                        <div
                            className="flex gap-20 pt-8 border-t w-full justify-center"
                            style={{ borderTopColor: THEME.colors.whiteAlpha(0.05) }}
                        >
                            <div className="space-y-2">
                                <span className="block text-[8px] font-mono text-white/20 uppercase tracking-widest font-bold">Base_Material</span>
                                <span className="block text-sm font-serif uppercase text-white tracking-widest">T6 Aluminum</span>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-[8px] font-mono text-white/20 uppercase tracking-widest font-bold">Optical_Finish</span>
                                <span className="block text-sm font-serif uppercase text-white tracking-widest">Matte Obsidian</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Visual Details */}
            <div className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-end">
                <div className="flex items-center gap-10">
                    <span
                        className="text-[8px] font-mono text-white/20 uppercase"
                        style={{ letterSpacing: THEME.typography.tracking.widest }}
                    >
                        SYSTEMS_ACTIVE / {new Date().getFullYear()}
                    </span>
                    <div className="w-20 h-px bg-white/10" />
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                    <span
                        className="text-[8px] font-mono text-white/40 block"
                        style={{ letterSpacing: THEME.typography.tracking.ultra }}
                    >
                        PHASE_03_DEPLOYED
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="w-4 h-4 rounded-full border border-white/20 animate-ping" />
                        <span className="text-[10px] font-serif text-white/60 uppercase italic tracking-widest">Establish Link</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperHero;

