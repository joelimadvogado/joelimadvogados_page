"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/content/siteData";

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Aparece após 400px de rolagem
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={SITE_DATA.contacts.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-24 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] transition-all flex items-center justify-center group"
                    aria-label="Falar no WhatsApp"
                >
                    <MessageCircle size={28} />

                    {/* Tooltip on hover */}
                    <span className="absolute right-full mr-4 bg-white text-secondary px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
                        Falar com Joel Lima
                    </span>

                    {/* Pulse effect */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
                </motion.a>
            )}
        </AnimatePresence>
    );
}
