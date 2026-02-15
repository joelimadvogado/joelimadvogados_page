"use client";

import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";

const REELS = [
    { id: "1", url: "https://www.instagram.com/reel/example1/" },
    { id: "2", url: "https://www.instagram.com/reel/example2/" },
    { id: "3", url: "https://www.instagram.com/reel/example3/" },
];

export default function InstagramHighlights() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-primary">
                        <Instagram size={24} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Educação Jurídica</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extralight text-secondary uppercase">
                        Destaques do <span className="font-bold">Instagram</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto italic">
                        "Assista aos nossos vídeos curtos onde explicamos seus direitos de forma simples e direta."
                    </p>
                </header>

                <div className="grid md:grid-cols-3 gap-8">
                    {REELS.map((reel, index) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-[9/16] bg-neutral-100 rounded-[2rem] overflow-hidden relative group border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            {/* Overlay with Play Button - Placeholder for real embed */}
                            <div className="absolute inset-0 bg-secondary/10 flex flex-col items-center justify-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play size={32} className="text-white fill-white" />
                                </div>
                                <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Ver no Reels</span>
                            </div>

                            {/* Interaction layer */}
                            <a
                                href={reel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="Assistir no Instagram"
                            />

                            {/* Video Frame Mockup */}
                            <div className="absolute bottom-6 left-6 right-6 space-y-2">
                                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-1/3" />
                                </div>
                                <div className="flex justify-between items-center text-[8px] text-white/50 font-bold uppercase tracking-tighter">
                                    <span>Joel Lima Advocacia</span>
                                    <span>0:30</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
