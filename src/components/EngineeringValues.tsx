const EngineeringValues = () => {

    return (
        <section id="specifications" className="bg-[#F4F4F1] py-10 px-6 relative overflow-hidden">

            {/* 1. Structural Background Detail */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-[#121212]" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-[#121212]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* 2. Editorial Header */}
                <div className="flex flex-col lg:flex-row items-center mb-32 gap-4">
                    <div className="lg:w-1/3 w-full space-y-6 lg:px-4">
                        <span className="text-slate-900 text-[12px] uppercase tracking-[2em] font-black block shadow-sm mb-4">Engineering</span>
                        <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-serif text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Luminous <br />
                            <span className="italic font-light text-slate-200 capitalize translate-x-4 block">Intelligence.</span>
                        </h2>
                        <p className="text-lg font-medium text-slate-700 uppercase tracking-widest leading-loose max-w-md border-l-4 border-cyan-500/30 pl-8 mt-12 bg-white/40 p-6 backdrop-blur-sm rounded-r-xl">
                            Our engineering philosophy focuses on the intersection of photometric excellence and minimalist structural design. Every component is laboratory-verified for peak architectural performance.
                        </p>
                    </div>
                    <div className="lg:w-2/3 w-full relative">
                        <video
                            src="/nightLight.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover transform scale-[1.05] shadow-2xl"
                        />
                    </div>
                </div>

                {/* 3. Our Collection Section */}
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-32">
                    <div className="lg:w-2/3 w-full relative">
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
                    </div>
                    <div className="lg:w-1/3 w-full space-y-6 lg:px-4">
                        <span className="text-slate-900 text-[12px] uppercase tracking-[2em] font-black block shadow-sm mb-4">Discover</span>
                        <h2 className="text-5xl md:text-7xl lg:text-[6vw] font-serif text-slate-900 tracking-tighter uppercase leading-[0.9]">
                            Signature <br />
                            <span className="italic font-light text-slate-200 capitalize translate-x-4 block">Collections.</span>
                        </h2>
                        <p className="text-lg font-medium text-slate-700 uppercase tracking-widest leading-loose max-w-md border-l-4 border-cyan-500/30 pl-8 mt-12 bg-white/40 p-6 backdrop-blur-sm rounded-r-xl">
                            Explore our bespoke series of high-frequency luminaires, crafted to transform the emotional frequency of corporate and residential high-end spaces.
                        </p>
                    </div>
                </div>

                {/* 4. Bottom Technical Footer */}
                <div className="mt-20 flex justify-between items-center opacity-20">
                    <div className="flex items-center gap-10">
                        <span className="text-[8px] font-mono text-slate-900 uppercase tracking-[1em]">Auth. Data</span>
                        <div className="w-40 h-px bg-slate-300" />
                    </div>
                    <span className="text-[10px] font-serif italic uppercase text-slate-900">Laboratory Verified Series</span>
                </div>
            </div>
        </section>
    );
};

export default EngineeringValues;
