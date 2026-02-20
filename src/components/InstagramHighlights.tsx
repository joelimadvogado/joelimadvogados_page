"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const REELS = [
    {
        id: "1",
        url: "https://www.instagram.com/reel/DUqdStoEeb3/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DUqdStoEeb3/" data-instgrm-version="14" style="background:transparent; border:0; border-radius:1px; box-shadow:none; margin: 0; padding:0; width:100%;"></blockquote>`
    },
    {
        id: "2",
        url: "https://www.instagram.com/reel/DUbCrT3EaSy/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DUbCrT3EaSy/" data-instgrm-version="14" style="background:transparent; border:0; border-radius:1px; box-shadow:none; margin: 0; padding:0; width:100%;"></blockquote>`
    },
    {
        id: "3",
        url: "https://www.instagram.com/reel/DUYe8WLER5L/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DUYe8WLER5L/" data-instgrm-version="14" style="background:transparent; border:0; border-radius:1px; box-shadow:none; margin: 0; padding:0; width:100%;"></blockquote>`
    },
];

export default function InstagramHighlights() {
    useEffect(() => {
        const loadInstagram = () => {
            if (!(window as any).instgrm) {
                const script = document.createElement("script");
                script.id = "instagram-embed-script";
                script.src = "//www.instagram.com/embed.js";
                script.async = true;
                document.body.appendChild(script);
            } else {
                (window as any).instgrm.Embeds.process();
            }
        };

        loadInstagram();

        // Pequeno atraso para garantir que o DOM renderizou antes do process
        const timer = setTimeout(() => {
            if ((window as any).instgrm) (window as any).instgrm.Embeds.process();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-20 px-6 md:px-12 bg-white">
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

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {REELS.map((reel, index) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-transparent rounded-2xl overflow-hidden flex justify-center"
                        >
                            <div
                                className="w-full max-w-[320px] mx-auto overflow-hidden instagram-embed-container"
                                dangerouslySetInnerHTML={{ __html: reel.embedCode }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
