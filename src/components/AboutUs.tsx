import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id="about" className="relative py-20 bg-[#FDFDFA] overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">

                {/* 2. Complex Visual Composition */}
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Multilayered Imagery */}
                    <div className="lg:w-2/3 relative flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 0.98 }}
                            className="w-full bg-[#F4F4F1] border border-black/5 overflow-hidden shadow-connex-light relative"
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
                    <div className="lg:w-1/3 lg:pt-0 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="flex items-center gap-4"
                            >
                                <div className="flex flex-col">
                                    <span className="text-[#8B7E74] font-mono text-[10px] uppercase font-black tracking-[1em]">The Connex Ethos</span>
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#121212] leading-[1.1] mt-6 tracking-tighter uppercase">
                                        ILLUMINATING <br />
                                        <span className="italic font-light text-[#8B7E74]/40 capitalize">Modern</span> <br />
                                        Spaces.
                                    </h2>
                                </div>
                            </motion.div>
                        </div>

                        <div className="max-w-xl space-y-12">
                            <p className="text-xl md:text-2xl text-[#2D2D2A]/70 font-light leading-relaxed tracking-tight border-l-4 border-[#8B7E74]/10 pl-10">
                                At Connex, we bridge the gap between architectural vision and emotional resonance. Our systems are more than just luminaires; they are intelligent ecosystems designed to elevate the human experience.
                            </p>

                            {/* Technical Attribute Grid */}
                            <div className="grid grid-cols-2 gap-10 pt-10">
                                <div className="space-y-3">
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-[#121212]">Material Integrity</h4>
                                    <p className="text-xs text-[#2D2D2A]/50 font-light leading-relaxed">
                                        Crafted from T6 architectural aluminum, our housings provide superior thermal management and structural longevity.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-[#121212]">Bespoke Optics</h4>
                                    <p className="text-xs text-[#2D2D2A]/50 font-light leading-relaxed">
                                        Each lens is custom-engineered to eliminate glare and ensure precise beam control across any spatial configuration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
