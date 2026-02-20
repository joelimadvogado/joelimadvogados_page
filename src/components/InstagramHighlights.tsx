"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const REELS = [
    {
        id: "1",
        url: "https://www.instagram.com/reel/DUqdStoEeb3/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DUqdStoEeb3/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; padding:0; width:100%;"></blockquote>`
    },
    {
        id: "2",
        url: "https://www.instagram.com/reel/DUbCrT3EaSy/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DUbCrT3EaSy/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; padding:0; width:100%;"></blockquote>`
    },
    {
        id: "3",
        url: "https://www.instagram.com/reel/DUYe8WLER5L/",
        embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DUYe8WLER5L/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; padding:0; width:100%;"></blockquote>`
    },
];

export default function InstagramHighlights() {
    useEffect(() => {
        // Carrega o script do Instagram se ainda não existir
        if (!document.getElementById("instagram-embed-script")) {
            const script = document.createElement("script");
            script.id = "instagram-embed-script";
            script.src = "//www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else if ((window as any).instgrm) {
            // Se o script já existe, força o processamento dos novos embeds
            (window as any).instgrm.Embeds.process();
        }
    }, []);

    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50">
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

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {REELS.map((reel, index) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex justify-center"
                        >
                            <div
                                className="w-full flex justify-center py-4"
                                dangerouslySetInnerHTML={{ __html: reel.embedCode }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
