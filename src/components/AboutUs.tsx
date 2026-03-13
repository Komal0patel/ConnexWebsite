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
                                    <span className="text-slate-900 font-mono text-[12px] uppercase font-black tracking-[1.2em] shadow-sm mb-4">The Connex Ethos</span>
                                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif text-slate-900 leading-[0.9] mt-8 tracking-tighter uppercase">
                                        ILLUMINATING <br />
                                        <span className="italic font-light text-slate-300 capitalize translate-x-4 block">Modern</span>
                                        Spaces.
                                    </h2>
                                </div>
                            </motion.div>
                        </div>

                        <div className="max-w-xl space-y-12">
                            <p className="text-2xl md:text-3xl text-slate-800 font-light leading-snug tracking-tight border-l-8 border-slate-900/10 pl-12 mt-12">
                                At Connex, we bridge the gap between architectural vision and emotional resonance. Our systems are more than just luminaires; they are intelligent ecosystems designed to elevate the human experience.
                            </p>

                            {/* Technical Attribute Grid */}
                            <div className="grid grid-cols-2 gap-10 pt-10">
                                <div className="space-y-4">
                                    <h4 className="text-[12px] uppercase tracking-widest font-black text-slate-900 underline decoration-cyan-500/20 underline-offset-4">Material Integrity</h4>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        Crafted from T6 architectural aluminum, our housings provide superior thermal management and structural longevity.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[12px] uppercase tracking-widest font-black text-slate-900 underline decoration-cyan-500/20 underline-offset-4">Bespoke Optics</h4>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
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
