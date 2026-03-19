import { useScroll, motion } from 'framer-motion';
import SuperHero from '../components/SuperHero';
import TypographicGrid from '../components/TypographicGrid';
import AboutUs from '../components/AboutUs';
import EngineeringValues from '../components/EngineeringValues';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';
import THEME from '../constants/theme';

const HyperLighting = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div
            className="relative overflow-x-hidden selection:bg-[#1a3c6d] selection:text-white"
            style={{
                backgroundColor: THEME.colors.secondary,
                color: THEME.colors.primary,
                fontFamily: THEME.typography.fonts.sans
            }}
        >
            <Navbar />
            <CosmicBackground />

            <main className="relative z-10">
                <div id="hero">
                    <SuperHero />
                </div>

                <div id="about">
                    <AboutUs />
                </div>

                <div id="specifications">
                    <EngineeringValues />
                </div>

                <div id="products">
                    <TypographicGrid />
                </div>

                <div id="contact">
                    <Contact />
                </div>

                <Footer />
            </main>

            {/* Elegant Progress Line - Minimalist */}
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    backgroundColor: THEME.colors.primaryAlpha(0.3)
                }}
                className="fixed bottom-0 left-0 right-0 h-[2px] origin-left z-[1000]"
            />
        </div>
    );
};

export default HyperLighting;

