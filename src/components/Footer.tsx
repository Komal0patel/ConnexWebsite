import THEME from '../constants/theme';

const Footer = () => {
    const year = new Date().getFullYear();

    const sections = [
        {
            title: 'Dimensions',
            links: ['Hardware', 'Philosophy', 'Spec_Sheet', 'Protocol']
        },
        {
            title: 'Collective',
            links: ['LinkedIn', 'Behance', 'Instagram']
        }
    ];

    return (
        <footer
            className="py-12 pb-40 border-t relative overflow-hidden"
            style={{
                backgroundColor: THEME.colors.footer,
                borderColor: THEME.glass.border.split(' ')[2] // Extracting color from border string
            }}
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-40">

                    {/* Branding Anchor */}
                    <div className="max-w-md space-y-12">
                        <div className="flex flex-col gap-2">
                            <span
                                className="text-5xl font-serif text-white tracking-tight font-medium uppercase italic"
                                style={{ fontFamily: THEME.typography.fonts.serif }}
                            >
                                Connex
                            </span>
                            <span
                                className="text-[9px] text-white/50 font-sans tracking-[0.8em] font-medium uppercase"
                                style={{ fontFamily: THEME.typography.fonts.sans }}
                            >
                                Architectural Light Systems
                            </span>
                        </div>
                        <p className="text-slate-900/70 text-sm leading-relaxed tracking-[0.05em] max-w-xs uppercase font-bold">
                            Global pioneers in high-fidelity luminaires—engineered to redefine the atmospheric resonance of bespoke environments.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-24 lg:gap-40">
                        {sections.map(section => (
                            <div key={section.title}>
                                <p className="text-[12px] text-slate-900 font-black uppercase tracking-[0.4em] mb-12 shadow-sm">{section.title}</p>
                                <ul className="space-y-8">
                                    {section.links.map(link => (
                                        <li key={link}>
                                            <a href={`#${link.toLowerCase()}`} className="text-[13px] text-slate-900/60 hover:text-slate-900 uppercase tracking-[0.2em] font-black transition-all">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Protocol Row */}
                <div className="mt-20 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] text-white/30 uppercase tracking-[0.5em] font-medium">
                        &copy; {year} Connex Design Group. [All Rights Reserved].
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

