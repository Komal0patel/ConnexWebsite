import THEME from '../constants/theme';

const CosmicBackground = () => {
    return (
        <div
            className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
            style={{ backgroundColor: THEME.colors.secondary }}
        >

            {/* Subtle Architectural Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(${THEME.colors.primaryAlpha(0.1)} 1px, transparent 1px), linear-gradient(90deg, ${THEME.colors.primaryAlpha(0.1)} 1px, transparent 1px)`,
                    backgroundSize: '120px 120px'
                }}
            />

            {/* Deep Atmosphere Gradients */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full blur-[12vw] -translate-y-1/2 translate-x-1/2"
                    style={{ backgroundColor: THEME.colors.primaryAlpha(0.05) }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full blur-[10vw] translate-y-1/2 -translate-x-1/2"
                    style={{ backgroundColor: THEME.colors.darkAlpha(0.02) }}
                />
            </div>

            {/* Global Wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50/30" />

            {/* Fine Technical Grain */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default CosmicBackground;

