import { motion } from 'framer-motion';
import THEME from '../constants/theme';

const EngineeringValues = () => {
    return (
        <section id="specifications" className="py-10 px-6 relative overflow-hidden" style={{ backgroundColor: THEME.colors.secondary }}>

            {/* Structural Background Detail */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px" style={{ backgroundColor: THEME.colors.dark }} />
                <div className="absolute left-1/2 top-0 w-px h-full" style={{ backgroundColor: THEME.colors.dark }} />
            </div>

            <motion.div
                variants={THEME.animations.variants.staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto max-w-7xl relative z-10"
            >

                {/* Editorial Headers */}
                <div className="flex flex-col lg:flex-row items-center mb-32 gap-4">
                    <motion.div variants={THEME.animations.variants.revealUp} className="lg:w-1/3 w-full space-y-6 lg:px-4">
                        <span
                            className="text-[12px] uppercase font-black block mb-4"
                            style={{
                                color: THEME.colors.text,
                                letterSpacing: THEME.typography.tracking.ultra
                            }}
                        >
                            Engineering
                        </span>
                        <h2
                            className="text-5xl md:text-7xl lg:text-[6vw] tracking-tighter uppercase leading-[0.9]"
                            style={{
                                fontFamily: THEME.typography.fonts.serif,
                                color: THEME.colors.text
                            }}
                        >
                            Luminous <br />
                            <span className="italic font-light opacity-30 capitalize translate-x-4 block">Intelligence.</span>
                        </h2>
                        <p
                            className="text-lg font-medium text-slate-700 uppercase tracking-widest leading-loose max-w-md border-l-4 pl-8 mt-12 bg-white/40 p-6 backdrop-blur-sm rounded-r-xl"
                            style={{ borderLeftColor: THEME.colors.primaryAlpha(0.3) }}
                        >
                            Our engineering philosophy focuses on the intersection of photometric excellence and minimalist structural design. Every component is laboratory-verified for peak architectural performance.
                        </p>
                    </motion.div>
                    <motion.div variants={THEME.animations.variants.revealUp} className="lg:w-2/3 w-full relative">
                        <video
                            src="/nightLight.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover transform scale-[1.05] shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Our Collection Section */}
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-32">
                    <motion.div variants={THEME.animations.variants.revealUp} className="lg:w-2/3 w-full relative">
                        <div className="w-full relative transform scale-[1.05] shadow-2xl flex">
                            <video
                                src="/collec.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                            {/* Watermark overlay */}
                            <div className="absolute bottom-2 right-3 w-14 h-6 bg-white/10 backdrop-blur-xl rounded-sm z-10 mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                    <motion.div variants={THEME.animations.variants.revealUp} className="lg:w-1/3 w-full space-y-6 lg:px-4">
                        <span
                            className="text-[12px] uppercase font-black block mb-4"
                            style={{
                                color: THEME.colors.text,
                                letterSpacing: THEME.typography.tracking.ultra
                            }}
                        >
                            Discover
                        </span>
                        <h2
                            className="text-5xl md:text-7xl lg:text-[6vw] tracking-tighter uppercase leading-[0.9]"
                            style={{
                                fontFamily: THEME.typography.fonts.serif,
                                color: THEME.colors.text
                            }}
                        >
                            Signature <br />
                            <span className="italic font-light opacity-30 capitalize translate-x-4 block">Collections.</span>
                        </h2>
                        <p
                            className="text-lg font-medium text-slate-700 uppercase tracking-widest leading-loose max-w-md border-l-4 pl-8 mt-12 bg-white/40 p-6 backdrop-blur-sm rounded-r-xl"
                            style={{ borderLeftColor: THEME.colors.primaryAlpha(0.3) }}
                        >
                            Explore our bespoke series of high-frequency luminaires, crafted to transform the emotional frequency of corporate and residential high-end spaces.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default EngineeringValues;
