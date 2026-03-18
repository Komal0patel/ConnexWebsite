import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import SuperHero from '../components/SuperHero';
import TypographicGrid from '../components/TypographicGrid';
import AboutUs from '../components/AboutUs';
import EngineeringValues from '../components/EngineeringValues';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CosmicBackground from '../components/CosmicBackground';

const HyperLighting = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="relative bg-[#FDFDFA] text-[#1a3c6d] selection:bg-[#1a3c6d] selection:text-[#FDFDFA] overflow-x-hidden">
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
                style={{ scaleX: scrollYProgress }}
                className="fixed bottom-0 left-0 right-0 h-[2px] bg-[#8B7E74] origin-left z-[1000]"
            />
        </div>
    );
};

export default HyperLighting;
