const Footer = () => {
    return (
        <footer className="bg-[#121212] py-12 pb-40 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-40">

                    {/* Branding Anchor */}
                    <div className="max-w-md space-y-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-5xl font-serif text-white tracking-tight font-medium uppercase italic">Connex</span>
                            <span className="text-[9px] text-[#8B7E74] font-sans tracking-[0.8em] font-bold uppercase transition-all">Architectural Light Systems</span>
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed tracking-[0.1em] max-w-xs uppercase font-medium">
                            Global pioneers in high-fidelity luminaires—engineered to redefine the atmospheric resonance of bespoke environments.
                        </p>
                    </div>

                    {/* Navigation Columns - Strict */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-24 lg:gap-40">
                        <div>
                            <p className="text-xs text-slate-400 font-black uppercase tracking-[0.4em] mb-12">Dimensions</p>
                            <ul className="space-y-8">
                                {['Hardware', 'Philosophy', 'Spec_Sheet', 'Protocol'].map(link => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-[10px] text-white/50 hover:text-[#8B7E74] uppercase tracking-[0.3em] font-semibold transition-all">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs text-slate-400 font-black uppercase tracking-[0.4em] mb-12">Collective</p>
                            <ul className="space-y-8">
                                {['LinkedIn', 'Behance', 'Instagram'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-[10px] text-white/50 hover:text-[#8B7E74] uppercase tracking-[0.3em] font-semibold transition-all">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Protocol Row */}
                <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] font-medium">
                        &copy; {new Date().getFullYear()} Connex Design Group. [All Rights Reserved].
                    </p>
                    <div className="flex gap-20 items-center">
                        <div className="hidden lg:flex gap-4">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-[1px] h-3 bg-white/10" />
                            ))}
                        </div>
                        <span className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-sans italic">Encryption Status: Verified_0x4FF</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
