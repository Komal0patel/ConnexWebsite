import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import THEME from '../constants/theme';

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 lg:py-32 relative overflow-hidden"
            style={{ backgroundColor: THEME.colors.secondary }}
        >
            <motion.div
                variants={THEME.animations.variants.staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 items-start">

                    {/* Legal & Connection Detail */}
                    <motion.div variants={THEME.animations.variants.revealUp} className="w-full lg:w-1/2">
                        <div className="flex items-center gap-6 mb-8 lg:mb-12">
                            <div className="w-16 h-[2px]" style={{ backgroundColor: THEME.colors.dark }} />
                            <span
                                className="text-[12px] font-black uppercase shadow-sm"
                                style={{ color: THEME.colors.text, letterSpacing: THEME.typography.tracking.ultra }}
                            >
                                Connect 04
                            </span>
                        </div>

                        <h2
                            className="text-5xl md:text-7xl lg:text-9xl mb-12 lg:mb-20 leading-[0.8] tracking-tighter uppercase"
                            style={{ fontFamily: THEME.typography.fonts.serif, color: THEME.colors.text }}
                        >
                            PROCUREMENT <br />
                            <span className="italic font-light opacity-30">& DISCOURSE.</span>
                        </h2>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pt-12 lg:pt-20 border-t-2"
                            style={{ borderTopColor: THEME.colors.primaryAlpha(0.1) }}
                        >
                            <div className="space-y-4">
                                <p className="text-[12px] font-black uppercase tracking-widest" style={{ color: THEME.colors.text }}>Global HQ</p>
                                <p
                                    className="text-2xl lg:text-3xl italic font-medium max-w-[200px]"
                                    style={{ fontFamily: THEME.typography.fonts.serif, color: THEME.colors.text }}
                                >
                                    Bengaluru, Karnataka
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[12px] font-black uppercase tracking-widest" style={{ color: THEME.colors.text }}>Digital Protocol</p>
                                <p
                                    className="text-2xl lg:text-3xl italic font-medium"
                                    style={{ fontFamily: THEME.typography.fonts.serif, color: THEME.colors.text }}
                                >
                                    systems@connex.design
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Industrial Form */}
                    <motion.div
                        variants={THEME.animations.variants.revealUp}
                        className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 border shadow-sm relative overflow-hidden"
                        style={{
                            backgroundColor: THEME.colors.secondary,
                            borderColor: THEME.colors.primaryAlpha(0.05)
                        }}
                    >
                        <form className="space-y-12">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="block p-4 w-full text-xl md:text-2xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer transition-all"
                                    style={{ borderBottomColor: THEME.colors.primaryAlpha(0.1), color: THEME.colors.text }}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase"
                                    style={{ color: THEME.colors.text }}
                                >
                                    Operator Identity / Full Name
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="block p-4 w-full text-xl md:text-2xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer transition-all"
                                    style={{ borderBottomColor: THEME.colors.primaryAlpha(0.1), color: THEME.colors.text }}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase"
                                    style={{ color: THEME.colors.text }}
                                >
                                    Authorized Correspondence / Email
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="block p-4 w-full text-xl md:text-2xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer resize-none transition-all"
                                    style={{ borderBottomColor: THEME.colors.primaryAlpha(0.1), color: THEME.colors.text }}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase"
                                    style={{ color: THEME.colors.text }}
                                >
                                    Project Requirements Overview
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-10 group flex items-center justify-between py-8 md:py-10 px-10 md:px-14 text-white font-black uppercase text-[12px] hover:bg-slate-900 transition-all duration-700 shadow-2xl border-2"
                                style={{
                                    backgroundColor: THEME.colors.primary,
                                    borderColor: THEME.colors.primaryAlpha(0.1),
                                    letterSpacing: THEME.typography.tracking.wide
                                }}
                            >
                                <span>Submit Protocol</span>
                                <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </motion.div>

            {/* Structural Accent Lines */}
            <div className="absolute top-0 right-0 w-[1px] h-full mr-[20%]" style={{ backgroundColor: THEME.colors.primaryAlpha(0.03) }} />
            <div className="absolute top-0 right-0 w-[1px] h-full mr-[40%]" style={{ backgroundColor: THEME.colors.primaryAlpha(0.03) }} />
        </section>
    );
};

export default Contact;
