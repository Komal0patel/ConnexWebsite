import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TypographicGrid = () => {
    return (
        <section id="products" className="relative w-full overflow-hidden bg-[#FDFDFA] pt-4 pb-12 lg:pt-8 lg:pb-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1400px]">
                <div className="w-full relative overflow-hidden flex justify-center shadow-connex-light border border-black/5 bg-[#F4F4F1]">
                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        src="/ourcoll.png"
                        alt="Our Collection Presentation"
                        // object-contain prevents cutting, w-full spans container, block removes inline spacing
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
                            className="bg-[#121212] text-[#FDFDFA] text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase py-3 px-6 md:py-4 md:px-8 border border-transparent hover:bg-transparent hover:text-[#121212] hover:border-[#121212] transition-colors duration-500 rounded-full"
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
