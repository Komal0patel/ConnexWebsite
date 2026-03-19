import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import THEME from '../constants/theme';

const TypographicGrid = () => {
    return (
        <section
            id="products"
            className="relative w-full overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-24"
            style={{ backgroundColor: THEME.colors.secondary }}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px]">
                <div
                    className="w-full relative overflow-hidden flex justify-center border shadow-connex-light"
                    style={{
                        backgroundColor: THEME.colors.secondary,
                        borderColor: THEME.colors.primaryAlpha(0.05)
                    }}
                >
                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={THEME.animations.transitions.slow}
                        viewport={{ once: true, margin: "-100px" }}
                        src="/ourcoll.png"
                        alt="Our Collection Presentation"
                        className="w-full h-auto object-contain block"
                    />

                    {/* Absolutely positioned link to the products page over the image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute bottom-8 right-[6%] lg:bottom-12 lg:right-[8%] flex flex-col items-center"
                    >
                        <Link
                            to="/products"
                            className="text-white text-[10px] md:text-xs font-black tracking-[0.3em] uppercase py-3 px-6 md:py-4 md:px-8 transition-all duration-500 rounded-full shadow-2xl"
                            style={{
                                backgroundColor: THEME.colors.primary,
                                fontFamily: THEME.typography.fonts.mono
                            }}
                        >
                            View More
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TypographicGrid;

