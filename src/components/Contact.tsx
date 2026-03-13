import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 lg:py-32 bg-[#FDFDFA] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-40 items-start">

                    {/* Legal & Connection Detail */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-6 mb-8 lg:mb-12">
                            <div className="w-16 h-[2px] bg-slate-900" />
                            <span className="text-slate-900 text-[12px] font-black tracking-[1em] uppercase shadow-sm">Connect 04</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-slate-900 mb-12 lg:mb-20 leading-[0.8] tracking-tighter uppercase">
                            PROCUREMENT <br />
                            <span className="italic font-light text-slate-300">& DISCOURSE.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pt-12 lg:pt-20 border-t-2 border-slate-900/10">
                            <div className="space-y-4">
                                <p className="text-[12px] text-slate-900 font-black uppercase tracking-widest">Global HQ</p>
                                <p className="text-2xl lg:text-3xl text-slate-900 font-serif italic font-medium max-w-[200px]">
                                    Bengaluru, Karnataka
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[12px] text-slate-900 font-black uppercase tracking-widest">Digital Protocol</p>
                                <p className="text-2xl lg:text-3xl text-slate-900 font-serif italic font-medium">
                                    systems@connex.design
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Industrial Form */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-24 bg-[#F4F4F1] border border-black/5 relative shadow-sm">
                        <form className="space-y-12 mb-reverse">
                            <div className="relative z-0 w-full group">
                                <input
                                    type="text"
                                    className="block p-4 w-full text-xl md:text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-slate-900 peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-[#111111] duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Operator Identity / Full Name
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="email"
                                    className="block p-4 w-full text-xl md:text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B7E74] peer transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-[#111111] duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#8B7E74] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Authorized Correspondence / Email
                                </label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <textarea
                                    rows={4}
                                    className="block p-4 w-full text-xl md:text-2xl text-[#111111] bg-transparent border-0 border-b border-black/10 appearance-none focus:outline-none focus:ring-0 focus:border-[#8B7E74] peer resize-none transition-colors"
                                    placeholder=" "
                                    required
                                />
                                <label className="peer-focus:font-bold absolute text-sm uppercase tracking-[0.2em] text-[#111111] duration-300 transform -translate-y-12 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#8B7E74] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-14 transition-all uppercase">
                                    Project Requirements Overview
                                </label>
                            </div>

                            <button
                                className="w-full mt-10 group flex items-center justify-between py-8 md:py-10 px-10 md:px-14 bg-[#3ac3d6] text-slate-900 font-black uppercase tracking-[0.5em] md:tracking-[1em] text-[12px] hover:bg-slate-900 hover:text-white transition-all duration-700 shadow-2xl border-2 border-slate-900/20"
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
