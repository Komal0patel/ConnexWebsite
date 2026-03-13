const CosmicBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 bg-[#FDFDFA] overflow-hidden pointer-events-none">

            {/* 1. Subtle Architectural Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(58, 195, 214, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 195, 214, 0.1) 1px, transparent 1px)',
                    backgroundSize: '120px 120px'
                }}
            />

            {/* 2. Deep Atmosphere Gradients */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#3ac3d6]/[0.05] rounded-full blur-[12vw] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#121212]/[0.02] rounded-full blur-[10vw] translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* 3. Global Wash */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#F4F4F1]/30" />

            {/* 4. Fine Technical Grain */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default CosmicBackground;
