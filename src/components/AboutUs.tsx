import { motion } from 'framer-motion';
import THEME from '../constants/theme';

const AboutUs = () => {
    return (
        <section id="about" className="relative py-20 overflow-hidden" style={{ backgroundColor: THEME.colors.secondary }}>

            <div className="container mx-auto px-6 relative z-10">

                {/* Complex Visual Composition */}
                <motion.div
                    variants={THEME.animations.variants.staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-20 items-center"
                >

                    {/* Left: Multilayered Imagery */}
                    <div className="lg:w-2/3 relative flex items-center justify-center">
                        <motion.div
                            variants={THEME.animations.variants.revealUp}
                            whileHover={{ scale: 0.98 }}
                            className="w-full border overflow-hidden shadow-connex-light relative"
                            style={{
                                backgroundColor: THEME.colors.secondary,
                                borderColor: THEME.colors.primaryAlpha(0.05)
                            }}
                        >
                            <video
                                src="/product1video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-contain filter grayscale-[0.2] contrast-[1.1]"
                            />
                        </motion.div>
                    </div>

                    {/* Right: Editorial Typography Section */}
                    <motion.div variants={THEME.animations.variants.revealUp} className="lg:w-1/3 lg:pt-0 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span
                                        className="font-mono text-[12px] uppercase font-black"
                                        style={{
                                            color: THEME.colors.text,
                                            letterSpacing: THEME.typography.tracking.mega
                                        }}
                                    >
                                        The Connex Ethos
                                    </span>
                                    <h2
                                        className="text-5xl md:text-6xl lg:text-8xl leading-[0.9] mt-8 tracking-tighter uppercase"
                                        style={{
                                            fontFamily: THEME.typography.fonts.serif,
                                            color: THEME.colors.text
                                        }}
                                    >
                                        ILLUMINATING <br />
                                        <span className="italic font-light opacity-30 capitalize translate-x-4 block">Modern</span>
                                        Spaces.
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-xl space-y-12">
                            <p
                                className="text-2xl md:text-3xl font-light leading-snug tracking-tight border-l-8 pl-12 mt-12"
                                style={{
                                    color: THEME.colors.text,
                                    borderLeftColor: THEME.colors.primaryAlpha(0.1)
                                }}
                            >
                                At Connex, we bridge the gap between architectural vision and emotional resonance. Our systems are more than just luminaires; they are intelligent ecosystems designed to elevate the human experience.
                            </p>

                            {/* Technical Attribute Grid */}
                            <div className="grid grid-cols-2 gap-10 pt-10">
                                <div className="space-y-4">
                                    <h4
                                        className="text-[12px] uppercase tracking-widest font-black underline underline-offset-4"
                                        style={{
                                            color: THEME.colors.text,
                                            textDecorationColor: THEME.colors.primaryAlpha(0.2)
                                        }}
                                    >
                                        Material Integrity
                                    </h4>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        Crafted from T6 architectural aluminum, our housings provide superior thermal management and structural longevity.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4
                                        className="text-[12px] uppercase tracking-widest font-black underline underline-offset-4"
                                        style={{
                                            color: THEME.colors.text,
                                            textDecorationColor: THEME.colors.primaryAlpha(0.2)
                                        }}
                                    >
                                        Photometric Precision
                                    </h4>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        Flicker-free dimming and specialized optics ensure a flicker-free, high-CRI environment for focused work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
