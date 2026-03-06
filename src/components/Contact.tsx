import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-16 lg:py-32 bg-[#FDFDFA] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-40 items-start">

                    {/* Legal & Connection Detail */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-12 h-px bg-[#8B7E74]" />
                            <span className="text-[#8B7E74] text-[10px] font-bold tracking-[1em] uppercase">Connect 04</span>
                        </div>

                        <h2 className="text-7xl md:text-9xl font-serif text-[#121212] mb-20 leading-[0.8] tracking-tighter uppercase">
                            PROCUREMENT <br />
                            <span className="italic font-light text-[#8B7E74]/40">& DISCOURSE.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-20 border-t border-black/5">
                            <div className="space-y-4">
                                <p className="text-[10px] text-[#8B7E74] uppercase tracking-widest font-black">Global HQ</p>
                                <p className="text-2xl text-[#121212] font-serif italic opacity-80 max-w-[200px]">
                                    Bengaluru, Karnataka
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] text-[#8B7E74] uppercase tracking-widest font-black">Digital Protocol</p>
                                <p className="text-2xl text-[#121212] font-serif italic opacity-80">
                                    systems@connex.design
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industrial Form */}
                    <div className="lg:w-1/2 w-full p-12 md:p-24 bg-[#F4F4F1] border border-black/5 relative shadow-sm">
                        <form className="space-y-12">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    className="block p-4 w-full text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B7E74] peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-black duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#8B7E74] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Operator Identity / Full Name
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="email"
                                    className="block p-4 w-full text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B7E74] peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-black duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#8B7E74] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Authorized Correspondence / Email
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <textarea
                                    rows={4}
                                    className="block p-4 w-full text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B7E74] peer resize-none transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-black duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#8B7E74] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Project Requirements Overview
                                </label>
                            </div>

                            <button
                                className="w-full mt-10 group flex items-center justify-between py-10 px-14 bg-[#121212] text-[#FDFDFA] font-black uppercase tracking-[1em] text-[10px] hover:bg-[#8B7E74] transition-all duration-700 shadow-xl"
                            >
                                <span>Submit Protocol</span>
                                <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Structural Accent Lines */}
            <div className="absolute top-0 right-0 w-[1px] h-full bg-black/[0.03] mr-[20%]" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-black/[0.03] mr-[40%]" />
        </section>
    );
};

export default Contact;
